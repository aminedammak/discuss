"use server";

import { z } from "zod";
import { auth } from "@/auth";

const createTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/^[a-z]+$/, {
      message: "Must be lowercase letters or dashes without spaces",
    }),
  description: z.string().min(10),
});

interface CreateTopicFormState {
  errors: {
    name?: string[];
    description?: string[];
    _form?: string[];
  };
}

export async function createTopic(
  formState: CreateTopicFormState,
  formData: FormData
): Promise<CreateTopicFormState> {
  const name = formData.get("name");
  const description = formData.get("description");

  const result = createTopicSchema.safeParse({
    name,
    description,
  });

  if (!result.success) {
    return {
      errors: result.error?.flatten().fieldErrors,
    };
  }

  const session = await auth();
  if (!session || !session.user) {
    return {
      errors: {
        _form: ["You must be signed to do this."],
      },
    };
  }

  return {
    errors: {},
  };

  //TODO: revalidate the homepage
}
