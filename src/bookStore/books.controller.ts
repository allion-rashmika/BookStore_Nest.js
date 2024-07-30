import {
  Body,
  Controller,
  Post,
  Param,
  Get,
  Patch,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBook } from './dtos/create-book.dto';
import { RolesGuard } from 'src/common/guards/roles.guard';

@Controller('books')
@UseGuards(RolesGuard)
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  async create(@Body() createBook: CreateBook): Promise<CreateBook> {
    return this.booksService.create(createBook);
  }

  @Get()
  async findAll(): Promise<CreateBook[]> {
    return this.booksService.find();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<CreateBook> {
    return this.booksService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: Partial<CreateBook>,
  ): Promise<CreateBook> {
    return this.booksService.update(id, updateDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.booksService.delete(id);
  }
}
