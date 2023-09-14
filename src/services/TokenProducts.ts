export const GetProducts = () => {
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdyYWNlLmhvcHBlckBzeXN0ZXJzLnh5eiIsImlhdCI6MTY5NDcyMzA5OSwiZXhwIjoxNjk0NzI2Njk5LCJzdWIiOiIyIn0.0iMMkIGum6264JBYo-NCYpkHrIC1gvlSH3zO7_a5eU0'
        },
    };
    return fetch('http://localhost:8080/products', options);
}

export default GetProducts;