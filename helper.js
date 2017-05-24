function rnd(from, to) {
    return Math.floor(Math.random() * (to - from + 1)) + from;
}

function randomBuildItem(){
	var i=rnd(60,itemcount);
	while(item_in_element.indexOf(i)>=0 || history_item.indexOf(i)>=0){
		i=rnd(60,itemcount);
	}
	history_item.push(i);
	return i;
}
function getScore(){
}
function submitScore(){}