// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  // 1) Seed Students
  const studentCount = 50;
  const studentsData = Array.from({ length: studentCount }).map(() => ({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
  }));

  console.log(`Seeding ${studentCount} students...`);
  await Promise.all(
    studentsData.map((data) => prisma.student.create({ data })),
  );
  console.log('Students seeding finished.');

  // 2) Seed Teachers
  const teacherCount = 20;
  const teachersData = Array.from({ length: teacherCount }).map(() => ({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
  }));

  console.log(`Seeding ${teacherCount} teachers...`);
  await Promise.all(
    teachersData.map((data) => prisma.teacher.create({ data })),
  );
  console.log('Teachers seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    // explicitly ignore the disconnect promise
    void prisma.$disconnect();
  });
