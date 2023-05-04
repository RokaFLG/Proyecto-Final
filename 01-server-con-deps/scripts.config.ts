
import { DenonConfig } from "https://deno.land/x/opine@2.2.0/mod.ts";
const config: DenonConfig = {
  scripts: {
    start: {
      cmd: "deno run --allow-net --allow-read --allow-env app.ts",
    },
  },
};

export default config;

