<?php

namespace App\Controllers;

use App\Models\MessageModel;
use CodeIgniter\RESTful\ResourceController;

class MessagesController extends ResourceController
{
    /**
     * Return an array of resource objects, themselves in array format
     *
     * @return mixed
     */
    public function index()
    {
        $model = new MessageModel();
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
        $user = new MessageModel();
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
        $model = new MessageModel();
        $data = [
            'msg_nomprenom' => $this->request->getJsonVar('msg_nomprenom'),
            'msg_sujet' =>  $this->request->getJsonVar('msg_sujet'),
            'msg_email' => $this->request->getJsonVar('msg_email'),
            'msg_tel' => $this->request->getJsonVar('msg_tel'),
            'msg_desc' =>  $this->request->getJsonVar('msg_desc'),       
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
        $model = new MessageModel();
        $data = $model->find($id);
        if($data == null){
            return $this->failNotFound("item not found");
        }
        $data = [
            'msg_nomprenom' => $this->request->getJsonVar('msg_nomprenom'),
            'msg_sujet' =>  $this->request->getJsonVar('msg_sujet'),
            'msg_email' => $this->request->getJsonVar('msg_email'),
            'msg_tel' => $this->request->getJsonVar('msg_tel'),
            'msg_desc' =>  $this->request->getJsonVar('msg_desc'),       
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
        $model = new MessageModel();
        $data = $model->find($id);
        if($data == null){
            return $this->failNotFound("item not found");
        }
       $model->delete($id);
       return $this->respondDeleted($data);
    }
}
