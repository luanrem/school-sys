// src/teacher/teacher-filter.input.ts
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class TeacherFilterInput {
  @Field(() => String, {
    nullable: true,
    description: 'Substring to match in email',
  })
  emailContains?: string;
}
