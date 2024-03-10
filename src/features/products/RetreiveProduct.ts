import { prisma } from "../../common/lib";

export default async function RetreiveProduct(name: string) {
    return await prisma.product.findFirst({
        where: {
            name: name,
        }
    })
}