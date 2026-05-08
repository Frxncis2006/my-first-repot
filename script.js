

const fruits = ['tomato', 'apple', 'mango', 'lemon', 'orange']

for(let fruit of fruits){
    console.log(fruit)
}

let car = {
    color : 'black',
    price : 22000,
    model : 'tesla'
}
for(let key in car){
    console.log(key+':', car[key])
}

class Animsl {
    constructor(){

    }
}
class Dog extends Animsl{
    constructor(noise){
        super();
        this.noise = noise ;
    }
    makeNoise(){
        console.log(this.noise)
    }
}
class Tiger extends Dog{
    constructor(noise ,energy){
            super();
            this.noise = noise;
            this.energy = energy;
    }
    ability(){
        if(this.energy < 10){
            console.log('tiger is sleeping')
        } else {
            console.log('tiger is chasing')
        }
    }
}
const milou = new Dog('bark');
milou.makeNoise()
const zimba = new Tiger('rorr', 20);
zimba.makeNoise();
zimba.ability();

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }   

    introduce(){
        console.log()
    }
}
