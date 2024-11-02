const company = [
    {
        name: "Tech Innovators Inc.",
        location: "San Francisco",
        departments: [
            {
                name: "Engineering",
                manager: "Alice Johnson",
                staff: [
                    {name: "Bob Smith", position: "Developer"},
                    {name: "Emily Davis", position: "Junior developer"},
                ],
            },
            {
                name: "Marketing",
                manager: "Michael Brown",
                staff: [
                    { name: "Sara Lee", position: "Specialist"},
                    { name: "Tom Wilson", position: "Strategist"},
                ],
            },
        ],
    },
    {
        name: "Creative Solutions LLC",
        location: "New York",
        departments: [
            {
                name: "Design",
                manager: "Karen White",
                staff: [
                    { name: "Leo Carter", position: "Designer"},
                    { name: "Nina Patel", position: "UI/UX Designer"},
                ],
            },
            {
                name: "Sales",
                manager: "James Green",
                staff: [
                    { name: "Olivia Turner", position: "Executive"},
                    { name: "Ethan Harris", position: "Manager"},
                ],
            },
        ],
    },
];

console.log(company);

//1

// const companyDuplicate = [...company];

// // 2. Print out the names of all managers across all companies
// const managers = companyDuplicate.flatMap((company) =>
//   company.departments.flatMap((department) =>
//     department.staff.filter((staff) => staff.position === "Manager").map((staff) => staff.name) 
//   )
// );
// console.log(managers.join(", "));

// // 3. Calculate and print out the total number of staff members across all departments and companies
// const totalStaff = companyDuplicate.flatMap((company) =>
//   company.departments.flatMap((department) => department.staff)
// ).length;
// console.log(totalStaff);

// // 4. Print out the first department where any staff member holds the position "Strategist"
// const strategistDepartment = companyDuplicate.flatMap((company) =>
//   company.departments.find((department) =>
//     department.staff.some((staff) => staff.position === "Strategist")
//   )
// )[0]?.name;
// console.log(strategistDepartment);

// // 5. Print out whether all departments in "Creative Solutions LLC" have managers whose names contain the word "Green"
// const creativeSolutionsManagers = companyDuplicate
//   .find((company) => company.name === "Creative Solutions LLC")
//   .departments.flatMap((department) =>
//     department.staff.filter((staff) => staff.position === "Manager")
//   )
//   .every((manager) => manager.name.includes("Green"));
// console.log(creativeSolutionsManagers);
// // 6. get all staffs of tech innovators inc
// const dupCompany = [...company];
// console.log(dupCompany);
// const company = [
//     {
//         name: "Tech Innovators Inc.",
//         location: "San Francisco",
//         departments: [
//             {
//                 name: "Engineering",
//                 manager: "Alice Johnson",
//                 staff: [
//                     {name: "Bob Smith", position: "Developer"},
//                     {name: "Emily Davis", position: "Junior developer"},
//                 ],
//             },
//             {
//                 name: "Marketing",
//                 manager: "Michael Brown",
//                 staff: [
//                     { name: "Sara Lee", position: "Specialist"},
//                     { name: "Tom Wilson", position: "Strategist"},
//                 ],
//             },
//         ],
//     },
//     {
//         name: "Creative Solutions LLC",
//         location: "New York",
//         departments: [
//             {
//                 name: "Design",
//                 manager: "Karen White",
//                 staff: [
//                     { name: "Leo Carter", position: "Designer"},
//                     { name: "Nina Patel", position: "UI/UX Designer"},
//                 ],
//             },
//             {
//                 name: "Sales",
//                 manager: "James Green",
//                 staff: [
//                     { name: "Olivia Turner", position: "Executive"},
//                     { name: "Ethan Harris", position: "Manager"},
//                 ],
//             },
//         ],
//     },
// ];

// console.log(company);

// //1

const companyDuplicate = [...company];

// 2. Print out the names of all managers across all companies
const managers = companyDuplicate.flatMap((company) =>
  company.departments.flatMap((department) =>
    department.staff.filter((staff) => staff.position === "Manager").map((staff) => staff.name) 
  )
);
console.log(managers.join(", "));

// 3. Calculate and print out the total number of staff members across all departments and companies
const totalStaff = companyDuplicate.flatMap((company) =>
  company.departments.flatMap((department) => department.staff)
).length;
console.log(totalStaff);

// 4. Print out the first department where any staff member holds the position "Strategist"
const strategistDepartment = companyDuplicate.flatMap((company) =>
  company.departments.find((department) =>
    department.staff.some((staff) => staff.position === "Strategist")
  )
)[0]?.name;
console.log(strategistDepartment);

// 5. Print out whether all departments in "Creative Solutions LLC" have managers whose names contain the word "Green"
const creativeSolutionsManagers = companyDuplicate
  .find((company) => company.name === "Creative Solutions LLC")
  .departments.flatMap((department) =>
    department.staff.filter((staff) => staff.position === "Manager")
  )
  .every((manager) => manager.name.includes("Green"));
console.log(creativeSolutionsManagers);

const fakeCompany = [...company];
// console.log(fakeCompany);

//1
const staffs = fakeCompany[0].departments.map((el) => {
    return el.staff
});
console.log("1. ", staffs);
console.log();



const marketing = fakeCompany[0].departments.find((el) => el.name === "Marketing");
console.log("2. ", marketing.staff);
console.log();



const getSara = fakeCompany[0].departments[1].staff.find((el) => {
    return el.name === "Sara Lee"});
console.log("3. ", getSara);
console.log();



const getManager = fakeCompany[1].departments.find((props) => {
    return props.manager === "Karen White"
});
console.log( "4. ", getManager.manager);
console.log();



const getSaleStaff = fakeCompany[1].departments.find((el) => el.name === "Sales");
console.log("5. ", getSaleStaff.staff);
