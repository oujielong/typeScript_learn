/***
 *  基本类型声明 均处于严格类型 
 *"strict": true,
"strictNullChecks": true,
 */

//  bool
let isDone: boolean = false;
let decliteral: number = 6;
let hexliteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o643;
//string
let str: string = "hello string";

//array
let arr: number[] = [1, 2, 35, 5];
let arr1: Array<string> = ["2", "234", "35dfgh", "5"];
//tuple
let tuple1: [number, string, number] = [234, "234234", 0xf00d];

//enum
// console.log(tuple1[4]="q432") error
enum Color {
  red,
  blue = 2,
  gleen
}
let c: Color = Color.gleen;
//any
let anynu: any = "234";
let anynu1: any = { a: "23", b: "345" };
let anynu3: any = [567, 678, 98];
let anynu4: any[] = [567, "asfa", 98];

// void
let void1: void = undefined;
// let void2: void = null; //，null 不能赋予void类型

// let x: never = null;  错误
//object
let obj1: object = [1, 34];
let obj2: object = { a: [1, 34] };