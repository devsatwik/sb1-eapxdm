import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface AddProductScreenProps {
  onClose: () => void;
  onAddProduct: (product: { name: string; image: string }) => void;
}

export default function AddProductScreen({ onClose, onAddProduct }: AddProductScreenProps) {
  const [productName, setProductName] = useState('');
  const [productImage, setProductImage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddProduct({ name: productName, image: productImage });
    setProductName('');
    setProductImage('');
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="productName">Product Name</Label>
          <Input
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="productImage">Product Image URL</Label>
          <Input
            id="productImage"
            value={productImage}
            onChange={(e) => setProductImage(e.target.value)}
            required
          />
        </div>
        <div className="flex space-x-2">
          <Button type="submit">Add Product</Button>
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}