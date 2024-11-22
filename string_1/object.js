let person = {
    name:"mijay",
    complexion:  "dark",
    age: "75",
    isMale: true,
    isAlive: true,
    isDating: undefined,
    height: "200cm",
};
//dot notation
console.log(
    person.name,
    person.age,
    person.complexion,
    person.isMale,
    person.isAlive,
    person.isDating,
    person.height,
);

    const school = {
        schoolName: "codelab",
        totalClasses: 30,
        teachersLanguage: "English",
                majorSubjects: "mathematics",
        $totalStudents: 400,
        revenue: "₦4,000.000",
        _mamaPutFood:"jollof-rice",
        haveGreatTutors: true,
        };
        //Bracket Notation
        console.log(school["schoolName"]);
        console.log(school["totalClases"]);
        console.log(schhool["teachersLanguage"]);
        console.log(school["majorSubjects"]);
        console.log(school["$totalStudents"]);
        console.log(school["revenue"]);
        console.log(school["_mamaPutFood"]);
        console.log(school["haveGreatTutors"]);

        // Nested Objects
        let compound = {
            landlord: "Baba Ibeji",
            landlordWife: "Mama Ibeji",
            children: 15,

            tenantone: {
               name: "oga longinus",
               wifeName: "mama longinus",
               tenantOneChildren: 8,
            },
            tenantTwo: {
                name: "oga pascal",
                wifeName: "mama pascal",
                t2Children: 4,
                firstChild:{
                   babymamas: 15,
                },
            },
        },

        console.log(
          compound.landlord,
          compound.children,
          compound.tenantone.name,
          compound.tenanatTwo.firstChild.babymamas,
        );
