const $ = (id) => document.getElementById(id);
const notice = $('notice');
function message(text, target) { if (target) $(target).textContent = text; notice.textContent = text; }
function value(id) { return $(id).value; }
function set(id, text) { $(id).value = text; }

document.querySelectorAll('.tab').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.toggle('active', tab === button));
    document.querySelectorAll('.tool-panel').forEach(panel => panel.classList.add('hidden'));
    $(`${button.dataset.tool}-panel`).classList.remove('hidden');
    notice.textContent = '';
  });
});

$('json-format').addEventListener('click', () => {
  try { set('json-output', JSON.stringify(JSON.parse(value('json-input')), null, 2)); message('Valid JSON', 'json-status'); }
  catch (error) { message(`Invalid JSON: ${error.message}`, 'json-status'); }
});
$('json-minify').addEventListener('click', () => {
  try { set('json-output', JSON.stringify(JSON.parse(value('json-input')))); message('JSON minified', 'json-status'); }
  catch (error) { message(`Invalid JSON: ${error.message}`, 'json-status'); }
});
$('json-clear').addEventListener('click', () => { set('json-input',''); set('json-output',''); message('Cleared', 'json-status'); });

$('base64-encode').addEventListener('click', () => {
  try { set('base64-output', btoa(unescape(encodeURIComponent(value('base64-input'))))); message('Encoded successfully', 'base64-status'); }
  catch { message('Could not encode this input', 'base64-status'); }
});
$('base64-decode').addEventListener('click', () => {
  try { set('base64-output', decodeURIComponent(escape(atob(value('base64-input').trim())))); message('Decoded successfully', 'base64-status'); }
  catch { message('Invalid Base64 input', 'base64-status'); }
});
$('base64-clear').addEventListener('click', () => { set('base64-input',''); set('base64-output',''); message('Cleared', 'base64-status'); });

$('url-encode').addEventListener('click', () => { set('url-output', encodeURIComponent(value('url-input'))); message('Encoded successfully', 'url-status'); });
$('url-decode').addEventListener('click', () => {
  try { set('url-output', decodeURIComponent(value('url-input'))); message('Decoded successfully', 'url-status'); }
  catch { message('Invalid encoded URL component', 'url-status'); }
});
$('url-clear').addEventListener('click', () => { set('url-input',''); set('url-output',''); message('Cleared', 'url-status'); });

function updateTextStats() {
  const text = value('text-input');
  const words = text.trim() ? text.trim().split(/\s+/u).length : 0;
  $('char-count').textContent = [...text].length;
  $('word-count').textContent = words;
  $('line-count').textContent = text.length ? text.split(/\r\n|\r|\n/).length : 0;
  $('reading-time').textContent = `${words ? Math.max(1, Math.ceil(words / 200)) : 0} min`;
}
$('text-input').addEventListener('input', updateTextStats);
$('text-clear').addEventListener('click', () => { set('text-input',''); updateTextStats(); });

document.querySelectorAll('[data-copy]').forEach(button => {
  button.addEventListener('click', async () => {
    const content = value(button.dataset.copy);
    if (!content) return message('Nothing to copy');
    try { await navigator.clipboard.writeText(content); message('Copied to clipboard'); }
    catch { message('Clipboard access unavailable. Select and copy the output manually.'); }
  });
});
