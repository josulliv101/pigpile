import { SystemStyleObject } from "@josulliv101/core";

const sizes: Record<string, PartsStyleObject<typeof parts>> = {
  "2xs": {
    h: 4,
    minW: 4,
    fontSize: "2xs",
    px: 2,
  },
  "3xs": {
    h: 3,
    minW: 3,
    fontSize: "3xs",
    px: 1,
  },
};

export default {
  sizes,
};
