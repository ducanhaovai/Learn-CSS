// du lieu co ban 

let car = "Km"
let bike: string
bike = "winner"

//co the khai kieu du lieu ngay dau
let num1 = 10
//hoac
let num: number = 10

//any 
let person: any
person = 10
person = 'Something'


// object

let house : {
    address: string
    //color co the la undefined
    color?: string
} ={
  address: '',
  color: ''
}

house.address = 'Thai Binh'



/*
Array
*/
//khi dung cach nay thi co the khai bao voi tat ca cac kieu du lieu.
let products: any[] = []
products.push(1)
products.push("vietnam")

//string[]
let addresses: string[] = []
addresses.push('Thai binh')
//neu khi them 2 vao addresses thi se bao loi 
//addresses.push(2)

//number[]

let numbers: number[] = []
numbers = [1, 2, 3]

//object array

let people: {
    name: string
    age: number

}[] = []

people.push({
    name: 'Duck',
    age: 27
})

//Function

const sum = (num1: number, num2: number): number => {
    return num1+ num2
}

sum(1, 2)

const sub: (num1: number, num2: number) => number = (
    num1: number,
    num2: number
) => num1 - num2



/**
 * Union
 */


let price: string | number | boolean

price = '10'
price= 20
price = false

// co the dung tren object

let bodys: {name: string | number}|{fistName:string}={
    name: 123
}

/**
 * Enum
 */

enum Sizes{
    S = 'S',
    M = ' M'

}

/*
 *interface  
 */


interface State {
    name : string
    isLoading: boolean
}

interface State {
   age: number
}

let state: State = {
    name: 'Anh',
    isLoading: false,
    age: 100
}

/**
 * Type
 */

type Name = {
   name: string
   isLoading: boolean
}

type Age ={
    age: number
}
//co the gop vao nhau va thang interface khong the gop vao dc nhu nay
type Person = Name | Age

//nen dung type hon

/**
 * 
 */
/**
 * Class
 */
class Person1{
    name: string
    age: number

    constructor(name: string, age: number){
        this.name = name
        this.age= age
    }
    handle(){
        this.name
    }
}

const alex = new Person1('Anh', 27)

console.log(Person1)
