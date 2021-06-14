import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
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
}
