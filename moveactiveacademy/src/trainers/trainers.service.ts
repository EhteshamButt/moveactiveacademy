import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Trainer } from './trainer.entity';

@Injectable()
export class TrainersService {
  constructor(@InjectRepository(Trainer) private repo: Repository<Trainer>) {}

  findAll() { return this.repo.find({ where: { active: true }, order: { created_at: 'ASC' } }); }
  findAllAdmin() { return this.repo.find({ order: { created_at: 'ASC' } }); }

  async findOne(id: string) {
    const t = await this.repo.findOneBy({ id });
    if (!t) throw new NotFoundException('Trainer not found');
    return t;
  }

  create(dto: Partial<Trainer>) { return this.repo.save(this.repo.create(dto)); }

  async update(id: string, dto: Partial<Trainer>) {
    await this.findOne(id);
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.repo.delete(id);
    return { message: 'Trainer deleted' };
  }
}
