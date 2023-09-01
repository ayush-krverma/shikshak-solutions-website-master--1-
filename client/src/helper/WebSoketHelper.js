import {
    handleWebSocketEventCall
} from "../store/actions/shopAction";

let timeInterval = null;
window.clientId = null
const setUserUniqueClientId = () => {
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    window.clientId = s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
export async function getWebsocketConnectedMessage(W3CWebSocket,dispatch,userInEditingMode) {
    setUserUniqueClientId();
    if (window.webSocketClient) {
        window.webSocketClient.onerror = window.webSocketClient.onopen = window.webSocketClient.onclose = null;
        window.webSocketClient.close();
    }
    let wsUrl = process.env.REACT_APP_WEB_SOCKET_URL;
    window.webSocketClient = await new W3CWebSocket(wsUrl, null, {
        headers: {
            'Accept-Language': 'en,en-US;q=0.9,ru;q=0.8,de;q=0.7',
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36'
        }
    })
    window.webSocketClient.onopen = () => {
        console.log('-------------- Websocket connection opened ------------',window.webSocketClient);
    }
    window.webSocketClient.onerror = () => {
        console.log('-------------- Reconnect websocket ------------',window.webSocketClient);
        getWebsocketConnectedMessage(W3CWebSocket,dispatch,userInEditingMode);
    }
    window.webSocketClient.onmessage = (message) => {
        if(JSON.parse(message.data)) {
            const dataFromServer = JSON.parse(message.data);
            if(!userInEditingMode && dataFromServer?.clientId !== window.clientId) {
                dispatch(handleWebSocketEventCall(dataFromServer));
            }
            //dispatch(handleWebSocketEventCall(dataFromServer));
        }
    };
    window.webSocketClient.onclose = function () {
        console.log('-------------- Closed Reconnect websocket ------------',window.webSocketClient);
        setTimeout(function(){
            getWebsocketConnectedMessage(W3CWebSocket,dispatch,userInEditingMode);
        },1000)
    }

    if(timeInterval != null)
        clearInterval(timeInterval);

    timeInterval = setInterval(function(){
        let data = {type:'wakeupMessage',message:'wakeup'};
        sendWebsocketRequest(JSON.stringify(data));
    },10000);
    return true;
}

export function handleWebSocketEvent(dispatch,state,data){
    console.log(data,"data");
    switch(data.type){

        // case 'getEmailTagListFromApi':
        //     dispatch(getEmailLabelList());
        //     break;
    }
}

export function sendWebsocketRequest(data){
    console.log(window.webSocketClient,"data")
    if(window.webSocketClient != null) {
        const ws = window.webSocketClient;
        const waitForConnection = function (callback, interval) {
            if (ws.readyState === 1) {
                callback();
            } else {
                // optional: implement backoff for interval here
                setTimeout(function () {
                    waitForConnection(callback, interval);
                }, interval);
            }
        };
        waitForConnection(function () {
            ws.send(data);
        }, 1000);
    }
}