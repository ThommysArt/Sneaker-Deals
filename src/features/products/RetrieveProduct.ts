import { Product } from "@prisma/client";
import { prisma } from "../../common/lib";

export default async function RetrieveProduct(name: string): Promise<Product | null> {
    return await prisma.product.findFirst({
        where: {
            name: name,
        }
    })
}