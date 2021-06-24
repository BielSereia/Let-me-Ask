import { createContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AuthContextProvider } from './contexts/AuthContext';
import { Home } from "./pages/Home/index";
import { NewRoom } from "./pages/NewRoom/index";
import { Room } from "./pages/Room/index";

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
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default App;
