const factoryPattern = (name,age)=>{
    const info =()=>{
        console.log(`Hello I am ${name} and I am ${age} years old`)
    }

    return { name,age,info }
}

const whoDat = factoryPattern('Marko',30)
console.log(whoDat)
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

// Closure

const myFunction = () =>{
  const age = 30

    const sayMyAge = () => {
        return `My age is ${age}.`
    }
    return {sayMyAge}
}

const myFunc = myFunction()
// myFunc.age //error
  console.log(myFunc.sayMyAge()) // Can get age variable even though we are not returning it from factory function

  const myFunctionTwo = () =>{
      const {sayMyAge} = myFunction()
      const age2 = 31
      
      
    const sayMyAgeTwo = () =>{
          return  `My age 2 is ${age2}`
      }
      return {sayMyAge,sayMyAgeTwo}
  }

  const myFuncTwo = myFunctionTwo()
  console.log(myFuncTwo.sayMyAge())
  console.log(myFuncTwo.sayMyAgeTwo())