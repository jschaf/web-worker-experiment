import * as prime from './prime.js';

console.log(`Worker ${self.name} started`);

let primeCount = 0;
for (const p of prime.generatePrimes(1_000_000)) {
  primeCount++;
  if (primeCount % 10_000 === 0) {
    console.log(`Worker ${self.name} found ${primeCount/1000}k primes`);
  }
}

console.log(`Worker ${self.name} finished`);
