<?php

namespace App\Controllers;

use App\Models\PlayerModel;
use CodeIgniter\RESTful\ResourceController;

class PlayersController extends ResourceController
{
    /**
     * Return an array of resource objects, themselves in array format
     *
     * @return mixed
     */
    public function index()
    {
        $model = new PlayerModel();
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
        $user = new PlayerModel();
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
        $model = new PlayerModel();
        $data = [
            'NOM' => $this->request->getJsonVar( 'NOM'),
            'prenom' =>  $this->request->getJsonVar('prenom'),
            'date_naissance' => $this->request->getJsonVar('date_naissance'),
            'equipe' => $this->request->getJsonVar('equipe'),
            'adresse' =>  $this->request->getJsonVar('adresse'),
            'phone' => $this->request->getJsonVar('phone'),
            'email' => $this->request->getJsonVar('email')
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
        $model = new PlayerModel();
        $data = $model->find($id);
        if($data == null){
            return $this->failNotFound("item not found");
        }
        $data = [
            'NOM' => $this->request->getJsonVar( 'NOM'),
            'prenom' =>  $this->request->getJsonVar('prenom'),
            'date_naissance' => $this->request->getJsonVar('date_naissance'),
            'equipe' => $this->request->getJsonVar('equipe'),
            'adresse' =>  $this->request->getJsonVar('adresse'),
            'phone' => $this->request->getJsonVar('phone'),
            'email' => $this->request->getJsonVar('email')
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
        $model = new PlayerModel();
        $data = $model->find($id);
        if($data == null){
            return $this->failNotFound("item not found");
        }
       $model->delete($id);
       return $this->respondDeleted($data);
    }
}
