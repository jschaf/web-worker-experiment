export function* generatePrimes(n) {
  if (n < 2) {
    return;
  }
  if (n >= 2) {
    yield 2;
  }
  for (let p = 3; p <= n; p++) {
    if (isPrime(p)) {
      yield p;
    }
  }
}

function isPrime(p) {
  for (let i = 2; i * i < p; i++) {
    if (p % i === 0) {
      return false;
    }
  }
  return true;
}
