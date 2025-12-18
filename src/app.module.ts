import { Module } from "@nestjs/common/decorators/modules";
import { MongooseModule } from "@nestjs/mongoose";
import { BookModule } from "./book/book.module";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: (config) => {
        if (!config.DATABASE_URL) {
          throw new Error("DATABASE URL Is Not Defined In The Environment Variables.");
        }
        return config;
      }
    }),
    MongooseModule.forRoot(
      process.env.DATABASE_URL!
    ),
    BookModule
  ],
  controllers: [],
  providers: []
})
export class AppModule { };