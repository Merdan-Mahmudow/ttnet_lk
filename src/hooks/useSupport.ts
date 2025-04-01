import { useEffect, useRef, useState } from "react";

export function useSupport() {
  const socketRef = useRef<WebSocket | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    socketRef.current = new WebSocket("wss://api.skyrodev.ru/ws");

    socketRef.current.onopen = () => {
      console.log("Connected");
      setIsConnected(true);
    };

    socketRef.current.onclose = () => {
      console.log("Disconnected");
      setIsConnected(false);
    };

    socketRef.current.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    return () => {
      socketRef.current?.close();
    };
  }, []);

  return { socket: socketRef.current, isConnected };
}