import axios from "axios";

export default {
    
    search: (topic, startYear, endYear) => {
        
        let start = startYear + '0101'
        let end = endYear + '1231'

        const APIKey = 'a40f23044cf64b46910f826529964571';

        return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
            params: {
                'api-key': APIKey,
                'q': topic,
                'begin-date': start,
                'end-date': end
            }
        }).then( res => {
            return res.data.response
        })       
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
        return axios.delete("/api/articles" + id)
    }

};