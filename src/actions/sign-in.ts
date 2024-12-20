"use server";

import * as auth from "@/auth";

//It's optional to define those sign in and out actions, but it's recommanded to do that
export async function signIn(): Promise<void> {
  //In this case we have only github as a auth provider
  return auth.signIn('github');
}
