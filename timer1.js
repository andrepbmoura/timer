let arr = process.argv.slice(2);

const timer = (arr) => {
  for (const item of arr) {
    let num = Number(item);
    if (num < 0) {
      console.log(`Please provide a valid entry. Cannot set up the alarm with ${item}.`);
    } else if (Number.isNaN(num)) {
      console.log(`Please provide a valid entry. Cannot set up the alarm with ${item}.`);
    } else {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, num * 1000);
    }
  }
};

timer(arr);