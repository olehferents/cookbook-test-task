import {Body, Controller, Get, Param, Post, Put} from '@nestjs/common';
import {RecipeService} from './recipe.service';
import {CreateRecipeDto} from './dto/create-recipe.dto';
import {UpdateRecipeDto} from './dto/update-recipe.dto';

@Controller('recipes')
export class RecipeController {
    constructor(private readonly recipeService: RecipeService) {}

    @Get()
    async findAll() {
        return await this.recipeService.findAll();
    }

    @Post()
    async create(@Body() dto: CreateRecipeDto) {
        return await this.recipeService.create(dto);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() dto: UpdateRecipeDto) {
        return await this.recipeService.update(id, dto);
    }
}
