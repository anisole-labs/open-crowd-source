// export * from '@prisma/client';
export * from "@prisma/client";

// make a singleton instance of prisma client
// export that too
import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var databaseClient: undefined | ReturnType<typeof prismaClientSingleton>;
}

const databaseClient = globalThis.databaseClient ?? prismaClientSingleton();

export default databaseClient;

if (process.env.NODE_ENV !== "production")
  globalThis.databaseClient = databaseClient;
