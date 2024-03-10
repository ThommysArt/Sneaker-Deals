
import { prisma } from "../../common/lib"

export default function RetrieveProductsByBrand(brand_name: string) {
    return prisma.brand.findFirst({
        where: {
            name: brand_name
        }
    }).then(async (brand) => {
        if (brand) {
            return prisma.product.findMany({
                where: {
                    brand_id: brand.id
                }
            });                        
        } else {
            return null;
        }
    }).catch((error) => {
        alert(error);
    })
        
}