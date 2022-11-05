 export {}
// test('should take old men older then 90', ()=>{
//     const ages = [18,19,23,1,100,90,14];
//
//     // const predicate =(age: number)=> {
//     //     return (
//     //         age > 90
//     //     )
//     // }
//
//     const oldAges = ages.filter((age)=> age >90);
//
//     expect(oldAges.length).toBe(1);
//     expect(oldAges[0]).toBe(100);
// })
//
// test('get only completed tasks', ()=> {
//
//     const tasks = [
//         {id: 1, title: 'Bread', isDone: false},
//         {id: 2, title: 'Milk', isDone: true},
//         {id: 3, title: 'Salt', isDone: false},
//         {id: 4, title: 'Sugar', isDone: true}
//     ]
//
//     const CompletedTasks = tasks.filter(task => task.isDone)
//     expect(CompletedTasks.length).toBe(2);
//     expect(CompletedTasks[0].id).toBe(2);
//     expect(CompletedTasks[1].id).toBe(4)
// })


 test('Get only Completed tasks',()=>{

     const tasks = [
         {id: 1, title: 'Html',isDone: true},
         {id: 2, title: 'CSS',isDone: true},
         {id: 3, title: 'JS',isDone: true},
         {id: 4, title: 'React',isDone: false}
     ]
     const task = tasks.filter(t => t.isDone)
     expect(tasks.length).toBe(4);
     expect(tasks[0].id).toBe(1);
     expect(tasks[1].id).toBe(2);
     expect(tasks[2].id).toBe(3);
 })




