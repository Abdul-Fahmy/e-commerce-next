import { Product } from "@/types/products.types";
import ProductDetailsClient from "@/components/ProductDetailsClient/ProductDetailsClient";

interface ProductDetailsPageProps {
    params: {
        productId: string;
    };
}

async function getProduct(productId: string): Promise<Product> {
    const res = await fetch(
        `https://ecommerce.routemisr.com/api/v1/products/${productId}`,
        { cache: "no-store" } // disables caching = SSR-like behavior
    );

    if (!res.ok) throw new Error("Failed to fetch product");
    const data = await res.json();
    return data.data;
}

async function getRelatedProducts(categoryId: string): Promise<Product[]> {
    const res = await fetch(
        `https://ecommerce.routemisr.com/api/v1/products?category=${categoryId}`,
        { cache: "no-store" }
    );

    if (!res.ok) throw new Error("Failed to fetch related products");
    const data = await res.json();
    return data.data;
}

export default async function ProductDetails({
    params,
}: ProductDetailsPageProps) {
    try {
        const product = await getProduct(params.productId);
        const relatedProducts = await getRelatedProducts(product.category._id);

        return (
            <ProductDetailsClient
                product={product}
                relatedProducts={relatedProducts}
            />
        );
    } catch (err) {
        return <div className="text-red-500">Failed to load product.</div>;
    }
}
