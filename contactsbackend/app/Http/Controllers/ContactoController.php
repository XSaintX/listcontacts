<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
//use DB;

class ContactoController extends Controller
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
    
    
    public function grabarContacto(Request $request){
      $accion = 'M01';
      $idcontact = null;      
      $nombre = $request->get('nombre');
      $email = $request->get('email');   
      $whatsapp = $request->get('whatsapp'); 
      
      $Contactos =  DB::select('call Man_zg_Contactos(?,?,?,?,?)'
      ,array(
            $accion,
            $idcontact,
            $nombre,
            $email,
            $whatsapp
                      
      ));
      return response()->json(['Contacto creado'=>$Contactos], 201);
    }
    
    public function actualizarContacto(Request $request){
      $accion = 'M02';
      $idcontact = $request->get('idcontact');
      $nombre = $request->get('nombre');
      $email = $request->get('email');   
      $whatsapp = $request->get('whatsapp');  
      
      $Contactos =  DB::select('call Man_zg_Contactos(?,?,?,?,?)'
      ,array(
        $accion,
        $idcontact,
        $nombre,
        $email,
        $whatsapp           
      ));
      return response()->json(['Contacto Actualizado'=>$Contactos], 200);
    }

    public function eliminarContacto($idcontact){
      $accion = 'M03';
      $idcontact;
      $nombre = null;
      $email = null;
      $whatsapp = null;
          
      $Contactos = DB::select('call Man_zg_Contactos(?,?,?,?,?)',
      array(
          $accion,
          $idcontact,
          null,
          null,
          null                
      ));
      return response()->json(['Contacto eliminado'=>$Contactos], 200);
      
    }
    
    public function listarContacto(){
        $accion = 'S01';
        $Contactos = DB::select('call Man_zg_Contactos(?,?,?,?,?)',
        array(
            $accion,
            null,
            null,
            null,
            null
        ));
        return response()->json($Contactos, 200);
    }
    
       
}
