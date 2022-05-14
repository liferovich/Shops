export interface OrderResponse {
    order: Order
}

export interface Order {
    products: number[],
    total: number,
    email: string,
    receiver: string,
    phone: string,
    comment: string,
    index: string,
    city: string,
    street: string,
    build: string,
    flat: string,
    payment: string,
    delivery: string,
}