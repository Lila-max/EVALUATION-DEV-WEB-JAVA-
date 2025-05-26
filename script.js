fetch("data.json")
    .then(response => response.json())
    .then(data => {

        afficherSlogan(data)
        afficherServices(data)
    });

    //role : Afficher le slogan(id=slogan), le nom de l'entreprise (id=titreEntreprise) et le texte du bouton (id=CTA) 
    // paramétres : des données (data.json)
    //return : rien

    function afficherSlogan(donnee){

        let slogan = donnee.propositionDeValeur;
        let nom = donnee.entreprise;
        let txtBouton = donnee.texteBouton;

        console.log (slogan, nom, txtBouton)

        document.getElementById("slogan").innerHTML += `${slogan}`
        document.getElementById("titreEntreprise").innerHTML += `${nom}`
        document.getElementById("CTA").innerHTML += `${txtBouton}`

}


// role : Afficher les services (id=ulService)
//parametre : du json, donc des données
//return : rien

function afficherServices(donnee){

    let listeServices=""

    donnee.promessesClients.forEach(service => {

        listeServices += `<li>${service}</li>`
        
    });

    document.getElementById("ulService").innerHTML += listeServices

    console.log(listeServices)
}

// role : Afficher les réalisations(id=realisation),le nom des créations(id=création)et (id=image)
//parametre :du json,donc des donnees
// return :rien
function afficherRealisations(donnee){
let réalisations=donnee.titre;
let nom=donnee.description;
let image=donnee.imageur1;

console.log(réalisations,nom,image)
document.getElementById("réalisation").innerHTML+=`${réalisations}`
document.getElementById("création").innerHTML+=`${nom}`
document.getElementById("image").innerHTML+=`${image}`

}

