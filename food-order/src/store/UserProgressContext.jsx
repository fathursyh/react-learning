import { useState, createContext } from "react";

export const UserProgressContext = createContext({
    progress: '',
    showCart: () => {},
    hideCart: () => {},
    showCheckout: () => {},
    hideCheckout: () => {},
});

export function UserProgressContextProvider({children}) {
    const [userProgress, setUserProgress] = useState('');

    function showCart() {
        setUserProgress('cart');
    }
    function showCheckout() {
        setUserProgress('checkout');
    }
    function hideCart() {
        setUserProgress('');
    }
    function hideCheckout() {
        setUserProgress('');
    }

    const userContext = {
        progress: userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout
    }
    return (
        <UserProgressContext.Provider value={userContext}>{ children }</UserProgressContext.Provider>
    )
}