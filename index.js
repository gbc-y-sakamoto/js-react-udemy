let val1 = "val1"
console.log(val1)

const name2 = 'y-sakamoto'
const age = 32
console.log(`私の名前は${name2}です。年齢は${age}です`)

function func1(test) {
  console.log(test)
}

func1('func1')

const func2 = (test) => {
  console.log(test)
}

func2('func2')

const func3 = (num1, num2) => {
  return num1 + num2
}

console.log(func3(1, 2))

const func4 = (num1, num2) =>  num1 + num2

console.log(func4(1, 3))

const myProfile = {
  name: 'y-sakamoto',
  age2: 32
  // age2: 32
}

// const message1 = `私の名前は${myProfile.name}。年齢は${myProfile.age}です。`
// console.log(message1)

const {name, age2} = myProfile;
const message2 = `私の名前は${name}。年齢は${age2}です。`
console.log(message2)

const sayHallo = (name = '山田') => console.log(name)
sayHallo()