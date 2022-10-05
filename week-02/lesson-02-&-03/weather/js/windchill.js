
function f() {
  let t = parseFloat(document.querySelector('#temp').innerHTML);
  let s = parseFloat(document.getElementById('wind-speed').innerHTML);

  if (t > 50 || s < 3) {
    return 'N/A'
  }

  return Math.round(35.74 + (0.6215*t) - 35.75*(Math.pow(s, 0.16)) + 0.4275*t*(Math.pow(s, 0.16)), 2);
}

document.querySelector('#wind-chill').textContent = f();