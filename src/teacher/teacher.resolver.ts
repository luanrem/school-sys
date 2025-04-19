import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Teacher } from './teacher.model';
import { TeacherService } from './teacher.service';

@Resolver(() => Teacher)
export class TeacherResolver {
  constructor(private readonly teacherService: TeacherService) {}

  @Query(() => [Teacher], { name: 'teachers' })
  teachers() {
    return this.teacherService.findAll();
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
