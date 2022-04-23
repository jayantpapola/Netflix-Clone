const initialState=''

const ModalReducer =( state = initialState, action ) =>{

    switch (action.type)
    {
        case 'MODAL':
            return action.data ;
        
        default:
            return state;

        
    }

}
export default ModalReducer