import { prisma } from "../../common/lib";

export default function StartOrder (email: string) {
    prisma.user.findFirst({
        where: {
            email: email
        }
    })
    .then((user) => {
        if (user) {
            prisma.order.create({
                data: {
                    user_id: user.id,
                }
            })
        }
    })
    .catch((error) => {
        alert(error);
    });
    
}