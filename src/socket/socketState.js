import { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useSelector } from "../state/stateHooks";

export const SocketContext = createContext({});

const SocketStateProvider = ({ children }) => {
  const { profile } = useSelector();
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    if (!socket) {
      setSocket(
        io.connect(
          process.env.REACT_APP_API_BASE_URL || "http://localhost:4000",
          { query: `id=${profile?._id}` }
        )
      );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export default SocketStateProvider;
