import { createContext, useState } from 'react';

const authContext = createContext();

// Simular endpoints de un API
const fakeAuthProvider = {
    signIn: (callback) => {
        setTimeout(callback, 100)
    },
    signOut: (callback) => {
        setTimeout(callback, 100)
    }
}


const useProvideAuth = () => {
    const [user, setUser] = useState(null);

    const signIn = (cb) => {
        return fakeAuthProvider.signIn(() => {
            setUser("User");
            cb();
        })
    }

    const signOut = (cb) => {
        return fakeAuthProvider.signOut(() => {
            setUser(null);
            cb();
        })
    }

    return {
        user,
        signIn,
        signOut
    }
}

export const ProvideAuth = ({ children }) => {  // esto es un HOC o un componente de Orden Superior //
    const auth = useProvideAuth();

    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}