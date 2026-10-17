import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) throw new UnauthorizedException('Invalid email or password');
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new UnauthorizedException('Invalid email or password');
    const token = this.jwtService.sign({ sub: user.id, email: user.email, role: user.role });
    return {
      token,
      user: { id: user.id, email: user.email, name: user.name, role: user.role },
    };
  }

  async register(email: string, password: string, name: string, role = 'student') {
    const existing = await this.usersService.findByEmail(email);
    if (existing) throw new ConflictException('Email already registered');
    const hashed = await bcrypt.hash(password, 10);
    const user = await this.usersService.create({ email, password: hashed, name, role });
    const token = this.jwtService.sign({ sub: user.id, email: user.email, role: user.role });
    return {
      token,
      user: { id: user.id, email: user.email, name: user.name, role: user.role },
    };
  }

  async seed() {
    const count = await this.usersService.count();
    if (count > 0) {
      return { message: 'Seed already done', existing_users: count };
    }

    const accounts = [
      { email: 'admin@moveactive.com',   password: 'Admin@123',   name: 'Admin User',    role: 'admin'   },
      { email: 'trainer@moveactive.com', password: 'Trainer@123', name: 'Test Trainer',  role: 'trainer' },
      { email: 'student@moveactive.com', password: 'Student@123', name: 'Test Student',  role: 'student' },
    ];

    for (const acc of accounts) {
      const hashed = await bcrypt.hash(acc.password, 10);
      await this.usersService.create({ ...acc, password: hashed });
    }

    return {
      message: 'Seed complete — 3 accounts created',
      accounts: accounts.map(a => ({ email: a.email, password: a.password, role: a.role })),
    };
  }
}
