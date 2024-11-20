import { model, Schema } from "mongoose";
import { IBlog } from "./blog.interface";

const blogSchema = new Schema<IBlog>(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        content: {
            type: String,
            required: true,
        },
        tags: {
            type: [String],
            default: [],
        },
        images: {
            type: [String], // Array of image URLs
            default: [],
        },
        published: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true, // This option adds createdAt and updatedAt fields
    }
);

export const BlogModel = model<IBlog>("Blog", blogSchema);


// const [images, setImages] = useState([]);

// const handleImageUpload = async (event) => {
//     const files = event.target.files;
//     const uploadedImages = [];

//     for (let i = 0; i < files.length; i++) {
//         const formData = new FormData();
//         formData.append('file', files[i]);

//         // Replace with your actual upload endpoint
//         const response = await axios.post('/api/upload', formData);
//         uploadedImages.push(response.data.url); // Assuming the response contains the image URL
//     }

//     setImages((prevImages) => [...prevImages, ...uploadedImages]);
// };