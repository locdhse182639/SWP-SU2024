const API_URL = 'https://localhost:7251/api/CustomerPoints';

// Fetch points for a specific customer
export const fetchPoints = async (customerId) => {
    try {
        const response = await fetch(`${API_URL}/points/${customerId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Failed to fetch points. Status: ${response.status}, StatusText: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error in fetchPoints:', error);
        throw error;
    }
};

// Apply points to an order
export const applyPoints = async (customerId, points) => {
    try {
        const response = await fetch(`${API_URL}/purchase`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ CustomerID: customerId, Points: points })
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Failed to apply points. Status: ${response.status}, StatusText: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error in applyPoints:', error);
        throw error;
    }
};
