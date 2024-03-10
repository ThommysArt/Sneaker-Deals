import { imageUploadUrl } from "../../../common/constants";
import { prisma } from "../../../common/lib";
import { uploadFile, uploadForm } from "../../../common/utils";

export default function AddProductImage (product_name: string, image: File) {
    prisma.product.findFirst({
        where: {
            name: product_name
        }
    }).then((product) => {
        if (product) {
            const formData = uploadForm(image)
            uploadFile(imageUploadUrl, formData)
            .then(() => {
                prisma.product_Image.create({
                    data: {
                        product_id: product.id,
                        image: image.name
                    }
                })
            })
            
        }
    }).catch((error) => {
        alert(error);
    });
}