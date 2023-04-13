const createUser = async ({ name, password, email, phone }) => {
  let userCreated = null
  const data = {
    name,
    password,
    email,
    phone
  }

  try {
    const response = await fetch('https://34.202.144.243:3200/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const dataResponse = await response.json()
    userCreated = dataResponse
  } catch (error) {
    userCreated = error
  }

  return userCreated
}

export default createUser
