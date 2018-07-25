import Cookies from 'js-cookie';

export const addCookie = (name, value, expiresHours) => {
  if (expiresHours) {
    Cookies.set(name, value, { expires: expiresHours });

  } else {
    Cookies.set(name, value);

  }
}

export const getCookie = name => {
  return Cookies.get(name);
}


export const deleteCookie = name => {
  Cookies.remove(name);
}


export const flushCookie = () => {
  var neededAttributes = {

  };
  Object.keys(Cookies.get()).forEach(function(cookieName) {
    Cookies.remove(cookieName, neededAttributes);
  });
}
