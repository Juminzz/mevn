const http = require('http')
http
  .createServer((req, res) => {
    console.log(req.headers.cookie)
    // 200은 서버에서 응답(규칙)
    // res.writeHead를 주석처리하고 실행해도 쿠키는 계속 남아있음
    res.writeHead(200, {
      'Set-Cookie': [
        'yummy_cookie=choco;Secure;HttpOnly', // Secure;HttpOnly 보안성 쿠키
        'tasty_cookie=strawberry',
        `Parmanent-cookies;Max-Age= ${60 * 60 * 24}` // `Parmanent-cookies; 지속쿠키는 세션쿠키와 다르게 삭제되지 않고 더 길게 유지가 가능하다. 지속쿠키는 디스크에 저장되며, 브라우저를 닫거나 컴퓨터를 재시작해도 남아닜다. 사용자 로그인 항상 유지와 같은 곳에 사용한다.
      ]
    })
    res.end('OK')
  })
  .listen(3000)
