export type foodListDataProps = {
    product_image: string;
    product_brand: string;
    food_name: string;
    vendor: string;
    price: number;
    rating: number;
  };
 
  export type foodListProps = {
    lunch: foodListDataProps[];
    dinner: foodListDataProps[];
  }

  export const lunchListData: foodListDataProps[] = [
    {
      product_image:
        'https://images.unsplash.com/photo-1598511796432-32663d0875bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      product_brand: 'Kulina',
      food_name: 'Roasted Chicken with Scrambled Eggs',
      vendor: 'Uptown lunch',
      price: 35000,
      rating: 4.2,
    },
    {
      product_image:
        'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80',      product_brand: 'Kulina',
      food_name: 'Papperoni Pizza',
      vendor: 'Uptown lunch',
      price: 105000,
      rating: 4.8,
    },
    {
      product_image:
        'https://images.unsplash.com/photo-1604422237312-37a96a84a4c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',   
      product_brand: 'Kulina',
      food_name: 'Grilled Nuggets',
      vendor: 'Uptown lunch',
      price: 83400,
      rating: 4.8,
    },
    {
      product_image:
        'https://images.unsplash.com/photo-1612874742237-6526221588e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
      product_brand: 'Kulina',
      food_name: 'Spaghetti Carbonara',
      vendor: 'Uptown lunch',
      price: 63400,
      rating: 4.2,
    },
  ];

  export const dinnerListData: foodListDataProps[] = [
    {
      product_image:
        'https://images.unsplash.com/photo-1585443835125-d85820a16e89?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      product_brand: 'Kulina',
      food_name: 'Sweet Potato Fries',
      vendor: 'Uptown lunch',
      price: 75000,
      rating: 4.9,
    },
    {
      product_image:
        'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      product_brand: 'Kulina',
      food_name: 'Chicken Fried Steak',
      vendor: 'Uptown lunch',
      price: 150500,
      rating: 4.8,
    },
    {
      product_image:
        'https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',   
      product_brand: 'Kulina',
      food_name: 'Large Burger',
      vendor: 'Uptown lunch',
      price: 63400,
      rating: 4.8,
    },
    {
      product_image:
        'https://images.unsplash.com/photo-1464219222984-216ebffaaf85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      product_brand: 'Kulina',
      food_name: 'Loaded Nacho Supreme',
      vendor: 'Uptown lunch',
      price: 96000,
      rating: 4.2,
    },
  ];
  