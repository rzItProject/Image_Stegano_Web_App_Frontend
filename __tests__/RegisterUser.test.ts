//import { RegisterUser } from '@/core/useCases/User/RegisterUser';
import { InMemoryUserRepository } from "@/adapters/inMemory/InMemoryUserRepository";
import { User } from "@/core/entities/User";
import { RegisterUser } from "@/core/useCases/User/RegisterUser";
import { faker } from "@faker-js/faker";
import { EmailValidator } from "@/adapters/EmailValidator";
import { PasswordValidator } from "@/adapters/PasswordValidator";

describe("RegisterUser use case", () => {
  let userRepository: InMemoryUserRepository;
  let emailValidator: EmailValidator;
  let passwordValidator: PasswordValidator;
  let registerUser: RegisterUser;

  beforeEach(() => {
    userRepository = new InMemoryUserRepository();
    emailValidator = new EmailValidator();
    passwordValidator = new PasswordValidator();
    registerUser = new RegisterUser(
      userRepository,
      emailValidator,
      passwordValidator
    );
  });
  // Failure scenario
  it("should throw an error for a empty email", async () => {
    const userPasswordEmpty: User = {
      email: "",
      password: faker.internet.password(),
      username: faker.internet.userName(),
    };

    await expect(registerUser.register(userPasswordEmpty)).rejects.toThrow(
      "Email is empty"
    );
  });

  it("should throw an error for invalid email format", async () => {
    const userWithInvalidEmail: User = {
      email: "invalide.emailàgmail.com",
      password: faker.internet.password(),
      username: faker.internet.userName(),
    };

    await expect(registerUser.register(userWithInvalidEmail)).rejects.toThrow(
      "Invalid email format"
    );
  });

  it("should throw an error for a empty password", async () => {
    const userPasswordEmpty: User = {
      email: faker.internet.email(),
      password: "",
      username: faker.internet.userName(),
    };

    await expect(registerUser.register(userPasswordEmpty)).rejects.toThrow(
      "Password is empty"
    );
  });

  it("should throw an error for a short password", async () => {
    const userPasswordShort: User = {
      email: faker.internet.email(),
      password: "short",
      username: faker.internet.userName(),
    };

    await expect(registerUser.register(userPasswordShort)).rejects.toThrow(
      "Password is too short"
    );
  });

  it("should generate an error for a missing capital letter", async () => {
    const nonCapitalizedUserPassword: User = {
      email: faker.internet.email(),
      password: "longenough",
      username: faker.internet.userName(),
    };

    await expect(
      registerUser.register(nonCapitalizedUserPassword)
    ).rejects.toThrow("Your password must contain at least a capital letter");
  });

  it("should generate an error for a missing lowercase letter", async () => {
    const userPasswordWithoutLowercase: User = {
      email: faker.internet.email(),
      password: "LONGENOUGH",
      username: faker.internet.userName(),
    };

    await expect(
      registerUser.register(userPasswordWithoutLowercase)
    ).rejects.toThrow("Your password must contain at least a lowercase letter");
  });

  it("should generate an error for a missing number", async () => {
    const userPasswordWithoutNumber: User = {
      email: faker.internet.email(),
      password: "longEnough",
      username: faker.internet.userName(),
    };

    await expect(
      registerUser.register(userPasswordWithoutNumber)
    ).rejects.toThrow("Your password must contain at least a number");
  });

  it("should generate an error for a missing special character", async () => {
    const userPasswordWithoutSpecialChar: User = {
      email: faker.internet.email(),
      password: "longEnough1",
      username: faker.internet.userName(),
    };

    await expect(
      registerUser.register(userPasswordWithoutSpecialChar)
    ).rejects.toThrow(
      "Your password must contain at least a special character"
    );
  });

  it("should throw an error if email is taken", async () => {
    const user: User = {
      email: "charlie@example.com",
      password: "CharliePass789!",
      username: "Charles789",
    };

    await expect(registerUser.register(user)).rejects.toThrow(
      "A user with this email already exists"
    );
  });

  it("should throw an error if username is taken", async () => {
    const user: User = {
      email: "boby@example.com",
      password: "BobPass456!",
      username: "Bob456",
    };

    await expect(registerUser.register(user)).rejects.toThrow(
      "A user with this username already exists"
    );
  });

  it("should throw a server-side error", async () => {
    userRepository.simulateServerError();

    const user: User = {
      email: faker.internet.email(),
      password: faker.internet.password(),
      username: faker.internet.userName(),
    };

    await expect(userRepository.save(user)).rejects.toThrow(
      "Server error. Please try again later."
    );
  });

  // Success scenario
  it("should register a new user successfully", async () => {
    const newUser: User = {
      email: "abdel@example.com",
      password: "AbdelPass180!",
      username: "Abdel180",
    };

    await registerUser.register(newUser);

    const registeredUser = await userRepository.findByEmail(newUser.email);
    expect(registeredUser).toBeTruthy();
    expect(registeredUser?.email).toBe(newUser.email);
    expect(registeredUser?.username).toBe(newUser.username);
  });
});
