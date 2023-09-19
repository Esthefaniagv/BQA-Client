export const GetProducts = () => {
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdyYWNlLmhvcHBlckBzeXN0ZXJzLnh5eiIsImlhdCI6MTY5NTA4NzI2OCwiZXhwIjoxNjk1MDkwODY4LCJzdWIiOiIyIn0.SZCvuZrhn0VVtwXoa2m8uNMqlLDooL0v97zJt9jpQ7M'
        },
    };
    return fetch('http://localhost:8080/products', options);
}

export default GetProducts;