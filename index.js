import axios from 'axios'


// Need define API URL in constants or .env
const API_URL = ''

let axiosInstance = axios.create({
  baseURL: API_URL,
})

function configAxios() {
  axiosInstance = axios.create({
    baseURL: API_URL,
  })
}
//

function getHeaders() {
  const token = 'Token get from Store'
  return {
    Authorization: token && `Token ${token}`,
  }
}

export function post(url, data, headers = true) {
  configAxios()
  return axiosInstance({
    method: 'POST',
    url,
    data,
    headers: headers ? getHeaders() : {},
  })
}

// delete is a reserved name
export function del(url) {
  configAxios()
  return axiosInstance({
    method: 'DELETE',
    url,
    headers: getHeaders(),
  })
}

export async function get(url) {
  updateAxios()
  const { data } = await axiosInstance({
    method: 'GET',
    url,
    headers: getHeaders(),
  })
  return data
}

export function patch(url, data) {
  configAxios()
  return axiosInstance({
    method: 'PATCH',
    url,
    data,
    headers: getHeaders(),
  })
}
