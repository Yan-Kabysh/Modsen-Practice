export const fetchCategories = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products/categories');
      const data = await response.json();
      return data.map((category: any) => ({ value: category, label: category }));
    } catch (error) {
      console.error('Failed to fetch categories:', error);
      return [];
    }
  };