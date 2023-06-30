{
  //접근 제한자
  class Car {
    protected name: string = "car";
    color: string;
    constructor(color: string) {
      this.color = color;
    }

    start() {
      console.log("시동 걸림");
      console.log(this.name);
    }
  }

  class BMW extends Car {
    constructor(color: string) {
      super(color);
    }
    //protected이므로 하위 클래스에서 참조가능
    showName(){
      console.log(super.name)
    }
  }
}
