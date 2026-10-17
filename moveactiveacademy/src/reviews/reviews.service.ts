import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Review } from './review.entity';

@Injectable()
export class ReviewsService {
  constructor(@InjectRepository(Review) private repo: Repository<Review>) {}

  findApproved() { return this.repo.find({ where: { approved: true }, order: { created_at: 'DESC' } }); }
  findAll() { return this.repo.find({ order: { created_at: 'DESC' } }); }

  create(dto: Partial<Review>) { return this.repo.save(this.repo.create(dto)); }

  async approve(id: string) {
    await this.repo.update(id, { approved: true });
    return this.repo.findOneBy({ id });
  }

  async remove(id: string) {
    await this.repo.delete(id);
    return { message: 'Review deleted' };
  }
}
