import { useEffect } from "react";
import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = (toggleDark) => {
    const [someValue, setSomeValue] = useLocalStorage(toggleDark)

    useEffect(() => {
        if (someValue) {
            window.document.body.classList.add('dark-mode');
        } else {
            window.document.body.classList.remove('dark-mode');
        }
    }, [someValue]);

    return [someValue, setSomeValue];

}