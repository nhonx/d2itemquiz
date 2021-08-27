
function randomBuildItem() {
	if (HISTORY_ITEM.length == ITEM_COUNT) return null;
	// var i = rand.fromTo(0, ITEM_COUNT);
	var i = rand.pickIn(Object.keys(ITEM_REL))
	if (TEST_ITEMS.length == 0) {
		while (HISTORY_ITEM.indexOf(i) >= 0 || EXCLUDE_IDS.indexOf(i) >= 0) {
			// i = rand.fromTo(60, ITEM_COUNT);
			i = rand.pickIn(Object.keys(ITEM_REL))
		}
	} else {
		i = rand.pickIn(TEST_ITEMS);
	}
	HISTORY_ITEM.push(i);
	return i;
}
function getScore() {
}
function submitScore() { }