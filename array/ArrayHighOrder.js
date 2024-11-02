const students = [
    {
      name: "Alice",
      age: 22,
      scores: { math: 85, english: 92, science: 88 },
      courses: ["Math", "English", "Science"],
    },
    {
      name: "Bob",
      age: 24,
      scores: { math: 78, english: 85, science: 90 },
      courses: ["Math", "History", "Science"],
    },
    {
      name: "Charlie",
      age: 23,
      scores: { math: 92, english: 88, science: 95 },
      courses: ["Math", "English", "Art"],
    },
    {
      name: "David",
      age: 25,
      scores: { math: 95, english: 82, science: 80 },
      courses: ["Math", "English", "Science", "Art"],
    },
  ];
  
  // const alphabets = ["a", "k", "f", "b", "g", "m", "i", "p"];
  // const numbers = [30, 55, 2, 14, 8];
  
  // console.log("Viewing Students", students);
  // console.clear();
  
  // console.log("sorted value", alphabets.sort());
  // console.log(
  //   "Sorted Number",
  //   numbers.sort((smallNumber, bigNumber) => smallNumber - bigNumber),
  //   numbers.sort((smallNumber, bigNumber) => bigNumber - smallNumber)
  // );

  // const averageScore = Array.from(students,(student)=>{
  //   const allcourses = student.courses.length;
  //   const allScores =Object.values(student.scores).reduce(
  //     (sum,total)=> sum + total
  //   );
  //   const getAverage = allcourses / allScores;
  //    return getAverage.toFixed(2);
    
  // });
  // console.log(averageScore);

  const duplicatedArray = [...students];
  console.log(duplicatedArray);









