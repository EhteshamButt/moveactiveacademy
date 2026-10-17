import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Enrollment } from './enrollment.entity';

@Injectable()
export class EnrollmentsService {
  constructor(@InjectRepository(Enrollment) private repo: Repository<Enrollment>) {}

  findAll() { return this.repo.find({ order: { created_at: 'DESC' } }); }

  create(dto: Partial<Enrollment>) { return this.repo.save(this.repo.create(dto)); }

  async updateStatus(id: string, status: string) {
    await this.repo.update(id, { status });
    return this.repo.findOneBy({ id });
  }
}
