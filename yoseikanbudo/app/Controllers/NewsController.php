<?php

namespace App\Controllers;

use App\Models\NewsModel;
use CodeIgniter\RESTful\ResourceController;

class NewsController extends ResourceController
{
    /**
     * Return an array of resource objects, themselves in array format
     *
     * @return mixed
     */
    public function index()
    {
        $model = new NewsModel();
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
        $user = new NewsModel();
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
        $model = new NewsModel();
        $data = [
            'news_title' => $this->request->getJsonVar('news_title'),
            'news_date' =>  $this->request->getJsonVar('news_date'),
            'pic' => $this->request->getJsonVar('pic'),
            'pic_thumb' => $this->request->getJsonVar('pic_thumb'),
            'type_fav' =>  $this->request->getJsonVar('type_fav'),
            'categorie' => $this->request->getJsonVar('categorie')
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
        $model = new NewsModel();
        $data = $model->find($id);
        if($data == null){
            return $this->failNotFound("item not found");
        }
        $data = [
            'news_title' => $this->request->getJsonVar('news_title'),
            'news_date' =>  $this->request->getJsonVar('news_date'),
            'pic' => $this->request->getJsonVar('pic'),
            'pic_thumb' => $this->request->getJsonVar('pic_thumb'),
            'type_fav' =>  $this->request->getJsonVar('type_fav'),
            'categorie' => $this->request->getJsonVar('categorie')
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
        $model = new NewsModel();
        $data = $model->find($id);
        if($data == null){
            return $this->failNotFound("item not found");
        }
       $model->delete($id);
       return $this->respondDeleted($data);
    }
}
