import { getCrowdsourceHandler } from "@repo/api";

import { siteConfig } from "@open-crowd-source/config/site";

export const dynamic = "force-dynamic";

export const GET = getCrowdsourceHandler({ milestone: siteConfig.milestone });
