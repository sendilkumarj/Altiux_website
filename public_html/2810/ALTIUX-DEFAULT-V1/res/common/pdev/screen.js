

var w=window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;
var h=window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;


var SMALL_SCREEN_START_RANGE = 0;
var SMALL_SCREEN_END_RANGE = 780;
var BIG_SCREEN_START_RANGE = 0;
var BIG_SCREEN_END_RANGE = 780;
var TAB_SCREEN_START_RANGE = 780;
var TAB_SCREEN_END_RANGE = 1280;
var REGULAR_SCREEN_START_RANGE = 1280;
var REGULAR_SCREEN_END_RANGE = 1800;
var TV_SCREEN_START_RANGE = 1800;
var TV_SCREEN_END_RANGE = 80000;


var SMALL_SCREEN_RANGE_TYPE 	= 0x00;
var BIG_SCREEN_RANGE_TYPE 		= 0x01;
var TAB_SCREEN_RANGE_TYPE 		= 0x02;
var REGULAR_SCREEN_RANGE_TYPE 	= 0x03;
var TV_SCREEN_RANGE_TYPE 		= 0x04;


var SMALL_SCREEN_RANGE = {
		startRange : SMALL_SCREEN_START_RANGE,
		endRange : SMALL_SCREEN_END_RANGE,
		type : SMALL_SCREEN_RANGE_TYPE
};

var BIG_SCREEN_RANGE = {
		startRange : BIG_SCREEN_START_RANGE,
		endRange : BIG_SCREEN_END_RANGE,
		type : BIG_SCREEN_RANGE_TYPE
};

var TAB_SCREEN_RANGE = {
		startRange : TAB_SCREEN_START_RANGE,
		endRange : TAB_SCREEN_END_RANGE,
		type : TAB_SCREEN_RANGE_TYPE
};

var REGULAR_SCREEN_RANGE = {
		startRange : REGULAR_SCREEN_START_RANGE,
		endRange : REGULAR_SCREEN_END_RANGE,
		type : REGULAR_SCREEN_RANGE_TYPE
};

var TV_SCREEN_RANGE = {
		startRange : TV_SCREEN_START_RANGE,
		endRange : TV_SCREEN_END_RANGE,
		type : TV_SCREEN_RANGE_TYPE
};

var RANGES =[SMALL_SCREEN_RANGE, BIG_SCREEN_RANGE, TAB_SCREEN_RANGE, REGULAR_SCREEN_RANGE, TV_SCREEN_RANGE];



/// function to find the range of device (runnning device)
function findRange(width){
	for ( var i = 0; i < RANGES.length; i++) {

		if(( RANGES[i].startRange < width) && (width <= RANGES[i].endRange )){

			return RANGES[i];
		}
	}
}

var obj = findRange(w);
//document.write("your screen width startRange : "+ obj.startRange+"<br>");





function loadcssfile(filename){
	var fileref=document.createElement("link");
	fileref.setAttribute("rel", "stylesheet");
	fileref.setAttribute("type", "text/css");
	fileref.setAttribute("href", filename);
	document.getElementsByTagName("head")[0].appendChild(fileref);
}

//window.onload = onScreenLoad;

function onScreenLoad(relative_path){

console.log("onScreenLoad called..");

		if (obj.type == SMALL_SCREEN_RANGE_TYPE)
		{
			
			loadcssfile(relative_path +"small_screen.css");
			
		}

		else if (obj.type == BIG_SCREEN_RANGE_TYPE)
		{
			loadcssfile(relative_path +"big_screen.css");
			
		}

		else if (obj.type == TAB_SCREEN_RANGE_TYPE)
		{
			
			loadcssfile(relative_path +"tabwgh.css");
				
		}
		else if (obj.type == REGULAR_SCREEN_RANGE_TYPE)
		{

			loadcssfile(relative_path +"regular.css");
			

		}
		else if (obj.type == TV_SCREEN_RANGE_TYPE)
		{
			loadcssfile(relative_path +"tv.css");

		}
	

}






