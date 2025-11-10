<?php
namespace App\Repository;

use App\Contacts\ProductInterface;
use App\Models\Product;

class ProductRepository implements ProductInterface
{
    public function getProducts(): array
    {
        return Product::all()->toArray();
    }

    public function product(): array
    {
        return Product::find(1)->toArray();
    }
}