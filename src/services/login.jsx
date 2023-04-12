const login = async (email, password) => {
  let loginResponse = ''
  const data = {
    email,
    password
  }

  try {
    const response = await fetch('http://34.202.144.243:3500/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const dataResponse = await response.json()
    loginResponse = dataResponse
  } catch (error) {
    loginResponse = error
  }

  return loginResponse
}

export default login
