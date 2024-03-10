import { prisma } from "../../common/lib";

export default function CancelOrder(email: string) {
    prisma.user.findFirst({
        where: {
            email: email
        }
    })
    .then((user) => {
        if (user) {
            prisma.order.findFirst({
                where: {
                    user_id: user.id,
                    paid: false
                }
            })
            .then((order) => {
                if (order) {
                    prisma.order.delete({
                        where: {
                            id: order.id
                        }
                    })
                }
            })
        }
    })
    .catch(err => {
        alert(err);
    });
}