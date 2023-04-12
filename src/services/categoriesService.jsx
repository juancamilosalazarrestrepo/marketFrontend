export const categories = async () => {
  let categoriesResponse = []
  try {
    const response = await fetch('http://34.202.144.243:3500/api/v1/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const dataResponse = await response.json()
    categoriesResponse = dataResponse
  } catch (error) {
    categoriesResponse = error
  }

  return categoriesResponse
}
