const getImageUrl = (path) => {
    const url = `${import.meta.env.VITE_TMDB_IMAGE_URL}w500${path}`
    return url;
}

export default getImageUrl