import { Controller, Get, Post, Patch, Param, Body } from '@nestjs/common';
import { ContactService } from './contact.service';
import { Contact } from './contact.entity';

@Controller('contact')
export class ContactController {
  constructor(private svc: ContactService) {}
  @Get() findAll() { return this.svc.findAll(); }
  @Post() create(@Body() dto: Partial<Contact>) { return this.svc.create(dto); }
  @Patch(':id/read') markRead(@Param('id') id: string) { return this.svc.markRead(id); }
}
