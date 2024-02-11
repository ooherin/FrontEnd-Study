//Flyweight Pattern은 하나의 객체에 많은 데이터를 담을 때 효과적으로
//데이터를 줄일 수 있는 방법이다.

//다음은 bookList에다 책을 title, author, isbn의 속성을 넣어 넣어 만들 수 있다.
//서점의 경우, 한종류의 책이 여러개 있을 수도 있기 때문에, isbn으로 해당 책이 원본인지 카피본인지 판별한다.
//원본일 경우, Book 클래스를 활용해 book을 만들어 bookList에 집어넣고,
//카피본일 경우 bookList에 title, author을 집어 넣지 않음. (어짜피 isbn으로 해당 책 데이터를 찾을
//수 있기 때문에) isbn과 그 책의 고유 정보만 넣음
//이렇게 하면, bookList에 담기는 객체 형태는 균일하지 않으마, 메모리 측면에서 효율적이다. ㅁㅇ
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

//책의 고유번호인  isbn을 관리하는 데이터
const isbnNumbers = new Set();
const bookList = [];

const addBook = (title, author, isbn, availablity, sales) => {
  const book = {
    ...createBook(title, author, isbn),
    availablity,
    sales,
    isbn,
  };

  bookList.push(book);
  return book;
};

const createBook = (title, author, isbn) => {
  const existingBook = isbnNumbers.has(isbn);
  if (existingBook) {
    //이미 같은 책이 있을 경우 책의
    return existingBook; //true
  } else {
    const book = new Book(title, author, isbn);
    isbnNumbers.add(isbn);
    return book;
  }
};

addBook("Harry Potter", "JK Rowling", "AB123", false, 100);
console.log(bookList, isbnNumbers);

addBook("Harry Potter", "JK Rowling", "AB123", true, 50);
console.log(bookList, isbnNumbers);

addBook("To Kill a Mockingbird", "Harper Lee", "CD345", true, 10);
console.log(bookList, isbnNumbers);

addBook("The Great Gatsby", "F. Scott Fitzgerald", "EF567", false, 20);
console.log(bookList, isbnNumbers);

addBook("To Kill a Mockingbird", "Harper Lee", "CD345", false, 20);
console.log("bookList", bookList);
console.log("isbnNumbers", isbnNumbers);
