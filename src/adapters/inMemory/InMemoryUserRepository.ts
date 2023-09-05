import { User } from "@/core/entities/User";
import { IUserRepository } from "@/ports/IUserRepository";

export class InMemoryUserRepository implements IUserRepository {
  private shouldThrowServerError = false;
  private users: User[] = [
    {
      id: "1",
      email: "alice@example.com",
      password: "AlicePass123!",
      username: "Alice123",
    },
    {
      id: "2",
      email: "bob@example.com",
      password: "BobPass456!",
      username: "Bob456",
    },
    {
      id: "3",
      email: "charlie@example.com",
      password: "CharliePass789!",
      username: "Charles789",
    },
    {
      id: "4",
      email: "dave@example.com",
      password: "DavePass101!",
      username: "Dave101",
    },
    {
      id: "5",
      email: "eve@example.com",
      password: "EvePass202!",
      username: "Eve202",
    },
  ];

  async findByEmail(email: string): Promise<User | null> {
    return this.users.find((user) => user.email === email) || null;
  }

  async findByUserName(username: string): Promise<User | null> {
    return this.users.find((user) => user.username === username) || null;
  }

  async save(user: User): Promise<void> {
    if (this.shouldThrowServerError) {
      throw new Error("Server error. Please try again later.");
    }
    this.users.push(user);
  }

  simulateServerError(): void {
    this.shouldThrowServerError = true;
  }
}
