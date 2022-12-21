document.addEventListener("DOMContentLoaded",function(){ // body의 dom객체가 load되면 실행
  document.addEventListener("mousemove",function(ev){ // ev : 내가 클릭한곳
    //console.log(ev);
    let img = document.querySelector("img");
    img.style.left = ev.clientX + "px"; // 현재창에서 클릭한 x좌표
    img.style.top = ev.clientY + "px"; // 현재창에서 클릭한 y좌표
  });
});