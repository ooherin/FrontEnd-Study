class Shape{
  constructor(height, width){
    this.height = height;
    this.width  = width;
  }
   getArea(){
     return this.width * this.height;
   }
 }
 
 class Rectangle extends Shape{
   constructor(height,width){
     super(height,width);
   }
 }
 class Color_rec extends Rectangle{
   constructor(width,height,color){
     super(width,height);
   this.color = color;}
 }
 class Triangle extends Shape{
   constructor(width,height){
     super(width, height);
   }
   getArea(){
     return this.height * this.width /2;
   }
 }
 const shape1 = new Triangle(10,2);
 console.log(shape1.getArea()); //10
 
 const shape2 = new Color_rec(5,4,'blue');
 console.log(shape2. color); //'blue'4
 
 //class는 인스턴스를 생성하기 위한 생성자 함수이다. 

class Product{
  //생성자
  constructor(name,price,color){
    //인스턴스 생성 및 초기화
    this.name = name;
    this.price = price;
    this.color = color;
    //고정값으로 인스턴스 초기화
    this.brand = 'samsung';
  }
  //프로토타입 매서드
  
  getPrice(){
    return this.price + "만원";
  }
  sayNew(){
    console.log(`신제품 : ${this.name}`)
  }
  //정적 메서드
  //상위 클래스에서 호출
  static sayHello(){
    console.log('어서오세요!')
  }
}

class TV extends Product{
  constructor(name,price,color,size){
    super(name,price,color);//부모 상속super, super을 먼저 쓰고 this를 쓸 수 있다. 
    this.size = size;
  }
}

class Phone extends Product{
  OS =  'android';
 constructor(name,price,color,camera){   
    super(name,price,color);
    this.camera = camera;
  }
}

//인스턴스 생성
//인수로 초기값을 전달한다. 이 초기값은 constructor에 전달된다. 
let TV1 = new TV('ultra',200,'black',64);
console.log(TV1);
//{"name":"ultra",
// 'price':200,
// 'color':'blac'k',
// 'size':64}

//인스턴스의 프로퍼티 참조
console.log(TV1.price) //200

//인스턴스 생성(new를 써야함)
let phone1 = new Phone('Galaxy22',100,'white',3);
// {"name" : "Galaxy22",
//    "price" : 100,
//     "color" : "white",
//       "OS" : "Android",
//         "camera" : 3
//        "brand" : "samsung"
// }
console.log(phone1);
// //프로토타입 메소드 호출
console.log(TV1.getPrice()); //200만원(프로토타입메소드)
phone1.sayNew();
//"신제품 : Galaxy22"
Product.sayHello(); 
//어서오세요(정적메소드 호출)

//constructor에서는 return문을 생략해야 한다. 

// //정적메서드와 프로토타입 메서드의 차이
// //static 은 class안에서만 사용 가능
class Square {
  static area(width,height){
    return width * height;
  }
}
console.log(Square.area(1,4)); ////4

//프로토타입 메소드
//인스턴스의 프로퍼티를 사용 가능함
class Square{
  constructor(width,height){
    this.width = width;
    this.height = height;
  }
  area() {
  return this.width * this.height;
  }
}
const square1= new Square(2,5);
console.log(square1.area()); //10
//프로퍼타입메소드를 사용하려면 뒤에다가 ()를 붙여야 바로 사용된다. 

//클래스의 상속
class Animal {
  constructor(age,weight){
    this.age = age;
    this.weight = weight;
  }
  eat() { return 'eat'; }
  move() {return 'move';}
  sleep() {return 'sleep';}
}

class Bird extends Animal {
  fly() {return 'fly';}
}
const bird = new Bird(1,5);
console.log(bird); //{"age : 1, weight: 5"}
console.log(bird.eat()); //"eat"
console.log(bird.fly()); //"fly"

