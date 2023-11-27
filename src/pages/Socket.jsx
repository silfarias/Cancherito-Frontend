import React, { useEffect } from 'react'
import io from 'socket.io-client'
import { environments } from '../config/environments'

export const SocketPage = () => {
    const socketConnection = io(`${environments.API_URL}`)

    useEffect(() => {
        socketConnection.connect();
        socketConnection.emit('connection');

        return () => { 
            socketConnection.disconnect()
            console.log('Desconectado');
        }
    }, [socketConnection])

    return (
        <div>socket</div>
    )
}