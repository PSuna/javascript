let books = [
            {no:'inbn0002', title : '스프링', writer:'김기자', price:40000},
            {no:'inbn0003', title : '자바', writer:'이순신', price:25000},
            {no:'inbn0004', title : 'SQL', writer:'을지문덕', price:32000}
          ] // books 배열

add(); // 배열의 데이터로 태그 그리기 (초기화면)
total_price(); // 가격의 총금액 함수 (97000원 초기화면)

function add(){ // 테이블에 추가하는 함수
  list.innerHTML = ""; // 테이블의 원래 내용 삭제
  for(let i =0 ; i<books.length; i++){  
    list.innerHTML += `<tr>
                        <td><input type="checkbox"></td>
                        <td>${books[i].no}</td>
                        <td>${books[i].title}</td>
                        <td>${books[i].writer}</td>
                        <td class="price">${books[i].price}</td>
                        <td><button>삭제</button></td>
                        </tr>`
  }
}

list.addEventListener("click",function(ev){ // 삭제버튼을 클릭하면 해당행 삭제
  let node = ev.target; // 클릭한 버튼
  if(node.nodeName == "BUTTON"){ // 버튼일때만 실행
    for(let i =0; i < books.length; i++){
      let no = node.closest("tr").children[1].innerText;
      //let click_price = parseInt(node.closest("tr").querySelector(".price").innerText); // 내가 클릭한 행의 가격
      if(books[i].no == no){ // books배열의 가격중에 내가 클릭한 행의 가격이 같은것 찾기
        books.splice(i,1); // 해당행 books 배열에서 삭제
      }
      // node.closest("tr").remove(); // 해당행 삭제
      add(); // 배열 태그 그리기
      total_price(); // 가격계산
    }
  }
})

let add_button = document.getElementsByClassName("btn btn-primary col-sm-2")[0]; //추가버튼
add_button.addEventListener("click",function(){ // 추가버튼 클릭시 실행하는 이벤트
  
  // 도서번호와 도서명이 입력되지 않으면 경고창
  /* if(no.value=="" || title.value == ""){ // 도서번호, 도서명이 둘중 하나라도 입력되지않으면
    alert("비어있는 값이 있습니다. 값을 입력하세요"); // 경고창
  } */

  // 도서번호와 도서명이 입력되지 않으면 경고창
  if(no.value==""){
    alert("도서번호");
    no.focus();
    return;
  }
  else if(title.value == ""){
    alert("도서명 등록");
    title.focus();
    return
  }else {
    books.push({no:no.value,
                title:title.value,
                writer: writer.value,
                price:parseInt(price.value)}); //값이 다 입력되면 배열에 push

    add(); // 테이블에 추가(배열의 내용을 태그로 그리고)

    // 추가후 입력필드 값 클리어
    no.value = "";
    title.value = "";
    writer.value = "";
    price.value = "";

    total_price(); // 가격 계산
  }
})

function total_price(){ //가격 총금액을 계산하는 함수
  let sum = 0;
  for(let i = 0; i < books.length ; i++){
    sum += books[i].price;
  }
  totalPrice.innerText = sum;
}

