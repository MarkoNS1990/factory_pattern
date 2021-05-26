const factoryPattern = (name,age)=>{
    const info =()=>{
        console.log(`Hello I am ${name} and I am ${age} years old`)
    }

    return { name,age,info }
}

const whoDat = factoryPattern('Marko',30)
console.log(whoDat.name);
console.log(whoDat.age);
whoDat.info()

// trick for logging as an object
const name = 'Marko'
const age = 30
const color = 'red'

console.log({name,age,color})

// Scope
// Var is functionaly scoped ; let and const are block scoped
let a = 17;

const func = x => {
    let a = x //Creating new variable in function scope, doesnt affect outer variable
 
};

func(99);

console.log(a)


var years = 10

if (years > 5){
      var doubleYears = years * 2 //it will be in global function scope
    // const doubleYears = years * 2 //it wont be in global function scope as its in a block
}

console.log(doubleYears)