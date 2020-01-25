import {Body, Controller, Get, Post, Req, ValidationPipe} from '@nestjs/common';
import {RecipeService} from './recipe.service';
import {CreateRecipeDto} from './dto/create-recipe.dto';

@Controller('recipes')
export class RecipeController {
    constructor(private readonly recipeService: RecipeService) {}

    @Get()
    async findAll() {
        return await this.recipeService.findAll();
    }

    @Post()
    async create(@Body() createRecipeDto: CreateRecipeDto) {
        return await this.recipeService.create(createRecipeDto);
    }
}
