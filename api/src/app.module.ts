import {Module} from '@nestjs/common';
import {RecipeModule} from './recipe/recipe.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigModule} from "@nestjs/config";

@Module({
    imports: [RecipeModule, TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        entities: [],
        synchronize: true,
    }), ConfigModule.forRoot()]
})
export class AppModule {
}
