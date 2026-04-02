#!/bin/bash

# ==============================================================================
# 🚀 THE FOUNDRY'S WEBSITE - DEPLOYMENT SYSTEM
# ==============================================================================
# This script manages the synchronization and remote build of the Next.js app.
# Designed for high-performance servers (64GB RAM).
# ==============================================================================

set -e # Exit immediately on error

# --- Configuration ---
REMOTE_USER="toptima"
REMOTE_HOST="192.168.1.119"
REMOTE_DIR="/home/toptima/The-Foundrys-Website/"
APP_NAME="foundys-web"
LOG_FILE="deploy.log"

# --- SSH Connection Sharing (Crucial for ONE password) ---
SSH_SOCKET="/tmp/ssh-master-$REMOTE_USER@$REMOTE_HOST"
# We use auto-master and persistent path
SSH_COMMON_OPTS="-o ControlMaster=auto -o ControlPath=$SSH_SOCKET -o ControlPersist=600"

# --- UI Enhancement ---
BOLD='\033[1m'
BLUE='\033[38;5;75m'
GREEN='\033[38;5;82m'
YELLOW='\033[38;5;226m'
RED='\033[38;5;196m'
WHITE='\033[38;5;255m'
CYAN='\033[38;5;51m'
NC='\033[0m'

echo "--- NEW DEPLOYMENT AT $(date) ---" >> "$LOG_FILE"

print_header() {
    clear
    echo -e "${CYAN}${BOLD}"
    echo "  ████████╗██╗  ██╗███████╗    ███████╗ ██████╗ ██╗   ██╗███╗   ██╗██████╗ ██████╗ ██╗   ██╗ ███████╗"
    echo "  ╚══██╔══╝██║  ██║██╔════╝    ██╔════╝██╔═══██╗██║   ██║████╗  ██║██╔══██╗██╔══██╗╚██╗ ██╔╝ ██╔════╝"
    echo "     ██║   ███████║█████╗      █████╗  ██║   ██║██║   ██║██╔██╗ ██║██║  ██║██████╔╝ ╚████╔╝  ███████╗"
    echo "     ██║   ██╔══██║██╔══╝      ██╔══╝  ██║   ██║██║   ██║██║╚██╗██║██║  ██║██╔══██╗  ╚██╔╝   ╚════██║"
    echo "     ██║   ██║  ██║███████╗    ██║     ╚██████╔╝╚██████╔╝██║ ╚████║██████╔╝██║  ██║   ██║    ███████║"
    echo "     ╚═╝   ╚═╝  ╚═╝╚══════╝    ╚═╝      ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝╚═════╝ ╚═╝  ╚═╝   ╚═╝    ╚══════╝"
    echo -e "${NC}"
    echo -e "${WHITE}${BOLD}  The Foundry's Website Deployment System ${NC}"
    echo -e "${WHITE}  Target: ${REMOTE_USER}@${REMOTE_HOST}${NC}"
    echo -e "${WHITE}  --------------------------------------------------------------------------------${NC}"
}

spinner() {
    local pid=$1
    local delay=0.1
    local spinstr='⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏'
    while kill -0 "$pid" 2>/dev/null; do
        for (( i=0; i<${#spinstr}; i++ )); do
            printf "${CYAN}${BOLD}  [%c]  Working... ${NC}" "${spinstr:$i:1}"
            sleep $delay
            printf "\r"
        done
    done
    printf "    \r"
}

log_step()    { echo -e "${CYAN}${BOLD}[STEP]${NC} $1" && echo "[$(date)] [STEP] $1" >> "$LOG_FILE"; }
log_success() { echo -e "${GREEN}${BOLD}[DONE]${NC} $1" && echo "[$(date)] [SUCCESS] $1" >> "$LOG_FILE"; }
log_error()   { echo -e "${RED}${BOLD}[FAIL]${NC} $1" && echo "[$(date)] [ERROR] $1" >> "$LOG_FILE"; }

# --- Cleanup ---
cleanup() {
    if [ -S "$SSH_SOCKET" ]; then
        ssh -S "$SSH_SOCKET" -O exit ${REMOTE_USER}@${REMOTE_HOST} 2>/dev/null || true
    fi
    echo -e "\n${WHITE}--- Session Ended ---${NC}"
}
trap cleanup EXIT

# ==============================================================================
# MAIN DEPLOYMENT FLOW
# ==============================================================================

print_header

# 1. AUTHENTICATION (THE ONLY PASSWORD PROMPT)
log_step "Authenticating (Enter password once)..."
ssh $SSH_COMMON_OPTS ${REMOTE_USER}@${REMOTE_HOST} "true" || (log_error "Auth failed." && exit 1)
log_success "Authenticated successfully."

# 2. SYNC
log_step "Synchronizing code..."
(rsync -avz --delete \
    -e "ssh $SSH_COMMON_OPTS" \
    --exclude='node_modules' --exclude='.next' --exclude='.git' --exclude='.env*' --exclude='deploy.log' \
    ./ \
    ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_DIR} 2>> "$LOG_FILE") &
spinner $! || (log_error "Sync failed." && exit 1)
log_success "Code synced."

# 3. REMOTE BUILD
log_step "Building on server..."
(ssh $SSH_COMMON_OPTS ${REMOTE_USER}@${REMOTE_HOST} << EOF
    set -e
    export NVM_DIR="\$HOME/.nvm"
    [ -s "\$NVM_DIR/nvm.sh" ] && \. "\$NVM_DIR/nvm.sh"
    cd ${REMOTE_DIR}

    rm -rf .next node_modules >> "${REMOTE_DIR}deploy.log" 2>&1
    npm install --quiet >> "${REMOTE_DIR}deploy.log" 2>&1
    npm run build >> "${REMOTE_DIR}deploy.log" 2>&1

    if pm2 describe ${APP_NAME} > /dev/null 2>&1; then
        pm2 reload ${APP_NAME} >> "${REMOTE_DIR}deploy.log" 2>&1
    else
        pm2 start npm --name "${APP_NAME}" -- start >> "${REMOTE_DIR}deploy.log" 2>&1
    fi
    pm2 save >> "${REMOTE_DIR}deploy.log" 2>&1
EOF
) &
spinner $! || (log_error "Remote build failed." && exit 1)
log_success "Remote build successful."

echo -e "\n${GREEN}${BOLD}  🎉 THE FOUNDRY'S WEBSITE IS LIVE!${NC}\n"