import { varosResponse } from "@util/varosResponse";
import { z } from "zod";

import { safeExecute } from "./safe-execute";

const schema = z.object({ card_number: z.string() });

const testFunction1 = safeExecute({
  schema,
  fn: async (input) => {
    const someNumber = Math.random();

    if (someNumber === 0) return { status: "error", error: "Error", fieldErrors: { _errors: ["card_number"], card_number: { _errors: ["card_number"] } } };
    if (someNumber === 1) return { status: "success", data: 3, someProp: "someValue" };

    return { status: "success", data: { someProp: "someValue" } };
  },
});

const testResult1 = async () => {
  const res = await testFunction1({ card_number: "1234567890" });

  if (res.status === "error") {
    console.log(res.fieldErrors);
  } else {
    console.log(res.data.toLocaleString);
  }
};

const testFunction2 = safeExecute({
  fn: async (props: { card_number: string }) => {
    const someNumber = Math.random();

    if (someNumber === 0) return { status: "error", error: "Error", fieldErrors: { _errors: ["card_number"], card_number: { _errors: ["card_number"] } } };
    if (someNumber === 1) return { status: "success", data: 2 };

    return { status: "success", data: { someProp: 2 } };
  },
});

const testResult2 = async () => {
  const res = await testFunction2({ card_number: "1234567890" });

  if (res.status === "error") {
    console.log(res.fieldErrors);
  } else {
    console.log(res.data);
  }
};
