export {}

type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TachType>
}

type TachType = {
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



const student: StudentType = {
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



console.log(student.address.city.title)

