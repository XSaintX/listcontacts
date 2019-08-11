# ContactsList

In this project I create contacts to then create a person which will have a list of contacts created previously, each person is a contact so will be added by dropdownlist and the contacts are added by popup so you will see how to pass parameters between child and parent components.

## Installation:
npm install


## backend

The backend was developed in lumen, after downloadind with this command composer create-project --prefer-dist laravel/lumen backend I added the CorsMiddleware.php file in Middleware folder to receive request from my frontend, also I uncomment the facades line and added the corsmiddleware to the app.php
and finally in .env file you can edit the parameters according to your variables, the script is added on the backendfolder so you can download
