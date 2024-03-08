/* eslint-disable @typescript-eslint/no-unused-vars */
import { prisma, comparePassword } from "../../common/lib";



async function SignIn(email: string, password: string) {
    try {
        // Retrieve the user from the database based on the email
        const user = await prisma.user.findFirst({
          where: {
            email: email,
          },
        });
    
        if (!user) {
          return "User not found.";
        }
    
        // Compare the provided password with the stored hashed password
        const passwordMatch = await comparePassword(password, user.password);
    
        if (!passwordMatch) {
          return "Invalid password.";
        }
    
        return user;
      } catch (error) {
        console.error("Error signing in:", error);
        return "An error occurred during sign in.";
      }
    
}


export default SignIn;