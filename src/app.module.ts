import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule], // регистрируем внешний модуль
  controllers: [AppController], // регистрируем контроллеры
  providers: [AppService], // регистрируем сервисы ("провайдеры")
})
export class AppModule {}
