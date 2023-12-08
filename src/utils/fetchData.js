const fetchData = async (slug) => {
  try {
    const response = await fetch(`src/data/${slug}.json`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'User-agent': 'learning app',
      },
    })
    return response.json()
  } catch (error) {
    console.error(error)
  }
}

export default fetchData
