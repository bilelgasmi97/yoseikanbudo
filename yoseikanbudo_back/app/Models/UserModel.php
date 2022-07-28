<?php

namespace App\Models;

use CodeIgniter\Model;

class UserModel extends Model
{
    protected $DBGroup          = 'default';
    protected $table            = 'users';
    protected $primaryKey       = 'user_id';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = [
        'user_name ','user_lastname','user_email ',
        'user_password ','user_type','user_birthday ',
        'user_team ','user_phone ',
        'Adresse ','Lieu_naiss '
];

    // Dates
    protected $useTimestamps = false;
    protected $dateFormat    = 'datetime';
    protected $createdField  = 'date_created';
    protected $updatedField  = 'updated_at';
    protected $deletedField  = 'deleted_at';

    // Validation
    protected $validationRules      = [
        /*'username'     => 'required|alpha_numeric_space|min_length[3]',
        'user_email'        => 'required|valid_email|is_unique[users.email]',
        'user_password'     => 'required|min_length[8]',
        //'pass_confirm' => 'required_with[password]|matches[password]',*/
    ];
    protected $validationMessages   = [
       /* 'email' => [
            'is_unique' => 'Sorry. That email has already been taken. Please choose another.',
        ],*/
    ];
    
}
