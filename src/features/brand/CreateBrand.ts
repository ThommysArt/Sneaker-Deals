import { logoUploadUrl } from "../../common/constants";
import { prisma } from "../../common/lib";
import { uploadFile, uploadForm } from "../../common/utils";

async function CreateBrand (name: string, logo: File) {
    const formData = uploadForm(logo)
    uploadFile(logoUploadUrl, formData)
    .then(() => {
        prisma.brand.create({
            data: {
                name: name,
                logo: "/uploads/logos/" + logo.name
            }
        })
        alert("Successfully created");
    })
}

export default CreateBrand;