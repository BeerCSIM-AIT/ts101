//Primitive Types
let id: number = 5;
let myName: string = "Phakpoom";   
let isPublished: boolean = true;
let x: any = "Hello";

console.log("id: "+ typeof(id) + " " + id)
console.log("myName: "+ typeof(myName) + " " + myName)

// String Template ${}  ==> EL (Expression Language in Java)
// ใช้ quote แบบ backtick ````````````````````
let age: number = 25
console.log(`My name is ${myName}. I am ${age} years old.`)

//Collection Types
let ids: number[];
ids = [1,2,3,4,5];

let arr: any[];
arr = [1, "2", true, 3.5]

//Create an array to store your friends' name 
let myFriends: string[] = ["Phakpoom", "Supanan", "Sitthichai","Pakawat"]

console.log(ids);
console.log(arr);
console.log(myFriends);

//ตัวแปรแบบ array ใน TS/JS จะมีเมธอดสำหรับวนลูป (iterate)
ids.forEach(i => {
    console.log(`ID: ${i}`)
});


let salary : number[] = [1000,2000,5000,10000];  // 10%
let commission: number[]=[];

salary.forEach((s)=>{
    commission.push(s*0.1);
});
console.log(commission);
salary = [1000,2000,5000,10000]
let bonus: number[] = [];
// ให้หาโบนัสของแต่ละคนโดย เงินเดือน <= 1000 โบนัส 2 เท่า
//  1001 - 5000 โบนัส 1.5
//  5001 - 10000 โบนัส 1.2
// 10001 ขึ้นไป โบนัส 1 เท่า
salary.forEach((s)=>{
    commission.push(s*0.1);
});
// salary.forEach(function (s){

// });

// Tuple---> 1 record
let prod1:  [number, string, string, number];
prod1 = [1, "Chocolate","Pack", 100];

// console.log(prod1[0]);
// console.log(prod1[1]);
// console.log(prod1[2]);
// console.log(prod1[3]);

prod1.forEach(p=>{
    console.log(p);
});

let products : [number, string, string, number][];
products = [
    [1,"Strawberry", "pcs",20],
    [2,"Apple", "pcs",25],
    [3,"Banana", "pcs",10],
    [4,"Kiwi", "pcs",30],
    [5,"Orange", "pcs",25],
];

products.forEach(p=>{
    p[3] += 5;
    console.log(`${p[0]}. ${p[1]} (${p[2]}) : ${p[3]}`)
});

let students : [string, string, number, number, number][];

students = [
    ["1001", "Kongpop", 20, 50, 0],
    ["1002", "Jakrit", 18, 42, 0],
    ["1003", "Chalermchai", 21, 49, 0],
    ["1004", "Chawanwit", 15, 35, 0],
    ["1005", "Thanakorn", 17, 31, 0]
];

//ให้update คะแนนรวม แสดงรหัส ชื่อ และคะแนนรวม
// แสดงผลเป็น
// ID: Name, Total: xx
// 3:22 pm
students.forEach((s)=>{
    //update s[4]
    s[4]=s[2]+s[3];
    console.log(`${s[0]}: ${s[1]}, Total: ${s[4]}`)
});

enum Direction1{
    Up=1,
    Down=3,
    Left=5,
    Right=7
}

enum Direction2{
    Up="Up",
    Down="Down",
    Left="Left",
    Right="Right"
}
console.clear();
console.log(Direction1.Left);
console.log(Direction2.Down);

//สร้าง pdf
// setPaper(size, orientation)
// 0: A31: A4 2:A5, 3:A6
// 1: Portrait 0:Landscape
// Enumeration
enum PaperSize{
    A3 = 1,
    A4 = 2,
    A5 = 3,
    A6 = 4
}
enum Orientation{
    Portrait = 1,
    Landscape = 2
}

// setPaperSize(PaperSize.A4, Orientation.Landscape)

console.log(PaperSize);

// Defined Type  (Object)
type Student = {
    id: number,
    name: string,
    tel: string,
    line_id?: string  //optional -- nullable
}

let wasok: Student = {
    id: 101, name: "Wasok", tel: "999999", line_id: "wwwwww"
}
console.log(wasok.id);

// Union Type
let sid : number | string 
sid = 101;
console.clear();
console.log(typeof(sid));

sid = "555";
console.log(typeof(sid));

//function

//addNumber จะ return เป็น type อะไรได้บ้าง?
function addNumber(x: number,y:number): number{
    return x + y;
}
console.log(addNumber(1,3)); //output

function showLog(m: number | string): void{
    console.log(m);
}

showLog(123);
showLog("456");

//Interface func.
//โครงเปล่า ๆ ของฟังก์ชัน ที่ยังไมได้กำหนดการทำงาน

interface MathFunc{
    (x: number, y: number) : number
}

const addNum : MathFunc = (a, b): number => { return a+b };
const subNum : MathFunc = (x, y): number => x - y ;

console.log(addNum(5,7));
console.log(subNum(5,7));


// Interface classes
interface Human{
    id: number,
    name: string,
    age: number,
    tel?: string,
    //func as a property
    move() : string,
    eat() : string
}
// boxer, pilot
// สร้าง obj จาก interface Human, implement move(), eat() ด้วย
const student : Human = {
    id : 123,
    name: "Somchai",
    age: 30,
    tel: "090000000",
    move: function() : string{
        return "Running";
    },
    eat: () => "Banana"
}

const grandMom : Human = {
    id: 9,
    name: "Pao",
    age: 60,
    move: function() :string{
        return "Crawling";
    },
    eat: () => "Rice",
}

console.log(student.move());
console.log(grandMom.eat());

// Class
class Driver implements Human{
    id: number;
    name: string;
    age: number;

    //arg-constructor
    constructor(id: number, name: string, age: number){
        this.id = id;
        this.name = name;
        this.age = age;
    }

    move(){
        return `${this.name} moves by driving.`;
    }
    eat(){
        return `${this.name} eats rice.`;
    }

}

console.clear();
const d1 = new Driver(101,"Anurak",20);
console.log(d1.move())
console.log(d1.eat())

// Homework2: Due Nov 19, 2021

// Q1 ให้สร้าง 5 Tuples ของนักเรียน [id, name, mid, final, project, grade]
//                          [ 1, 'Sarawut',20,25,30,""]
// Output: <id>:<name>, Total: <mid + final + project>, Grade: <grade>
// grade 4,3.5,3,2.5,2,1.5,1,0
// Filename: Anurak_Q1.ts


// Q2 การบ้าน implement 1 อาชีพ จาก Human
// แสดงการ implement move(), eat()
// แสดงการสร้าง object
// Filename: Anurak_Q2.ts




// Data Model 
// Decorator ==> Filter  ==> Annotation
// Generic //ยังไม่ทราบ type ตอนสร้างฟังก์ชัน
function getArray<T>(items: T[]): T[]{
    return new Array().concat(items);
}

let n1 = [1,2,3,4]
let n2 = ["A","B","C","D"]

console.log(getArray([n1,n2]));







