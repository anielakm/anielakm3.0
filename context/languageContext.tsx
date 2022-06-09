import {
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
    useState,
  } from 'react'

interface languageInterface {
    currentLang: string
    setCurrentLang: Dispatch<SetStateAction<string>>
  }

  interface LanguageProviderProps {
    children: JSX.Element
  }


  const LanguageContext = createContext<languageInterface>({
    currentLang: 'pl',
    setCurrentLang: () => {},
  })

export const useLanguageContext = () => useContext(LanguageContext)

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLang, setCurrentLang] = useState('pl')

  return (
    <LanguageContext.Provider value={{ currentLang, setCurrentLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider
