const students = [
    {
        studentName: "Alice",
        studentHasSubmitted: true,
        studentsubject: "math",
        studentMembership:"gold",
    },
    {
        studentName : "Bob",
        studentHasSubmited :false,
        studentsubject: "English",
        studentMembership: "silver",   
    },
    {
        studentName: "charlie",
        studentHasSubmited: true,
        studentsubject: "science",
        studentMembership:"plantinum",
    },
    {
        studentName: "David",
        studentHasSubmited: false,
        studentsubject: "history",
        studentMembership: "none",
    },
    {
        studentName: "Eve",
        studentHasSubmited: true,
        studentsubject: "math",
        studentMembership: "bronze",
    },
    {
        studentName:"Frank",
        studentHasSubmited: true,
        studentsubject: "English",
        studentMembership: "silver",
    },
    {
        studentName:"Grace",
        studentHasSubmited: false,
        studentsubject: "Science",
        studentMembership: "gold",
    },
    {
        studentName:"Heidi",
        studentHasSubmited: true,
        studentsubject: "History",
        studentMembership: "gold",
    },
    {
        studentName:"Ivan",
        studentHasSubmited: false,
        studentsubject: "math",
        studentMembership: "bronze",
    },
    {
        studentName:"judy",
        studentHasSubmited: true,
        studentsubject: "science",
        studentMembership: "plantinum",
    },
];
console.clear();

//1
const studentsCopy = [...students];
console.log(studentsCopy);

//2
const aliceStatus =  students[0].studentHasSubmitted
if(aliceStatus == true){
    console.log("2.","alice has submitted her assignment");
    
}else{
    console.log("alice has not submitted her assignment");
    
}
//3
const bobStatus = students[1].studentMembership;
if (bobStatus == "gold" || bobStatus == "platinum"){
    console.log("bob has priority grading");
}else{
    console.log("3.","bob has standard grading");
}
//4
const charlieSubject = students[2].studentsubject;
if(charlieSubject == "math"){
    console.log("charlie is a math genius");
    
}else if (charlieSubject == "science") {
    console.log("4.","charlie is a science star");
    
}else {
    console.log("keep up the good work");
    
}
//5
const davidAssignment = students[3].studentHasSubmited;
if(davidAssignment != true){
    console.log("5.","your membership level has been reduced by one tier");

}else {
    console.log("david has no penalty");
    
}

//6
const eveSubject = students[4].studentsubject;
const eveMembership = students[4].studentMembership;
if(eveSubject == "math"){
    if(eveMembership == "platinum" || eveMembership == "gold"){
        console.log("eve youve earned an extra credit");
     }else{
        console.log("6.","your subject is math with bronze membership");
        
     }
}else{
    console.log("you did not meet the criteria");
    
}

//7
const frankSubmitted = students[5].studentHasSubmited;
const frankMembership = students[5].studentMembership
if(frankSubmitted == true){
    if(frankMembership == "silver"){
        console.log("7.","frank is elegible for the science affair");
        }
    }else{
        console.log("frank is not elegible");
        
    }

//8
const graceReward = students[6].studentHasSubmited;
if(graceReward == true){
    console.log("youve been awarded a gold badge");
}else{
    console.log("8.","grace did not submit assignment");
    
}
//9

const heidiFeedBack = students[7].studentHasSubmited
const heidiMembership = students[7].studentMembership
if(heidiFeedBack == true && heidiMembership == "gold"){
    console.log("9.","heidi your history assignment was submitted and you have a gold membership");
    
}else{
    console.log("assignment not submitted");
    
}

//10
const ivanCheck = students[8].studentHasSubmited;
const ivanMembership = students[8].studentMembership;
if(ivanCheck == true && ivanMembership == "bronze"){
    console.log("your membership has been upgrade to siver");
    
}else{
    console.log("10.","you did not submit your assignment but you have a bronze membership");
    
}
//11
const judyAssignment = students[9].studentHasSubmited;
const judyMembership = students[9].studentMembership;
if(judyAssignment == true && judyMembership == "silver"){
    console.log("you have been awarded a stem excellence certificate");
    
}else{
    console.log("11.","judy submitted science assignment and have a platinum memebership");
    
}







