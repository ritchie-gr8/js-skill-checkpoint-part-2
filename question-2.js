const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
const totalScore = students
  .filter((student) => student.score > 50)
  .reduce((acc, student, idx, arr) => {
    student.score += student.score * 0.1;
    acc += student.score;

    return idx === arr.length - 1 ? `Total score is ${acc.toFixed(1)}` : acc;
  }, 0);

console.log(totalScore);
