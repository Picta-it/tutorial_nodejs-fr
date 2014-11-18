# Cr&eacute;ation d'un site

## Pr&eacute;requis

### Installation de [Node.JS](http://nodejs.org/download/)

Pour &ecirc;tre sur que l'installation fonctionne.

Ouvrez un terminal et lancez :

    node --version
    npm --version

## Step - 01 : Cr&eacute;ation de notre Hello World !!

<MON_REPERTOIRE> correspond &agrave; l'endroit o&ugrave; vous allez cr&eacute;er votre application.
Vous devez d'abord le cr&eacute;er. Clique droit Nouveau > Dossier

### On initialise notre projet.

Ouvrez un terminal et saisissez :

    cd <MON_REPERTOIRE>
    npm init -f

Saisissez votre nom, puis -Entr&eacute;e-. Si vous le souhaitez, vous pouvez personnaliser le projet en enlevant le `-f` : `npm init`. Ces valeurs servent uniquement &agrave; titre indicatif pour le moment. Donc, vous ne risquez pas de tout casser.

Une fois termin&eacute;, ces valeurs sont mises dans le fichier `package.json` dans un format plus informatique.

### Nous allons installer [Hapi.JS](http://hapijs.com/).

Dans le terminal saisissez

    npm install hapi --save

### On cr&eacute;e notre Hello World

Cr&eacute;ez le fichier `index.js ` et mettez-y ce contenu :

    var Hapi = require('hapi');
    
    // Create a server with a host and port
    var server = new Hapi.Server('localhost', 3000);
    
    // Add the route
    server.route({
      method: 'GET',
      path: '/',
      handler: function (request, reply) {
        reply('Hello World !!');
      }
    });
    
    // Start the server
    server.start();

### On regarde notre travail

Ouvrez votre navigateur (Firefox, Chrome, Internet Explorer, Opera, etc. au choix)

Et rentrez l'adresse suivante dans l'URL (le champ blanc tou en haut de l'écran)

    localhost:3000

[Ou cliquez l&agrave;](http://localhost:3000)
