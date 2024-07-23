const getInstagramPosts = async () => {
  try {
    const response = await fetch('src/db/json/instagramPosts.json')
    const json = await response.json()
    return json
  } catch (e) {
    throw new Error(e)
  }
}

export { getInstagramPosts }
