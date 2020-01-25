import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Recipe} from './recipe.entity';
import {Repository} from 'typeorm';
import {CreateRecipeDto} from './dto/create-recipe.dto';

@Injectable()
export class RecipeService {
    constructor(@InjectRepository(Recipe) private readonly recipeRepository: Repository<Recipe>) {}

    async findAll(): Promise<Recipe[]> {
        return await this.recipeRepository.find(
            {
                select: ['id', 'title', 'description', 'author'],
                order: {
                    createdAt: 'DESC',
                },
            });
    }

    async create(dto: CreateRecipeDto): Promise<Recipe> {
        return await this.recipeRepository.save(dto);
    }
}
