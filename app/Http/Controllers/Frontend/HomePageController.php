<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use App\Services\ProductService;
use App\Http\Controllers\Controller;
use App\Repository\ProductRepository;

class HomePageController extends Controller
{
    public $productService;

    public function __construct()
    {
        $this->productService = new ProductService(new ProductRepository());
    }

    public function index()
    {
        dd($this->productService->getProducts());
    }
}
