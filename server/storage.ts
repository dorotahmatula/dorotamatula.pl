import { newsletterSubscribers } from "@shared/schema";
import { db } from "./db";

export interface IStorage {
  subscribeNewsletter(email: string): Promise<any>;
}

export class DatabaseStorage implements IStorage {
  async subscribeNewsletter(email: string) {
    const [subscriber] = await db
      .insert(newsletterSubscribers)
      .values({ email })
      .onConflictDoNothing()
      .returning();
    return subscriber || { email, alreadySubscribed: true };
  }
}

export const storage = new DatabaseStorage();
