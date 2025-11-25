const getImageUrl = (path, size = 'original') => {
    const url = `${import.meta.env.VITE_TMDB_IMAGE_URL}${size}${path}`
    return url;
}

export default getImageUrl