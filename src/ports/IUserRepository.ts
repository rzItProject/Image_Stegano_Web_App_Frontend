// src/core/ports/IUserRepository.ts

import { User } from "@/core/entities/User";

export interface IUserRepository {
  save(user: User): Promise<void>;
  // findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  findByUserName(username: string): Promise<User | null>;
}
