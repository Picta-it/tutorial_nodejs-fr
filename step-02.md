# Création d'un site

## Step - 02 : Les templates

`<MON_REPERTOIRE>` correspond à l'endroit où vous allez créer votre application.
Vous devez d'abord le créer. Clic droit Nouveau > Dossier

### Mise à niveau

Ouvrez un terminal et saisissez :

    cd <MON_REPERTOIRE>
    git clone git@github.com:Picta-it/from-A-to-Z.git .
    git checkout -b step-01 step-01

Nous venons de récupérer les sources de l'étape 01.

### Qu'est-ce que les templates

Les templates sont des modèles de document remplissables informatiquement.

Par exemple, si l'on dispose d'un fichier formulaire.txt comme ci-dessous :

    Prénom : Pierre
    Nom : Dupond
    Age : 43
    Adresse : 2 rue de la grande mouette
    CP : 17000
    Ville : La Rochelle

On peut le transformer en template `handlebars` (c'est un type de template) comme suit :

    Prénom : {{ firstname }}
    Nom : {{ lastname }}
    Age : {{ age }}
    Adresse : {{ address.address }}
    CP : {{ address.zipcode }}
    Ville : {{  address.city}}

De cette manière, le fichier pourra être rempli simplement.

Dans notre cas, nous allons faire un fichier HTML pour notre site.

### Mise en place des templates

On crée le répertoire suivant :

    <MON_REPERTOIRE>/app/views/

On installe `handlebars` pour les templates :

    cd <MON_REPERTOIRE>
    npm install handlebars --save

On crée notre template `<MON_REPERTOIRE>/app/views/index.html`

    <!DOCTYPE html>
    <html lang="fr">
      <head>
        <meta charset="utf-8">
        <title>{{ title }}</title>
      </head>
      <body>
        <h1>Bonjour,</h1>
        Voici {{ title }}
      </body>
    </html>

Et on configure notre serveur pour l'utiliser (`index.js`)

    var Hapi = require('hapi');
    
    var server = new Hapi.Server('localhost', 3000);

    server.views({
      engines: {
        html: require('handlebars')
      },
      basePath:  __dirname,
      path:      "./app/views/"
    })
    
    server.route({
      method: 'GET',
      path: '/',
      handler: function (request, reply) {
        reply.view('index', {
          title: 'Mon premier site'
        });
      }
    });
    
    server.start();

### On lance le serveur depuis le terminal

    cd <MON_REPERTOIRE>
    node index.js

### Kesako - petites explications

Dans le fichier `<MON_REPERTOIRE>/app/views/index.html`, les deux parties {{ title }} correspondent aux parties variables.

Ensuite, dans le fichier index.js, on indique le fonctionnement des vues :

    server.views({})

On précise que le moteur de templating est handlebars :

    server.views({
      engines: {
        html: require('handlebars')
      }
    })

On lui indique où trouver les templates :
    
    server.views({
      engines: {
        html: require('handlebars')
      },
      basePath:  __dirname,
      path:      "./app/views/"
    })

Et enfin, on remplace le `reply('Hello World !!')` pour préciser la template à utiliser :

    reply.view('index', {
      title: 'Mon premier site'
    });

On utilise la vue index (`index.html`) et on lui indique que `title` vaut **Mon premier site**
