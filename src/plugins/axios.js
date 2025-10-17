import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZGQxNTdmNjRhODljZWJlODg3MWExY2QzMDM4OGEyYyIsIm5iZiI6MTc1OTI1MTM0My44LCJzdWIiOiI2OGRjMGI4ZmM3MGIzMmQ4NzRiYjE1YjkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.XfcN6JZZSAGAhmthEbKwhfCneEMgWs-_LSP-HcHOljs'
    }
})

export default api;