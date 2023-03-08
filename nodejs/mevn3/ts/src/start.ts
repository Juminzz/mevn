const a: number = 3
const b: string = 'hello world'

/* :any는 뭐든지 뱉어내는 역할 */
function abc(a:number, b:string):any{
    console.log(a)
    console.log(b)
}
abc(a,b)