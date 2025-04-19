import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { Teacher as PrismaTeacher } from '@prisma/client';

@Injectable()
export class TeacherService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<PrismaTeacher[]> {
    return this.prisma.teacher.findMany();
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
