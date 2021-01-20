// export async function ApiService(endpoint, { body, ...customConfig } = {}) {
//     const headers = { 'Content-Type': 'application/json' }
  
//     const config = {
//       method: customConfig.method,
//       ...customConfig,
//       headers: {
//         ...headers,
//         ...customConfig.headers,
//       },
//     }
  
//     if (body) {
//       config.body = JSON.stringify(body)
//     }
  
//     let data
//     try {
//       const response = await fetch(endpoint, config)
//       data = await response.json()
//       if (response.ok) {
//         return data
//       }
//       throw new Error(response.statusText)
//     } catch (err) {
//       return Promise.reject(err.message ? err.message : data)
//     }
//   }
  
//   client.get = function (endpoint, customConfig = {}) {
//     return client(endpoint, { ...customConfig, method: 'GET' })
//   }
  
//   client.post = function (endpoint, body, customConfig = {}) {
//     return client(endpoint, { ...customConfig, method: 'POST', })
//   }

  export async function ApiService(data) {
    await printAndResolveAfter2seconds(data);
  }
  
  client.get = function (data) {
    return ApiService(data);
  }

  function printAndResolveAfter2seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(x);
        resolve(x);
      }, 2000);
    });
  }