import { IEmailValidator } from "@/ports/IEmailValidator";
import validator from "validator";

export class EmailValidator implements IEmailValidator {
  isEmpty(email: string): boolean {
    return validator.isEmpty(email);
  }
  isValid(email: string): boolean {
    return validator.isEmail(email);
  }
}
