'use strict'
// import './helpers/clear-console';
//
// import lesson from './lesson-1';

// First Example
// let arr =[5, 8, 3, 87, 99, 5, 3, 5, 0];
//
// let sorted = arr.sort((a, b) => a - b);
// console.log(sorted);

// Second example
//  const group = {
//     title: "Group",
//     students: "Anna, Nick, Tom, Vasya",
//     showList: function () {
//
//         this.students.split(',').forEach(
//             student => console.log(this.title, ' : ', student)
//         )
//     }
// }
//     group.showList();

let group = {};
  Object.assign(group, {
      title: "Group",
      students: "Anna, Nick, Tom, Vasya",
      showList() {
            this.students.split(',').forEach(
            student => console.log(this.title, ':', student)
        )
    }
})
group.showList();
