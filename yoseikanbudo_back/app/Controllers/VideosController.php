<?php

namespace App\Controllers;

use App\Models\VideoModel;
use CodeIgniter\RESTful\ResourceController;

class VideosController extends ResourceController
{
    /**
     * Return an array of resource objects, themselves in array format
     *
     * @return mixed
     */
    public function index()
    {
        $model = new VideoModel();
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
        $user = new VideoModel();
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
        $model = new VideoModel();
        $data = [
            'name_vid'=> $this->request->getJsonVar('name_vid'), 
            'etat'=> $this->request->getJsonVar('etat'), 
            'cat_vid'=> $this->request->getJsonVar('cat_vid'),
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
        $model = new VideoModel();
        $data = $model->find($id);
        if($data == null){
            return $this->failNotFound("item not found");
        }
        $data = [
            'name_vid'=> $this->request->getJsonVar('name_vid'), 
            'etat'=> $this->request->getJsonVar('etat'), 
            'cat_vid'=> $this->request->getJsonVar('cat_vid'),
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
        $model = new VideoModel();
        $data = $model->find($id);
        if($data == null){
            return $this->failNotFound("iteam not found");
        }
       $model->delete($id);
       return $this->respondDeleted($data);
    }
}
