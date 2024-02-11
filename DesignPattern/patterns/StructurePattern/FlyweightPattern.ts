interface ISimpleBook {
  title: string;
  author: string;
  isbn: number;
}

interface IBook extends ISimpleBook {
  availabilty: boolean;
  sales: boolean;
}

const isbnNumbers = new Set();
const bookList = [];

const addBook = (book: IBook) => {
  const { title, author, isbn, availabilty, sales } = book;

  const newBook: IBook | ISimpleBook = {
    ...createBook({ title, author, isbn }),
    availabilty,
    sales,
    isbn,
  };

  bookList.push(newBook);
};

const createBook = ({ title, author, isbn }: ISimpleBook): ISimpleBook => {
  const existingBook = isbnNumbers.has(isbn);
  if (existingBook) {
    console.log("이미 isbn이 존재합니다.");
  }
  const book: ISimpleBook = { title, author, isbn };
  return book;
};
