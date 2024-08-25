import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        Productname: {
            type: String
        },
        Category: {
            type: String
        },
        Brand: {
            type: String
        },
        Description: {
            type: String
        },
        Price: {
            type: String
        }
    },
    {
        timestamps: true
    })

const ProductModel = mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default ProductModel
