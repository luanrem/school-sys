// src/teacher/teacher-filter.input.ts
import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class TeacherFilterInput {
  @Field(() => String, {
    nullable: true,
    description: 'Substring to match in email',
  })
  emailContains?: string;

  @Field(() => Int, {
    nullable: true,
    description: 'Exact match on teacher ID',
  })
  idEquals?: number;
}
