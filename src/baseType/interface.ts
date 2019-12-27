interface person {
  name: string;
  age?: number;
  readonly address?: any;
}
function createPerson(one: person): void {
  console.log("abc");
}
createPerson({ name: "1234" });

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a; // 直接声明的不可修改，但原来的可以修改，而且会同步过去
// ro[0] = 12; // error!
a.push(5); // yes!
console.log(a == ro); //true
const const_a = [123, 34, 346];

const const_b: ReadonlyArray<number> = [123, 34, 346];
// const_b.push(123);//error
