const setToken = (token) => {
  localStorage.setItem('bearer', token);
};

const getToken = () => {
  let token = '';

  token = new URLSearchParams(location.hash.substring(1))
    .get('access_token');

  setToken(token);

  if (localStorage.getItem('bearer')) {
    token = localStorage.getItem('bearer');
    setToken(token);
  }

  return token;
};

export {
  getToken,
  setToken,
};
