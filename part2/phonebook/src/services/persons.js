import axios from 'axios';

const getAll = () => 
{
    return axios.get(baseURL);
};

const create = (url, newObject) =>
{
    return axios.post(url, newObject);
}

const update = (id, newObject) => 
{
    return axios.put(`${baseUrl}/${id}`, newObject)
}
  
export default 
{ 
    getAll: getAll, 
    create: create, 
    update: update 
  }