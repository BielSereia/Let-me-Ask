import { createContext } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { AuthContextProvider } from './contexts/AuthContext';
import { Home } from "./pages/Home/index";
import { NewRoom } from "./pages/NewRoom";

type User = {
  id: string;
  name: string;
  avatar: string;
}

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextType);

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider >
        <Route path="/" exact={true} component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default App;
