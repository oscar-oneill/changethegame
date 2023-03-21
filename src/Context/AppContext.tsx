import { useState, createContext } from 'react'

export const AppContext = createContext<any | null>(null)

export const AppContextProvider = (props: { children: any | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
    const DEV_URL: string = 'http://localhost:9600';
    const PRODUCTION_URL: string = 'https://changethegame.vercel.app';
    const URL: string = DEV_URL;
    
    const [currentLevel, setCurrentLevel] = useState<string | null>('')
    const levels: Array<string | null> = ['JV', 'Varsity', 'Dynasty'] 
    
    return (
        <AppContext.Provider
            value={{
                URL,
                PRODUCTION_URL,
                currentLevel,
                setCurrentLevel,
                levels
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}