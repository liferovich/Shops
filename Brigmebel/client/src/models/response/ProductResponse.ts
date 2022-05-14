export interface ProductsResponse {
    products: Product[]
}

export interface ProductResponse {
    product: Product
}

export interface Product {
    id: string,
    category: string,
    name: string,
    description: string,
    price: number,
    image: string,
    color: string,
    size: string,
    createdAt: Date
}