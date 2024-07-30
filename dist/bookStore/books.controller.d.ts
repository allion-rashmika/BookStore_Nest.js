import { BooksService } from './books.service';
import { CreateBook } from './dtos/create-book.dto';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    create(createBook: CreateBook): Promise<CreateBook>;
    findAll(): Promise<CreateBook[]>;
    findOne(id: string): Promise<CreateBook>;
    update(id: string, updateDto: Partial<CreateBook>): Promise<CreateBook>;
    delete(id: string): Promise<void>;
}
