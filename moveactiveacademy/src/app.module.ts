import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Member } from './members/member.entity';
import { Course } from './courses/course.entity';
import { Enrollment } from './enrollments/enrollment.entity';
import { Certificate } from './certificates/certificate.entity';
import { Trainer } from './trainers/trainer.entity';
import { Review } from './reviews/review.entity';
import { Contact } from './contact/contact.entity';
import { MembersModule } from './members/members.module';
import { CoursesModule } from './courses/courses.module';
import { EnrollmentsModule } from './enrollments/enrollments.module';
import { CertificatesModule } from './certificates/certificates.module';
import { TrainersModule } from './trainers/trainers.module';
import { ReviewsModule } from './reviews/reviews.module';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const host = config.get<string>('DB_HOST') || process.env.DB_HOST;
        const port = Number(config.get('DB_PORT') || process.env.DB_PORT || 5432);
        const username = config.get<string>('DB_USERNAME') || process.env.DB_USERNAME;
        const password = String(config.get('DB_PASSWORD') ?? process.env.DB_PASSWORD ?? '');
        const database = config.get<string>('DB_NAME') || process.env.DB_NAME || 'postgres';
        if (!host || !username || !password) {
          throw new Error(`Missing DB env vars — host:${host} user:${username} pass:${password ? '***' : 'MISSING'}`);
        }
        return ({
        type: 'postgres' as const,
        host,
        port,
        username,
        password,
        database,
        entities: [Member, Course, Enrollment, Certificate, Trainer, Review, Contact],
        synchronize: false,
        ssl: { rejectUnauthorized: false },
        logging: false,
        connectTimeoutMS: 8000,
        retryAttempts: 1,
        retryDelay: 500,
        extra: {
          max: 2,
          connectionTimeoutMillis: 8000,
          idleTimeoutMillis: 30000,
          keepAlive: true,
          keepAliveInitialDelayMillis: 0,
        },
        });
      },
    }),

    MembersModule,
    CoursesModule,
    EnrollmentsModule,
    CertificatesModule,
    TrainersModule,
    ReviewsModule,
    ContactModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
