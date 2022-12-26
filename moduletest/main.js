/* main.js의 함수를 불러올때*/

// 1. module.js에 export를 준다
// 2. main.js에 import를 한다.

//import { module, area } from "./module.js"; // .의 의미 : 현재위치

// 모든 모듈을 불러올 경우 반드시 새 모듈 이름을 지정, as는 별칭주는것
import * as md from "./module.js"; //md가 참조 변수로 만들어짐
import sq, { circle } from "./moduleone.js"; // 하나가 default이고 하나는 아닌것

md.module("test");
md.area(10, 20);
sq();
circle();
