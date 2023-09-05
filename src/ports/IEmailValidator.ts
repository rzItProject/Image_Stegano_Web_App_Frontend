export interface IEmailValidator {
  isEmpty(email: string): boolean;
  isValid(email: string): boolean;
}
