import { randomUUID } from "crypto";
import { NextRequest, NextResponse } from "next/server";

import databaseClient from "@repo/database";

async function supabaseNoSleep() {
  const NUMBER_OF_ENTRIES = 2;

  const testMailCondition = {
    where: {
      AND: [
        {
          email: {
            startsWith: "supabase-dont-sleep-",
          },
        },
        {
          email: {
            endsWith: "@anisolelabs.com",
          },
        },
      ],
    },
  };

  // check if more than n test entries exist
  // if yes, delete all entries
  const waitlist = await databaseClient.waitlist.findMany(testMailCondition);
  if (waitlist.length > NUMBER_OF_ENTRIES) {
    console.debug("deleting all test entries");
    await databaseClient.waitlist.deleteMany(testMailCondition);
  }

  // generate uuid
  const uuid = randomUUID();

  // make test entry
  const email = "supabase-dont-sleep-" + uuid + "@anisolelabs.com";
  console.debug("creating test entry: " + email);
  await databaseClient.waitlist.create({
    data: {
      email,
    },
  });
}

export async function GET(request: NextRequest) {
  // check if vercel is running this function
  // if not, return 404
  // we do this by bearer token
  const authToken = (request.headers.get("authorization") || "")
    .split("Bearer ")
    .at(1);

  // if not found OR the bearer token does NOT equal the CRON_SECRET
  if (!authToken || authToken != process.env.CRON_SECRET) {
    return NextResponse.json(
      { error: "Unauthorized" },
      {
        status: 401,
      },
    );
  }

  // run supabaseNoSleep
  await supabaseNoSleep();

  return NextResponse.json({}, { status: 200 });
}
