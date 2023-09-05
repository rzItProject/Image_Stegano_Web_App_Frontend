import { User } from "@/core/entities/User";
import { IUserRepository } from "@/ports/IUserRepository";
import { IEmailValidator } from "@/ports/IEmailValidator";
import { IPasswordValidator } from "@/ports/IPasswordValidator";
export class RegisterUser {
  constructor(
    private userRepository: IUserRepository,
    private emailValidator: IEmailValidator,
    private passwordValidator: IPasswordValidator
  ) {}

  async register(user: User): Promise<User> {
    // Tests user inputs

    if (this.emailValidator.isEmpty(user.email)) {
      throw new Error("Email is empty");
    }

    if (!this.emailValidator.isValid(user.email)) {
      throw new Error("Invalid email format");
    }

    if (this.passwordValidator.isEmpty(user.password)) {
      throw new Error("Password is empty");
    }

    if (!this.passwordValidator.isLongEnough(user.password)) {
      throw new Error("Password is too short");
    }

    if (!this.passwordValidator.hasUppercase(user.password)) {
      throw new Error("Your password must contain at least a capital letter");
    }

    if (!this.passwordValidator.hasLowercase(user.password)) {
      throw new Error("Your password must contain at least a lowercase letter");
    }

    if (!this.passwordValidator.hasNumber(user.password)) {
      throw new Error("Your password must contain at least a number");
    }

    if (!this.passwordValidator.hasRequiredSpecialChar(user.password)) {
      throw new Error(
        "Your password must contain at least a special character"
      );
    }

    const isEmailTaken = await this.userRepository.findByEmail(user.email);
    const isUsernameTaken = await this.userRepository.findByUserName(
      user.username
    );

    // Tests if existing data in database

    if (isEmailTaken) {
      throw new Error("A user with this email already exists");
    }

    if (isUsernameTaken) {
      throw new Error("A user with this username already exists");
    }

    const newUser: User = {
      email: user.email,
      password: user.password,
      username: user.username,
    };

    await this.userRepository.save(newUser);

    return newUser;
  }
}
