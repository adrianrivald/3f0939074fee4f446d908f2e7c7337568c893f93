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
        'https://www.real-restaurant-recipes.com/images/chicken-scrambled-eggs2.jpg',
      product_brand: 'Kulina',
      food_name: 'Roasted Chicken with Scrambled Eggs',
      vendor: 'Uptown lunch',
      price: 35000,
      rating: 4.2,
    },
    {
      product_image:
        'https://asset.kompas.com/crops/DWJqRl2S_A0XNgQT8_9ruHPq83Q=/0x0:1000x667/750x500/data/photo/2020/12/25/5fe576d8a9d24.jpg',
      product_brand: 'Kulina',
      food_name: 'Papperoni Pizza',
      vendor: 'Uptown lunch',
      price: 105000,
      rating: 4.8,
    },
    {
      product_image:
        'https://masonfit.com/wp-content/uploads/2020/08/Copycat-Chick-Fil-A-grilled-nuggets-featured-image.jpg',   
      product_brand: 'Kulina',
      food_name: 'Grilled Nuggets',
      vendor: 'Uptown lunch',
      price: 83400,
      rating: 4.8,
    },
    {
      product_image:
        'https://kulinerkota.com/wp-content/uploads/2020/06/Spaghetii-Carbonara.jpeg',
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
        'https://static01.nyt.com/images/2019/05/21/dining/21COOKING-SWEET-POTATO-FRIES1/28COOKING-SWEET-POTATO-FRIES1-articleLarge.jpg',
      product_brand: 'Kulina',
      food_name: 'Sweet Potato Fries',
      vendor: 'Uptown lunch',
      price: 75000,
      rating: 4.9,
    },
    {
      product_image:
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5179074.jpg',
      product_brand: 'Kulina',
      food_name: 'Chicken Fried Steak',
      vendor: 'Uptown lunch',
      price: 150500,
      rating: 4.8,
    },
    {
      product_image:
        'https://cadryskitchen.com/wp-content/uploads/2017/01/chili_cheese_tater_tots_vegan-scaled.jpg',   
      product_brand: 'Kulina',
      food_name: 'Chili Cheese Tots',
      vendor: 'Uptown lunch',
      price: 63400,
      rating: 4.8,
    },
    {
      product_image:
        'https://www.orwhateveryoudo.com/wp-content/uploads/2015/06/Loaded-Nachos-Supreme-4.jpg',
      product_brand: 'Kulina',
      food_name: 'Loaded Nacho Supreme',
      vendor: 'Uptown lunch',
      price: 96000,
      rating: 4.2,
    },
  ];
  