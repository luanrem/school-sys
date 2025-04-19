import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { Student as PrismaStudent } from '@prisma/client';

@Injectable()
export class StudentService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<PrismaStudent[]> {
    return this.prisma.student.findMany();
  }

  findOne(id: number): Promise<PrismaStudent | null> {
    return this.prisma.student.findUnique({ where: { id } });
  }

  create(data: {
    firstName: string;
    lastName: string;
    email: string;
  }): Promise<PrismaStudent> {
    return this.prisma.student.create({ data });
  }

  // add update(), remove(), etc. as needed
}
