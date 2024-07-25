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

/**

    const TOKEN = import.meta.env.VITE_INSTA_TESTER_TOKEN;
    const USER_ID = import.meta.env.VITE_INSTA_USER_ID;
    const URL = `https://graph.instagram.com/me/media?fields=media_url&access_token=${TOKEN}`;

    try {
        const data = await axios.get(URL)
        setInstaFeed(data)
    } catch (error) {
        console.log(error);
    }
    return instaFeed

 */