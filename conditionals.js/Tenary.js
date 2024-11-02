// Tenary Operators

// Example One
let ageToVote = 18;
const youCanVote =
  ageToVote >= 18
    ? console.log("You can vote")
    : console.log("You cannot Vote, Not age legal");

// Example 2
let staffRole = "Administrator";
const securityAccess =
  staffRole === "Administrator"
    ? console.log("You have access as an administrator")
    : console.log("You are not an admin so no access");

    const  schoolScore =[
      {name: "Chinedu Okafor",subject:"Mathematics",score:85,},
      {name: "Amina Abubakar",subject:"English",score:92,},
      {name: "Emeka Nwosu",subject:"Science",score:78,},
      {name: "Folake Adeyemi",subject:"History",score:88,},
      {name: "Ifeanyi Eze",subject:"Mathematics",score:95,},
      ];
      console.clear()
//1
const student = schoolScore.find(schoolScore => schoolScore.name === "Chinedu Okafor" && schoolScore.score > 80);

student ? console.log("1.",`${student.name}'s score is "A"`) : console.log("No students with the name and score were found");

//2
const checkstudent2 = schoolScore.find(schoolScore => schoolScore.subject === "English" && schoolScore.score > 90);
console.log("2",checkstudent2);
 const student2 = schoolScore.find(schoolScore => schoolScore.name === "Amina Abubakar" && schoolScore.score > 90);
 student2 ? console.log(`${student2.name}'s score is A`) : console.log("no student studying english with this score");
 
 //3
 const checkEmeka = schoolScore.find(schoolScore => schoolScore.name === "Emeka Nwosu" && schoolScore.score > 75);
 console.log("3.",checkEmeka);
 checkEmeka ? console.log(`${checkEmeka.name}'s score is A`) : console.log("no relevant student was found");
 
 
 //4
   const checkstudent3 = schoolScore.find(schoolScore=> schoolScore.subject === "History" && schoolScore.score > 85);
   console.log("4.",checkstudent3);
    checkstudent3 ? console.log(`${checkstudent3.name}'s score is A`): console.log("no elevant student was found");

    //5
    
    
    
  

  
