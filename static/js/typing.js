const typing = document.getElementById('typing');
const text = 'YYJ Network Studio 提供網頁、程式開發、網路代購、資訊相關線上教學等服務。';
const speed = 100;

let charIndex = 0;

function type() {
  if (charIndex < text.length) {
    typing.textContent += text.charAt(charIndex);
    charIndex++;
    setTimeout(type, speed);
  }
}

type();