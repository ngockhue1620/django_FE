
import axios from 'axios'
async function getProducts(successCallApi) {
  await
    axios.get('http://127.0.0.1:8000/catalog/products/')
      .then((response) => {
        console.log('response', response)
        if (successCallApi) {
          successCallApi(response.data)
        }
      })
      .catch((error) => console.log(error));

}


export default {getProducts};