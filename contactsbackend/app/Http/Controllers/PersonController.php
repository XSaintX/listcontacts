<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
//use DB;

class PersonController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }
    //its supposed redirects automatically here
    
    public function listaralgunas(){
        $accion = 'M01';
        $Contactos = DB::select('call Man_zg_contactlist(?,?,?)',
        array(
            $accion,
            null,
            null
        ));
        return response()->json($Contactos, 200);
    }
    
    public function listarContactos($idcontact){
        $accion = 'M02';
        $Contactos = DB::select('call Man_zg_contactlist(?,?,?)',
        array(
            $accion,
            $idcontact,
            null
        ));
        return response()->json($Contactos, 200);
    }
    
    public function traerdetallecompleto($idcontact){
        $accion = 'M03';
        $Contactos = DB::select('call Man_zg_contactlist(?,?,?)',
        array(
            $accion,
            $idcontact,
            null
        ));
        return response()->json($Contactos, 200);
    }

    //this is my controller to insert but i dont know how to get 
    public function crearLista(Request $request){
 
        //this are the first insert columns until total
        $result = [];
        try{
            $input = [];
            
            //DB::insert('insert into zg_ordencompracab (CodAlm, CodPro, TipAdq, Total) values (?, ?, ?, ?)', [$input['CodAlm'], $input['CodPro'], $input['TipAdq'], $input['Total']]);
            $idperson = $request->get('idperson');
            //$OrdenCompra = DB::table('zg_ordencompracab')->insert($input);
            foreach($request->get('fullitem') as $item)
            {
                $data = [];
                $data['idperson'] = $idperson;
                $data['idcontact'] = $item['idcontact'];
                DB::table('person')->insert(
                    [
                        'idperson' => $data['idperson'],
                        'idcontact' => $data['idcontact']
                    ]
                );
                //DB::table('zg_ordencompradet')->insert($data);
            }
            DB::commit();
            $result = ['message'=>'Successfully added data','status'=> 'success'];
        }catch(\Exception $e){
            //error
            dd($e);
            DB::rollback();
            $result = ['message'=>'Error Occured','status'=> 'error'];
        }
          return response()->json($result);
      } 
      
    public function listapersonas(){
        $accion = 'M04';
        $Contactos = DB::select('call Man_zg_contactlist(?,?,?)',
        array(
            $accion,
            null,
            null
        ));
        return response()->json($Contactos, 200);
    }
       
    public function Detalle($idperson){
        $accion = 'M05';
        $Contactos = DB::select('call Man_zg_contactlist(?,?,?)',
        array(
            $accion,
            null,
            $idperson
        ));
        return response()->json($Contactos, 200);
    }
       
    public function cabecera($idperson){
        $accion = 'M06';
        $Contactos = DB::select('call Man_zg_contactlist(?,?,?)',
        array(
            $accion,
            null,
            $idperson
        ));
        return response()->json($Contactos, 200);
    }
       
    public function listacontactos($idperson){
        $accion = 'M07';
        $Contactos = DB::select('call Man_zg_contactlist(?,?,?)',
        array(
            $accion,
            null,
            $idperson
        ));
        return response()->json($Contactos, 200);
    }

    public function eliminarlista($idperson){
        $accion = 'M08';
             
        $Contactos = DB::select('call Man_zg_contactlist(?,?,?)',
        array(
            $accion,
            null,
            $idperson    
        ));
        return response()->json(['Linea eliminada'=>$Contactos], 200);      
      } 
      public function todasPersonas(){
          $accion = 'M09';
          $Contactos = DB::select('call Man_zg_contactlist(?,?,?)',
          array(
              $accion,
              null,
              null
          ));
          return response()->json($Contactos, 200);
      } 
}
