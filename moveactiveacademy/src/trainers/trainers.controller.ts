import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { TrainersService } from './trainers.service';
import { Trainer } from './trainer.entity';

@Controller('trainers')
export class TrainersController {
  constructor(private svc: TrainersService) {}
  @Get() findAll() { return this.svc.findAll(); }
  @Get('admin/all') findAllAdmin() { return this.svc.findAllAdmin(); }
  @Get(':id') findOne(@Param('id') id: string) { return this.svc.findOne(id); }
  @Post() create(@Body() dto: Partial<Trainer>) { return this.svc.create(dto); }
  @Patch(':id') update(@Param('id') id: string, @Body() dto: Partial<Trainer>) { return this.svc.update(id, dto); }
  @Delete(':id') remove(@Param('id') id: string) { return this.svc.remove(id); }
}
