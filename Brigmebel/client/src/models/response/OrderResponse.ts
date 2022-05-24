export interface OrderResponse {
    order: Order
}

export interface OrdersResponse {
    orders: Order[]
}

export interface Order {
    id: number,
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
    date: Date,
    user: number
}