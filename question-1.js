const techupPeople = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 16 },
];

const techcoolPeople = [
  { name: "David", age: 25 },
  { name: "Eve", age: 19 },
];

// เริ่มเขียนโค้ดตรงนี้
// 1) ให้รวม Object ใน Array ของ Variable techupPeople และ techcoolPeople เข้าไปใน Array allPeople โดยใช้ใช้เทคนิคของ ES6 
const allPeople = [...techupPeople, ...techcoolPeople]

const peopleWithAgeBelow20 = allPeople.filter(person => person.age < 20)
console.log(peopleWithAgeBelow20)