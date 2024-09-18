
interface Product {
    id: number;
    img: string;
    price: number;
    type: string;
    like: boolean;
    description: string;
  }

  export async function getProducts(): Promise<Product[]> {
    try {
      // const response = await fetch('http://localhost:5000/');
      const response = await fetch('http://localhost:5000/');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data.products;
    } catch (error) {
      console.error('Error fetching products:', error);
      try {
        const response = await fetch('./mocks/products.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.products;
      } catch (error) {
        console.error('Error fetching products:', error);
        return [];
      }
    }
    
  }