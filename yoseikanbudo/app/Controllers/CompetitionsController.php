<?php

namespace App\Controllers;

use App\Models\CompetitionModel;
use CodeIgniter\RESTful\ResourceController;

class CompetitionsController extends ResourceController
{
    /**
     * Return an array of resource objects, themselves in array format
     *
     * @return mixed
     */
    public function index()
    {
        $model = new CompetitionModel();
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
        $user = new CompetitionModel();
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
        $model = new CompetitionModel();
        $data = [
            'ordre' => $this->request->getJsonVar('ordre'),
            'Poid' =>  $this->request->getJsonVar('Poid'),
            'Nom_Rouge' => $this->request->getJsonVar('Nom_Rouge'),
            'Equipe_Rouge' => $this->request->getJsonVar('Equipe_Rouge'),
            'Nom_Bleu' =>  $this->request->getJsonVar('Nom_Bleu'),
            'Equipe_Bleu' => $this->request->getJsonVar('Equipe_Bleu'),
            'Etat' => $this->request->getJsonVar('Etat'),
            'Resultat' =>  $this->request->getJsonVar('Resultat'),
            'Position' => $this->request->getJsonVar('Position'),
            'G_position' => $this->request->getJsonVar('G_position'),
            'P_position' =>  $this->request->getJsonVar('P_position'),
            'S_Bleu' => $this->request->getJsonVar('S_Bleu'),
            'S_Rouge' => $this->request->getJsonVar('S_Rouge'),
            'P_Bleu' => $this->request->getJsonVar('P_Bleu'),
            'P_Rouge' =>  $this->request->getJsonVar('P_Rouge'),
            'Type' => $this->request->getJsonVar('Type'),
            'Tapis' => $this->request->getJsonVar('Tapis'),
            'Temps' => $this->request->getJsonVar('Temps'),
            'Ord' => $this->request->getJsonVar('Ord'),
            'Tab' =>  $this->request->getJsonVar('Tab'),
            'Id_Competition' => $this->request->getJsonVar('Id_Competition'),
            'Id_Categorie' =>  $this->request->getJsonVar('Id_Categorie')
            
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
        $model = new CompetitionModel();
        $data = $model->find($id);
        if($data == null){
            return $this->failNotFound("item not found");
        }
        $data = [
            'ordre' => $this->request->getJsonVar('ordre'),
            'Poid' =>  $this->request->getJsonVar('Poid'),
            'Nom_Rouge' => $this->request->getJsonVar('Nom_Rouge'),
            'Equipe_Rouge' => $this->request->getJsonVar('Equipe_Rouge'),
            'Nom_Bleu' =>  $this->request->getJsonVar('Nom_Bleu'),
            'Equipe_Bleu' => $this->request->getJsonVar('Equipe_Bleu'),
            'Etat' => $this->request->getJsonVar('Etat'),
            'Resultat' =>  $this->request->getJsonVar('Resultat'),
            'Position' => $this->request->getJsonVar('Position'),
            'G_position' => $this->request->getJsonVar('G_position'),
            'P_position' =>  $this->request->getJsonVar('P_position'),
            'S_Bleu' => $this->request->getJsonVar('S_Bleu'),
            'S_Rouge' => $this->request->getJsonVar('S_Rouge'),
            'P_Bleu' => $this->request->getJsonVar('P_Bleu'),
            'P_Rouge' =>  $this->request->getJsonVar('P_Rouge'),
            'Type' => $this->request->getJsonVar('Type'),
            'Tapis' => $this->request->getJsonVar('Tapis'),
            'Temps' => $this->request->getJsonVar('Temps'),
            'Ord' => $this->request->getJsonVar('Ord'),
            'Tab' =>  $this->request->getJsonVar('Tab'),
            'Id_Competition' => $this->request->getJsonVar('Id_Competition'),
            'Id_Categorie' =>  $this->request->getJsonVar('Id_Categorie')
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
        $model = new CompetitionModel();
        $data = $model->find($id);
        if($data == null){
            return $this->failNotFound("item not found");
        }
       $model->delete($id);
       return $this->respondDeleted($data);
    }
}
