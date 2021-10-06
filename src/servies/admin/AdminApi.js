
import axios from 'axios'
async function getcategory(successCallApi) {
  await
    axios.get('http://127.0.0.1:8000/catalog/catalog/')
      .then((response) => {
        console.log('response', response)
        if (successCallApi) {
          successCallApi(response.data)
        }
      })
      .catch((error) => console.log(error));

}

async function createProduct(data, successCallApi, errorCallApi) {
  await
    axios.post('http://127.0.0.1:8000/catalog/products/', 
      data,
      {
      headers: {
          'Content-Type': 'multipart/form-data'
      }
    })
      .then((response) => {
        console.log('response', response)
        if (response.status === 200 || response.status === 201) {
          if (successCallApi) {
            successCallApi(response.data)
          }
        }
        else {
          if (errorCallApi) {
            errorCallApi("Tao san pham khong thanh cong")
          }
        }

      })
      .catch(() =>  errorCallApi("Tao san pham khong thanh cong"));

}
export default { getcategory, createProduct };