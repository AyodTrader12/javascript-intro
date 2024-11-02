 let school = {
    schoolName: "moonlight",
    Address: "6 wowo street",
   yearEstablished: 2001,
 
 // nested objects
    principal : {
     principalName: "mr charles",
 
     Office: {
     roomNumber: 8,
     building: {
         name: "admin building",
 
         facilities : {
           library: {
             name: "school library",
             hours:{
              opening: "8:00 am",
              closing: "7:00 pm",
             }
     
     
           }
         }
     }
 }}
    }
 
console.log(school["schoolName"]);