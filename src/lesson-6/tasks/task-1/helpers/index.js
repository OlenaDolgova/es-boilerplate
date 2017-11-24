'use strict';

export const validator = function (obj) {
    if (typeof obj.id !== 'number') {
        throw new Error(`${ obj.id } id is not a number`)
    }

    if (typeof obj.age !== 'number') {
        throw new Error(`${obj.age} age is not a number`)
    }

    if (typeof obj.firstName !== 'string') {
        throw new Error(`${obj.firstName} is not a string`)
    }

    if (typeof obj.lastName !== 'string') {
        throw new Error(`${obj.lastName} is not a string`)
    }

    const sexConfirm = ['male', 'female', 'robot'];
    const result = (sexFind) => sexConfirm.find((sex) => {
        return  sex === sexFind;
    });
    if ( !result(obj.sex.toLowerCase()) ) {
        throw new Error (`${obj.sex} is not a sex`);
    }

    if (!Array.isArray(obj.social) ){
        throw new Error (`${obj.social} is not array`);
    }

    if (obj.social.length > 0 ){
        obj.social.forEach(({ id, title, views}) => {
            if (typeof id !== 'number') {
                throw new Error('social id is not a number')
            }
            if (typeof title !== 'string') {
                throw new Error('social title is not a string')
            }
            if (typeof views !== 'number') {
                throw new Error("")
            } else {
                if (obj.social.length === 0) {
                    throw  new Error('social is empty')
                }
            }
        })
    }
}



