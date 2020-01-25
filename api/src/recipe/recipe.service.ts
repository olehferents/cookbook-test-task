import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Recipe} from './recipe.entity';
import {Repository} from 'typeorm';

@Injectable()
export class RecipeService {
    constructor(@InjectRepository(Recipe) private readonly recipeRepository: Repository<Recipe>) {}

    async findAll(): Promise<Recipe[]> {
        return await this.recipeRepository.find();
    }
}
