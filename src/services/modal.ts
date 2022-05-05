import store from '../../store/index'

export default {
    open(title: string, message: string, type: string, confirmMessage: string, callbackOK: Function, callbackCancel: Function | void){
        store.commit('modal', {
            display: true,
            title: title,
            message: message,
            confirmMessage: confirmMessage,
            callbackOK: callbackOK,
            callbackCancel: callbackCancel
            
        });
    },
    close(){
        store.commit('modal', {
            display: false,
        });
    }
}