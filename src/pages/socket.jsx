import React, { useEffect } from 'react'
import io from 'socket.io-client'

export const SocketPage = () => {
const socketConnection = io('http://localhost:4000')

    useEffect(() => {
      socketConnection.connect();
      socketConnection.emit('connection');
    
      return () => {
        console.log('Desconectado');
        socketConnection.disconnect()
      }
    }, [socketConnection])
    
    return (
    <div>socket</div>
  )
}
