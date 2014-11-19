# Cr&eacute;ation d'un site

## Step - 04 : Création d'une structure

`<MON_REPERTOIRE>` correspond &agrave; l'endroit o&ugrave; vous allez cr&eacute;er votre application.
Vous devez d'abord le cr&eacute;er. Clic droit Nouveau > Dossier

### Mise à niveau

Ouvrez un terminal et saisissez :

    cd <MON_REPERTOIRE>
    git clone git@github.com:Picta-it/from-A-to-Z.git .
    git checkout -b step-03 step-03

Nous venons de récupérer les sources de l'étape 03.

### Contenu

Nous allons définir un contenu factice de site pour continuer les prochaines étapes.

Nous allons disposer de l'accueil, d'une liste de produits, d'un forum, de news et d'une page de contact.

Voici l'arborescence du site :

    /
    /produits
    /produits/{id}
    /forum
    /forum/{id}/{}
    /news
    /news/{id}
    /contact

On y associe les méthodes HTTP correspondantes :

    GET     /                         Racine du site
    GET     /produits                 Affiche la liste des produits
    GET     /produits/{id}            Affiche un produit
    POST    /produits                 Ajout d'un produit
    PUT     /produits/{id}            Modifie un produit
    DELETE  /produits/{id}            Supprime un produit
    GET     /forum                    Affiche la liste des topics
    GET     /forum/{id}               Affiche la premiere page d'un topic
    GET     /forum/{id}/{page}        Affiche la page n d'un topic
    POST    /forum                    Ajoute un topic au forum
    POST    /forum/{id}               Ajoute un message au topic
    PUT     /forum/{id}               Modifie un topic
    PUT     /forum/{id}/{message}     Modifie un topic
    DELETE  /forum/{id}               Supprime un topic
    DELETE  /forum/{id}/{message}     Supprime le message d'un topic
    GET     /news                     Affiche les news
    GET     /news/{id}                Affiche une news
    POST    /news                     Ajoute une news
    PUT     /news/{id}                Modifie une news
    DELETE  /news/{id}                Supprime une news
    GET     /contact                  Affiche la page des contacts

### Réalisation

On va créer les fichiers suivants :

    app/views/index.html
    app/views/produits.html
    app/views/produits_show.html
    app/views/produits_create.html
    app/views/produits_edit.html
    app/views/produits_delete.html
    app/views/forum.html
    app/views/forum_show.html
    app/views/forum_create.html
    app/views/forum_message_create.html
    app/views/forum_edit.html
    app/views/forum_message_edit.html
    app/views/forum_delete.html
    app/views/forum_message_delete.html
    app/views/news.html
    app/views/news_show.html
    app/views/news_create.html
    app/views/news_edit.html
    app/views/news_delete.html
    app/views/contact.html

Ca fait beaucoup de fichier à créer. Ouvrez un terminal et placez vous dans votre répertoire <MON_REPERTOIRE>.

Pour Windows :

    copy /y nul app/views/index.html
    copy /y nul app/views/produits.html
    copy /y nul app/views/produits_show.html
    copy /y nul app/views/produits_create.html
    copy /y nul app/views/produits_edit.html
    copy /y nul app/views/produits_delete.html
    copy /y nul app/views/forum.html
    copy /y nul app/views/forum_show.html
    copy /y nul app/views/forum_create.html
    copy /y nul app/views/forum_message_create.html
    copy /y nul app/views/forum_edit.html
    copy /y nul app/views/forum_message_edit.html
    copy /y nul app/views/forum_delete.html
    copy /y nul app/views/forum_message_delete.html
    copy /y nul app/views/news.html
    copy /y nul app/views/news_show.html
    copy /y nul app/views/news_create.html
    copy /y nul app/views/news_edit.html
    copy /y nul app/views/news_delete.html
    copy /y nul app/views/contact.html

Pour Mac et Linux :

    touch app/views/index.html
    touch app/views/produits.html
    touch app/views/produits_show.html
    touch app/views/produits_create.html
    touch app/views/produits_edit.html
    touch app/views/produits_delete.html
    touch app/views/forum.html
    touch app/views/forum_show.html
    touch app/views/forum_create.html
    touch app/views/forum_message_create.html
    touch app/views/forum_edit.html
    touch app/views/forum_message_edit.html
    touch app/views/forum_delete.html
    touch app/views/forum_message_delete.html
    touch app/views/news.html
    touch app/views/news_show.html
    touch app/views/news_create.html
    touch app/views/news_edit.html
    touch app/views/news_delete.html
    touch app/views/contact.html


Maintenant on va faire le mapping depuis `index.js`.

    server.route({
      method:   'GET',
      path:     '/',
      handler: function (request, reply) {
        reply.view(
          'index',
          {},
          { layout: 'main' }
        );
      }
    });
  
    server.route({
      method:   'GET',
      path:     '/produits',
      handler: function (request, reply) {
        reply.view(
          'produits',
          {},
          { layout: 'main' }
        );
      }
    });
  
    server.route({
      method:   'GET',
      path:     '/produits/{id}',
      handler: function (request, reply) {
        reply.view(
          'produits_show',
          {},
          { layout: 'main' }
        );
      }
    });
  
    server.route({
      method:   'POST',
      path:     '/produits',
      handler: function (request, reply) {
        reply.view(
          'produits_create',
          {},
          { layout: 'main' }
        );
      }
    });
  
    server.route({
      method:   'PUT',
      path:     '/produits/{id}',
      handler: function (request, reply) {
        reply.view(
          'produits_edit',
          {},
          { layout: 'main' }
        );
      }
    });
  
    server.route({
      method:   'DELETE',
      path:     '/produits/{id}',
      handler: function (request, reply) {
        reply.view(
          'produits_delete',
          {},
          { layout: 'main' }
        );
      }
    });

    server.route({
      method:   'GET',
      path:     '/forum',
      handler: function (request, reply) {
        reply.view(
          'forum',
          {},
          { layout: 'main' }
        );
      }
    });
  
    server.route({
      method:   'GET',
      path:     '/forum/{id}',
      handler: function (request, reply) {
        reply.view(
          'forum_show',
          {},
          { layout: 'main' }
        );
      }
    });
  
    server.route({
      method:   'GET',
      path:     '/forum/{id}/{page}',
      handler: function (request, reply) {
        reply.view(
          'forum_show',
          {},
          { layout: 'main' }
        );
      }
    });
  
    server.route({
      method:   'POST',
      path:     '/forum',
      handler: function (request, reply) {
        reply.view(
          'forum_create',
          {},
          { layout: 'main' }
        );
      }
    });
  
    server.route({
      method:   'POST',
      path:     '/forum/{id}',
      handler: function (request, reply) {
        reply.view(
          'forum_message_create',
          {},
          { layout: 'main' }
        );
      }
    });
  
    server.route({
      method:   'PUT',
      path:     '/forum/{id}',
      handler: function (request, reply) {
        reply.view(
          'forum_edit',
          {},
          { layout: 'main' }
        );
      }
    });
  
    server.route({
      method:   'PUT',
      path:     '/forum/{id}/{message}',
      handler: function (request, reply) {
        reply.view(
          'forum_message_edit',
          {},
          { layout: 'main' }
        );
      }
    });
  
    server.route({
      method:   'DELETE',
      path:     '/forum/{id}',
      handler: function (request, reply) {
        reply.view(
          'forum_delete',
          {},
          { layout: 'main' }
        );
      }
    });
  
    server.route({
      method:   'DELETE',
      path:     '/forum/{id}/{message}',
      handler: function (request, reply) {
        reply.view(
          'forum_message_delete',
          {},
          { layout: 'main' }
        );
      }
    });
  
    server.route({
      method:   'GET',
      path:     '/news',
      handler: function (request, reply) {
        reply.view(
          'news',
          {},
          { layout: 'main' }
        );
      }
    });
  
    server.route({
      method:   'GET',
      path:     '/news/{id}',
      handler: function (request, reply) {
        reply.view(
          'news_show',
          {},
          { layout: 'main' }
        );
      }
    });
  
    server.route({
      method:   'POST',
      path:     '/news',
      handler: function (request, reply) {
        reply.view(
          'news_create',
          {},
          { layout: 'main' }
        );
      }
    });
  
    server.route({
      method:   'PUT',
      path:     '/news/{id}',
      handler: function (request, reply) {
        reply.view(
          'news_edit',
          {},
          { layout: 'main' }
        );
      }
    });
  
    server.route({
      method:   'DELETE',
      path:     '/news/{id}',
      handler: function (request, reply) {
        reply.view(
          'news_delete',
          {},
          { layout: 'main' }
        );
      }
    });
  
    server.route({
      method:   'GET',
      path:     '/contact',
      handler: function (request, reply) {
        reply.view(
          'contact',
          {},
          { layout: 'main' }
        );
      }
    });

On crée maintenant le contenu statique pour toutes les vues. Nous créerons le fonctionnement dans une prochaine étape.

#### Vue index.html

    <h1>Accueil</h1>

    <p>Un petit texte de présentation.</p>

#### Vue produits.html

    <h1>Listes des produits :</h1>
    
    <ul>
      <li>Produit n°1</li>
      <li>Produit n°2</li>
      <li>Produit n°3</li>
      <li>Produit n°4</li>
      <li>Produit n°5</li>
      <li>Produit n°6</li>
      <li>Produit n°7</li>
    </ul>

#### Vue produits_create.html

    <h2>Le produit a bien été créé</h2>

#### Vue produits_show.html

    <h1>Produit n°1</h1>

    <p>Description du produit numéro 1</p>

#### Vue produits_edit.html

    <h2>Le produit a bien été modifié</h2>

#### Vue produits_delete.html

    <h2>Le produit n°1 a bien été supprimé</h2>

#### Vue forum.html

    <h1>Listes des posts du forum :</h1>
    
    <ul>
      <li>Titre du post n°1</li>
      <li>Titre du post n°2</li>
      <li>Titre du post n°3</li>
      <li>Titre du post n°4</li>
      <li>Titre du post n°5</li>
      <li>Titre du post n°6</li>
      <li>Titre du post n°7</li>
    </ul>

#### Vue app/views/forum_show.html

    <h1>Titre du post n°1</h1>

    <h2>Messages</h2>
    <p>Message n°1</p>
    <p>Message n°2</p>
    <p>Message n°3</p>
    <p>Message n°4</p>
    <p>Message n°5</p>
    <p>Message n°6</p>

#### Vue app/views/forum_create.html

    <h2>Le topic a bien été créé</h2>

#### Vue app/views/forum_message_create.html

    <h2>Le message a bien été créé</h2>

#### Vue app/views/forum_edit.html

    <h2>Le topic a bien été modifié</h2>

#### Vue app/views/forum_message_edit.html

    <h2>Le message a bien été modifié</h2>

#### Vue app/views/forum_delete.html

    <h2>Le topic numéro 1 à été supprimé.</h2>

#### Vue app/views/forum_message_delete.html

    <h2>Le message numéro 1 à été supprimé.</h2>

#### Vue app/views/news.html

    <h1>News</h1>

    <p>News n°1</p>
    <p>News n°2</p>
    <p>News n°3</p>
    <p>News n°4</p>
    <p>News n°5</p>
    <p>News n°6</p>

#### Vue app/views/news_show.html

    <h1>News n°1</h1>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.</p>

#### Vue app/views/news_create.html

    <h2>La news a bien été créée</h2>

#### Vue app/views/news_edit.html

    <h2>La news a bien été modifiée</h2>

#### Vue app/views/news_delete.html

    <h2>La news numéro 1 à été supprimée.</h2>

#### Vue app/views/contact.html

    Vous pouvez nous contacter au : 05 00 00 00 00

### Kesako - petites explications

Les méthodes HTTP correspondent à la manière de communiquer entre le client et le serveur.

De façon absolue, rien ne vous oblige à les utiliser comme décrit ci-dessous. Il s'agit des normes sur leur utilisation  décrit dans la [rfc2616](http://www.w3.org/Protocols/rfc2616/rfc2616.html).

#### GET
Cette méthode sert à récupérer des informations sans action sur le serveur.

Exemple :

`http://mon_site/produit` avec la méthode GET permet d'afficher les produits.

#### POST
Cette méthode permet d'ajouter un nouvel objet indiqué par l'URI. Les propriétés de l'objet lui sont passés en paramètre.

Exemple :

`http://mon_site/produit` avec la méthode POST permet d'insérer un nouveau produit.

#### PUT
Cette méthode permet de modifier un objet existant correspondant à l'URI.

Exemple :

`http://mon_site/produit/12` avec la méthode PUT permet de modifier le produit numéro 12.


#### DELETE
Cette méthode est utilisée pour supprimer un objet.

Exemple :

`http://mon_site/produit/12` avec la méthode DELETE permet de supprimer le produit numéro 12.
