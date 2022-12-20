// 달력 생성
const makeCalendar = (date) => { //람다식, date : 오늘 날짜
  // 현재 년도와 월 받아오기
  const currentYear = new Date(date).getFullYear(); // 현재년도
  
  //현재월 : getMonth()는 월의 index값이 반환되므로 +1을 더해주어야함
  const currentMonth = new Date(date).getMonth() + 1; 

  // 첫날의 요일 구하기 - 초기 시작위치를 위해서
  // getDay() 요일 구하는 메서드
  const firstDay = new Date(date.setDate(1)).getDay();

  // 마지막 날짜 구하기
  const lastDay = new Date(currentYear, currentMonth, 0).getDate();

  // 남은 박스만큼 다음달 날짜 표시
  const limitDay = firstDay + lastDay;
  const nextDay = Math.ceil(limitDay / 7) * 7;

  let htmlDummy = '';

  // 한달전 날짜 표시하기
  for (let i = 0; i < firstDay; i++) {
    htmlDummy += `<div class="noColor"></div>`;
  }

  // 이번달 날짜 표시하기
  for (let i = 1; i <= lastDay; i++) {    
    htmlDummy += `<div>${i}</div>`;
  }

  // 다음달 날짜 표시하기
  for (let i = limitDay; i < nextDay; i++) {
    htmlDummy += `<div class="noColor"></div>`;
  }

  document.querySelector(`.dateBoard`).innerHTML = htmlDummy;
  document.querySelector(`.dateTitle`).innerText = `${currentYear}년 ${currentMonth}월`;
}


const date = new Date(); // 오늘 날짜

makeCalendar(date);

// 이전달 이동
document.querySelector(`.prevDay`).onclick = () => {
makeCalendar(new Date(date.setMonth(date.getMonth() - 1)));
}

// 다음달 이동
document.querySelector(`.nextDay`).onclick = () => {
makeCalendar(new Date(date.setMonth(date.getMonth() + 1)));
}