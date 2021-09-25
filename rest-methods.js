/* eslint-disable */

import fetch from 'node-fetch';

const API_URL = process.env.API_URL;

const get = (endpoint, urlParam, requestInit = {}) => {
  return fetch(
    API_URL + '/' + endpoint + '?' + new URLSearchParams(urlParam).toString(),
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      ...requestInit,
    },
  );
};

const post = (endpoint, body, requestInit = {}) => {
  const url = API_URL + '/' + endpoint;
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    ...requestInit,
  });
};

const put = (endpoint, body, requestInit = {}) => {
  const url = API_URL + '/' + endpoint;
  return fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    ...requestInit,
  });
};

const patch = (endpoint, body, requestInit = {}) => {
  const url = API_URL + '/' + endpoint;
  return fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    ...requestInit,
  });
};

const del = (endpoint, body, requestInit = {}) => {
  const url = API_URL + '/' + endpoint;
  return fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    ...requestInit,
  });
};

(async () => {
  // GET
  // const userGetResponse = await get('users/502');
  // const user = await userGetResponse.json();
  // console.log(user);

  // POST;
  // const userResponse = await post('users', {
  //   id: '6001',
  //   firstName: 'Criado Márcia',
  //   lastName: 'Criado Carvalho',
  //   userName: 'Criado marcia_carvalho81',
  //   indexRef: 1,
  //   createdAt: 'Criado 2016-12-08T00:49:39.870Z',
  // });

  // PUT
  // const userResponse = await put('users/6000', {
  //   firstName: 'EDITADO Márcia',
  // });

  // PATCH
  // const userResponse = await patch('users/6001', {
  //   firstName: 'EDITADO COM PATCH Márcia',
  // });

  // DELETE
  const userResponse = await del('users/6001');

  const user = await userResponse.json();
  console.log(user);
})();
