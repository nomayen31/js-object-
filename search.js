var products = [
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      description: "This is the first product",
      category: "Electronics",
    },
    {
      id: 2,
      name: "Product 2",
      price: 24.99,
      description: "A popular product with great features",
      category: "Electronics",
    },
    {
      id: 3,
      name: "Product 3",
      price: 5.49,
      description: "Affordable and reliable",
      category: "Home & Kitchen",
    },
    {
      id: 4,
      name: "Product 4",
      price: 49.99,
      description: "High-quality product for professionals",
      category: "Electronics",
    },
    {
      id: 5,
      name: "Product 5",
      price: 15.99,
      description: "Great value for the price",
      category: "Home & Kitchen",
    },
  ];

  function MatchingProducts(products, search) {
    const matchProducts = [];

    for (const product of products) {
        if (product.category.toLowerCase().includes(search.toLowerCase())) {
            matchProducts.push(product)
        } 
    }
    return matchProducts;

    
  }

  const result = MatchingProducts(products, 'electronics')
  console.log(result);
  

  