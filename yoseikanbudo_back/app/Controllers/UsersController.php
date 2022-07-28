<?php

namespace App\Controllers;

use App\Models\UserModel;
use CodeIgniter\API\ResponseTrait;
use CodeIgniter\RESTful\ResourceController;

class UsersController extends ResourceController
{
    use ResponseTrait;
    /**
     * Return an array of resource objects, themselves in array format
     *
     * @return mixed
     */
    public function index()
    {
        $model = new UserModel();
        $data = $model->findAll();
        return $this->respond($data);
    }

    /**
     * Return the properties of a resource object
     *
     * @return mixed
     */
    public function show($id = null)
    {
        //
        $user = new UserModel();
        $data = $user->find($id);
        if($data == null){
            return $this->failNotFound("item not found");
        }
        return $this->respond($data);
    }

    /**
     * Return a new resource object, with default properties
     *
     * @return mixed
     */
    public function new()
    {
        //
    }

    /**
     * Create a new resource object, from "posted" parameters
     *
     * @return mixed
     */
    public function create()
    {
        $model = new UserModel();
        $data = [
            'user_name '  => $this->request->getJsonVar('user_name'),
            'user_lastname' => $this->request->getJsonVar('user_lastname'),
            'user_email '=> $this->request->getJsonVar('user_email'),
            'user_password '=> $this->request->getJsonVar('user_password '),
            'user_type'=> $this->request->getJsonVar('user_type'),
            'user_birthday'=> $this->request->getJsonVar('user_birthday'),
            'user_team '=> $this->request->getJsonVar('user_team'),
            'user_phone '=> $this->request->getJsonVar('user_phone'),
            'Adresse '=> $this->request->getJsonVar('Adresse '),
            'Lieu_naiss ' => $this->request->getJsonVar('Lieu_naiss ')
            
        ];
        $model->save($data);
        return $this->respondCreated($data);
    }

    /**
     * Return the editable properties of a resource object
     *
     * @return mixed
     */
    public function edit($id = null)
    {
        //
    }

    /**
     * Add or update a model resource, from "posted" properties
     *
     * @return mixed
     */
    public function update($id = null)
    {
        $model = new UserModel();
        $data = $model->find($id);
        if($data == null){
            return $this->failNotFound("item not found");
        }
        $data = [
            'user_name '  => $this->request->getJsonVar('user_name'),
            'user_lastname' => $this->request->getJsonVar('user_lastname'),
            'user_email '=> $this->request->getJsonVar('user_email'),
            'user_password '=> $this->request->getJsonVar('user_password '),
            'user_type'=> $this->request->getJsonVar('user_type'),
            'user_birthday'=> $this->request->getJsonVar('user_birthday'),
            'user_team '=> $this->request->getJsonVar('user_team'),
            'user_phone '=> $this->request->getJsonVar('user_phone'),
            'Adresse '=> $this->request->getJsonVar('Adresse '),
            'Lieu_naiss ' => $this->request->getJsonVar('Lieu_naiss ')
        ];
        $model->update($id,$data);
        return $this->respondUpdated($data);
    }

    /**
     * Delete the designated resource object from the model
     *
     * @return mixed
     */
    public function delete($id = null)
    {
        $model = new UserModel();
        $data = $model->find($id);
        if($data == null){
            return $this->failNotFound("iteam not found");
        }
       $model->delete($id);
       return $this->respondDeleted($data);
    }
}
