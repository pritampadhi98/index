import multer from "multer";

const upload = multer({ dest: "public/uploads/" });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  upload.single("image")(req, res, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to upload image" });
    }

    // Image upload was successful
    const imagePath = `/uploads/${req.file.filename}`;

    // You can generate a full URL to the image using req.headers.host and the imagePath
    const imageLink = `http://${req.headers.host}${imagePath}`;

    return res.status(200).json({ imageLink });
  });
}
