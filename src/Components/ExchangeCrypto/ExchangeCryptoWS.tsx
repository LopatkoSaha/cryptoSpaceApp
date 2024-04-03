import {useEffect, useState} from 'react';



export const ExchangeCryptoWS = ( setCurrentCurse: any) => {

    const [ws, setWs] = useState<WebSocket | null>(null);
    
    useEffect(() => {
        subscribe();
        return () => ws?.close();
    },[])

    const subscribe = () => {

        const socket = new WebSocket('ws://localhost:4500/connectWS');

        socket.addEventListener('open', function (event) {
            setWs(socket);
            console.log('Connected to WebSocket server');

            socket.addEventListener('message', function (event) {
                setCurrentCurse(JSON.parse(event.data));
            });
        })

        socket.addEventListener('close', function (event) {
            console.log('Disconnected from WebSocket server');
        });

        socket.addEventListener('error', function (event) {
            console.error('WebSocket error:', event);
        });
    }
}