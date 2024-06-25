// SteamLoginButton.js
import React from 'react';

const SteamLoginButton = () => {
  const handleLogin = () => {
    window.location.href = 'https://steamcommunity.com/openid/login?openid.mode=checkid_setup&openid.ns=http://specs.openid.net/auth/2.0&openid.return_to=URL_ВАШЕГО_САЙТА/auth/steam/callback&openid.realm=URL_ВАШЕГО_САЙТА';
  };

  return (
    <div>
      <button onClick={handleLogin}>Войти через Steam</button>
    </div>
  );
}

export default SteamLoginButton;
