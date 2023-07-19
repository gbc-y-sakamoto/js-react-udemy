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


// スプレッド構文

const arr1 = [1,2]
const arr2 = [3,4]
console.log(...arr1)

const sumFunc = (num1, num2,num3,num4) => console.log(num1 + num2 +num3 + num4);

sumFunc(arr1[0], arr2[0])
sumFunc(...arr1, ...arr2)

const arr3 = [1,2,3,4,5]
const [num1, num2, ...arr4] = arr3

console.log(num1)
console.log(num2)
console.log(arr4)

const arr5 = [...arr1, ...arr2]
console.log(arr5)


// map、filterを使った配列の処理
const nameArr = ['田中', '山田', 'たろう']
const nameArr2 = nameArr.map((name) => {return name})
console.log(nameArr2)
nameArr.map((name, index) => {console.log(`${index+1}は${name}`)})

const newNameArr = nameArr.map((name) => {
  if (name === 'たろう') {
    return name
  } else {
    return `${name}さん`
  }
})

console.log(newNameArr)

const numArr = [1,2,3,4,5]
const newNumArr = numArr.filter((num) => {
  return num % 2 == 1
})

console.log(newNumArr)

const num = 1300
const formattedNum = typeof num === 'number' ? num.toLocaleString() : 'ng'
console.log(formattedNum)