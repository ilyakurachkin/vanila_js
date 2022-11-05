export {}

const curse = [
    {id: 1, title: 'JS', isDone: true},
    {id: 2, title: 'ReactJs', isDone: false},
    {id: 3, title: 'Html,Css', isDone: true}
];

const oldCurse = curse.filter(curse => curse.isDone)
console.log(oldCurse);

type CourseType = {
    title: string
    price: number
}


const course = [
    {title: 'CSS', price: 110},
    {title: 'JS', price: 200},
    {title: 'REACT', price: 150}
]

const cheap = (course: CourseType)=> {
    return (
        course.price < 160
    )
}

const cheapCourse = []
