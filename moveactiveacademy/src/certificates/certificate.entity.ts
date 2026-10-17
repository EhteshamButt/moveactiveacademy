import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('certificates')
export class Certificate {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  certificate_id: string;

  @Column()
  student_name: string;

  @Column()
  course_name: string;

  @Column({ nullable: true })
  issue_date: string;

  @Column({ nullable: true })
  valid_till: string;

  @Column({ default: 'Valid' })
  status: string;

  @Column({ nullable: true })
  academy_name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
