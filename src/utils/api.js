//const baseUrl = "http://localhost:3000";
/*const headers = {
  "Content-Type": "application/json",
};
*/
//"https://my-json-server.typicode.com/LavisCannon15/se_project_react";
export default class Api {
  constructor() {
    this.baseUrl = "https://my-json-server.typicode.com/LavisCannon15/se_project_react";

    //this.baseUrl = "http://localhost:3000";

    this.headers = {
      "Content-Type": "application/json",
    };
  }

  getItems() {
    return fetch(`${this.baseUrl}/items`, {
      method: "GET",
      headers: this.headers,
    }).then(this._processResponse);
  }

  addItem(name, imageUrl, weather) {
    return fetch(`${this.baseUrl}/items`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name,
        imageUrl,
        weather,
      }),
    }).then(this._processResponse);
  }

  deleteItem(id) {
    return fetch(`${this.baseUrl}/items/${id}`, {
      method: "DELETE",
      headers: this.headers,
    }).then(this._processResponse);
  }

  _processResponse = (res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  };
}

/*
const getItems = async () => {
  const res = await fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: headers,
  });
  return handleServerResponse(res);
};

const addItem = async (name, imageUrl, weather) => {
  const res = await fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  });
  return handleServerResponse(res);
};

const deleteItem = async (id) => {
  const res = await fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: headers,
  });
  return handleServerResponse(res);
};

const handleServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
};

export { getItems, addItem, deleteItem };
*/
