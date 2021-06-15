import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { StudentService } from '../student/student.service';
import { assignStudentToLessonInput } from './assignStudentsToLessonInpu.input';
import { Lesson } from './lesson.entity';
import { CreateLessonInput } from './lesson.input';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';

@Resolver((of) => LessonType)
export class LessonResolver {
  constructor(
    private lessonSrvice: LessonService,
    private studentService: StudentService,
  ) {}

  @Query((returns) => LessonType)
  lesson(@Args('id') id: string) {
    return this.lessonSrvice.getLesson(id);
  }

  @Query((returns) => [LessonType])
  lessons() {
    this.lessonSrvice.getLessons();
  }

  @Mutation()
  createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ) {
    return this.lessonSrvice.createLesson(createLessonInput);
  }

  @Mutation((reurns) => LessonType)
  assignStudentToLessons(
    @Args('assignStudentToLessonInput')
    assignStudentToLessonInput: assignStudentToLessonInput,
  ) {
    const { lessonId, studentIds } = assignStudentToLessonInput;
    return this.lessonSrvice.assignStudentToLesson(lessonId, studentIds);
  }

  @ResolveField()
  async students(@Parent() lesson: Lesson) {
    console.log(lesson);
    this.studentService.getManyStudents(lesson.students);
  }
}
