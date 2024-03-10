
export default function uploadForm(file: File) {
    const formData = new FormData();
    formData.append(file.name, file);
    return formData;
}