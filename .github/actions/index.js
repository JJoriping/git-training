import FS from "fs";

console.log("나는 낭만 고양이~");
console.log("슬픈 도시를 비춰~");
console.log("춤추는 작은 별빛~");

console.log(
  JSON.stringify(JSON.parse(FS.readFileSync("./endpoints.json").toString()), null, 2)
);

process.exit(0);
