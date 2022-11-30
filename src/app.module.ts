/* eslint-disable*/
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';

const uri:string = "mongodb+srv://nest_first_admin:nest_first_admin@nestfirstcluster.vpw02rp.mongodb.net/nest_first_database?retryWrites=true&w=majority"
@Module({
  imports: [  // регистрируем внешние модули
    ProductsModule,
    MongooseModule.forRoot(uri)
  ],
  controllers: [AppController], // регистрируем контроллеры
  providers: [AppService], // регистрируем сервисы ("провайдеры")
})
export class AppModule {}
