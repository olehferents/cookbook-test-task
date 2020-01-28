import {IsNotEmpty, IsString} from 'class-validator';
import {Exclude, Expose} from 'class-transformer';

@Exclude()
export class CreateRecipeDto {
    constructor(title: string, description: string, author: string) {
        this.title = title;
        this.description = description;
        this.author = author;
    }

    @IsNotEmpty()
    @IsString()
    @Expose()
    readonly title: string;

    @IsNotEmpty()
    @IsString()
    @Expose()
    readonly description: string;

    @IsNotEmpty()
    @IsString()
    @Expose()
    readonly author: string;
}
