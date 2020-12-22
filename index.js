console.log("나는 낭만 고양이~");
console.log("슬픈 도시를 비춰~");
console.log("춤추는 작은 별빛~");

console.log("ㅡㅡㅡ구구단 출력ㅡㅡㅡ");
for(let i = 2; i <= 9; i++){
  console.log(`ㅡㅡㅡ${i} 단ㅡㅡㅡ`);
  for(let j = 1; j <= 9; j++){
    console.log(`${i} x ${j} = ${i * j}`);
  }
}
process.exit(0);
