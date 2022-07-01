//
let t = parseFloat(document.querySelector('#temp')).textContent = 50;
let s = parseFloat(document.getElementById('wind-speed')).textContent = 7;

console.log(t, s);

let windChill;

function f (s, t) {
    windChill = 35.74 + (0.6215*t) - 35.75*(Math.pow(s, 0.16)) + 0.4275*t*(Math.pow(s, 0.16));
    // console.log(windChill);
}

console.log(windChill);

document.querySelector('#wind-chill').textContent = f;