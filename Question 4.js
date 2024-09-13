function printNumbersBetween(start, end) {
  if (start < end) {
    // Ascending order
    let current = start;
    while (current <= end) {
      console.log(current);
      current++;
    }
  } else {
    // Descending order
    let current = start;
    while (current >= end) {
      console.log(current);
      current--;
    }
  }
}

// Example usage:
let startNumber = 10;
let endNumber = 25;

console.log(`Numbers between ${startNumber} and ${endNumber}:`);
printNumbersBetween(startNumber, endNumber);

console.log(""); // Print a blank line for separation

startNumber = 25;
endNumber = 10;

console.log(`Numbers between ${startNumber} and ${endNumber}:`);
printNumbersBetween(startNumber, endNumber);
