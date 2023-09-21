export const GetProducts = () => {
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdyYWNlLmhvcHBlckBzeXN0ZXJzLnh5eiIsImlhdCI6MTY5NTMyNTQ2MywiZXhwIjoxNjk1MzI5MDYzLCJzdWIiOiIyIn0.IxhaYQ3-RG7t6wjfTTzOWkPpg5EKQGKkbRMqLd7u8zE'
        },
    };
    return fetch('http://localhost:8080/products', options);
}

export default GetProducts;