<?php

namespace App\Controllers;

use App\Models\CombatModel;
use CodeIgniter\RESTful\ResourceController;

class CombatsController extends ResourceController
{
    /**
     * Return an array of resource objects, themselves in array format
     *
     * @return mixed
     */
    public function index()
    {
        $model = new CombatModel();
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
        $user = new CombatModel();
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
        $model = new CombatModel();
        $data = [
            'tableau' => $this->request->getJsonVar('tableau'),
            'posit' =>  $this->request->getJsonVar('posit'),
            'nblanc' => $this->request->getJsonVar('nblanc'),
            ' cblanc' => $this->request->getJsonVar(' cblanc'),
            'nbleu' =>  $this->request->getJsonVar('nbleu'),
            'cbleu' => $this->request->getJsonVar('cbleu'),
            'gang' => $this->request->getJsonVar('gang'),
            'cgang' =>  $this->request->getJsonVar('cgang'),
            'perd' => $this->request->getJsonVar('perd'),
            'cperd' => $this->request->getJsonVar('cperd'),
            'gposit' =>  $this->request->getJsonVar('gposit'),
            'pposit' => $this->request->getJsonVar('pposit'),
            'obs' => $this->request->getJsonVar('obs'),
            'id_tr' => $this->request->getJsonVar('id_tr')
            
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
        $model = new CombatModel();
        $data = $model->find($id);
        if($data == null){
            return $this->failNotFound("item not found");
        }
        $data = [
            'tableau' => $this->request->getJsonVar('tableau'),
            'posit' =>  $this->request->getJsonVar('posit'),
            'nblanc' => $this->request->getJsonVar('nblanc'),
            ' cblanc' => $this->request->getJsonVar(' cblanc'),
            'nbleu' =>  $this->request->getJsonVar('nbleu'),
            'cbleu' => $this->request->getJsonVar('cbleu'),
            'gang' => $this->request->getJsonVar('gang'),
            'cgang' =>  $this->request->getJsonVar('cgang'),
            'perd' => $this->request->getJsonVar('perd'),
            'cperd' => $this->request->getJsonVar('cperd'),
            'gposit' =>  $this->request->getJsonVar('gposit'),
            'pposit' => $this->request->getJsonVar('pposit'),
            'obs' => $this->request->getJsonVar('obs'),
            'id_tr' => $this->request->getJsonVar('id_tr')
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
        $model = new CombatModel();
        $data = $model->find($id);
        if($data == null){
            return $this->failNotFound("item not found");
        }
       $model->delete($id);
       return $this->respondDeleted($data);
    }
}
