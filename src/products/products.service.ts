import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { FirebaseRepository } from 'src/firebase/firebase.service';

@Injectable()
export class ProductsService {
  constructor(private firebaseRepository: FirebaseRepository) {}

  create(createProductDto: CreateProductDto) {
    return this.firebaseRepository.create(createProductDto);
  }

  async findAll() {
    return this.firebaseRepository.findAll();
  }

  findOne(id: string) {
    return this.firebaseRepository.findById(id);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
