'use strict';
export {
    Entity,
    talk, // say, sayAge,
    age //fixAge
};
const Entity = function(obj) {

    this.id = obj.id;
    this.firstName = obj.firstName;
    this.lastName = obj.lastName;
    this.surName = obj.surName;
    this.age = obj.age;
    this.sex = obj.sex;
};

const  age = {
    fixAge : function (age) {
        if ((typeof age === 'number') && ((age >= 0) && (age <= 100))){
            console.log(`now I'm ${ this.age = age} years old, let's check it...`);
        } else {
            console.log("Please, give me your real age")
        }
    }
}
const talk = {
    say : function () {
        console.log('Hello, I can speak');
    },
    sayAge : function () {
        if (typeof this.age === 'underfind'){
            console.log('hm undefined? Lets fix it...');
        }else {
            console.log(`"no more undefined :)"`);
        }
    }
}

