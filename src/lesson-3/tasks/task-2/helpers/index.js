'use strict';
export {validator};
function validator (obj) {
    if (typeof obj.id !== 'number') {
        throw new Error('Property id should be a number type');
    }

    if (typeof obj.firstName !== 'string') {
        throw new Error('Property firstName should be a string type');
    } else if (obj.firstName === '') {
        throw new Error('Property firstName can\'t be an empty string');
    }

    if (typeof obj.lastName !== 'string') {
        throw new Error('Property lastName should be a string type');
    } else if (obj.lastName === '') {
        throw new Error('Property lastName can\'t be an empty string');
    }

    if (typeof obj.age !== 'number') {
        throw new Error('Property age should be a number type');
    } else if (obj.age <= 0) {
        throw new Error('Property age should be greater than 0');
    }

    if (!(obj.sex === 'male' || obj.sex === 'female')) {
        throw new Error('Property sex should be \'male\' or \'female\'');
    }
}
