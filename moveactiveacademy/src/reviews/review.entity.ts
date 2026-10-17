import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('reviews')
export class Review {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  student_name: string;

  @Column({ nullable: true })
  course: string;

  @Column({ type: 'text' })
  testimonial: string;

  @Column({ nullable: true })
  outcome: string;

  @Column({ nullable: true })
  photo_url: string;

  @Column({ nullable: true })
  batch_label: string;

  @Column({ default: false })
  approved: boolean;

  @CreateDateColumn()
  created_at: Date;
}
