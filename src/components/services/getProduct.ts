
interface Product {
    id: number;
    img: string;
    price: number;
    type: string;
    like: boolean;
    description: string;
  }

  export default async function getProduct(id: number): Promise<Product[]> {
    try {
      const response = await fetch('http://localhost:5000/');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const product = await data.products.find((p: Product)=> p.id == id)

      return product
    } catch (error) {
      console.error('Error fetching products:', error);
      try {
        const response = await fetch('./mocks/products.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        const product = await data.products.find((p: Product)=> p.id == id)
        
        return product
      } catch (error) {
        console.error('Error fetching products:', error);
        return [];
      }
    }
    
  }