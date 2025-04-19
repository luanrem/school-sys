import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Teacher } from './teacher.model';
import { TeacherService } from './teacher.service';
import { TeacherFilterInput } from './teacher-filter.input';

@Resolver(() => Teacher)
export class TeacherResolver {
  constructor(private readonly teacherService: TeacherService) {}

  @Query(() => [Teacher], {
    name: 'teachers',
    description: 'List teachers, optionally filtering by email substring',
  })
  teachers(
    @Args('filter', { type: () => TeacherFilterInput, nullable: true })
    filter?: TeacherFilterInput,
  ): Promise<Teacher[]> {
    return this.teacherService.findAllFiltered(filter);
  }

  @Mutation(() => Teacher)
  createTeacher(
    @Args('firstName') firstName: string,
    @Args('lastName') lastName: string,
    @Args('email') email: string,
  ) {
    return this.teacherService.create({ firstName, lastName, email });
  }
}
