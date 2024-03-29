# P5 - Orinoco #

Aperçu : https://github.com/Ericwebdev10/ericgautier_5_27052021/tree/main/Overview

## Création d'un site e-commerce (MVP) avec Bootstrap et JavaScript.
#### - Définir le plan de test
#### - Définir et développer l'interface graphique Bootstrap
#### - Se connecter au serveur backend pour récupérer les produits
#### - Afficher un produit et ses options puis l'ajouter au panier
#### - Afficher les produits dans le panier et les modifier
#### - Vérifier les données du formulaire (REGEX)
#### - Afficher le récapitulatif de commande 

# 

#### Comment démarrer le serveur backend :
Dans le terminal, 
- changer de repertoire  ..\backend 	(command "cd backend"), 
- lancer node server			        (command "node server") => Listening on port 3000,
- ouvrir la page index.html dans le dossier frontend
#### How to start the backend server :
Go to the terminal,
- change the directory to ..\backend 	(command "cd backend"), 
- start node server			            (command "node server") => Listening on port 3000,
- Open index.html in the folder frontend

#

### MVP - Spécifications fonctionnelles et techniques ORINOCO

#### SOMMAIRE
- Architecture générale
- Produits présentés
- Planification de tests unitaires
- Informations complémentaires
- Types de données
- Technologies utilisées
- URL des API
- Paramètres des API


#

#### Architecture générale
L’application web sera composée de 4 pages :

- une page de vue sous forme de liste, montrant tous les articles disponibles à la vente ;
- une page “produit”, qui affiche de manière dynamique l'élément sélectionné par l'utilisateur et lui permet de  personnaliser le produit et de l'ajouter à son panier ;
- une page “panier” contenant un résumé des produits dans le panier, le prix total et un formulaire permettant de passer une commande. Les données du formulaire doivent être correctes et bien formatées avant d'être renvoyées au back-end. Par exemple, pas de texte dans les champs date ;
- une page de confirmation de commande, remerciant l'utilisateur pour sa commande, et indiquant le prix total et l'identifiant de commande envoyé par le serveur.

#### Produits présentés 
Dans un premier temps, une seule catégorie de produits sera présentée.
Choix à faire entre les 3 propositions suivantes :
- ~~ours en peluche faits à la main~~
- ~~caméras vintage~~
- meubles en chêne

#### Planification de tests unitaires
- Planifiez une suite de tests unitaires pour couvrir au minimum 80 % de la base de code pour le front-end. Vous devrez formaliser un plan pour atteindre ce résultat, sans obligation d’écrire ces tests Expliquez quelles lignes seront testées, et quels “test cases” seront envisagés.

#### Informations complémentaires
- Pour le MVP, la personnalisation du produit ne sera pas fonctionnelle : la page contenant un seul article aura un menu déroulant permettant à l'utilisateur de choisir une option de personnalisation, mais celle-ci ne sera ni envoyée au serveur ni reflétée dans la réponse du serveur.
- Le code source devra être indenté et utiliser des commentaires. Il devra également utiliser des fonctions globales.
- Concernant l’API, des promesses devront être utilisées pour éviter les rappels.
- Les inputs des utilisateurs doivent être validés avant l’envoi à l’API.

#### Types de données
Tous les produits possèdent les attributs suivants :
- Champ           - Type
- id              - ObjectID
- name            - string
- price           - number
- description     - string
- imageUrl        - string

Chaque type de produit comporte un tableau contenant les string correspondant aux options de personnalisation :
- ~~Caméras : lentilles~~
- ~~Ours en peluche : couleurs~~
- Meubles en chêne : vernis

#### Technologies utilisées
- HTML, CSS, JavaScript.

#### URL des API
- ~~Ours en peluche faits à la main : http://localhost:3000/api/teddies~~
- ~~Caméras vintage : http://localhost:3000/api/cameras~~
- Meubles en chêne : http://localhost:3000/api/furniture

#### Paramètres des API
Chaque API contient 3 paramètres :
- GET     /           Retourne un tableau de tous les éléments
- GET     /:_id       Renvoie l'élément correspondant à identifiant given_id
- POST    /order      Requête JSON contenant un objet de contact et un tableau de produits Retourne l'objet contact, le tableau produits et order_id (string)

#### Validation des données
- Pour les routes POST, l’objet contact envoyé au serveur doit contenir les champs firstName, lastName, address, city et email. Le tableau des produits envoyé au backend doit être un array de strings product_id. Les types de ces champs et leur présence doivent être validés avant l’envoi des données au serveur.
