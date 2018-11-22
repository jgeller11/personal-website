var wordWord = ''
var definitionList = []
function confirm(){
    wordWord=document.getElementById('word').value
    document.getElementById('word').style.display='None'
    document.getElementById('confirmButton').style.display='None'
    document.getElementById('wordForRound').style.opacity='1'
    document.getElementById('wordForRound').innerHTML = wordWord.toString()
}

function addDef(){
    definitionList.push(document.getElementById('newDefinition').value)
    document.getElementById('newDefinition').value = ''

}

function showDef(){
    var i;
    var shuffledList = shuffle(definitionList)
    for (i=0; i<definitionList.length; i++){
        document.getElementById('definitionListContainer').innerHTML += "<p><b>"+wordWord+": </b>"+shuffledList[i]+".</p>"
    }
    document.getElementById('confirmButton').style.display='None'
    // document.getElementById('wordForRound').style.display='None'
    document.getElementById('newDefinition').style.display="None"
    document.getElementById('hideThis').style.display="None"

}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
