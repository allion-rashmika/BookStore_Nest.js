import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './bookStore/books.module';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggingMiddleware } from './common/middlewares/logging.middleware';
import { AuthMiddleware } from './common/middlewares/auth.middleware';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://0.0.0.0:27017/myapp'),
    BooksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware, AuthMiddleware).forRoutes('*');
  }
}
