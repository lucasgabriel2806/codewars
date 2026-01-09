function nbYear(p0, percent, aug, p) {
  let years = 0;
  percent = percent / 100;

  while (p0 < p) {
    years++;
    p0 = p0 + p0 * percent + aug;

    p0 = Math.floor(p0);
  }

  return years;
}

console.log(nbYear(1500, 5, 100, 5000));
console.log(nbYear(1500000, 2.5, 10000, 2000000));