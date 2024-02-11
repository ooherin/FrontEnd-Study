//어댑터 패턴

//호환되지 않는 구조들이 서로 협업할 수 있도록 도와주는 디자인 패턴
//전선 코드의 어댑터랑 동일한 역할
class LegacyPrinter {
  print(message: string): void {
    console.log(message);
  }
}

//새로운 인터페이스
interface Printer {
  printMessage(message: string): void;
}

class LegacyPrinterAdapter implements Printer {
  private legacyPrinter: LegacyPrinter;

  constructor(legacyPrinter: LegacyPrinter) {
    this.legacyPrinter = legacyPrinter;
  }

  printMessage(message: string): void {
    console.log(this.legacyPrinter.print(message));
  }
}

const legacyPrinter = new LegacyPrinter();
const printerAdapter = new LegacyPrinterAdapter(legacyPrinter);
printerAdapter.printMessage("Hello, world!");
