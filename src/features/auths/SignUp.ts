/* eslint-disable @typescript-eslint/no-unused-vars */
import { SignIn } from ".";
import { hashPassword, prisma } from "../../common/lib";

async function SignUp(name: string, email: string, password: string): Promise<string | null> {
    await prisma.user.create({
        data: {
            name: name,
            email: email,
            password: await hashPassword(password)
        }
    })

    return await SignIn(email, password)
}

export default SignUp;