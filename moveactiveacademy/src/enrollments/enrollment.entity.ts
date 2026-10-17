import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('enrollments')
export class Enrollment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  full_name: string;

  @Column({ nullable: true })
  father_name: string;

  @Column({ nullable: true })
  date_of_birth: string;

  @Column({ nullable: true })
  gender: string;

  @Column()
  whatsapp: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  occupation: string;

  @Column({ nullable: true })
  education: string;

  @Column({ nullable: true })
  course: string;

  @Column({ nullable: true })
  learning_mode: string;

  @Column({ type: 'text', nullable: true })
  reason: string;

  @Column({ nullable: true })
  heard_from: string;

  @Column({ default: 'pending' })
  status: string;

  @CreateDateColumn()
  created_at: Date;
}
