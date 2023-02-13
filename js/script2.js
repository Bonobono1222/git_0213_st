let dropdownMenu = document.querySelector('.dropdown-menu');
let dropdownButton = document.querySelector('.dropdown-button');

dropdownButton.addEventListener('click', function() {
// dropdownButton을 클릭 했을 때
// 방법1. toggle 이용
// 방법2. 조건문 이용

//  dropdownMenu.classList.toggle('active'); // 방법1
//  // toggle이 도와줌 (없으면 추가, 있으면 제거)

  if(this.active) {
    // dropdownMenu에 active가 있으면
    dropdownMenu.classList.remove('active');
    // dropdownMenu에 active 클래스를 제거시켜주고
  } else {
    dropdownMenu.classList.add('active');
    // dropdownMenu에 active 클래스를 추가 해줘라
  }
  this.active = !this.active;
  // 버튼이 활성 상태라면 비활성 상태로 바꿔주고 비활성 상태라면 활성 상태로 바꿔주라 // 방법2
})