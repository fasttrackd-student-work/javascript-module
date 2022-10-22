// const p1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 5000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000);
// });

// const p3 = new Promise((resolve, reject) => resolve());

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('p1'), 5000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('p2'), 3000);
});

// const p3 = new Promise((resolve, reject) => resolve('p3'));

const p3 = new Promise((resolve, reject) => reject('p3'));

// p1.then(() => console.log('I waited 5 seconds'));

// p2.then(() => console.log('I waited 3 seconds'));

// p3.then(() => console.log('I did not wait'));

// p1.then(() => console.log('I waited 5 seconds'))
//   .then(() => p2)
//   .then(() => console.log('I waited 3 seconds'))
//   .then(() => p3)
//   .then(() => console.log('I did not wait'));

// Promise.race([p1, p2, p3]).then(() => console.log('p3 won the race'));

// Promise.race([p1, p2]).then((p) => console.log(`${p} won the race`));

Promise.all([p1, p2, p3]).then(
  (p) => console.log(`${p} wont the race!`),
  (p) => console.log(`${p} was rejected`)
);
