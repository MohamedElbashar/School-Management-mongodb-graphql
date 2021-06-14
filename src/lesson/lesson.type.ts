import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Lesson')
export class LessonType {
  @Field((type) => ID)
  id: string;
  @Field()
  name: string;
  @Field()
  startingDate: string;
  @Field()
  endingDate: string;
}
