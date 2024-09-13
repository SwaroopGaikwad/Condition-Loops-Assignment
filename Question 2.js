function determineGrade(marks) {
  if (marks > 90) {
    return "A";
  } else if (marks >= 70 && marks <= 90) {
    return "B";
  } else if (marks >= 50 && marks < 70) {
    return "C";
  } else {
    return "F";
  }
}

function gradeStudents(students) {
  students.forEach((student) => {
    const grade = determineGrade(student.marks);
    console.log(`${student.name} received a grade of ${grade}`);
  });
}

const students = [
  { name: "Rohit", marks: 95 },
  { name: "Ramesh", marks: 85 },
  { name: "Raj", marks: 65 },
  { name: "Rohan", marks: 45 },
  { name: "Ram", marks: 72 },
];

gradeStudents(students);
