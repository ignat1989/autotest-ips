type Student = {
  name: string;
  age: number;
};

const students: Student[] = [
  {
    name: "Petr",
    age: 18,
  },
  {
    name: "Ivan",
    age: 19,
  },
  {
    name: "Lena",
    age: 18,
  },
  {
    name: "Nina",
    age: 18,
  },
];

students.forEach((students) => console.log(students.name, students.age));
