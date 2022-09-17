import {student, StudentType} from "../02/02";


export const sum = (a:number,b:number) => {

    return (
        a + b
    )
}
//
// const result = sum(20,30);
const res = sum(sum(1,2), sum(3,2))

console.log(res);


export const addSkill =(s: StudentType , skill: string)=> {
     student.technologies.unshift({
         id: new Date().getTime(),
         title: skill
     })
}

addSkill(student, 'react')
















