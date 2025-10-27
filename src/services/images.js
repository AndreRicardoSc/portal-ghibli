const getImageUrl = (path) => {
    const url = `${import.meta.env.VITE_TMDB_IMAGE_URL}w500${path}`
    console.log(url)
    return url;
}

export default getImageUrl