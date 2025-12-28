import { IsArray, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProductDto {
    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsString()
    category: string;

    @IsNumber()
    @IsOptional()
    rating: number;

    @IsNumber()
    originalPrice: number;
	
    @IsNumber()
    discount: number;

    @IsString()
    currency: string;

    @IsArray()
	images: string[];

    @IsArray()
    sizes: string[];

    @IsString()
    stockMessage: string;

    @IsNumber()
    stockCount: number;
}
