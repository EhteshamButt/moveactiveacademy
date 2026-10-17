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
      useFactory: () => {
        const url = process.env.DATABASE_URL;
        if (!url) throw new Error('DATABASE_URL environment variable is not set');
        return {
          type: 'postgres' as const,
          url,
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
        };
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
