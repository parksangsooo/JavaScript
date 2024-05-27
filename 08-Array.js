//  배열의 생성 : 방법 1, new 키워드

const v1 = new Array(10);   //  10개짜리 배열
const v2 = new Array();     //  빈 배열
const v3 = new Array(2024, "String", true); //  초기값이 있을 때, 어떤 객체들(함수도) 다 들어간 배열

console.log(v1, v1.length, typeof v1);
console.log(v2, v2.length, typeof v2);
console.log(v3, v3.length, typeof v3);

//  배열의 생성 : 방법2, 리터럴로 생성 -> 추천
const v4 = [];
const v5 =['red','green', 'blue', 'yellow'];

console.log(v4, v4.length)
console.log(v5, v5.length)

// ES 특성상 변수가 참조하는 객체의 type 체크가 필요
console.log(typeof v5);

//  주로 Array 판별 함수를 이용, 배열 여부를 판단
console.log('is v5 Array?', Array.isArray(v5));     //

//  ES 의 경우 객체 속성도 배열(맵) 처럼 사용할 수 있음
const person = {
    name : '민경은',
    age : 24
};

console.log(person.name, person.age);
console.log(person[`name`], person[`age`]);     // 객체의 속성을 배열처럼

//  ES 배열은 인덱스 범위를 엄격하게 체크하지 않음
//  인덱스 범위를 벗어난 접근도 허용한다.

const v6 = [];
console.log(v6, v6.length);
v6[10] = 2024;
console.log(v6, v6.length);

//  합치기 : concat
console.log('====== 주요 메서드')
const veges = ["무","배추","쪽파"];
console.log(veges, veges.length)
const sources = ["소금", "고춧가루", "새우젓"];
console.log(sources, sources.length)

const ingr = veges.concat(sources);
console.log(ingr, ingr.length)


//  join : 배열 내부의 요소(아이템)를 한 문장으로 합침.
console.log(ingr, "-> 김장재료:", ingr.join(", "))

//  # 배열의 push, pop -> Stack 자료형처럼 활용 가능 #
//  Stack : Last Input First Output 자료형은 가장 마지막에 입력된 자료가 가장 먼저 출력된다(LIFO 자료형)
let fruits = [];
console.log(fruits.push('Apple'), fruits);
console.log(fruits.push('Banana'), fruits);
console.log(fruits.push('Carot'), fruits);
//  인출 : pop -> 배열의 뒤에서
console.log(fruits.pop(), fruits);
console.log(fruits.pop(), fruits);
console.log(fruits.pop(), fruits);
console.log(fruits);

//  push, shift -> queue 자료형 처럼 활용 가능
//  queue : First Input First output (FIFO)
console.log(fruits.push('Apple'), fruits);
console.log(fruits.push('Banana'), fruits);
console.log(fruits.push('Carot'), fruits);
//  인출 : shift -> 배열의 앞에서
console.log(fruits.shift(), fruits);
console.log(fruits.shift(), fruits);
console.log(fruits.shift(), fruits);

//  splice : 배열 요소 인출 후 삭제, 추가를 동시에 할 수 있는 메서드
console.log("---------- splice")
fruits = ['Apple', "Banana", "Carot", 'Durian'];
console.log(fruits);
console.log(fruits.splice(2));  //  인수가 1개 -> 시작 인덱스, 끝까지 추출
console.log(fruits);

console.log("-------------- splice(index, 갯수)")

fruits = ['Apple', "Banana", "Carot", 'Durian'];
console.log(fruits);
//  인수가 2개 -> 시작 인덱스, 갯수
console.log(fruits.splice(2, 1));
console.log(fruits);

console.log("-------------- splice(index, 갯수, 추가요소)")
fruits = ['Apple', "Banana", "Carot", 'Durian'];
console.log(fruits);
//  인수가 3개 이상 -> 시작 인덱스, 갯수, 추가할 요소들
console.log(fruits.splice(2, 1, 'Kiwi', 'Mango'));
console.log(fruits);

//  reverse, slice
//  reverse : 순서반전
console.log('--------------- reverse');
fruits = ['Apple', "Banana", "Carot", 'Durian'];
console.log(fruits);
fruits.reverse();
console.log(fruits);

//  slice : 배열의 요소를 추출 -> 새 배열로
console.log('--------------- slice');
let slice = fruits.slice(1, 2); //  원본 배열은 유지
console.log(slice);
console.log(fruits);

//  split : 구분자를 기준으로 문자열을 분리 -> 배열로 생성
console.log('--------------- split');
const str = "JavaScript is something strange than other languages"
let chunks = str.split(" ");    //  공백을 기준으로 분리
console.log(chunks)

console.log('--------------- sort');
fruits = ["Carot", "Durian", "Apple", "Mango", "Kiwi", "Banana"];
console.log("원본배열:", fruits);
fruits.sort();  //  정렬 -> 기본적으로는 오름차순
console.log("오름차순 정렬:", fruits);
//  정렬 규칙을 정하고자 할 때 : 정렬 기준 함수 매개변수로 전달 해줘야 함.
fruits = ["Carot", "Durian", "Apple", "Mango", "Kiwi", "Banana"];
console.log("원본배열:", fruits);

fruits.sort((v1, v2) => {
    //  키 함수 : 두개 요소의 선후 관계 결정해 줌
    //  리턴값
    //      음수 -> v1이 앞에 온다.
    //      양수 -> v1이 뒤에 온다.(v2가 앞)
    //      "0" -> 순서를 그대로 둔다.(순위가 같다)
    if (v1 < v2) return 1;
    if (v1 > v2) return -1;
    if (v1 == v2) return 0;
});
console.log(fruits);

//  문자열 길이로 소팅하고 싶다
fruits.sort((v1, v2) => {
    return v1.length - v2.length;
});
console.log("문자열 길이로 정렬:",fruits);