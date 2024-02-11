//팩토리 패턴의 발전한 버전으로, 관련된 객체들의 구상 클래스들을 지정하지 않고 그 객체들의 패밀리를 생성할 수 있도록 도와주는 패턴
//객체들의 패밀리 = 집합

//교통수단 + 엔진 + 제어장치
//1. 자동차 + 연소엔진 + 핸들
//2. 비행기 + 제트엔진 + 요크

//위의 2개 모두 교통수단 + 엔진 + 제어장치 라는 공통 요소들이 있지만, 그 내용은 변형된 내용이다.
//교통수단 + 엔진 + 제어장치 를 인터페이스로 구현하고,
//1. 자동차와 2. 비행기의 세부 내용을 구현한 다음
//각각의 팩토리를 만들어 해당 메서드를 꺼내는 방식으로 사용한다.

interface Road {
  createStraight(): void;
  createCurve(): void;
}

class Highway implements Road {
  createStraight(): void {
    console.log("고속도로의 직선 도로 건설!🛣️");
  }
  createCurve(): void {
    console.log("고속도로의 커브 도로 건설🛣️");
  }
}

class CityRoad implements Road {
  createStraight(): void {
    console.log("도시의 직선 도로 건설!🏢");
  }
  createCurve(): void {
    console.log("도시의 커브 도로 건설!🏢");
  }
}

interface RoadFactory {
  createRoad(): Road;
}

//도로 건설 팩토리
class HighwayFactory implements RoadFactory {
  createRoad(): Road {
    return new Highway();
  }
}

class CityRoadFactory implements RoadFactory {
  createRoad(): Road {
    return new CityRoad();
  }
}

//테스트
function constructRoad(factory: RoadFactory) {
  const road = factory.createRoad();
  road.createStraight();
  road.createCurve();
}

constructRoad(new HighwayFactory());
constructRoad(new CityRoadFactory());
