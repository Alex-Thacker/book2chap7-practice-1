const container = document.querySelector('#container')

const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]


// PRACTICE 1

// const createStudentComponent = (name, subject, info, class1, class2, class3, class4, class5, class6) => {
//     return `
//         <div class="student">
//             <h1 class = '${class1} ${class2}'>${name}</h1>
//             <section class= '${class3} ${class4} ${class5}'>${subject}</section>
//             <aside class = '${class6}'>${info}</aside>
//         </div>
//     `
// }



// for (let i = 0; i < students.length; i++){
//     if (students[i].score >= 60){
//         container.innerHTML += createStudentComponent (
//             students[i].name, students[i].subject, students[i].info, 'xx-large', 'passing', 'bordered', 'dashed', 'section--padded', 'pushRight'
//         )

//     } else {
//         container.innerHTML += createStudentComponent (
//             students[i].name, students[i].subject, students[i].info
//         )
//     }
// }

// PRACTICE 1 END



// PRACTICE 2

// const createStudentComponent = (object) => {
//     return `
//         <div class="student">
//             <h1>${object.name}</h1>
//             <section>${object.subject}</section>
//             <aside>${object.info}</aside>
//         </div>
//     `
// }

// for (let i = 0; i < students.length; i++){
//     // const student = students[i]
//     container.innerHTML += createStudentComponent(students[i])
// }

// PRACTICE 2 END



// CHALLENGE 1

// function makeH1 (name) {
//     return `<h1>${name}</h1>`
// }

// function makeSection (name) {
//     return `<section>${name}</section`
// }

// function makeAside (name){
//     return `<aside>${name}</aside>`
// }

// const createStudentComponent = (object) => {
//     return `
//         <div class="student">
//             ${makeH1(object.name)}
//             ${makeSection(object.subject)}
//             ${makeAside(object.info)}
//         </div>
//     `
// }


// for (let i = 0; i < students.length; i++){
//     // const student = students[i]
//     container.innerHTML += createStudentComponent(students[i])
// }

// CHALLENGE 1 END


// CHALLENGE 2

// function makeElement (element, name, class1) {
//     return `<${element} class= '${class1}'>${name}</${element}>`
// };



// const createStudentComponent = (object) => {
//     return `
//         <div class="student">
//             ${makeElement('h1', object.name, 'xx-large')}
//             ${makeElement('section', object.subject, 'dashed')}
//             ${makeElement('aside', object.info, 'dashed')}
//         </div>
//     `
// }


// for (let i = 0; i < students.length; i++){
//     // const student = students[i]
//     container.innerHTML += createStudentComponent(students[i])
// }


// CHALLENGE 2 END






