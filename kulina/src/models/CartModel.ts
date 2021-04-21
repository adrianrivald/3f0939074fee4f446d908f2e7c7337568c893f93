export type GetCartModel = {
  data: {
    calculate: CalculateCart;
    cg_id: number;
    item: CartItem[];
  };
  wishlist: {
    data: WishlistItem[];
  };
};

export type GetInitiateGroupBuyModel = {
  cg_id: number;
  item: CartItem[];
  calculate: CalculateCart;
};

export type GetJoinGroupBuyModel = {
  cg_id: number;
  item: CartItem[];
  calculate: CalculateCart;
  order_id: string;
};

export type CartItem = {
  alt: string;
  basket_id: number;
  brand_name: string;
  category_name: string;
  count: number;
  limit_met: number;
  pict: string;
  product_id: number;
  product_name: string;
  product_uri: string;
  stock_price: number;
  stock_restriction_count:  number
  subcat_name: string;
  title: string;
  total_amount: number;
  updated_at: string;
  variant_id: number;
  variant_name: string;
};

export type CalculateCart = {
  item_count: number;
  total_amount: number;
};

export type CartLimit = {
  code: number;
  message: string;
  data: {
    calculate: CalculateCart;
    item: CartItem[];
    message_id : string;
    message_en : string;
  };
  wishlist: {
    data: WishlistItem[];
  };
}

export type WishlistItem = {
  alt: string;
  brand_name: string;
  category_name: string;
  discount: string;
  pict: string;
  price_before_discount: number;
  product_id: number;
  product_name: string;
  product_price: number;
  product_rating: number;
  product_uri: string;
  review_count: number;
  subcat_name: string;
  title: string;
  updated_at: string;
};
