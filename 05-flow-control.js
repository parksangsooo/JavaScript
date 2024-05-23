//  연습문제 1
//  2단 ~ 9단까지 구구단표 출력
//  -for 문 버전 (*)
console.log('--------------- 구구단 for 문')
for (let i = 2; i < 10; i++) {
    for (let j = 2; j < 10; j++) {
        console.log(i + " x " + j + " = ", i*j)
    }
}
//  -while 문 버전
console.log('--------------- 구구단 while 문')
let i = 2;
while (i < 10) {
    let j = 2;
    while (j < 10) {
        console.log(i + " x " + j + " = ", i * j);
        j++;
    }
    i++;
}




//  연습문제 2
/*
*****
****
***
**
*
 */
//  for 문 버전 (*)
console.log('--------------- \"*\" for 문')
for (let i = 5; i > 0; i--) {
    let stars = '';
    for (let j = 0; j < i; j++) {
        stars += '*';
    }
    console.log(stars);
}

console.log('--------------- \"*\" repeat 함수 문')
// str.repeat(i) -> 문자열을 반복
for (let j = 5; j > 0 ; j--) {
    let stars = '*'.repeat(j);
    console.log(stars)
}

console.log('--------------- \"*\"while 문')

//  while 문 버전
let a = 5;
while (a > 0){
    let stars = '';
    let b = 0;
    while (b < a) {
        stars += '*';
        b++
    }
    console.log(stars);
    a--;
}