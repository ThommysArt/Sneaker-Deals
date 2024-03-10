import { prisma } from "../../common/lib";

export default function DeleteProduct(name: string) {
    prisma.product.findFirst({
        where: {
            name: name
        }
    }).then((product) => {
        if (product) {
            prisma.product.delete({
                where: {
                    id: product.id
                }
            })
            .then(() => {
                alert("Product deleted successfully")
            })
        }
    })
}