function toggleMode() {
  const html = document.documentElement;
  const current = html.getAttribute('data-color-scheme');
  html.setAttribute('data-color-scheme', current === 'dark' ? 'light' : 'dark');
}
