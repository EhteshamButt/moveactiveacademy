import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { Review } from './review.entity';

@Controller('reviews')
export class ReviewsController {
  constructor(private svc: ReviewsService) {}
  @Get() findApproved() { return this.svc.findApproved(); }
  @Get('admin/all') findAll() { return this.svc.findAll(); }
  @Post() create(@Body() dto: Partial<Review>) { return this.svc.create(dto); }
  @Patch(':id/approve') approve(@Param('id') id: string) { return this.svc.approve(id); }
  @Delete(':id') remove(@Param('id') id: string) { return this.svc.remove(id); }
}
