import { prisma } from "../../common/lib"

export default function UpdateProductPrice (name: string, price: number) {
    prisma.product.findFirst({
        where: {
            name: name,
        }
    })
    .then((product) => {
        if (product) {
            prisma.product.update({
                where: {
                    id: product.id,
                },
                data: {
                    price: price
                }
            })
        }
    })
    .catch(err => {
        alert(err);
    });
}