function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers.');
  }
  return a + b;
}

//This will throw an error
try {
  const result = add("1", 2); 
  console.log(result);
} catch (error) {
  console.error(error);
}

const result2 = add(1,2); // Correct usage
console.log(result2); 