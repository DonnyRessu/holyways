import { createContext, useReducer } from "react";

export const ModalContext = createContext();

const initialState = {
    isLoginModal: false,
    isRegisterModal: false,
}

const reducer = (state, action) => {
    const { type, _ } = action;

    switch ( type ) {
        case 'LOGIN_MODAL':
            return {
                isLoginModal: true,
                isRegisterModal: false
            }
        case 'REGISTER_MODAL':
            return {
                isRegisterModal: true,
                isLoginModal: false
            }
        case 'CLOSE_AUTH_MODAL':
            return {
                isLoginModal: false,
                isRegisterModal: false,
                isDonationModal: false,
            }
        default:
            throw new Error();
    }
}

export const ModalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <ModalContext.Provider value={[state, dispatch]}>{children}</ModalContext.Provider>
}
