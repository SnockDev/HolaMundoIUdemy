const a = { a: 1 }
const b = a

console.log(a,b);

b.b=2

console.log(a,b);

const c={...a}
c.c=3

console.log(a,b,c);

//spread operator genera una copia de un objeto sin estar relacionados, para que al modificarse el objeto original no cambie y viceversa