// import { Injectable } from "@nestjs/common";
// import { CreateBook } from "./dtos/create-book.dto";

// @Injectable()
// export class BooksOldService {
//     private books: CreateBook[] = [];

//     create(CreateBook: CreateBook): CreateBook {
//         this.books.push(CreateBook);
//         return CreateBook;
//     }

//     find(): CreateBook[] {
//         return this.books;
//     }

//     findOne(id: string): CreateBook {
//         return this.books.find((book) => book.id === id);
//     }

//     update(id: string, updateDto: Partial<CreateBook>): CreateBook {
//         let element = null;

//         this.books.forEach((book) => {
//             if (book.id === id) {
//                 Object.assign(book, updateDto);
//                 element = book;
//             }
//         });

//         return element;
//     }

//     delete(id: string): void {
//         const newBooks = this.books.filter((book) => {
//             if (book.id !== id) {
//                 return true;
//             }
//         })

//         this.books = newBooks;
//     }

// }
