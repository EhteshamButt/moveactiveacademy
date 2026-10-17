import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Member } from './member.entity';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';

@Injectable()
export class MembersService {
  constructor(
    @InjectRepository(Member)
    private readonly membersRepo: Repository<Member>,
  ) {}

  findAll(): Promise<Member[]> {
    return this.membersRepo.find({ order: { created_at: 'DESC' } });
  }

  async findOne(id: string): Promise<Member> {
    const member = await this.membersRepo.findOneBy({ id });
    if (!member) throw new NotFoundException(`Member ${id} not found`);
    return member;
  }

  create(dto: CreateMemberDto): Promise<Member> {
    const member = this.membersRepo.create(dto);
    return this.membersRepo.save(member);
  }

  async update(id: string, dto: UpdateMemberDto): Promise<Member> {
    await this.findOne(id); // throws 404 if not found
    await this.membersRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<{ message: string }> {
    await this.findOne(id); // throws 404 if not found
    await this.membersRepo.delete(id);
    return { message: `Member ${id} deleted successfully` };
  }
}
