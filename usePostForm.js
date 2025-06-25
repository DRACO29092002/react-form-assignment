import { useState } from 'react';
import { createPost } from '../api/postsApi';

export const usePostForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: ''
  });
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.comment.trim()) {
      setError('All fields are required');
      return;
    }
    
    // Simple email validation
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    setError(null);
    
    try {
      // Using the existing API but with our new data structure
      const postData = {
        title: `Comment from ${formData.name}`,
        body: `Email: ${formData.email}\n\n${formData.comment}`,
        userId: 1, // Mock user ID
      };
      
      const data = await createPost(postData);
      setResponse({
        ...data,
        name: formData.name,
        email: formData.email,
        comment: formData.comment
      });
      
      // Clear form on success
      setFormData({
        name: '',
        email: '',
        comment: ''
      });
    } catch (err) {
      setError(err.message || 'Failed to submit your comment. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return {
    formData,
    response,
    isLoading,
    error,
    handleSubmit,
    handleInputChange,
  };
};
