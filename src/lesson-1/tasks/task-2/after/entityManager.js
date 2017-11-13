
export default class Entity {
    constructor (item) {
        this.item = item;
      }
get Entity() {
        console.log("Create Entity:: ")
        return `${this.item}`;
}
}


const men = new Entity ({
    id : 0,
    firstName: 'Tomas',
    lastName: 'Anderson',
    age: 32,
    sex: 'male'
});
console.log(men);

const firstEntity = men.getEntity()




