import * as prime from './prime.js';

console.log('Main started');

new Worker('worker.js', {name: 'wrk_1', type: 'module'});
new Worker('worker.js', {name: 'wrk_2', type: 'module'});


setTimeout(() => {
  let primeCount = 0;
  for (const p of prime.generatePrimes(1_000_000)) {
    primeCount++;
    if (primeCount % 10000 === 0) {
      console.log(`Main found ${primeCount/1000}k primes`);
    }
  }
  console.log(`Main finished`);
}, 1)
