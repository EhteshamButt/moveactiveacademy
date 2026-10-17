import { Controller, Get, Post, Patch, Param, Body } from '@nestjs/common';
import { EnrollmentsService } from './enrollments.service';
import { Enrollment } from './enrollment.entity';

@Controller('enrollments')
export class EnrollmentsController {
  constructor(private svc: EnrollmentsService) {}
  @Get() findAll() { return this.svc.findAll(); }
  @Post() create(@Body() dto: Partial<Enrollment>) { return this.svc.create(dto); }
  @Patch(':id/status') updateStatus(@Param('id') id: string, @Body('status') status: string) {
    return this.svc.updateStatus(id, status);
  }
}
