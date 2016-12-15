/**
*	IOTEE Message/Messages Parsing & Packing Library
*	@copyright Copyright Altiux Innovations Pvt Ltd.
*   @author Ashutosh Agrawal
*   Email: ashutosh.agrawal@altiux.com
*/

var PLATFORM_IP 			= '111.93.235.84';
var PLATFORM_PORT 			= 61614;
var CLIENT_ID 				= defaultClientId();
var USER 					= 'PLATFORM';
var PASSWD 					= 'platform';
var CONN_TIMER				= 600;
var DESTINATION_ENTITY_ID 	= 'RelianceDemo1';
var ENTITY_VERSION			= "1.0";

var subTopicEntity 	= 'Entity/' + DESTINATION_ENTITY_ID + '/ST/#';
var subTopicNode 	= 'Entity/' + DESTINATION_ENTITY_ID + '/Node/+/ST/#';
var replyTo			= 'Entity/' + CLIENT_ID + '/CT';


function defaultClientId(){
	return "WS" + (Math.random() + 1).toString(36).substring(10);
}

//111.93.235.83
$(document).ready(function(){
	doConnection(PLATFORM_IP,PLATFORM_PORT,CLIENT_ID,USER,PASSWD);
});

var wsClient = null;

function doConnection(ip,port,clientId,username,passwd){
	console.log("Default Client-Id:" + clientId);
	wsClient = new Messaging.Client(ip, port , clientId);
	wsClient.onConnect = onConnect;
	wsClient.onMessageArrived = onMessageArrived;
	wsClient.onConnectionLost = onConnectionLost;
	wsClient.connect({userName: username, password:passwd, onSuccess:onConnect, onFailure:onFailure});
}

// the client is notified when it is connected to the server.
var onConnect = function(frame) {
	if(connTimer){
		clearInterval(connTimer);
		connTimer = null;
	}
	console.log("WS:Connected:Successfully");

	wsClient.subscribe(subTopicEntity);
	wsClient.subscribe(subTopicNode);
	wsClient.subscribe(replyTo);

	doFrameConnectEmit();
};


function onFailure(failure) {
	console.log("WS:Failure:" + failure.errorMessage);
	startConnTimer();
}

function onMessageArrived(message) {
	console.log("WS:Message Arrived: Topic:" + message.destinationName + ":Msg:" + message.payloadString);
	refreshData(message.destinationName,message.payloadString);
}

function onConnectionLost(responseObject) {
	if (responseObject.errorCode !== 0) {
		console.log("WS:Connection Lost:"  + wsClient.clientId + ": " + responseObject.errorCode + "\n");
		connTimer = setInterval(handleConnTimeout, CONN_TIMER);
	}
}

var connTimer = null;

function handleConnTimeout(){
	stopConnTimer();
	CLIENT_ID = defaultClientId();
	doConnection(PLATFORM_IP,PLATFORM_PORT,CLIENT_ID,USER,PASSWD);
}

function startConnTimer(){
	stopConnTimer();
	connTimer = setInterval(handleConnTimeout, CONN_TIMER);
}

function stopConnTimer(){
	if(connTimer){
		clearInterval(connTimer);
		connTimer = null;
	}
}

/*
################################### HA ############################################
*/



//global array list of the node devices
var gNodeList = [
	{
		entityId:DESTINATION_ENTITY_ID,							//Entity Id			- entityId
		nodeId:"2",  											//Node Id			- nodeId
		name:"Two",					 							//Node Name			- name
		lastStatus:"", 											//Last Status		- lastStatus
		nodeType:"BINARY-SWITCH",								//Type				- nodeType
	},
	{
		entityId:DESTINATION_ENTITY_ID,							//Entity Id			- entityId
		nodeId:"5",  											//Node Id			- nodeId
		name:"Five",				 							//Node Name			- name
		lastStatus:"", 											//Last Status		- lastStatus
		nodeType:"BINARY-SWITCH",								//Type				- nodeType
	},
	{
		entityId:DESTINATION_ENTITY_ID,							//Entity Id			- entityId
		nodeId:"6",  											//Node Id			- nodeId
		name:"Six",			 									//Node Name			- name
		lastStatus:"", 											//Last Status		- lastStatus
		nodeType:"BINARY-SWITCH",								//Type				- nodeType
	},
	{
		entityId:DESTINATION_ENTITY_ID,							//Entity Id			- entityId
		nodeId:"7",  											//Node Id			- nodeId
		name:"Seven",			 							//Node Name			- name
		lastStatus:"", 											//Last Status		- lastStatus
		nodeType:"BINARY-SWITCH",								//Type				- nodeType
	}
];


var gRefreshCallback = [];

function clear(array){
	while(array.length > 0) {
		 array.pop();
	}
}

function registerRefreshEvent(callback){
	clear(gRefreshCallback);
	gRefreshCallback.push(callback);
}

function deRegisterRefreshEvent(callback){
	clear(gRefreshCallback);
}


function doFrameRefresh(){
	for(var i=0 ; i < gRefreshCallback.length; i++){
		gRefreshCallback[i]();
	}
}

function findInode(name){
	for(var i=0 ; i < gNodeList.length; i++){
		if(gNodeList[i].name == name){
			return gNodeList[i];
		}
	}
	return null;
}


function findNodeById(nodeId){
	for(var i = 0; i < gNodeList.length ; i++){
		var node = gNodeList[i];
		if(node.nodeId == nodeId){
			return node;
		}
	}
	return null;
}


function refreshData(topic,message){
	var msgObj = parseMessage(message);
	//Get the Node details & its Status
	for(var i = 0; i < msgObj.msgroot.nodes.length ; i++){
		var nodeId = msgObj.msgroot.nodes[i].nh.nhi;
		var inode = findNodeById(nodeId);
		if(inode != null){
			processNodeCommands(inode, msgObj.msgroot.nodes[i]);
		}
	}
}


function processNodeCommands(inode, node){
	for(var j = 0; j < node.np.length ; j++){
		var status = null;

		if(Object.keys(node.np[j])[0] == 'status'){
			status = node.np[j][Object.keys(node.np[j])[0]];
			if((status) && (status.length > 0)){
				if(inode.lastStatus != status){
					inode.lastStatus = status;
					doFrameRefresh();
				}
			}
		}
	}
}

function getCurrentUTCTime(){
	var now = new Date();
	var utc_now = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),  now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());
	return utc_now.getTime();
}

function queryStatus(inode){
	var msgObj = createMsg(CLIENT_ID,2,ENTITY_VERSION);
	var respNode = createMsgNode(inode.nodeId,getCurrentUTCTime());
	addMsgNodePair(respNode,"type",inode.nodeType);
	addMsgNodePair(respNode,"get",replyTo);
	addMsgNode(msgObj,respNode);
	var msgJsonStr = packMessage(msgObj);
	var message = new Messaging.Message(msgJsonStr);
	message.destinationName = 'Entity/' + DESTINATION_ENTITY_ID + '/Node/' + inode.nodeId + '/CT';
	wsClient.send(message);
	console.log('MQTT:TOPIC:' + message.destinationName + ':MSG:' + msgJsonStr);
}

function getStatus(ctrlName){
	var inode = findInode(ctrlName);
	if(null != inode){
		queryStatus(inode);
	}
}

function actionCommand(inode,value){
	var msgObj = createMsg(CLIENT_ID,2,ENTITY_VERSION);
	var actNode = createMsgNode(inode.nodeId,getCurrentUTCTime());
	addMsgNodePair(actNode,"type",inode.nodeType);
	addMsgNodePair(actNode,"set",value);
	addMsgNode(msgObj,actNode);
	var msgJsonStr = packMessage(msgObj);
	var message = new Messaging.Message(msgJsonStr);
	message.destinationName = 'Entity/' + DESTINATION_ENTITY_ID + '/Node/' + inode.nodeId + '/CT';
	wsClient.send(message);
	console.log('MQTT:TOPIC:' + message.destinationName + ':MSG:' + msgJsonStr);
}


function changeStatus(ctrlName,value){
	var inode = findInode(ctrlName);
	if(null != inode){
		actionCommand(inode,value);
	}
}


var gOnConnectCallback = [];

function registerConnectEvent(callback){
	clear(gOnConnectCallback);
	gOnConnectCallback.push(callback);
}

function deRegisterConnectEvent(callback){
	clear(gOnConnectCallback);
}


function doFrameConnectEmit(){
	for(var i=0 ; i < gOnConnectCallback.length; i++){
		gOnConnectCallback[i]();
	}
}

