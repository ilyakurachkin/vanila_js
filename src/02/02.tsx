export {}

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}

type TechType = {
    id: number
    title: string
}

type AddressType = {
    city: CityType
}

type CityType = {
    title: string
    count: string
}



export const student: StudentType = {
    id: 1,
    name: 'Ilya',
    age: 29,
    isActive: true,
    address: {
        city: {
            title: 'minsk',
            count: 'belarus'
        },
    },
    technologies: [
        {
            id: 1,
            title: 'HTML'
        },
        {
            id: 2,
            title: 'Js'
        }
    ]
};
console.log(student);


type roomType = {
    door: boolean,
    glass: boolean,
    doorHandle: boolean,
    fridge: Array<fridgeType>
    storeroom: storeroomType
};
type fridgeType = {
    id: number,
    title: string
};
type storeroomType = {
    test: string
}




const room: roomType = {
    door: true,
    glass: true,
    doorHandle: true,
        fridge: [
            {
                id: 1,
                title: 'Ilya'
            }
        ],
    storeroom: {
        test: 'text'
    }
}












