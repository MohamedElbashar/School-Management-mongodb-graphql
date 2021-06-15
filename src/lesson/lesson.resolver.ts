import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { assignStudentToLessonInput } from './assignStudentsToLessonInpu.input';
import { CreateLessonInput } from './lesson.input';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';

@Resolver((of) => LessonType)
export class LessonResolver {
  constructor(private lessonSrvice: LessonService) {}

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
}
