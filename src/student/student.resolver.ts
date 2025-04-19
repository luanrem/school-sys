// src/student/student.resolver.ts
import { Resolver, Query } from '@nestjs/graphql'; // ✅ must be @nestjs/graphql
import { Student } from './student.model';
import { StudentService } from './student.service';

@Resolver(() => Student)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Query(() => [Student], { name: 'students' })
  students() {
    return this.studentService.findAll();
  }
}
