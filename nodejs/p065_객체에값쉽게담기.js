// const d = () =>{return {"name" : "홍길동" , "job" : "마케터"}}
const dd = () =>({"name" : "홍길동" , "job" : "마케터"}) // 위랑 같은 내용
const {name} = dd()
console.log(name) // 홍길동

const a2 = [1,2]
const [b,c] = a2
console.log(b,c) // 1 2 

const a3 = {"Name" : "돈까스" , "소스" : "기본"}
const {Name,소스} = a3
console.log(Name,소스) // 돈까스 기본