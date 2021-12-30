const arr = [];
const cardNum = 8

for (let i = 0; i < cardNum; i++) {
  arr.push(
{
  cat: `cat num: ${i % (cardNum / 2)}`,
  index: Math.floor(Math.random() * 1000)
})

}

arr.sort((a, b) => a.index-b.index);

console.log(arr);