'use client';
import { useContext } from "react";
import { ThemeContext } from "../ThemeProvider/ThemeProvider";

const ThemeButton = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        console.warn("ThemeButton deve estar dentro de um ThemeProvider!!");
        return null; // Retorna nada se o contexto não estiver disponível
    }

    const { theme, toggleTheme } = context;

    return (
        <>
            <button
                onClick={toggleTheme}
                style={{
                    backgroundColor: theme === 'light' ? '#007bff' : '#fff',
                    color: theme === 'light' ? '#fff' : '#000',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                }}
            >
                Mudar para {theme === 'light' ? 'Escuro' : 'Claro'}
            </button>
        </>
    );
};

export default ThemeButton;