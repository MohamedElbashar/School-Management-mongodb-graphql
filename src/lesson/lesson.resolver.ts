import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';

@Resolver((of) => LessonType)
export class LessonResolver {
  constructor(private lessonSrvice: LessonService) {}
  @Query((returns) => LessonType)
  lesson(@Args('id') id: string) {
    return this.lessonSrvice.getLesson(id);
  }
  @Mutation()
  createLesson(
    @Args('name') name: string,
    @Args('startingDate') startingDate: string,
    @Args('endingDate') endingDate: string,
  ) {
    return this.lessonSrvice.createLesson(name, startingDate, endingDate);
  }
}
