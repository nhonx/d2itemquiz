
function randomBuildItem(){
	if(history_item.length==itemcount) return -1;
	var i=rand.fromTo(60,itemcount);
	if(test_items.length==0){
		while(item_in_element.indexOf(i)>=0 || history_item.indexOf(i)>=0 || excluded_ids.indexOf(i)>=0){
		i=rand.fromTo(60,itemcount);
		}
	} else {
		i=rand.pickIn(test_items);
	}	
	history_item.push(i);
	return i;
}
function getScore(){
}
function submitScore(){}