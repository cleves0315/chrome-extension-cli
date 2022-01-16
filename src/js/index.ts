interface user {
  name: string;
  age: number;
}

const xiaoming = {
  name: 'xiaoming',
  age: 12,
} as user;

function aaa(name: string) {
  console.log(name);
}

export { xiaoming };
