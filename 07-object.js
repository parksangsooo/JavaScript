//  객체 생성 방법 1
console.log('============ 객체 생성방법 1');
const person = new Object();    //  인스턴스 생성
//  동적으로 속성(프로퍼티, 메서드) 추가 가능
console.log(person);    //  {} : JavaScript 에서 객체를 표기하는 방법
person.name = "민경은";
person.age = 24;
person.showInfo = function () {
    console.log(`Name: ${this.name}, Age: ${this.age}`)
}
console.log(person);
person.showInfo();

//  객체 생성 방법 2
console.log('============ 객체 생성방법 2: JSON');
const personJson = {        // 객체 표시 방법 {}
    name: '민경은', age: 24, desc: '지각쟁이', showInfo: function () {
        console.log(`Name: ${this.name}, Age: ${this.age}, 특징: ${this.desc}`)
    }
};
console.log(personJson);
personJson.showInfo();

// 객체 생성 방법 3
console.log('============ 객체 생성방법 3: 프로토타입 상속');
const Member = function (name, position) {
    this.name = name;
    this.position = position;
}
m1 = new Member("강백호", "PF");
m2 = new Member("서태웅", "SF")

console.log("m1:", m1)
console.log("m2:", m2)

//  ES는 동적으로 속성을 추가할 수 있다.
m1.sayHi = function () {
    console.log(`${this.name} 님이 당신에게 인사합니다.`)
}   //  m1 객체 전용 메서드.
m1.sayHi();
// m2.sayHi();

console.log("m1:", m1);
console.log("m2:", m2);

//  m1 의 생상자는 무엇인가?
console.log("m1의 생성자:", m1.constructor);     //  Member
console.log("m2의 생성자:", m2.constructor);
//  Member 의 prototype 영역 확인
console.log("Member의 prototype:", Member.prototype);

Member.prototype.team = '상북';
Member.prototype.introduce = function (){
    console.log(`안녕하세요. 저는 ${this.team}에서 ${this.position}을 담당하는 ${this.name} 입니다.`)
}
m3 = new Member("민갱","괴도");
Member.prototype.team = '하이미디어';

m3.introduce();
console.log("Member의 prototype:", Member.prototype);
console.log("m3: ",m3)

/*  ES는 동적으로 속성을 추가 할 수 있기 때문에
    기존 객체에서도 동적으로 속성 추가 가능 */

//  String 객체 --> sayHi method 만들기
String.prototype.sayHi = function (){
    return `안녕하세요, ${this} 사마`
}

console.log("고슈진".sayHi())

/*const personProto = function (name, age, desc) {
    this.name = name;
    this.age = age;
    this.desc = desc;
};

personProto.prototype.name = "민경은";
personProto.prototype.introduce = function (){
    console.log(`Name: ${this.name}, Age: ${this.age}, 특징: ${this.desc}`);
}

const mg = new personProto("민경은",24,"괴도민갱, 하이Runner");
mg.introduce();
console.log('mg:', mg)
console.log(mg.constructor);
console.log(personProto.prototype);*/
