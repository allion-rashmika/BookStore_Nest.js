import { CreateBook } from './dtos/create-book.dto';
import { Model } from 'mongoose';
import { BookDocument, Book } from './schemas/book.schema';
export declare class BooksService {
    private bookModel;
    constructor(bookModel: Model<BookDocument>);
    create(createBook: CreateBook): Promise<Book>;
    find(): Promise<Book[]>;
    findOne(id: string): Promise<Book>;
    update(id: string, updateDto: Partial<CreateBook>): Promise<Book>;
    delete(id: string): Promise<void>;
}
