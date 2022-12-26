/*module.js*/
function module(msg) {
  console.log("msg:" + msg);
}

function area(a, b) {
  console.log("area:" + a * b);
}

export { module, area }; // 한번에 묶어서 export 가능
