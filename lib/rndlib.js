var rand={
	_set:[],
	customSet:function(set){
		this._set=set;
	},
	addToCustomSet:function(ele){
		this._set.push(ele);
	},
	om:function(){
		return this.pickIn(this._set);
	},
	fromTo:function(from, to) {
    return Math.floor(Math.random() * (to - from + 1)) + from;
	},
	inRanges:function(arr){
		var final_arr=[];
		for(var i=0;i<=arr.length-1;i++){
	       final_arr.push(rand.fromTo(arr[i][0],arr[i][1]));
	    }
	    return rand.pickIn(final_arr);
	},
	pickIn:function(array){
	    if(array==null || array.length==0) return;
		return array[rand.fromTo(0,array.length-1)];
	},
	//todo
	integer:function(){},
	//todo
	decimal:function(decimallength){},
	char:function(){
		return String.fromCharCode(rand.fromTo(33,126));
	},
	specialChar:function(){
		var code=rand.inRanges([[33,47],[58,64],[91,96],[123,126]]);
		return String.fromCharCode(code);
	},
	letter:function(){
		var code=rand.inRanges([[65,90],[97,122]]);
		return String.fromCharCode(code);
	},
	upperLetter:function(){
		var code=rand.fromTo(65,90);
		return String.fromCharCode(code);
	},
	lowerLetter:function(){
		var code=rand.fromTo(97,122);
		return String.fromCharCode(code);
	},
	string:function(length,opt){
		var def_opt={
			number:true,
			lower:true,
			upper:true,
			special:true
		};
		var option= opt || def_opt;
		
	    var rs=[];
	    for(var i=1;i<=length;i++){
	       rs.push(rand.char()); 
	    }
	    return rs.join('');
	},
	color:function(){
	    var a=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
	    var rs=[];
	    for(var i=1;i<=6;i++){
	       rs.push(rand.pickIn(a)); 
	    }
	    return "#"+rs.join('');	    
	},
	//todo
	ip:function(pattern){//pattern = "10.30.*.*"
	    
	},
	card:function(mode){//Need implements for Joker and Black/Red
		var num=["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
		var type = mode == "short" ? ["S","H","D","C"] : (mode=="symbol" ? ["♠","♥","♦","♣"] :["Spade","Heart","Diamond","Club"] );
		return rand.pickIn(num) + (mode != "symbol" ? ".": "")+ rand.pickIn(type);
	}
}
