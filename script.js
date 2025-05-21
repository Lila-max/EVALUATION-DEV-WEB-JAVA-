fetch("articles-data.json")
    .then(response => response.json())
    .then(data => {
        //ici et uniquement ici j'ai acces a mon tablea de données
        afficherArticles(data)
    });



