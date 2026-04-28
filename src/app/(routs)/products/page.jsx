import Product from "@/components/Product";

// const getProducts = async () => {
//     const res = await fetch('http://localhost:5000/products', { cache: "force-cache" });
//     return res.json();
// }
// const getProducts = async () => {
//     const res = await fetch('http://localhost:5000/products', { cache: "no-store" });
//     return res.json();
// }
const getProducts = async () => {
    const res = await fetch('http://localhost:5000/products',
        { next: "revalidate:10" });
    return res.json();
}

const ProductsPage = async () => {
    const products = await getProducts();

    return (
        <div className="container mx-auto">
            <h2>Products: {products.length}</h2>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    products.map(product =>
                        <Product
                            key={product.id}
                            product={product}
                        />)
                }
            </div>
        </div>
    );
};

export default ProductsPage;