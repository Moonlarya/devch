const API_KEY = '00d384fde2744e21aba63717091b08a9'

async function getCityName({ latitude, longitude }) {
  try {
    const URI = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${API_KEY}`
    const response = await fetch(URI)

    if (response.ok) {
      const data = await response.json()

      if (data.results.length > 0) {
        return data.results[0].components.city
      }
    }
  } catch (error) {
    console.error('Error:', error)
  }
}

export default getCityName
