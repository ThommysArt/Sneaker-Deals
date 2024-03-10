import { Prisma } from "@prisma/client";
import { RetrieveOrder } from ".";
import { prisma } from "../../common/lib";
import { MakePayment } from "../payment";

export default async function CompleteOrder (email: string, type: string, amount: number) {
    const order = await RetrieveOrder(email);
    MakePayment(email, type, amount);
    const payment = await prisma.payment.findFirst({
        orderBy: {
            timestamp: Prisma.SortOrder.desc
        }
    });
    if (order && payment) {
        prisma.order_Payment.create({
            data: {
                order_id: order.id,
                payment_id: payment.id
            }
        })
        prisma.order.update({
            where: {
                id: order.id,
            },
            data: {
                paid: true
            }
        })
    }
    
}