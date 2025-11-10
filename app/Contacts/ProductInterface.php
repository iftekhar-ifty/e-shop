<?php
namespace App\Contacts;

interface ProductInterface
{
    public function getProducts(): ?array;
    public function product(): ?array;
}