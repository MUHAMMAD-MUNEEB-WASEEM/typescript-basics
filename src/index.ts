console.log("hello");

let a = 56;// -> explicit
// or a : number = 56 -> implicit


a = 10;

function square (n: number){
    return n * n;  
}
console.log(square(2));

let b : number = 10;
// we cannot do this b = "string"

let c : any = 100;
c = "type change due to any";
//as due to any type, we can assign any type to variable c

console.log(c);

let d : true = true;
// d = false; -> gives an error as we assign true type, so it will only accept true

let e : 20 = 20;
// e = 30 or any number; -> gives an error as we assign 20 type, so it will only accept 20

let user : {firstName: string, lastName: string} = {
    firstName: "Muhammad Muneeb Waseem", 
    lastName: "Waseem"
}

// we can not add more key value pair or more properties in object user as we specify properties initially
console.log(user);
