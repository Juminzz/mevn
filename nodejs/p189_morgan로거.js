const express = require('express')
const app = express()
const loogger = require('morgan')
const PORT = 3000

// 1번 로직
app.get('/', (req, res) => {
    res.send('<h1>Lee Ju Min</h1>'+`
    <!DOCTYPE html>
<html lang="ko">
<head>
    <script src="https://unpkg.com/typeit@8.7.0/dist/index.umd.js"></script>
    <style>
        /* h1{
            --ti-cursor-margin-left: 0.1em;
            --ti-cursor-color: rgb(80, 95, 235);
            color : rgb(89, 215, 249);
        } */
    </style>
    <script>
        document.addEventListener("DOMContentLoaded",()=>{
            const h1 = document.createElement("h1");
            document.body.appendChild(h1);

            h1.style.cssText = ' --ti-cursor-margin-left: 0.1em; --ti-cursor-color: rgb(80, 95, 235);color : rgb(89, 215, 249);'

            // h1.textContent = 'JavaScript is my favorite programming language'
            h1.textContent = '안녕하세요 안녕하세요.'
            new TypeIt(h1)
            .pause(1000)
            .delete(6,{delay: 1000})   // 마지막 부터 32번째 까지 다 지움
            .type('안녕하세요!')   // 새로 타이밍함
            .go() // 마지막은 .go()
        });
    </script>
</head>
<body>
    
</body>
</html>
    `)
})
app.use(loogger('tiny'))
app.use((req,res,next)=>{
    console.log('1 Time:', Date.now())
    next()
})
app.use(loogger('tiny'))
app.use((req,res,next)=>{
    console.log('2 Time:', Date.now())
    next()
})
app.listen(PORT, ()=>{
    console.log(`${PORT}로 접속완료 !`)
})