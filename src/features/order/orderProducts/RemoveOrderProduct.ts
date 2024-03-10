import { prisma } from "../../../common/lib"
import { RetrieveOrder } from ".."
import { RetrieveProduct } from "../../products"

export default function RemoveOrderProduct (email: string, product_name: string) {
    const order = RetrieveOrder(email)
    if (order) {
        const product = RetrieveProduct(product_name)
        if (product) {
            prisma.order_Product.delete({
                where: {
                    id: product.id,
                }
            })
        }
    }
}