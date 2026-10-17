import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Certificate } from './certificate.entity';

@Injectable()
export class CertificatesService {
  constructor(@InjectRepository(Certificate) private repo: Repository<Certificate>) {}

  findAll() { return this.repo.find({ order: { created_at: 'DESC' } }); }

  async verify(certificateId: string) {
    const cert = await this.repo.findOneBy({ certificate_id: certificateId });
    if (!cert) return { found: false, status: 'Not Found', message: 'No certificate found with this ID.' };
    return {
      found: true,
      student_name: cert.student_name,
      certificate_id: cert.certificate_id,
      course_name: cert.course_name,
      issue_date: cert.issue_date,
      valid_till: cert.valid_till,
      status: cert.status,
      academy_name: cert.academy_name || 'Move Active Academy',
    };
  }

  create(dto: Partial<Certificate>) { return this.repo.save(this.repo.create(dto)); }

  async update(id: string, dto: Partial<Certificate>) {
    await this.repo.update(id, dto);
    return this.repo.findOneBy({ id });
  }

  async remove(id: string) {
    await this.repo.delete(id);
    return { message: 'Certificate deleted' };
  }
}
