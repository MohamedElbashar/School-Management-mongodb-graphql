import { Module } from '@nestjs/common';
import { LessonResolver } from './lesson.resolver';
import { LessonService } from './lesson.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { StudentService } from 'src/student/student.service';
@Module({
  imports: [TypeOrmModule.forFeature([Lesson]), StudentService],
  providers: [LessonResolver, LessonService],
})
export class LessonModule {}
