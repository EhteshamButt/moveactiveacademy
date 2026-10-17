import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: 'student' })
  role: string; // admin | trainer | student

  @Column({ nullable: true })
  name: string;

  @Column({ default: true })
  active: boolean;

  @CreateDateColumn()
  created_at: Date;
}
