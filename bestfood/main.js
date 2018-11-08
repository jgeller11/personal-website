var snacks = ['chicken nuggets', 'wings', 'french fries', 'potato chips + dip', 'tortilla chips + dip', 'mini hotdogs', 'mini quiche', 'curly fries', 'nachos', 'pizza', 'mac and cheese', 'burgers', 'tacos', 'burritos', 'mozzarella sticks', 'quesadillas', 'soup dumplings', 'french toast sticks']
// var snacks = ['1','2','3','4','5']
var tracker = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var order = []
counter= (snacks.length)*(snacks.length-1)-1

function startUp(){
    alpha='abcdefghijklmnopqrstuvwxyz'
    var j;
    var k;
    for (j = 0; j < snacks.length; j++) {
        for (k = snacks.length-1; k > j; k--){
            order.push(j)
            order.push(k)
        }
    }
    var g;
}
function randomize() {
    if (counter>0){
        document.getElementById('choice1').innerHTML = snacks[order[counter]]
        document.getElementById('choice2').innerHTML = snacks[order[counter-1]] + '?'
    } else {
        document.getElementById('choice1').style.display='none'
        document.getElementById('choice2').style.display='none'
        document.getElementById('or').style.display='none'
    }
    redisplay()
}

function one() {
    tracker[order[counter]]= tracker[order[counter]]+1
    counter = (counter-2);
    randomize()

}

function two() {
    tracker[order[counter-1]]+=1
    counter = (counter-2)%((snacks.length)*(snacks.length-1)-1);
    randomize()
}

function redisplay(){
    var x;
    var first = 0;
    var second = 0;
    var third = 0;
    var fourth = 0;
    var fifth = 0;
    var firstIndex = -1;
    var secondIndex = -2;
    var thirdIndex = -3;
    var fourthIndex = -4;
    var fifthIndex = -5;
    for (x=0; x<tracker.length; x++){
        if (tracker[x]>first){
            fifth = fourth
            fifthIndex = fourthIndex
            fourth = third
            fourthIndex = thirdIndex
            third = second
            thirdIndex = secondIndex
            second = first
            secondIndex = firstIndex
            first = tracker[x]
            firstIndex=x
        } else if (tracker[x] > second){
            fifth = fourth
            fifthIndex = fourthIndex
            fourth = third
            fourthIndex = thirdIndex
            third = second
            thirdIndex = secondIndex
            second = tracker[x]
            secondIndex = x
        } else if (tracker[x] > third){
            fifth = fourth
            fifthIndex = fourthIndex
            fourth = third
            fourthIndex = thirdIndex
            third = tracker[x]
            thirdIndex=x
        } else if (tracker[x] > fourth){
            fifth = fourth
            fifthIndex = fourthIndex
            fourth = tracker[x]
            fourthIndex = x
        } else if (tracker[x] > fifth){
            fifth = tracker[x]
            fifthIndex = x
        }

    }
    if (fifthIndex>=0){
        document.getElementById('first').innerHTML = '1: '+snacks[firstIndex]
        document.getElementById('second').innerHTML = '2: '+snacks[secondIndex]
        document.getElementById('third').innerHTML = '3: '+snacks[thirdIndex]
        document.getElementById('fourth').innerHTML = '4: '+snacks[fourthIndex]
        document.getElementById('fifth').innerHTML = '5: '+snacks[fifthIndex]
    }
}
