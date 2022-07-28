<?php

namespace App\Controllers;

use App\Models\SellModel;
use CodeIgniter\RESTful\ResourceController;

class SellsController extends ResourceController
{
    /**
     * Return an array of resource objects, themselves in array format
     *
     * @return mixed
     */
    public function index()
    {
        $model = new SellModel();
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
        $user = new SellModel();
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
        $model = new SellModel();
        $data = [
            'id_vente' => $this->request->getJsonVar('id_vente'),
            'qte' => $this->request->getJsonVar('qte'),
            'total' =>  $this->request->getJsonVar('total'),
            'id_produit' => $this->request->getJsonVar('id_produit')
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
        $model = new SellModel();
        $data = $model->find($id);
        if($data == null){
            return $this->failNotFound("item not found");
        }
        $data = [
            'qte' => $this->request->getJsonVar('qte'),
            'total' =>  $this->request->getJsonVar('total'),
            'id_produit' => $this->request->getJsonVar('id_produit')
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
        $model = new SellModel();
        $data = $model->find($id);
        if($data == null){
            return $this->failNotFound("item not found");
        }
       $model->delete($id);
       return $this->respondDeleted($data);
    }
}
