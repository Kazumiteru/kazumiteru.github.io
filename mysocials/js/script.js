/* DISCORD-NAMEN KOPIEREN */
function clickToCopy() {
    let DISCORD_NAME = "URP#4444"
    let username = prompt("Wie heißt du auf Discord?");
    
    if (username.includes("#") == false) {
        return(alert("Dieser Name ist Ungültig, da er kein Hashtag beinhält."))
    }
    
    let splitUsername = username.split("#")
    let bannedWords = ["everyone", "here", "discord"]
    let bannedCharacters = ["@", "#", ":", "```"]
    let bannedHashtagCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", `${bannedCharacters}`, `${bannedWords}`]
    let namePart = splitUsername[0];
    
    if (splitUsername[1].length < 4) {
        return(alert("Dein Username ist nicht gültig, da er weniger als 4 Zeichen nach dem Hashtag hat!"))
    }

    if (username == "") {
        return(alert("Du musst deinen Discord-Username eingeben"))
    }

    if (namePart.length > 32) {
        return(alert("Dein Username ist nicht gültig, er ist länger als 32 Zeichen!"))
    }

    if (splitUsername[1].length > 4) {
        return(alert("Dieser Username ist nicht gültig, er hat einen Tag der Länger als 4 Zeichen geht!"))
    }

    for (let i = 0; i < bannedWords.length; i++){
        if(bannedWords[i] == namePart){
            return(alert("Dieser Username ist ungültig, da er Wörter beinhaltet die nicht erlaubt sind."))
        }
    }

    for (let i = 0; i < bannedCharacters.length; i++){
        if(namePart.includes(bannedCharacters[i])){
            return(alert("Dieser Username ist ungültig, da er Zeichen beinhaltet die nicht erlaubt sind."))
        }
    }

    for (let i = 0; i < bannedHashtagCharacters.length; i++){
        if(namePart.includes(bannedHashtagCharacters[i])){
            return(alert("Dieser Username ist ungültig, da im Tag Zeichen stehen die nicht erlaubt sind."))
        }
    }

    navigator.clipboard.writeText("URP#4444") /* DISCORD_NAME */
    .then(() => { alert(`Discord-Namen ${DISCORD_NAME} Erfolgreich Kopiert!`); }) /* ERFOLGREICH KOPIERT ALERT */
    .catch((error) => { alert(`Ein Fehler ist aufgetreten! Fehler: ${error}. Bitte kontaktieren sie den Seitenbesitzer falls dieses Probem weiterhin auftritt.`); }); /* ERROR ALERT */

    
    const webhook_infos = {
      username: "About me Seite Logs",
      avatar_url: "",
      content: `Ein User hat deinen Discord-Namen auf deiner 'About me' Seite Kopiert!\n\nHier sind eine Paar Infos über den Nutzer:\n\nDiscord-Name: ${username} \nE-Mail Addresse: ${mailname}`
    }

    request.send(JSON.stringify(webhook_infos));
}
/* DISCORD NAMEN KOPIEREN ENDE */