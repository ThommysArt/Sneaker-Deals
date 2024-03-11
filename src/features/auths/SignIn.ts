/* eslint-disable @typescript-eslint/no-unused-vars */
import { prisma, comparePassword, generateToken } from "../../common/lib";



async function SignIn(email: string, password: string): Promise<string | null> {
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      return null;
    }
    const passwordMatch = await comparePassword(password, user.password);

    if (passwordMatch) {
      const token = generateToken(user.id)
      return token;
    } else {
      return null
    }
}


export default SignIn;