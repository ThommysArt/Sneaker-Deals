import { prisma } from "../../common/lib";

export default async function RetrieveAllProducts () {
    return await prisma.product.findMany()
}