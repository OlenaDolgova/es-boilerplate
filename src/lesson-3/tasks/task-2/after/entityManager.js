'use strict';
import {validator} from '../helpers';

const Entity = function(obj) {
    validator(obj);

    this.id = obj.id;
    this.firstName = obj.firstName;
    this.surName = obj.surName;
    this.age = obj.age;
    this.sex = obj.sex;
}

Entity.prototype.getEntity = function() {
    return {
        id: this.id,
        firstName: this.firstName,
        surName: this.surName,
        age: this.age,
        sex: this.sex
    }
}

export default Entity;
