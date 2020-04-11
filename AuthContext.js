import * as React from 'react';

const AuthContext = React.createContext({ status: 'signOut', login: () => {} });

export const AuthProvider = ({children}) => {
  const [status, setStatus] = React.useState('signOut');
  const actions = React.useMemo(
    () => ({
      login: () => setStatus('loggedIn'),
      singOut: () => setStatus('signOut'),
    }),
    []
  );

  return (
    <AuthContext.Provider value={{ status, ...actions }}>
     {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context)
    throw new Error('useAuth must be inside a Provider with a value');
  return context;
};
