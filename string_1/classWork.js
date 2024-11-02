// 1.
const  sentence="The quick brown fox jumps over the lazy dog";
const slicedUppercaseWord="sentence.slice(10,15).toUppercase()";
const modifiedSentence= sentence.replace("dog","slicedUppercaseWord"),
const finalAnswer=modifiedSentence.replace("lazy","");
console.log(finalAnswer);
// 2
const email="student.Name@schoolDomain.com";
const extractdomain=email.slice(13,29).toLowerCase();
const at= email.slice(12,13);
const username=email.slice(0,12).toUpperCase();
const finalEmail=username.concat(at).concat(extractDomain);
console.log(finalEmail);
// 3
const messyString =" Too many spaces here ";
const trimmed=messyString.trim();
const lengthStr=trimmed.length;
const substr=trimmed.substring(5,lengthStr-5);
console.log(subStr);
// 4
const phrase="i like to code in javascript.javascript is fun";
const firstReplace=phrase.replace("javaScript","JS");
const secondReplace=firstReplace.replaceAll("javaScript","JS").toUpperCase();
const question4Answer=secondReplace.substring(10,30);
console.log(question4Answer);
// 5
const text="programming is highly rewarding";
const tenthPos =text.slice(10,11);
const tenthPosUnicode=tenthPos.charCodeAt();
const replaceAll("g","103");
const question5Answer=replaceAllG.slice(8,28);
console.log(question5Answer);
// 6
const firstName="jane";
const middleName="Marie";
const lastName="smith";
const concatStr =firstName.concat(middleName).concat(lastName);
const mindex=concatStr.indexOf("M");
const question6Answer=concatStr.replace("marie","Ann");
console.log(question6Answer);
// 7
const staement="javaScript is a versatilr and popular programming language";
const checkstart=satement.startsWith("javaScript");
const checkEnd=staement.endsWith("language");
const replaceStatement=staement.replace("versatile","powerful");
const question7Answer=replaceStatement.toLowerCase();
console.log(question7Answer,checkstart,checkEnd);
// 8
const description="Backend development involves worki(ng with databases,serversans APIS";
const extract=description.toString(42,70).toLowerCase();
const splitArr= extract.split(",");
const finalans8=splitArr.join("&");
console.log(finalans8);
//9
const announcement ="join the new online coding bootcamp now";
const splittedAnnounces=announcement.split(",");
const firstWrd ="join.length";
const secwrd="the".length;
const trdWrd="new".length;
const fourthWrd="online".length;
const fifthWrd ="coding".length;
const sixthwrd="bootcamp".length;
const sevenWrd="now".length;

console.log(firstWrd,

    secwrd,
    trdWrd,
    fourthWrd,fifthWrd,
    sixthwrd,
    sevenWrd,announcement.indexOf("t")
);
//10
const feedback=
"this course is simply amazing.This course is simply comprehensive";
const newReplaced=feedback.replace("course","program").toUpperCase();
const sliced=newReplaced.slice(5,55);
const splitedFinal = sliced.split(" ");
console.log(splitedFinal);