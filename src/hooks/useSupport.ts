import { useEffect, useRef, useState } from "react";
import { toaster } from "../components/ui/toaster";

export function useSupport() {
  const socketRef = useRef<WebSocket | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    socketRef.current = new WebSocket("wss://api.skyrodev.ru/ws");

    socketRef.current.onopen = () => {
      setIsConnected(true);
    };

    socketRef.current.onclose = () => {
      setIsConnected(false);
    };

    socketRef.current.onerror = (error) => {
      toaster.create({
        title: `Ошибка подключения к серверу: ${error}`,
        type: "error"
      })
    };

    return () => {
      socketRef.current?.close();
    };
  }, []);

  return { socket: socketRef.current, isConnected };
}