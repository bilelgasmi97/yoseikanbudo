<?php

namespace App\Controllers;

use App\Models\ActivityModel;
use CodeIgniter\RESTful\ResourceController;

class ActivitesController extends ResourceController
{
    /**
     * Return an array of resource objects, themselves in array format
     *
     * @return mixed
     */
    public function index()
    {
        $model = new ActivityModel();
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
        $user = new ActivityModel();
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
        $model = new ActivityModel();
        $data = [
            'Désignation' => $this->request->getJsonVar('Désignation'),
            'lieu' =>  $this->request->getJsonVar('lieu'),
            'Date' => $this->request->getJsonVar('Date'),
            'Responsable' => $this->request->getJsonVar('Responsable'),
            'IDType_Stage' =>  $this->request->getJsonVar('IDType_Stage'),
            'ID_Relation' => $this->request->getJsonVar('ID_Relation'),
            'Type_Relation' => $this->request->getJsonVar('Type_Relation'),
            'Visa_direction' =>  $this->request->getJsonVar('Visa_direction'),            
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
        $model = new ActivityModel();
        $data = $model->find($id);
        if($data == null){
            return $this->failNotFound("item not found");
        }
        $data = [
            'Désignation' => $this->request->getJsonVar('Désignation'),
            'lieu' =>  $this->request->getJsonVar('lieu'),
            'Date' => $this->request->getJsonVar('Date'),
            'Responsable' => $this->request->getJsonVar('Responsable'),
            'IDType_Stage' =>  $this->request->getJsonVar('IDType_Stage'),
            'ID_Relation' => $this->request->getJsonVar('ID_Relation'),
            'Type_Relation' => $this->request->getJsonVar('Type_Relation'),
            'Visa_direction' =>  $this->request->getJsonVar('Visa_direction'),            
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
        $model = new ActivityModel();
        $data = $model->find($id);
        if($data == null){
            return $this->failNotFound("item not found");
        }
       $model->delete($id);
       return $this->respondDeleted($data);
    }
}
