import axios from 'axios';

const BASE_URL = 'https://64fec644f8b9eeca9e290b8f.mockapi.io';

export const getContacts = async () => {
  const response = await axios.get(`${BASE_URL}/contacts`);
  return response.data;
};

export const postContact = async newContact => {
  await axios.post(`${BASE_URL}/contacts`, newContact);
};

export const delContact = async contactId => {
  await axios.delete(`${BASE_URL}/contacts/${contactId}`);
};
