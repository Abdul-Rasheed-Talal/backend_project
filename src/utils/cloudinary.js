import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";

// Configuration
// cloudinary.config({ 
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
//     api_key: process.env.CLOUDINARY_API_KEY, 
//     api_secret: process.env.CLOUDINARY_API_SECRET
// });

// using direct configuration
cloudinary.config({ 
    cloud_name: "dmhu97kif", 
    api_key: 995621272346183, 
    api_secret: "tOsZF64mlvlRh7vNJzyZNOYDDe4"
});


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            // console.log("No file path provided");
            return null;
        }
        
        // Log the file path for debugging
        // console.log("Attempting to upload file from:", localFilePath);
        
        // Check if file exists
        if (!fs.existsSync(localFilePath)) {
            // console.error("File does not exist at path:", localFilePath);
            return null;
        }
        
        // Upload file on cloudinary using the async function pattern
        const uploadResult = await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto'
        }).catch((error) => {
            // console.error("Cloudinary upload error:", error);
            return null;
        });
        
        // If upload failed, return null
        if (!uploadResult) {
            return null;
        }
        
        // File has been uploaded successfully
        // console.log("File uploaded successfully to Cloudinary:", uploadResult.url);
        
        // Delete local file after successful upload
        try {
            if (fs.existsSync(localFilePath)) {
                fs.unlinkSync(localFilePath);
            }
        } catch (unlinkError) {
            // console.error("Error deleting local file:", unlinkError);
        }
        
        return uploadResult;
        
    } catch (error) {
        // console.error("Cloudinary upload error details:", error);
        
        // Try to delete local file even if upload failed
        try {
            if (localFilePath && fs.existsSync(localFilePath)) {
                fs.unlinkSync(localFilePath);
            }
        } catch (unlinkError) {
            // console.error("Error deleting local file:", unlinkError);
        }
        
        return null;
    }
}


export { uploadOnCloudinary };