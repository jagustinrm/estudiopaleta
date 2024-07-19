
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