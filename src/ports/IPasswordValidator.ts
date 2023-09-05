export interface IPasswordValidator {
  isEmpty(password: string): boolean;
  isLongEnough(password: string): boolean;
  hasUppercase(password: string): boolean;
  hasLowercase(password: string): boolean;
  hasNumber(password: string): boolean;
  hasRequiredSpecialChar(password: string): boolean;
  // isStrongEnough(password: string): boolean;
}
