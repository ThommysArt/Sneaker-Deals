import { prisma } from "../../common/lib"

export default function MakePayment (email: string, type: string, amount: number) {
    prisma.user.findFirst({
        where: {
            email: email
        }
    })
    .then((user) => {
        if (user) {
            prisma.payment.create({
                data: {
                    user_id: user.id,
                    type: type,
                    amount: amount,
                }
            })
        }
    });
}