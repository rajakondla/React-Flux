var AppDispatcher = require('../Dispatcher/AppDispatcher.jsx');
var Constants = require('../Constants/FluxConstants.jsx');
var API = require('../Utilis/API.jsx');

class LoginAction {

    UserLogin = (data) => {

        AppDispatcher.handleAction({ actionType: Constants.Process_Start });

        API.Login(data).then(res => {

            AppDispatcher.handleAction(
                {
                    actionType: Constants.User_Login,
                    data: res
                }
            );

            AppDispatcher.handleAction({ actionType: Constants.Process_End });

        });
       
    }

}

const loginAction=new LoginAction;
module.exports = loginAction;