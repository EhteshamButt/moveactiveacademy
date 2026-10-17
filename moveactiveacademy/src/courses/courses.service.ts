import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './course.entity';

@Injectable()
export class CoursesService {
  constructor(@InjectRepository(Course) private repo: Repository<Course>) {}

  findAll() { return this.repo.find({ order: { created_at: 'ASC' } }); }

  async findOne(id: string) {
    const c = await this.repo.findOneBy({ id });
    if (!c) throw new NotFoundException('Course not found');
    return c;
  }

  create(dto: Partial<Course>) { return this.repo.save(this.repo.create(dto)); }

  async update(id: string, dto: Partial<Course>) {
    await this.findOne(id);
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.repo.delete(id);
    return { message: 'Course deleted' };
  }
}
