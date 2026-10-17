const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.textContent = open ? '×' : '☰';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.textContent = '☰';
}));

let hidden = false;
document.getElementById('toggleBalance').addEventListener('click', event => {
  hidden = !hidden;
  document.getElementById('balance').firstChild.textContent = hidden ? '••••••••' : '$5,248.75 ';
  event.currentTarget.textContent = hidden ? '◎' : '◉';
  event.currentTarget.setAttribute('aria-label', hidden ? 'Show balance' : 'Hide balance');
});

const dialog = document.getElementById('noticeDialog');
const dialogTitle = document.getElementById('dialogTitle');
const dialogText = document.getElementById('dialogText');
function showNotice(title, text) {
  dialogTitle.textContent = title;
  dialogText.textContent = text;
  if (typeof dialog.showModal === 'function') dialog.showModal();
  else alert(title + '\\n\\n' + text);
}
document.querySelectorAll('a[href="#login"]').forEach(link => link.addEventListener('click', event => {
  event.preventDefault();
  showNotice('Login preview', 'Connect your real authentication service before using this as a live bank website. This demo does not collect passwords.');
}));
document.querySelectorAll('a[href="#create-account"]').forEach(link => link.addEventListener('click', event => {
  event.preventDefault();
  showNotice('Create an account', 'This is a design demo. Add a secure backend, identity verification, and compliance processes before accepting real customer registrations.');
}));
document.querySelectorAll('[data-action]').forEach(button => button.addEventListener('click', () => {
  showNotice(button.dataset.action, 'This is a visual prototype. No real money moves and no financial data is connected.');
}));
document.getElementById('closeDialog').addEventListener('click', () => dialog.close());
document.getElementById('dialogOk').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
