//const products = [];

const getAllProducts = async () => {
    return [
        { id: 1, name: "Camiseta Estilosa", price: 49.99},
        { id: 2, name: "Calça Jeans", price: 89.99}
    ];
};

const createProduct = async (productData) => {
   return { id: Date.now(), ...productData };
};

module.exports = { getAllProducts, createProduct};