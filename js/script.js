let rumusHitungLuas = document.getElementById("rumus-hitung-luas");
let rumusLuas = document.getElementById("rumus-luas");
let hasilLuas = document.getElementById("hasil-luas");

let rumusHitungKeliling = document.getElementById("rumus-hitung-keliling");
let rumusKeliling = document.getElementById("rumus-keliling");
let hasilKeliling = document.getElementById("hasil-keliling");

// function Hitung Luas Persegi

function hitungLuas() {
  let inputSisiLuas = document.getElementById("input-sisi-luas").value;
  const luas = inputSisiLuas * inputSisiLuas;
  rumusHitungLuas.textContent = `L = S x S`;
  rumusLuas.textContent = `L = ${inputSisiLuas} * ${inputSisiLuas}`;
  hasilLuas.textContent = `L = ${luas}`;
}

// function Reset Luas Persegi

function resetLuas() {
  document.getElementById("rumus-hitung-luas").innerHTML = "";
  document.getElementById("rumus-luas").innerHTML = "";
  document.getElementById("hasil-luas").innerHTML = "";
}

// function Hitung Keliling Persegi

function hitungKeliling() {
  let inputSisiKeliling = document.querySelector("#input-sisi-keliling").value;
  let keliling = 4 * inputSisiKeliling;
  rumusHitungKeliling.textContent = `K = 4 x S`;
  rumusKeliling.textContent = `L = 4 * ${inputSisiKeliling}`;
  hasilKeliling.textContent = `L = ${keliling}`;
}

// function Reset Keliling Persegi

function resetKeliling() {
  document.getElementById("rumus-hitung-keliling").innerHTML = "";
  document.getElementById("rumus-keliling").innerHTML = "";
  document.getElementById("hasil-keliling").innerHTML = "";
}
