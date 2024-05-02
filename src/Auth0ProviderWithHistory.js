import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const Auth0ProviderWithHistory = ({ children }) => {
  const domain ='dev-zg8jbjxggnl4nd3i.us.auth0.com';
  const clientId = 'BjWgCcUxwxCsieEeRCTysonDk10Q4q5l';

  const navigate = useNavigate();

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || window.location.pathname, { replace: true });
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;


/*const onRedirectCallback = (appState) => {
  navigate(appState?.returnTo || window.location.pathname);
};
*/
