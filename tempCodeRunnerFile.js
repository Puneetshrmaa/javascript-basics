
const mysym= Symbol("key1")



const jsuser={
    name:"hitesh",
    age:18,
    [mysym]:"key45",
    location:"jaipur",
    email:"hitesh@google.com",
    isloogedin:false,
    lastlogindays:["monday","saturday"]
}

console.log(jsuser.email)
console.log(jsuser["email"])
console.log(jsuser[mysym])
console.log(jsuser)

//overwriting values 
jsuser.email="puneetsharma@gmail.com"

//to freeze the content of an object
Object.freeze(jsuser)


jsuser.greeting=function(){
    console.log(`hello js user,${this.name}`);
}
// first we converted string to backticks this is known as string interpolation

console.log(jsuser.greeting());
