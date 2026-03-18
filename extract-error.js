const fs = require('fs');

const html = fs.readFileSync('api-response.html', 'utf8');

// Extract all JSON-like content
const jsonMatches = html.match(/\{[^{}]*"error"[^{}]*\}/g);
if (jsonMatches) {
    console.log('JSON error blocks found:');
    jsonMatches.forEach((m, i) => console.log(`  ${i}: ${m}`));
}

// Extract error messages
const msgMatches = html.match(/"message":"([^"]+)"/g);
if (msgMatches) {
    console.log('\nMessages found:');
    msgMatches.forEach(m => console.log(`  ${m}`));
}

// Look for module/import errors
const moduleErrors = html.match(/Module not found[^"\\]*/g);
if (moduleErrors) {
    console.log('\nModule errors:');
    moduleErrors.forEach(m => console.log(`  ${m}`));
}

// Look for any "cannot" or "failed" references
const failMatches = html.match(/(cannot|failed|Could not)[^"\\]{0,100}/gi);
if (failMatches) {
    console.log('\nFailure references:');
    failMatches.forEach(m => console.log(`  ${m}`));
}

// Look for stack traces
const stackMatches = html.match(/at\s+\w+[^"\\]{0,200}/g);
if (stackMatches) {
    console.log('\nStack trace lines:');
    stackMatches.slice(0, 10).forEach(m => console.log(`  ${m}`));
}

// Extract the pageProps/error data more specifically
const propsMatch = html.match(/"pageProps":\s*(\{[^}]+\})/);
if (propsMatch) {
    console.log('\nPage props:', propsMatch[1]);
}

// Save decoded content
const decoded = html
    .replace(/\\u001b\[[0-9;]*m/g, '')  // ANSI escape codes
    .replace(/\\n/g, '\n')
    .replace(/\\"/g, '"');
fs.writeFileSync('api-response-decoded.txt', decoded);
console.log('\nDecoded response saved to api-response-decoded.txt');
