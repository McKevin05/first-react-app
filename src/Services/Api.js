const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const taskApi = {
  getAll: () => fetch(`${BASE_URL}/todos?_limit=20`).then(res => res.json()),
  getById: (id) => fetch(`${BASE_URL}/todos/${id}`).then(res => res.json()),
  create: (task) => fetch(`${BASE_URL}/todos`, {
    method: 'POST',
    body: JSON.stringify(task),
    headers: { 'Content-Type': 'application/json' }
  }).then(res => res.json()),
  update: (id, task) => fetch(`${BASE_URL}/todos/${id}`, {
    method: 'PUT',
    body: JSON.stringify(task),
    headers: { 'Content-Type': 'application/json' }
  }).then(res => res.json()),
  delete: (id) => fetch(`${BASE_URL}/todos/${id}`, { method: 'DELETE' })
};
