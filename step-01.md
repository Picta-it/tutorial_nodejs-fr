# Cr&eacute;ation d'un site

## Step - 01 : Cr&eacute;ation de notre Hello World !!

`<MON_REPERTOIRE>` correspond &agrave; l'endroit o&ugrave; vous allez cr&eacute;er votre application.
Vous devez d'abord le cr&eacute;er. Clic droit Nouveau > Dossier

### On initialise notre projet.

Ouvrez un terminal et saisissez :

    cd <MON_REPERTOIRE>
    npm init -f

Saisissez votre nom, puis <kbd>Entr&eacute;e</kbd>. Si vous le souhaitez, vous pouvez personnaliser le projet en enlevant le `-f` : `npm init`. Ces valeurs servent uniquement &agrave; titre indicatif pour le moment. Donc, vous ne risquez pas de tout casser.

Une fois termin&eacute;, ces valeurs sont mises dans le fichier `package.json` dans un format plus informatique.

### Nous allons installer [Hapi.JS](http://hapijs.com/).

Dans le terminal saisissez

    npm install hapi --save

### On cr&eacute;e notre Hello World

Cr&eacute;ez le fichier `index.js ` et mettez-y ce contenu :

    var Hapi = require('hapi');
    
    var server = new Hapi.Server('localhost', 3000);
    
    server.route({
      method: 'GET',
      path: '/',
      handler: function (request, reply) {
        reply('Hello World !!');
      }
    });
    
    server.start();

### On lance le serveur depuis le terminal

    cd <MON_REPERTOIRE>
    node index.js

### On regarde notre travail

Ouvrez votre navigateur (Firefox, Chrome, Internet Explorer, Opera, etc. au choix)

Et rentrez l'adresse suivante dans l'URL (le champ blanc tout en haut de l'écran)

    localhost:3000

[Ou cliquez l&agrave;](http://localhost:3000)

### Kesako - petites explications

Re-voyons le fichier index.js

**On récupère la librairie Hapi pour pouvoir travailler avec :**

    var Hapi = require('hapi');
    
**On crée un serveur qui écoutera sur le port 3000 :**

    var server = new Hapi.Server('localhost', 3000);
    
**On définit une nouvelle route sur ce serveur :**

    server.route({
       ...
    })

Une route correspond à la fin de notre URL.

Par exemple, si vous allez sur http://localhost:3000/pouetpouet
`/pouetpouet` correspondra à notre route

**On passe 3 options à server.route :**

`method: 'GET'` : Il s'agit du type de communication HTTP. Il en existe plusieurs autres comme 'POST', 'PUT', 'DELETE' et d'autres plus sophistiqués. **Elle servent principalement pour les formulaires, donc laissez GET**

`path: '/'`: On précise le chemin de la route.

`handler: function( request, reply) {}` : On précise ce qui se passe quand quelqu'un va sur cet URL.

**Ce qui nous donne :**

    server.route({
      method: 'GET',
      path: '/',
      handler: function (request, reply) {
        reply('Hello World !!');
      }
    });

`reply('Hello World !!')` nous permet de renvoyer du texte simple à l'utilisateur.

**Et enfin, on démarre le serveur :**

    server.start();

