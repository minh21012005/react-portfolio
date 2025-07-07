import { createContext, useContext, useEffect, useState } from "react";

interface IAppContext {
    theme: ThemeContextType;
    setTheme: (value: ThemeContextType) => void;
}

type ThemeContextType = "light" | "dark";

const AppContext = createContext<IAppContext | null>(null);

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<ThemeContextType>(() => {
        // Mặc định là "dark" nếu không có trong localStorage
        const initialTheme = (localStorage.getItem("theme") as ThemeContextType) || "dark";
        return initialTheme;
    });

    useEffect(() => {
        // Luôn set lại attribute theme khi component mount
        document.documentElement.setAttribute('data-bs-theme', theme);
        // Lưu theme hiện tại vào localStorage khi theme thay đổi
        localStorage.setItem("theme", theme);
    }, [theme]); // lắng nghe theme thay đổi

    return (
        <AppContext.Provider value={{ theme, setTheme }}>
            {children}
        </AppContext.Provider>
    );
};

export const useCurrentApp = () => {
    const currentAppContext = useContext(AppContext);

    if (!currentAppContext) {
        throw new Error("useCurrentApp has to be used within <AppContext.Provider>");
    }

    return currentAppContext;
};
