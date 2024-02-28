import axios from 'axios'

const COHORT_NAME = '2401-FTB-EB-WEB-FT'

const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

const TOKEN_STRING_HERE = 'Your token string here';

export const getAllPosts = async() => {
    try {
        const response = await axios.get(`${BASE_URL}/posts`, {
            headers: {
                'Authorization': `Bearer ${TOKEN_STRING_HERE}`
            }
        });
        return response.data.data.posts;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
};