function forLoop(array) {
  for (var x = 0; x < 25; x++) {
    array.push(`I am ${x} strange loop${x === 1 ? '' : 's'}.`);
  }
  return array;
}

function whileLoop(n) {
  while (n > 0) {
    console.log('n');
    n--;
  }
  return 'done';
}

function maybeTrue() {
  return Math.random() >= 0.5;
}

function doWhileLoop(array) {
  do {
    array.pop();
  }
  while (maybeTrue());
  return array;
}
