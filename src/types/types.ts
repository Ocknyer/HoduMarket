export interface ProductData {
  product_id?: number;
  created_at?: string;
  updated_at?: string;
  product_name?: string;
  image?: string;
  price?: number;
  shipping_method?: string;
  shipping_fee?: number;
  stock?: number;
  products_info?: string;
  seller?: number;
  store_name?: string;
}

export interface CartItem {
  my_cart?: number;
  cart_item_id?: number;
  product_id?: number;
  quantity?: number;
  // curItem?: TotalPrice;
}

export interface OrderData {
  buyer?: number;
  order_number?: number;
  order_items?: number[];
  order_quantity?: number[];
  receiver?: string;
  receiver_phone_number?: string;
  address?: string;
  address_message?: string;
  payment_method?: string;
  total_price?: number;
}

export interface TotalPrice {
  price?: number;
  quantity?: number;
  shipping_fee?: number;
}

export interface UserData {
  username: string;
  password: string;
  password2: string;
  phone_number: string;
  name: string;
  company_registration_number?: string;
  store_name?: string;
}
