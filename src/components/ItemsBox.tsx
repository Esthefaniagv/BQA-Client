import { Fragment } from "react";

export const ItemsBox = () => {
  const options = {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdyYWNlLmhvcHBlckBzeXN0ZXJzLnh5eiIsImlhdCI6MTY5NDY5NTAwOSwiZXhwIjoxNjk0Njk4NjA5LCJzdWIiOiIyIn0.fZFWVHFBpAouO9r_iuSVd72MJl7chDHLdME-0VSfQ8s'
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