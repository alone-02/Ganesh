const express = require("express");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const streamifier = require("streamifier"); 

const router = express.Router();
const storage = multer.memoryStorage(); 
const upload = multer({ storage });

router.post("/", upload.single('image'), (req, res) => {
    console.log("File upload initiated");

    const imgBuffer = req.file.buffer;

    if (!imgBuffer) {
        return res.status(400).json({ message: "No image uploaded" });
    }

    const uploadStream = cloudinary.uploader.upload_stream({ folder: 'upload' }, (error, result) => {
        if (error) {
            console.error("Error uploading to Cloudinary:", error);
            return res.status(500).json({ message: "Cloudinary upload failed", error });
        }
        console.log("Cloudinary upload successful:", result);
        //Cloudinary image URL
        res.status(200).json({ img_url: result.secure_url });
    });
// Stream the image buffer to Cloudinary
    streamifier.createReadStream(imgBuffer).pipe(uploadStream); 
    console.log(uploadStream);
});

module.exports = router;
