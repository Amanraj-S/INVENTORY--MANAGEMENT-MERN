const API_URL = "http://localhost:5000/api/items";

export const getItems = () => fetch(API_URL).then(res => res.json());

export const addItemApi = (data) =>
  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(res => res.json());

export const updateItemApi = (id, data) =>
  fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(res => res.json());

export const deleteItemApi = (id) =>
  fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
