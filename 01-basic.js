// 한 줄 주석
/*
    여러 줄 주석
    : 주석의 사용 방법은 C와 동일
*/

// console 객체 : 출력 장치에 로그 레벨별로 로그 출력하는 객체 (print)
// FATAL -> ERROR(error) -> WARN(warn) -> NORMAL (1. log, 2. info)
console.info("정보 메시지 출력")
console.debug("디버그 메세지 출력")
console.log("일반 메세지")

console.warn("경고 메세지")
console.error("에러 메세지");

// 출력 할 내용들을 , 로 구분해서 나열
console.log('String', 2024, true);

console.log(process.version, process.platform);

// ES는 객체 기반 언어
// 객체 : 여러 개의 데이터(속성) + 데이터를 다룰 수 있는 기능(메서드)
//          .으로 내부 속성과 메서드에 접근 가능
console.log(Math.PI);                       // 속성
console.log(Math.max(1,3,2,4,6));   // 메서드 (객체.메서드명)

console.log('-----------------------')
// vqr :    ES6 이전 버전 -> 변수의 범위 등 일관성이 없음.
// let(가변데이터 : mutable), const(불변 데이터: immutable, 상수 final)
var testVar;
testVar = 'var';

let testLet;        // 선언
testLet = 'let';    // 할당

/*const testConst;
testConst = 'const'*/

const testConst = 'const';

console.log("var, let, const: ", testVar, testLet,testConst)

// 데이터 재할당
testVar = "var changed";
testLet = "let changed";
// testConst = "const changed"; // const 는 재할당 불가

// ES 는 Dynamic Type Language
//      -> 데이터가 할당될 때 타입이 결정
//      -> 타입과 무관하게 어떤 객체든 할당 가능

// 특정 연산 작업을 수행하기 이전에 데이터 타입을 check 해야할 필요가 있음.
// -> type of 연산자(java 의 instance of와 같음)
let v = "This is String";
console.log(v, "->" , typeof v);
v = 2024;
console.log(v, "->", typeof v);
v = 10 > 8;
console.log("10 > 8 ?",v, "->", typeof v);