import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { CertificatesService } from './certificates.service';
import { Certificate } from './certificate.entity';

@Controller('certificates')
export class CertificatesController {
  constructor(private svc: CertificatesService) {}
  @Get() findAll() { return this.svc.findAll(); }
  @Get('verify/:certificateId') verify(@Param('certificateId') id: string) { return this.svc.verify(id); }
  @Post() create(@Body() dto: Partial<Certificate>) { return this.svc.create(dto); }
  @Patch(':id') update(@Param('id') id: string, @Body() dto: Partial<Certificate>) { return this.svc.update(id, dto); }
  @Delete(':id') remove(@Param('id') id: string) { return this.svc.remove(id); }
}
