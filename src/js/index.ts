interface user {
  name: string
  age: number
}

const xiaoming = <user>{
  name: 'xiaoming',
  age: 12
}

function aaa(name: string) {
  console.log(name)
}

export { xiaoming }
