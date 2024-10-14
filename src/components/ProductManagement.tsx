import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Pencil, Trash2, LogOut } from 'lucide-react';
import AddProductScreen from './AddProductScreen';

interface Product {
  id: number;
  name: string;
  image: string;
}

interface ProductManagementProps {
  onLogout: () => void;
}

// Sample product data
const sampleProducts: Product[] = [
  { id: 1, name: 'Classic T-Shirt', image: 'https://source.unsplash.com/random/100x100?t-shirt' },
  { id: 2, name: 'Denim Jeans', image: 'https://source.unsplash.com/random/100x100?jeans' },
  { id: 3, name: 'Leather Jacket', image: 'https://source.unsplash.com/random/100x100?jacket' },
  { id: 4, name: 'Running Shoes', image: 'https://source.unsplash.com/random/100x100?shoes' },
];

export default function ProductManagement({ onLogout }: ProductManagementProps) {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [products, setProducts] = useState(sampleProducts);

  const handleEdit = (id: number) => {
    // Implement edit functionality
    console.log('Edit product:', id);
  };

  const handleDelete = (id: number) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleAddProduct = (newProduct: Omit<Product, 'id'>) => {
    const id = Math.max(...products.map(p => p.id), 0) + 1;
    setProducts([...products, { ...newProduct, id }]);
    setShowAddProduct(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Product Management</h1>
        <Button onClick={onLogout} variant="outline" className="flex items-center">
          <LogOut className="mr-2 h-4 w-4" /> Logout
        </Button>
      </div>
      
      {!showAddProduct ? (
        <>
          <Button onClick={() => setShowAddProduct(true)}>Add New Product</Button>
          
          <div className="grid gap-4 mt-6">
            {products.map(product => (
              <div key={product.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow">
                <div className="flex items-center space-x-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <span className="font-medium">{product.name}</span>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon" onClick={() => handleEdit(product.id)}>
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button variant="destructive" size="icon" onClick={() => handleDelete(product.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <AddProductScreen onClose={() => setShowAddProduct(false)} onAddProduct={handleAddProduct} />
      )}
    </div>
  );
}