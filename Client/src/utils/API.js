import axios from "axios";

export default {
    
    search: (query) => {
        return axios.post("/api/articles", query)
    },

    savedArticles: () => {
        return axios.get("/api/articles")
    },

    getArticle: (id) => {
        return axios.get("/api/articles" + id)
    },

    saveArticle: (data) => {
        return axios.post("/api/save", data)
    },

    removeArticle: (id) => {
        return axios.delete("/api/saved" + id)
    }

};