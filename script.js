/* ─── Live Search ─── */
const searchInput = document.getElementById('batSearch');
const batItems    = document.querySelectorAll('.bat-item');
searchInput.addEventListener('keyup', () => {
  const query = searchInput.value.toLowerCase();
  batItems.forEach(item => {
    item.style.display = item.innerText.toLowerCase().includes(query) ? 'block' : 'none';
  });
});

/* ─── Order Form ─── */
const orderForm    = document.getElementById('batOrderForm');
const successAlert = document.getElementById('successAlert');
orderForm.addEventListener('submit', function(e) {
  e.preventDefault();
  successAlert.classList.remove('hidden');
  orderForm.reset();
  setTimeout(() => successAlert.classList.add('hidden'), 5000);
});

/* ─── Buy Button Smooth Scroll ─── */
document.querySelectorAll('.buy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
  });
});

/* ─── S1: Simulate API ─── */
function simulateAPI() {
  document.getElementById('apiLog').innerHTML =
    '<span class="cm">// Front-end: sending fetch...</span>\n' +
    'fetch(<span class="cs">\'/api/bats\'</span>)\n' +
    '  .then(res => res.json())\n' +
    '  .then(data => renderBats(data));\n\n' +
    '<span style="color:#4ade80;">// ✓ 200 OK — 118ms — 4 products returned</span>';

  const products = [
    { name: 'MRF Genius Grand',    price: '$450', cat: 'Grade 1 EW' },
    { name: 'CEAT Hitman Pro',     price: '$520', cat: 'Grade 1 EW' },
    { name: 'Kashmir Willow',      price: '$180', cat: 'Kashmir Willow' },
    { name: 'Gray-Nicolls Legend', price: '$680', cat: 'Grade 1 EW' }
  ];
  const cards = document.getElementById('apiCards');
  cards.innerHTML = '';
  products.forEach(p => {
    const d = document.createElement('div');
    d.className = 'col-6';
    d.innerHTML = `<div style="background:#1a1a1a;border:1px solid #333;padding:10px;border-radius:6px;font-size:0.75rem;">
      <div style="color:#fca5a5;font-size:0.65rem;margin-bottom:3px;">${p.cat}</div>
      <div style="color:#fff;font-weight:600;">${p.name}</div>
      <div style="color:#fca5a5;margin-top:3px;">${p.price}</div>
    </div>`;
    cards.appendChild(d);
  });
  document.getElementById('apiResult').style.display = 'block';
}

/* ─── S3: CSS Theme Switcher ─── */
function setTheme(color) {
  document.getElementById('cssThemeBox').style.background = color;
}

/* ─── S5: JS Playground ─── */
function runPlayground() {
  const code = document.getElementById('jsPlayground').value;
  const out  = document.getElementById('jsOutput');
  out.style.color = '#991b1b';
  try {
    eval(code);
    if (out.textContent === 'Output will appear here...') {
      out.textContent = '✓ Code ran successfully (no output)';
    }
  } catch(e) {
    out.style.color = '#dc2626';
    out.textContent = '✗ Error: ' + e.message;
  }
}
