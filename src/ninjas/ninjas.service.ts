import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja-dto';
import { UpdateNinjaDto } from './dto/update-ninja-dto';

@Injectable()
export class NinjasService {
  private ninjas = [
    { id: 0, name: 'ninja A', weapon: 'stars' },
    { id: 1, name: 'ninja B', weapon: 'planets' },
  ];

  getNinjas(weapon?: 'stars' | 'planets') {
    if (weapon) return this.ninjas.filter((ninja) => ninja.weapon === weapon);
    return this.ninjas;
  }

  getNinjaById(id: number) {
    const ninja = this.ninjas.find((ninja) => ninja.id === id);

    if (!ninja) throw new Error('Ninja not found');

    return ninja;
  }

  createNinja(createNinjaDto: CreateNinjaDto) {
    const newNinja = {
      ...createNinjaDto,
      id: this.ninjas[this.ninjas.length - 1].id + 1,
    };

    this.ninjas.push(newNinja);

    return newNinja;
  }

  updateNinja(id: number, updateNinjaDto: UpdateNinjaDto) {
    this.ninjas = this.ninjas.map((ninja) => {
      if (ninja.id === id) {
        return { ...ninja, ...updateNinjaDto };
      }

      return ninja;
    });

    return this.getNinjaById(id);
  }

  removeNinja(id: number) {
    const ninja = this.getNinjaById(id);

    this.ninjas = this.ninjas.filter((ninja) => ninja.id !== id);

    return ninja;
  }
}
