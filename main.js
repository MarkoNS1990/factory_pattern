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