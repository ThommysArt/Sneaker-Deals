import { httpReq } from "../lib";

export default async function uplaodFile(url: string, formData: FormData) {
    const res = await httpReq.post(url, formData);
    return res
}