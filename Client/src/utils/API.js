import axios from "axios";

export default {
    
    search: (topic, startYear, endYear) => {
        
        const authKey = "cfb9f6bf533b46d0a9d4edf5059f55b9";
        const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
            authKey + "&q=" + topic + "&begin_date=" + startYear + "0101&end_date=" + endYear + "0101";

        return axios.get(queryURL);        
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