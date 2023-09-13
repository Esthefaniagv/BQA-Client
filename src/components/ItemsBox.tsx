import { Fragment } from "react";

export const ItemsBox = () => {
  const options = {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdyYWNlLmhvcHBlckBzeXN0ZXJzLnh5eiIsImlhdCI6MTY5NDYwOTcwOSwiZXhwIjoxNjk0NjEzMzA5LCJzdWIiOiIyIn0.sR1Q5NgfCTa_5eM5EqjO1B_h_Qy7ScKZtJHzf95TAXI'
    },
  };
  fetch('http://localhost:8080/products', options)
    .then((r) => {
      if (r.status === 200) {
        r.json().then((r) => {
          console.log(r);
        });
      } 
    })
    .catch((e) => {
      console.log('soy catch', e);
    });

  return (
    <Fragment>
    hola
    </Fragment>
)

};