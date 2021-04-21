export type productListDataProps = {
    product_image: string;
    product_brand: string;
    food_name: string;
    vendor: string;
    disount_price: string;
    price: number;
    rating: number;
  };
  
  export const productListData: productListDataProps[] = [
    {
      product_image:
        'https://www.real-restaurant-recipes.com/images/chicken-scrambled-eggs2.jpg',
      product_brand: 'Kulina',
      food_name: 'Roasted Chicken with Scrambled Eggs',
      vendor: 'Uptown lunch',
      disount_price: 'Rp. 103.400',
      price: 35000,
      rating: 4.2,
    },
    {
      product_image:
        'https://asset.kompas.com/crops/DWJqRl2S_A0XNgQT8_9ruHPq83Q=/0x0:1000x667/750x500/data/photo/2020/12/25/5fe576d8a9d24.jpg',
      product_brand: 'Kulina',
      food_name: 'Papperoni Pizza',
      vendor: 'Uptown lunch',
      disount_price: 'Rp. 103.400',
      price: 105000,
      rating: 4.8,
    },
    // {
    //   product_image:
    //     'https://klikigr.s3-ap-southeast-1.amazonaws.com/images/products/1221090.png',
    //   product_brand: 'SGM',
    //   product_name: 'SGM Amanda',
    //   discount: '10%',
    //   disount_price: 'Rp. 103.400',
    //   price: 'Rp. 94.000',
    //   rating: 56,
    // },
    // {
    //   product_image:
    //     'https://id-test-11.slatic.net/shop/7f29c38257e19e5a99bc3babf230945f.png',
    //   product_brand: 'DANCOW',
    //   product_name: 'Dancow advance excelnutri grow...',
    //   discount: '10%',
    //   disount_price: 'Rp. 103.400',
    //   price: 'Rp. 94.000',
    //   rating: 56,
    // },
    // {
    //   product_image:
    //     'https://id-test-11.slatic.net/shop/7f29c38257e19e5a99bc3babf230945f.png',
    //   product_brand: 'DANCOW',
    //   product_name: 'Dancow advance excelnutri grow...',
    //   discount: '10%',
    //   disount_price: 'Rp. 103.400',
    //   price: 'Rp. 94.000',
    //   rating: 56,
    // },
  ];
  