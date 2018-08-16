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

export const phoneLength = (value) => {
  if (value.length > 11) {
    value = value.slice(0, 11);
  }
  return value;
}

export const checkPhone = (phone) => {
  if (!(/^1[34578]\d{9}$/.test(phone))) {
    return false;
  } else {
    return true
  }
}

export const hidePhone = (phone) => {
  var hidePhone = phone.substr(0, 3) + '****' + phone.substr(7);
  return hidePhone;
}
