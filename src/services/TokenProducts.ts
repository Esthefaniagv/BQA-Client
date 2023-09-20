export const GetProducts = () => {
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdyYWNlLmhvcHBlckBzeXN0ZXJzLnh5eiIsImlhdCI6MTY5NTIxNDY2OSwiZXhwIjoxNjk1MjE4MjY5LCJzdWIiOiIyIn0.YSrHuxjHUXZF-p0mVJGu3d2z-sH2WMIFinVR01qoAAQ'
        },
    };
    return fetch('http://localhost:8080/products', options);
}

export default GetProducts;