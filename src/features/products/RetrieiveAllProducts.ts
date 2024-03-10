import { prisma } from "../../common/lib";

export default async function RetreiveAllProducts () {
    return await prisma.product.findMany()
}