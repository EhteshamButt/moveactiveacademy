import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact } from './contact.entity';

@Injectable()
export class ContactService {
  constructor(@InjectRepository(Contact) private repo: Repository<Contact>) {}

  findAll() { return this.repo.find({ order: { created_at: 'DESC' } }); }

  create(dto: Partial<Contact>) { return this.repo.save(this.repo.create(dto)); }

  async markRead(id: string) {
    await this.repo.update(id, { read: true });
    return this.repo.findOneBy({ id });
  }
}
