import { EmailValidator } from '@/adapters/EmailValidator';

describe("Email Validator Service ", () => {
  const emailValidator = new EmailValidator();

  it("should invalidate an empty mail", () => {
    const emptyEmail = "";
    expect(emailValidator.isEmpty(emptyEmail)).toBe(true);
  });

  it("should validate correct email format", () => {
    const validEmail = "test@example.com";
    expect(emailValidator.isValid(validEmail)).toBe(true);
  });

  it("should invalidate incorrect email format", () => {
    const invalidEmail = "email.invalide";
    expect(emailValidator.isValid(invalidEmail)).toBe(false);
  });
});
