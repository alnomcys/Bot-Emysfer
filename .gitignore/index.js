var commando = require("discord.js-commando");
var yourbot = new commando.Client();
var prefix = ".";
var nbJoueurs = 6;
var mnemo = 5;
var j1 = 5;
var j2 = 5;
var j3 = 5;
var j4 = 5;
var j5 = 5;
var j6 = 5;
var namePJ1 = "défault";
var namePJ2 = "default";
var namePJ3 = "default";
var namePJ4 = "default";
var namePJ5 = "default";
var namePJ6 = "default";

yourbot.login(process.env.TOKEN);

yourbot.registry.registerGroup('other', 'Other');
yourbot.registry.registerCommandsIn(__dirname + "/commands");
yourbot.registry.registerDefaults();

yourbot.on('message', message =>{
  let splitMessage = message.content.split(' ');
  if(!message.guild) return
  if (splitMessage[0] === prefix + "help"){
    message.channel.send("**__Commandes disponibles__** \n");
    message.channel.send("**Récapitulatif des jetons de tout le monde ---->** .recap \n");
    message.channel.send("**Retirer des jetons ---->** .- [m ou j1 ou j2 ou ...] [nombre de jetons] \n");
    message.channel.send("**Ajouter des jetons ---->** .+ [m ou j1 ou j2 ou ...] [nombre de jetons] \n");
    message.channel.send("**Détermine le nombre de joueurs ---->** .nbjoueurs [nombre de joueurs] \n");
    message.channel.send("**Nommer le personnage d'un joueur ---->** .nom [j1 ou j2 ou ...] [nom du personnage] \n");
    message.channel.send("**Réinitialisation des variables du bot ---->** .init \n");
    message.channel.send("**Affecter une valeur à une variable ---->** .set [m ou j1 ou j2 ou ...] [valeur] \n");
    message.channel.send("**Abréviations ---->** m = mnémosphère, j1 = joueur 1, j2 = joueur 2...\n");
  }
  if (splitMessage[0] === prefix + "recap"){
    message.channel.send("Mnémosphère ----> " + mnemo + " JS" + "\n");
    if (nbJoueurs > 0){
      message.channel.send("Joueur 1 : " + namePJ1 + " ----> " + j1 + " JS" + "\n");
    }
    if (nbJoueurs > 1){
      message.channel.send("Joueur 2 : " + namePJ2 + " ----> " + j2 + " JS" + "\n");
    }
    if (nbJoueurs > 2){
    message.channel.send("Joueur 3 : " + namePJ3 + " ----> " + j3 + " JS" + "\n");
    }
    if (nbJoueurs > 3){
    message.channel.send("Joueur 4 : " + namePJ4 + " ----> " + j4 + " JS" + "\n");
    }
    if (nbJoueurs > 4){
    message.channel.send("Joueur 5 : " + namePJ5 + " ----> " + j5 + " JS" + "\n");
    }
    if (nbJoueurs > 5){
    message.channel.send("Joueur 6 : " + namePJ6 + " ----> " + j6 + " JS" + "\n");
    }
  }
  if (splitMessage[0] === prefix + "nbjoueurs"){
    nbJoueurs = parseInt(splitMessage[1]);
    message.channel.send("La partie comporte " + nbJoueurs + " joueurs" + "\n");
  }
  if (splitMessage[0] === prefix + "init"){
      nbJoueurs = 6;
      mnemo = j1 = j2 = j3 = j4 = j5 = j6 = 5;
      namePJ1 = namePJ2 = namePJ3 = namePJ4 = namePJ5 = namePJ6 = "Default";
      message.channel.send("Le bot Emysfer a été réinitialisé " + "\n");
    }
  if (splitMessage[0] === prefix + "nom"){
    switch (splitMessage[1]) {
      case 'j1':
      namePJ1 = splitMessage[2];
      message.channel.send("Le personnage du joueur 1 se nomme " + namePJ1 + "\n");
      break;
      case 'j2':
      namePJ2 = splitMessage[2];
      message.channel.send("Le personnage du joueur 2 se nomme " + namePJ2 + "\n");
      break;
      case 'j3':
      namePJ3 = splitMessage[2];
      message.channel.send("Le personnage du joueur 3 se nomme " + namePJ3 + "\n");
      break;
      case 'j4':
      namePJ4 = splitMessage[2];
      message.channel.send("Le personnage du joueur 4 se nomme " + namePJ4 + "\n");
      break;
      case 'j5':
      namePJ5 = splitMessage[2];
      message.channel.send("Le personnage du joueur 5 se nomme " + namePJ5 + "\n");
      break;
      case 'j6':
      namePJ6 = splitMessage[2];
      message.channel.send("Le personnage du joueur 6 se nomme " + namePJ6 + "\n");
      break;
      default:
      message.channel.send('Désolé, ceci n\'existe pas ' + splitMessage[1] + '.');
    }
  }
  if (splitMessage[0] === prefix + "+"){
    switch (splitMessage[1]) {
      case 'm':
      mnemo = mnemo + parseInt(splitMessage[2]);
      message.channel.send("Mnémosphère ----> " + mnemo + " JS" + "\n");
      break;
      case 'j1':
      j1 = j1 + parseInt(splitMessage[2]);
      message.channel.send("Joueur 1 (" + namePJ1 + ") ----> " + j1 + " JS" + "\n");
      break;
      case 'j2':
      j2 = j2 + parseInt(splitMessage[2]);
      message.channel.send("Joueur 2 (" + namePJ2 + ") ----> " + j2 + " JS" + "\n");
      break;
      case 'j3':
      j3 = j3 + parseInt(splitMessage[2]);
      message.channel.send("Joueur 3 (" + namePJ3 + ") ----> " + j3 + " JS" + "\n");
      break;
      case 'j4':
      j4 = j4 + parseInt(splitMessage[2]);
      message.channel.send("Joueur 4 (" + namePJ4 + ") ----> " + j4 + " JS" + "\n");
      break;
      case 'j5':
      j5 = j5 + parseInt(splitMessage[2]);
      message.channel.send("Joueur 5 (" + namePJ5 + ") ----> " + j5 + " JS" + "\n");
      break;
      case 'j6':
      j6 = j6 + parseInt(splitMessage[2]);
      message.channel.send("Joueur 6 (" + namePJ6 + ") ----> " + j6 + " JS" + "\n");
      break;
      default:
      console.log('Désolé, ceci n\'existe pas ' + splitMessage[1] + '.');
    }
  }
  if (splitMessage[0] === prefix + "-"){
    switch (splitMessage[1]) {
      case 'm':
      mnemo = mnemo - parseInt(splitMessage[2]);
      message.channel.send("Mnémosphère ----> " + mnemo + " JS" + "\n");
      break;
      case 'j1':
      j1 = j1 - parseInt(splitMessage[2]);
      message.channel.send("Joueur 1 (" + namePJ1 + ") ----> " + j1 + " JS" + "\n");
      break;
      case 'j2':
      j2 = j2 - parseInt(splitMessage[2]);
      message.channel.send("Joueur 2 (" + namePJ2 + ") ----> " + j2 + " JS" + "\n");
      break;
      case 'j3':
      j3 = j3 - parseInt(splitMessage[2]);
      message.channel.send("Joueur 3 (" + namePJ3 + ") ----> " + j3 + " JS" + "\n");
      break;
      case 'j4':
      j4 = j4 - parseInt(splitMessage[2]);
      message.channel.send("Joueur 4 (" + namePJ4 + ") ----> " + j4 + " JS" + "\n");
      break;
      case 'j5':
      j5 = j5 - parseInt(splitMessage[2]);
      message.channel.send("Joueur 5 (" + namePJ5 + ") ----> " + j5 + " JS" + "\n");
      break;
      case 'j6':
      j6 = j6 - parseInt(splitMessage[2]);
      message.channel.send("Joueur 6 (" + namePJ6 + ") ----> " + j6 + " JS" + "\n");
      break;
      default:
        message.channel.send('Désolé, ceci n\'existe pas ' + splitMessage[1] + '.');
    }
  }
  if (splitMessage[0] === prefix + "set"){
    switch (splitMessage[1]) {
      case 'm':
      mnemo = parseInt(splitMessage[2]);
      message.channel.send("Mnémosphère ----> " + mnemo + " JS" + "\n");
      break;
      case 'j1':
      j1 = parseInt(splitMessage[2]);
      message.channel.send("Joueur 1 (" + namePJ1 + ") ----> " + j1 + " JS" + "\n");
      break;
      case 'j2':
      j2 = parseInt(splitMessage[2]);
      message.channel.send("Joueur 2 (" + namePJ2 + ") ----> " + j2 + " JS" + "\n");
      break;
      case 'j3':
      j3 = parseInt(splitMessage[2]);
      message.channel.send("Joueur 3 (" + namePJ3 + ") ----> " + j3 + " JS" + "\n");
      break;
      case 'j4':
      j4 = parseInt(splitMessage[2]);
      message.channel.send("Joueur 4 (" + namePJ4 + ") ----> " + j4 + " JS" + "\n");
      break;
      case 'j5':
      j5 = parseInt(splitMessage[2]);
      message.channel.send("Joueur 5 (" + namePJ5 + ") ----> " + j5 + " JS" + "\n");
      break;
      case 'j6':
      j6 = parseInt(splitMessage[2]);
      message.channel.send("Joueur 6 (" + namePJ6 + ") ----> " + j6 + " JS" + "\n");
      break;
      default:
      console.log('Désolé, ceci n\'existe pas ' + splitMessage[1] + '.');
    }
  }
})
