# Cr&eacute;ation d'un site

## Step - 03 : Les layouts

`<MON_REPERTOIRE>` correspond &agrave; l'endroit o&ugrave; vous allez cr&eacute;er votre application.
Vous devez d'abord le cr&eacute;er. Clic droit Nouveau > Dossier

### Mise à niveau

Ouvrez un terminal et saisissez :

    cd <MON_REPERTOIRE>
    git clone git@github.com:Picta-it/from-A-to-Z.git .
    git checkout -b step-02 step-02

Nous venons de récupérer les sources de l'étape 02.

### Qu'est-ce qu'un layout

Comme on a pu le voir dans l'étape 2, les templates nous permettent de créer des modèles.

Or, lorsque vous vous baladez de pages en pages sur un site, l'aspect reste le même.
 
Bien que le contenu change.

Les layouts nous permettent de définir une enveloppe autour de nos templates.

Le plus simple est de rentrer dans la pratique.

### Mise en place d'un layout

On crée le répertoire suivant :

    <MON_REPERTOIRE>/app/views/layout/

On crée notre layout `<MON_REPERTOIRE>/app/views/layout/main.html`

    <!DOCTYPE html>
    <html lang="fr">
      <head>
        <meta charset="utf-8">
        <title>{{ title }}</title>
      </head>
      <body>
        {{{ content }}}
      </body>
    </html>

On modifie `<MON_REPERTOIRE>/app/views/index.html`.

Il ne contient plus que notre contenu :

    <h1>Bonjour,</h1>
    Voici {{ title }}

Et enfin, on configure notre serveur pour l'utiliser

    ...

    server.views({
      engines: {
        html: require('handlebars')
      },
      layout:       true,
      layoutPath:   "./app/views/layout",
      basePath:     __dirname,
      path:         "./app/views/"
    })
    
    ...

    reply.view('index', {
      title: 'Mon premier site'
    }, {
      layout: 'main'
    });

    ...

### On lance le serveur depuis le terminal

    cd <MON_REPERTOIRE>
    node index.js

### Kesako - petites explications

Dans on précise dans la vue, l'utilisation de layouts et leur emplacement

    layout:       true,
    layoutPath:   "./app/views/layout",

Et on indique quel layout utiliser lors de l'appel de la template :

    {
      layout: 'main'
    }

