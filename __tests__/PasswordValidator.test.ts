import { PasswordValidator } from "@/adapters/PasswordValidator";

describe("Password Validator", () => {
  const passwordValidator = new PasswordValidator();

  describe("hasUppercase", () => {
    it("should return true for password with uppercase", () => {
      expect(passwordValidator.hasUppercase("Test")).toBe(true);
    });

    it("should return false for password without uppercase", () => {
      expect(passwordValidator.hasUppercase("test")).toBe(false);
    });
  });

  describe("hasLowercase", () => {
    it("should return true for password with lowercase", () => {
      expect(passwordValidator.hasLowercase("Test")).toBe(true);
    });

    it("should return false for password without lowercase", () => {
      expect(passwordValidator.hasLowercase("TEST")).toBe(false);
    });
  });

  describe("hasNumber", () => {
    it("should return true for password with number", () => {
      expect(passwordValidator.hasNumber("Test123")).toBe(true);
    });

    it("should return false for password without number", () => {
      expect(passwordValidator.hasNumber("Test")).toBe(false);
    });
  });

  describe("hasSpecialChar", () => {
    it("should return true for password with special character", () => {
      expect(passwordValidator.hasRequiredSpecialChar("Test@123")).toBe(true);
    });

    it("should return false for password without special character", () => {
      expect(passwordValidator.hasRequiredSpecialChar("Test123")).toBe(false);
    });
  });

  describe("isNotEmpty", () => {
    it("should return true for non-empty password", () => {
      expect(passwordValidator.isEmpty("Test123")).toBe(false);
    });

    it("should return false for empty password", () => {
      expect(passwordValidator.isEmpty("")).toBe(true);
    });
  });

  describe("isLongEnough", () => {
    it("should return true for password of sufficient length", () => {
      expect(passwordValidator.isLongEnough("Test1234")).toBe(true);
    });

    it("should return false for short password", () => {
      expect(passwordValidator.isLongEnough("Test")).toBe(false);
    });
  });
});
