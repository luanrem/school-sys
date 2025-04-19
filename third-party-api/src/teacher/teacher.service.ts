import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { Teacher as PrismaTeacher } from '@prisma/client';
import { TeacherFilterInput } from './teacher-filter.input';

@Injectable()
export class TeacherService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<PrismaTeacher[]> {
    return this.prisma.teacher.findMany();
  }

  findAllFiltered(filter?: TeacherFilterInput): Promise<PrismaTeacher[]> {
    // Build an array of conditions
    const andConditions: Record<string, any>[] = [];

    if (filter?.emailContains) {
      andConditions.push({ email: { contains: filter.emailContains } });
    }
    if (filter?.idEquals != null) {
      andConditions.push({ id: filter.idEquals });
    }

    // If no filters, you'll get all records
    const where = andConditions.length > 0 ? { AND: andConditions } : {};

    return this.prisma.teacher.findMany({ where });
  }

  findOne(id: number): Promise<PrismaTeacher | null> {
    return this.prisma.teacher.findUnique({ where: { id } });
  }

  create(data: {
    firstName: string;
    lastName: string;
    email: string;
  }): Promise<PrismaTeacher> {
    return this.prisma.teacher.create({ data });
  }
}
