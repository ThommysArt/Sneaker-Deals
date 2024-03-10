import fs from "fs";

export default async function deleteFile(filePath: string): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.unlink(filePath, (error) => {
      if (error) {
        console.error("Error deleting file:", error);
        reject("An error occurred during file deletion.");
      } else {
        resolve("File deleted successfully!");
      }
    });
  });
}