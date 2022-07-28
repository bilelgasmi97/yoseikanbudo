<?php

namespace App\Models;

use CodeIgniter\Model;

class CompetitionModel extends Model
{
    protected $DBGroup          = 'default';
    protected $table            = 'detail_competion';
    protected $primaryKey       = 'ID_Detail_Comp';
    protected $useAutoIncrement = true;
    protected $insertID         = 0;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = [
        'ordre','Poid,Nom_Rouge','Equipe_Rouge','
        Nom_Bleu','Equipe_Bleu','Etat','
        Resultat','Position','G_position','
        P_position','S_Bleu','S_Rouge','
        P_Bleu','P_Rouge','Type','
        Tapis','Temps','Ord','
        Tab','Id_Competition','Id_Categorie'
    ];

    // Dates
    protected $useTimestamps = false;
    protected $dateFormat    = 'datetime';
    protected $createdField  = 'created_at';
    protected $updatedField  = 'updated_at';
    protected $deletedField  = 'deleted_at';

    
}
