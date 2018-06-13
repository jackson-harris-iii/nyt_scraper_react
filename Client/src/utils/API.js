import axios from "axios";

export default {
    
    search: (query) => {
        return axios.post("/api/search", query)
    },

    savedArticles: () => {
        return axios.get("/api/saved")
    },

    saveArticle: (data) => {
        return axios.post("/api/save", data)
    },

    removeArticle: (id) => {
        return axios.delete("/api/saved" + id)
    }

};