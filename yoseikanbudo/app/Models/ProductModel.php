<?php

namespace App\Models;

use CodeIgniter\Model;

class ProductModel extends Model
{
  
    protected $table            = 'products';
    protected $primaryKey       = 'product_id';
    protected $allowedFields    = ['product_name','product_prix','product_image'];

   
}
