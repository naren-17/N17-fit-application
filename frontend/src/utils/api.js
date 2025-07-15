import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust the URL as needed

// User Authentication
export const registerUser = async (userData) => {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data;
};

export const loginUser = async (credentials) => {
    const response = await axios.post(`${API_URL}/auth/login`, credentials);
    return response.data;
};

// Membership Management
export const fetchMemberships = async () => {
    const response = await axios.get(`${API_URL}/memberships`);
    return response.data;
};

export const createMembership = async (membershipData) => {
    const response = await axios.post(`${API_URL}/memberships`, membershipData);
    return response.data;
};

export const updateMembership = async (id, membershipData) => {
    const response = await axios.put(`${API_URL}/memberships/${id}`, membershipData);
    return response.data;
};

export const deleteMembership = async (id) => {
    const response = await axios.delete(`${API_URL}/memberships/${id}`);
    return response.data;
};