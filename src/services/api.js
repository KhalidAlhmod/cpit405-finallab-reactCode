import axios from 'axios';

// Set the base URL for your backend API
const API_URL = 'http://localhost:8000/api';

// Get all bookmarks
export const getAllBookmarks = async () => {
    const response = await axios.get(`${API_URL}/readAllBookmarks.php`);
    return response.data;
};

// Get a single bookmark by ID
export const getBookmark = async (id) => {
    const response = await axios.get(`${API_URL}/readOneBookmark.php`, { params: { id } });
    return response.data;
};

// Create a new bookmark
export const createBookmark = async (bookmark) => {
    const response = await axios.post(`${API_URL}/createBookmark.php`, bookmark);
    return response.data;
};

// Update a bookmark
export const updateBookmark = async (id, updatedData) => {
    const response = await axios.put(`${API_URL}/updateBookmark.php`, { id, ...updatedData });
    return response.data;
};

// Delete a bookmark
export const deleteBookmark = async (id) => {
    const response = await axios.delete(`${API_URL}/deleteBookmark.php`, { data: { id } });
    return response.data;
};
