var axios = require('axios');

const Submit = function (reqUrl, data) {

    let axiosConfig = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic QWRtaW46QWRtaW4='
        }
    };
   
    return axios.get(reqUrl);
   
}

class API {

    constructor() {
        this.serverUrl = "http://localhost:5000/api/";
    }

    Login = (data) => {
        return Submit(this.serverUrl +'values/getuser',data);    
    };

}

const api=new API;
module.exports=api;