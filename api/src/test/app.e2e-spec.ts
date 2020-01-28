import * as request from 'supertest';
import {CreateRecipeDto} from '../recipe/dto/create-recipe.dto';
import {HttpStatus} from '@nestjs/common';
import {UpdateRecipeDto} from '../recipe/dto/update-recipe.dto';

const url = 'http://localhost:1337/api';

describe('Root', () => {
    describe('GET /recipes', () => {
        it('should return status code 200', () => {
            return request(url)
                .get('/recipes')
                .expect(HttpStatus.OK);
        });
    });

    describe('POST /recipes', () => {
        it('should return created recipe and status code 201', () => {
            const recipe = new CreateRecipeDto('test title', 'description', 'author');
            const expected = JSON.stringify(recipe);
            return request(url)
                .post('/recipes')
                .set('Accept', 'application/json')
                .send(recipe)
                .expect(HttpStatus.CREATED)
                .expect(expected);
        });
    });

    describe('PUT /recipes/:id', () => {
        it('should return updated recipe and status code 200', () => {
            const id = 108;
            const newRecipe = new UpdateRecipeDto('new title', 'new description');
            return request(url)
                .put('/recipes/' + id)
                .send(newRecipe)
                .expect(HttpStatus.OK);
        });
    });
});
