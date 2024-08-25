import DB_Config from "@/DB/DB_Config.js";
import ProductModel from "@/Models/Product.js";
import { NextRequest, NextResponse } from "next/server";

DB_Config()

// GET FUNCTION TO GET ALL PRODUCTS
export async function GET() {
    try {
        const response = await ProductModel.find();

        if (!response || response.length === 0) {
            return NextResponse.json({ message: "Product Collection is empty" }, { status: 200 });
        } else {
            return NextResponse.json({ message: "All Products", response });
        }

    } catch (error) {
        console.log('There is an error in Product GET METHOD', error);
        return NextResponse.json({ message: 'There was an error fetching products' }, { status: 500 });
    }
}

// POST FUNCTION TO ADD PRODUCTS
export async function POST(req) {
    try {
        const body = await req.json()
        const request = await ProductModel.create(body);

        if (!request || request.length === 0) {
            return NextResponse.json({ message: "Couldn't Add your product" }, { status: 200 });
        } else {
            return NextResponse.json({ message: "Product Added", request });
        }

    } catch (error) {
        console.log('There is an error in Product POST METHOD', error);
        return NextResponse.json({ message: 'There was an error adding products' }, { status: 500 });
    }
}

// PUT FUNCTION TO UPDATE PRODUCTS
export async function PUT(req) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json({ message: 'Product ID is missing' }, { status: 400 });
        }

        const body = await req.json();

        const updatedProduct = await ProductModel.findByIdAndUpdate(id, body, { new: true });

        if (!updatedProduct) {
            return NextResponse.json({ message: "Couldn't update your product" }, { status: 404 });
        } else {
            return NextResponse.json({ message: 'Product updated', updatedProduct });
        }

    } catch (error) {
        console.error('There is an error in the Product PUT method', error);
        return NextResponse.json({ message: 'There was an error updating products' }, { status: 500 });
    }
}

// DELETE FUNCTION TO DELETE PRODUCTS
export async function DELETE(req) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json({ message: 'Product ID is missing' }, { status: 400 });
        }

        const deletedProduct = await ProductModel.findByIdAndDelete(id, { new: true });

        if (!deletedProduct) {
            return NextResponse.json({ message: "Couldn't delete your product" }, { status: 404 });
        } else {
            return NextResponse.json({ message: 'Product delete', deletedProduct });
        }

    } catch (error) {
        console.error('There is an error in the Product DELETE method', error);
        return NextResponse.json({ message: 'There was an error deleting products' }, { status: 500 });
    }
}