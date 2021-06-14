import { Resolver, Query, Mutation } from '@nestjs/graphql';
import { LessonType } from './lesson.type';

@Resolver((of) => LessonType)
export class LessonResolver {
  @Query((returns) => LessonType)
  lesson() {
    return {
      id: 'asdasfkvm',
      name: 'physics',
      startingDate: new Date().toISOString(),
      endingDate: new Date().toISOString(),
    };
  }
  @Mutation()
  createLesson() {}
}
