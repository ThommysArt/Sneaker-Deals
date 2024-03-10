import { prisma } from "../../../common/lib"
import { RetrieveOrder } from ".."

export default function RetrieveOrderProducts(email: string) {
    const order = RetrieveOrder(email)
    if (order) {
        prisma.order_Product.findMany({
            where: {
                order_id: order.id
            }
        })
    }
}