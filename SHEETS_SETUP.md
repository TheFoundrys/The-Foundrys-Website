# Google Sheets API Setup Guide

Follow these steps to generate the required credentials for your website.

## 1. Get the GOOGLE_SHEET_ID
1.  Open your Google Sheet in the browser.
2.  Look at the URL. It will look like this:
    `https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKbBdB_.../edit`
3.  The **ID** is the long string between `/d/` and `/edit`.
    *   Example: `1BxiMVs0XRA5nFMdKbBdB_SomeLongString123`
4.  Copy this ID.

## 2. Get the Service Account Email & Private Key
1.  Go to the [Google Cloud Console](https://console.cloud.google.com/).
2.  Create a **New Project** (or select an existing one).
3.  **Enable the API**:
    *   Search for "Google Sheets API" in the top search bar.
    *   Click "Enable".
4.  **Create Credentials**:
    *   Go to **APIs & Services > Credentials**.
    *   Click **+ CREATE CREDENTIALS** > **Service Account**.
    *   Name it (e.g., `website-form`).
    *   Click **Create & Continue** -> **Done**.
5.  **Get the Email**:
    *   You will see your new Service Account in the list.
    *   Copy the **Email**. It looks like: `website-form@project-name.iam.gserviceaccount.com`.
    *   This is your `GOOGLE_SERVICE_ACCOUNT_EMAIL`.
6.  **Get the Private Key**:
    *   Click on the Service Account name to edit it.
    *   Go to the **Keys** tab.
    *   Click **Add Key** > **Create new key**.
    *   Select **JSON** and click **Create**.
    *   A file will download automatically. **Open this file**.
    *   Inside, find the `"private_key"` value. It starts with `-----BEGIN PRIVATE KEY-----`.
    *   Copy the *entire* string (including the BEGIN/END lines). This is your `GOOGLE_PRIVATE_KEY`.

## 3. IMPORTANT: Share the Sheet
1.  Go back to your **Google Sheet**.
2.  Click the big **Share** button (top right).
3.  Paste your **Service Account Email** (from step 2.5).
4.  Make sure the permission is set to **Editor**.
5.  Click **Send** (unchecked "Notify people" if you want).

## 4. Update .env.local
Paste the values into your `.env.local` file:

```env
GOOGLE_SHEET_ID="your-sheet-id"
GOOGLE_SERVICE_ACCOUNT_EMAIL="your-service-email@..."
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----..."
```
