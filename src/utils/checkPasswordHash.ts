import bcrypt from "bcrypt";

export async function checkPasswordHash(
  passwordHash: string,
  password: string,
): Promise<boolean> {
  return await bcrypt.compare(password, passwordHash);
}
