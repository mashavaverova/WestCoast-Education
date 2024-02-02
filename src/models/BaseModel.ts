
export interface CourseModel {
    id: string,
    title: string,
    imageUrl: string,
    number : string,
    description: string,
    description_long: string,
    startDate: string,
    duration: string,
    location: string,
    price: number,
}

export interface UserModel {
    id: string,
    name: string,
    surname: string,
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    email: string,
    mobilePhone: string,
    userName: string,
    password: string,
}