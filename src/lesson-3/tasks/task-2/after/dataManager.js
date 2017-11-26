'use strict';


const data = [];

export const getEntities = () => {
    return data;
};

export const getEntityById = function(id) {

    const entity = data.filter((current)=> {
        return current.id === id;
    });

    const result = entity.length ? entity : null;

    return  result;
};

export const getFirstEntity = () =>{
    const result = data.length ? data[0] : null;

    return result;
};

export const getLastEntity = () => {
    const result = data.length ? data[data.length - 1] : null;

    return result;
};

export const getCount = () => {
    const result = data.length;

    return result;
};

export const addEntity = (entity)=>  {
   // validator(entity);

    data.push(entity);
};

export const filter = function (callback) {
    if (typeof callback !== 'function') {
        throw new Error('callback should be a function');
    }

// export const getEntitiesSortedByPopularity = function () {


//}

// export const getEntityTotalviews = function () {
//         let countViews = 0;
//         for (){
//
//         }

// }

    const entities = data.filter(callback);

    return entities;
};
