import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import * as bcrypt from 'bcrypt'


const prisma = new PrismaClient();


async function main() {
  const password = await bcrypt.hash('admin1234', 10);

  const admin = await prisma.member.upsert({
    where: {email: 'admin@chefkit.com'},
    update: {},
    create: {
      email: 'admin@chefkit.com',
      password,
      name: '최고관리자',
      role: 'ADMIN'
    }
  });
  console.log(`seed 완료: ${admin.email}`)
}

main()
  .catch((e) => {
    console.log('seed 에러 발생', e);
  })
  .finally(async () => {
    await prisma.$disconnect()
  })


