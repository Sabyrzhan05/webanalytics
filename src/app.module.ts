import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { DogsModule } from './dogs/dogs.module';
import { CatsModule } from './cats/cats.module';
import { DogsController } from './dogs/dogs.controller';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { ResponseLoggedMiddleware } from './common/middlewares/responselogged.middleware';
import { Cat } from './cats/entities/cat.entity';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import {ConfigModule} from "@nestjs/config";
import { DogsService } from './dogs/dogs.service';
import { AuthModule } from './auth/auth.module';
import { WaterBodiesModule } from './water-bodies/water-bodies.module';
import { UsersModule } from './users/users.module';




@Module({
  controllers: [CatsController, AppController, DogsController],
  providers: [CatsService, DogsService, AppService, PrismaService],
  imports: [ConfigModule.forRoot({isGlobal:true}), CatsModule, PrismaModule, AuthModule, WaterBodiesModule, UsersModule, DogsModule],
})
export class AppModule {}