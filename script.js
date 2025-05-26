fetch("data.json")
    .then(response => response.json())
    .then(data => {

        afficherSlogan(data)
        afficherServices(data)
        afficherRealisations(data.realisations)
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
//parametre :du json,donc des donnees : le talbeau de realisation
// return :rien
function afficherRealisations(donnee){
    donnee.forEach(real =>{
        let titre=real.titre;
        let nom=real.description;
        let image=real.imageurl;

        // chercher la bonne div dans notre html : 
        document.getElementById("realisations").innerHTML += `
        <!-- Réalisation 1 -->
      <div class="projet">
        <img
          src="${image}"
          alt="Table en bois ">

        <h3>${titre}</h3>
        <p>${nom}</p>
      </div>
        
        `

    })
}
//role:Afficher le témoignages (id=temoignages), nom des clients témoins(id=clientstémoins),type de prestation(id=typedepresta),commentaire(id=commentaire),note(id=note)
//parmetre:du json, et donc des données et donc rien 
//return:rien

function afficherTemoignages(donnees){
donnees.forEach(donnee=>{
    let prenom=donnee.prenom;
    let typedeprestation=donnee.typedeprestation;
    let commmentaire=donnee.commentaire;
    let note=donnee.note;


// chercher la bonne div dans notre html : 
        document.getElementById("temoignages").innerHTML +=`
        <div class="temoignage">
      <p><strong>${prenom}</strong></p>

      <h3>${typedeprestation}</h3>
      <p>"La Menuisuiserie Bobois a créé une ${commentaire}sur mesure pour ma maison. La qualité du travail est
        exceptionnelle, et le service a été impeccable. Je recommande vivement."</p>
      <p>${note}</p>
    </div>
     `
})
}
