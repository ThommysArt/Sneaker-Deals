import { prisma } from "../../common/lib";


export default function CreateProduct(name: string, price: number, brand_name: string) {
    prisma.brand.findFirst({
        where: {
            name: brand_name
        }
    }).then((brand) => {
        if (brand) {
            prisma.product.create({
                data: {
                    name: name,
                    price: price,
                    brand_id: brand.id,
                }
            }).then(() => {
                alert("Created Product!");
            });
        }
    }).catch((error) => {
        alert(error);
    })
}