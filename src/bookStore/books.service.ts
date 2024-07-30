import { Injectable } from '@nestjs/common';
import { CreateBook } from './dtos/create-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BookDocument, Book } from './schemas/book.schema';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

  async create(createBook: CreateBook): Promise<Book> {
    try {
      const createdBook = new this.bookModel(createBook);
      return createdBook.save();
    } catch (error) {
      throw error;
    }
  }

  async find(): Promise<Book[]> {
    return this.bookModel.find();
  }

  async findOne(id: string): Promise<Book> {
    return this.bookModel.findById(id);
  }

  async update(id: string, updateDto: Partial<CreateBook>): Promise<Book> {
    return this.bookModel.findByIdAndUpdate(id, updateDto);
  }

  async delete(id: string): Promise<void> {
    this.bookModel.findByIdAndDelete(id).exec();
  }
}
