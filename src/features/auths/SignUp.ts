/* eslint-disable @typescript-eslint/no-unused-vars */
import { hashPassword, prisma } from "../../common/lib";

async function SignUp(name: string, email: string, password: string) {
    await prisma.user.create({
        data: {
            name: name,
            email: email,
            password: await hashPassword(password)
        }
    })
}

export default SignUp;