export const fetchUser = async (username, password) => {
    try {
        const response = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username,
                password,
            })
        });

        if (!response.ok) {
            // If the response status is not OK (e.g., 401 Unauthorized), throw an error
            throw new Error('Invalid credentials');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        // Rethrow the error to propagate it to the caller
        throw error;
    }
};
