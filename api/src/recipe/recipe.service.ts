import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Recipe} from './recipe.entity';
import {Repository} from 'typeorm';
import {CreateRecipeDto} from './dto/create-recipe.dto';
import {UpdateRecipeDto} from './dto/update-recipe.dto';

@Injectable()
export class RecipeService {
    constructor(@InjectRepository(Recipe) private readonly recipeRepository: Repository<Recipe>) {}

    async findAll(): Promise<Recipe[]> {
        return await this.recipeRepository.find(
            {
                select: ['id', 'title', 'description', 'author', 'createdAt'],
                order: {
                    createdAt: 'DESC',
                },
            });
    }

    async create(dto: CreateRecipeDto): Promise<Recipe> {
        return await this.recipeRepository.save(dto);
    }

    async update(id: number, dto: UpdateRecipeDto) {
        const toUpdate = await this.recipeRepository.findOne(id);
        delete toUpdate.author;
        const updated = Object.assign(toUpdate, dto);
        return await this.recipeRepository.save(updated);
    }
}
