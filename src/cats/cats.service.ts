import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatsService {
  private cats: CreateCatDto[] = [];

  create(cat: CreateCatDto) {
    this.cats.push(cat);
  }

  update(id: number, cat: UpdateCatDto) {
    if (id >= this.cats.length) throw new NotFoundException();

    this.cats[id] = {...this.cats[id], ...cat};
  }

  delete(id: number) {
    if (id >= this.cats.length) throw new NotFoundException();

    this.cats.splice(id, 1);
  }

  findAll(): CreateCatDto[] {
    return this.cats;
  }

  findOne(id: number): CreateCatDto {
    if (id >= this.cats.length) throw new NotFoundException();

    return this.cats[id];
  }
}
