<?php

namespace App\Controllers;



class Test extends BaseController
{
    public function index()
    {
        $db = \Config\Database::connect();
        print_r($db);
    }
}