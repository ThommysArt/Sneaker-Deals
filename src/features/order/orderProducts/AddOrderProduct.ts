import { RetrieveOrder } from "..";
import { prisma } from "../../../common/lib";
import { RetrieveProduct } from "../../products";

export default async function AddOrderProduct (email: string, product_name: string, quantity: number, size: number) {
    const order = RetrieveOrder(email)
    if (order) {
        const product = RetrieveProduct(product_name)
        if (product) {
            prisma.order_Product.create({
                data: {
                    order_id: order.id,
                    product_id: product.id,
                    quantity: quantity,
                    size: size
                }
            })
        }
    }
}