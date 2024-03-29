import {IsNotEmpty, IsString} from 'class-validator';

export class UpdateRecipeDto {
    @IsNotEmpty()
    @IsString()
    readonly title: string;

    @IsNotEmpty()
    @IsString()
    readonly description: string;


    constructor(title: string, description: string) {
        this.title = title;
        this.description = description;
    }
}
