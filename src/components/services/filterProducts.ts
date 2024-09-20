
interface Product {
    id: number;
    img: string;
    price: number;
    type: string;
    like: boolean;
    description: string;
  }

  interface Filter {
    category: string;
    minPrice: number;
  }


  export default function filterProducts (products: Product[], filter: Filter): Product[]   {


    if (!Array.isArray(products)) {
      console.log(products)
      return [];
    }
    return products.filter(product => {
      
      return(
        product.price >= filter.minPrice && 
        (
          filter.category == 'all' 
          // ||
          // product.category == filter.category
        )
      )
    } )
  }