var AppDispatcher = require('../Dispatcher/AppDispatcher.jsx');
var Constants = require('../Constants/FluxConstants.jsx');
var EventEmitter = require('events').EventEmitter;
var _ = require('underscore');

var _failureMessage = "";

var UserLoginStatus = (data, obj) => {

    if (data.data.isSuccess) {
        sessionStorage.setItem('user',true);
        obj.emitSuccessLogin();
    }
    else
    {
        _failureMessage = data.data.message;
        obj.emitUnSuccessLogin();
    }

}

class LoginStore extends EventEmitter
{
        constructor()
        {
           super();
        }

        failureMsg=()=>{return _failureMessage;}
        emitSuccessLogin= () => { this.emit('emitSuccessLogin'); }
        addEmitSuccessLoginListener= (callback) => { this.on('emitSuccessLogin', callback); }
        removeEmitSuccessLoginListner= (callback) => { this.removeListener('emitSuccessLogin', callback); }

        emitUnSuccessLogin= () => { this.emit('emitUnSuccessLogin'); }
        addEmitUnSuccessLoginListener= (callback) => { this.on('emitUnSuccessLogin', callback); }
        removeEmitUnSuccessLoginListner= (callback) => { this.removeListener('emitUnSuccessLogin', callback); }

        emitProgressStart= () => { this.emit('ProgressStart'); }
        addProgressStartListener= (callback) => { this.on('ProgressStart', callback); }
        removeProgressStartListner= (callback) => { this.removeListener('ProgressStart', callback); }

        emitProgressEnd= () => { this.emit('ProgressEnd'); }
        addProgressEndListener= (callback) => { this.on('ProgressEnd', callback); }
        removeProgressEndListner= (callback) => { this.removeListener('ProgressEnd', callback); }

        handleAction = (payload) => 
        {
          //  console.log(action.action.actionType);
            action=payload.action
            switch (action.actionType) 
            {

                case Constants.User_Login:
                    UserLoginStatus(action.data,this);
                    break;
        
                case Constants.Process_Start:
                this.emitProgressStart();
                    break;
        
                case Constants.Process_End:
                this.emitProgressEnd();
                    break;
        
                default:
                    return true;

            }
        }
    }

const loginStore = new LoginStore;
// Register callback with AppDispatcher
AppDispatcher.register(loginStore.handleAction.bind(loginStore));

module.exports = loginStore;
