'use strict';
import {validator} from '../helpers';

const data = [];

export const getEntities = () => {
    return data;
};

export const getEntityById = function(id) {
    const entity = data.filter((current)=> {
        //console.log(current);
        return current.id === id;
    });
    const result = entity.length ? entity : null;
    return  result;
};

export const getFirstEntity = () => {
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
    validator(entity);
    data.push(entity);
};

export const filter = function (callback) {
    if (typeof callback !== 'function') {
        throw new Error('callback should be a function');
    }
    const entities = data.filter(callback);
    return entities;
};

export const getEntityTotalviews = function (entity, arrViews,foo ){
    const findEntity = getEntityById(entity);
    //console.log(find);
    // console.log( find [0].social );
    let viewsTotal = 0;
    if (! arrViews ){
         viewsTotal = findEntity [0].social.reduce((prev, cur, index) => {
            return  prev += cur.views;
        }, 0)
    }else {
        arrViews.forEach((current) => {
            if (typeof current === 'number'){
               const idViews = findEntity [0].social.find ((el) => {
                     return current === el.id;
                });
               viewsTotal += idViews.views;
            } else if (typeof current === 'string'){
                const titleViews = findEntity [0].social.find ((el) => {
                    return current === el.title;
                });
                viewsTotal += titleViews.views;
            }
        });
    }
    if ( arrViews === null ) {
        viewsTotal = findEntity [0].social.reduce((prev, cur, index) => {
            return prev += cur.views;
        }, 0);
        return `totalViews ${ foo(viewsTotal)}`;
    }
return viewsTotal;
};

export const getEntitiesSortedByPopularity = function (entity) {
        const findEntity = getEntities(entity);
       // console.log(findEntity);
        let arrSorted = [];
        for (i = 0; i < findEntity.length; i++) {
            (i) => {
                let viewsTotal = findEntity [i].social.reduce((prev, cur, index) => {
                    let total = prev += cur.views;
                }, 0);
                arrSorted.push(total);
            }
        }
};
    // нужно создать массив всех ентити с посчитаным колличеством вьюх
    // потом отсортировать этот масив по данным во вью
