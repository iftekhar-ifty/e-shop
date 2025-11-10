<?php
namespace App\Services;

use App\Repository\ProductRepository;

class ProductService
{
    public ProductRepository $productRepository;
    
    public function __construct(ProductRepository $productRepository)
    {
        $this->productRepository = $productRepository;
    }   
    public function getProducts(): ?array
    {
        return $this->productRepository->getProducts();
    }
    public function product(): ?array
    {
        return $this->productRepository->product();
    }

}