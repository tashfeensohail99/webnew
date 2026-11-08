(() => {
  const t = document.body.innerText;
  const rows = [...document.querySelectorAll('a h3')].map((h) => {
    const a = h.closest('a');
    const c = (a.querySelector('cite') || a.parentElement.querySelector('cite'));
    const host = c ? c.textContent.replace(/\s*›.*/, '').trim() : (a.href.includes('/goto') ? '?' : new URL(a.href).host);
    return host + ' | ' + h.textContent.slice(0, 80);
  }).slice(0, 15);
  const i = t.indexOf('Places');
  return {
    q: new URLSearchParams(location.search).get('q'),
    captcha: /unusual traffic|not a robot|recaptcha/i.test(t),
    aiOverview: /AI Overview/.test(t),
    places: i >= 0 ? t.slice(i, i + 420).replace(/\n+/g, ' / ') : null,
    rows,
  };
})()
