import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const createPost = async (postData) => {
  try {
    const response = await axios.post(API_URL, {
      title: postData.title,
      body: postData.body,
      userId: 1, // Mock user ID
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to create post. Please try again.');
  }
};

export const getPost = async (postId) => {
  try {
    const response = await axios.get(`${API_URL}/${postId}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch post. Please try again.');
  }
};
