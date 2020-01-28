import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Recipe} from './recipe.entity';
import {Repository} from 'typeorm';
import {CreateRecipeDto} from './dto/create-recipe.dto';
import {UpdateRecipeDto} from './dto/update-recipe.dto';
import {plainToClass} from 'class-transformer';

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

    async create(dto: CreateRecipeDto): Promise<CreateRecipeDto> {
        const entity = await this.recipeRepository.save(dto);
        return plainToClass(CreateRecipeDto, entity);
    }

    async update(id: number, dto: UpdateRecipeDto): Promise<UpdateRecipeDto> {
        const toUpdate = await this.recipeRepository.findOne(id);
        delete toUpdate.author;
        const updated = Object.assign(toUpdate, dto);
        return await this.recipeRepository.save(updated);
    }
}
