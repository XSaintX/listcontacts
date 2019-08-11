<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group([ 'prefix' => 'api/v1' ], function () use ($router) {

    $router->get('listarContacto', 'ContactoController@listarContacto');

    $router->post('grabarContacto', 'ContactoController@grabarContacto');
    $router->put('actualizarContacto', 'ContactoController@actualizarContacto');
    $router->delete('eliminarContacto/{ idcontact }', 'ContactoController@eliminarContacto');
    
});

$router->group([ 'prefix' => 'api/v1' ], function () use ($router) {

    $router->get('listaralgunas', 'PersonController@listaralgunas');
    $router->get('listarContactos/{ idcontact }', 'PersonController@listarContactos');
    $router->get('traerdetallecompleto/{ idcontact }', 'PersonController@traerdetallecompleto');
    $router->post('crearLista', 'PersonController@crearLista');    
    $router->get('listapersonas', 'PersonController@listapersonas'); 
    $router->get('Detalle/{ idperson }', 'PersonController@Detalle'); 
    $router->get('cabecera/{ idperson }', 'PersonController@cabecera'); 
    $router->get('listacontactos/{ idperson }', 'PersonController@listacontactos');
    $router->delete('eliminarlista', 'PersonController@eliminarlista'); 
    $router->get('todasPersonas', 'PersonController@todasPersonas');
});
