import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('courses')
export class Course {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ nullable: true })
  duration: string;

  @Column({ nullable: true })
  fees: string;

  @Column({ nullable: true })
  eligibility: string;

  @Column({ type: 'jsonb', nullable: true })
  curriculum: string[];

  @Column({ nullable: true })
  mode: string;

  @Column({ default: false })
  featured: boolean;

  @Column({ default: false })
  coming_soon: boolean;

  @Column({ nullable: true })
  batch_date: string;

  @Column({ nullable: true })
  venue: string;

  @Column({ nullable: true })
  image_url: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
