import { prisma } from "../../common/lib"

export default async function RetreiveProductsByBrand(brand_name: string) {
    return await prisma.brand.findFirst({
        where: {
            name: brand_name
        }
    }).then((brand) => {
        if (brand) {
            prisma.product.findMany({
                where: {
                    brand_id: brand.id
                }
            })                           
        }
    }).catch((error) => {
        alert(error);
    })
        
}