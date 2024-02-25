import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

import { Theme } from "@ui/themes";

type Config = {
  theme: Theme["name"];
  radius: number;
};

const configAtom = atomWithStorage<Config>("config", {
  theme: "zinc",
  radius: 0.5,
});

export function useConfig() {
  return useAtom(configAtom);
}
