var socket = io()

// 접속 시 실행함
socket.on('connect', function () {
  var input = document.getElementById('input')
  input.value = '접속 되었습니다 !'
})

// 전송 함수
function send() {
  var messages = document.getElementById('input'.value)
  document.getElementById('input').value = ''
  socket.emit('send', { msg: messages })
}
