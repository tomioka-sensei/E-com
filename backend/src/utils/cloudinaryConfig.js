import {v2 as cloudinary} from 'cloudinary';
import { error } from 'console';
import fs from "fs"
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API, 
  api_secret: process.env.CLOUDINARY_CLOUD_NAME,
});



const uploadOnCloudianry = async(localFile)=>{
    try {
        if(!localFile)return null;

        await cloudinary.uploader.upload(localFile,{
            resource_type : "auto"
        })

        console.log("file uploaded sucessfully")

    } catch (error) {
        fs.unlinkSync(localFile)
    }
}

cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); });