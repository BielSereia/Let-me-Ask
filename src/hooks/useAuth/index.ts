import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext/index';

export function useAuth() {
  const value = useContext(AuthContext);

  return value;
};