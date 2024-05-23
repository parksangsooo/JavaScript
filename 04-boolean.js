//  Boolean (true or false)
//  - 비교 연산의 결과
//  - 논리 연산의 결과
//  - 논리 조합 : AND(&&), OR(||), NOT(!)
let v1;
let v2 = null;
console.log(typeof v1, typeof v2)   //  undefined, object
//  undefined - 비어 있는 것 : 할당 자체가 되지 않은 것.
//  null - 비어 있는 것 : null 이라는 객체가 할당이 되어 있다. -> 개발자가 직접 할당 한 것
console.log(v2, typeof v2, v2 == null); //  null 체크 : 객체 == null

v2 = undefined; // 개발자가 임의로 undefined 상태로 설정하기도 한다

console.log(v2, typeof v2, v2 == undefined);    //  undefined 체크 : 객체 == undefined

//  == : 타입과 상관없이 값을 비교
//  === : 타입과 값을 함께 비교

console.log(123 == "123");  //  true -> 값만 비교
console.log(123 === "123"); //  false -> number, string -> 값과 타입을 함께 비교

//  number, string 의 값이 있으면 true, 값이 없으면 false
console.log(Boolean("JavaScript"), Boolean("")) // String
console.log(Boolean(2024), Boolean(0)) // number

//  short-circuit 선택 기법
//  Front-End 선택적 렌더링

console.log(true && "Test");    //  Test
console.log(false && "Test");    // false

console.log(true || "Test");    //  true
console.log(false || "Test");    // TEST
