import { prisma } from "../../common/lib";


export default async function DeleteBrand(name: string) {
    prisma.brand.findFirst({
        where: {
            name: name,
        }
    })
    .then((brand) => {
        if (brand) {
            prisma.brand.delete({
                where: {
                    id: brand.id
                }
            }).then((res) => {
                alert(res);
            })
        }
    })
    .catch((error) => {
        alert(error);
    })
    
}