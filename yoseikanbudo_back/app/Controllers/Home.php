<?php

namespace App\Controllers;

use App\Models\ProductModel;
use App\Models\Products;
use App\Models\UserModel;

class Home extends BaseController
{
    public function index()
    {
        $model = new ProductModel();
        print_r($model->findAll());
    }
}
