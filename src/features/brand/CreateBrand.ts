import { httpReq, prisma } from "../../common/lib";

async function CreateBrand (name: string, logo: File) {
    const formData = new FormData();
    formData.append('file', logo);
    const res = await httpReq.post('/uploads/logos', formData);
    prisma.brand.create({
        data: {
            name: name,
            logo: "/upoads/logos/" + logo.name
        }
    })
    alert(res);
}

export default CreateBrand;