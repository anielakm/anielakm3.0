import {
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
    useState,
  } from 'react'

interface menuInterface {
    isMenuOpen: boolean
    setIsMenuOpen: Dispatch<SetStateAction<boolean>>
  }

  const MenuContext = createContext<menuInterface>({
    isMenuOpen: false,
    setIsMenuOpen: () => {},
  })

export const useMenuContext = () => useContext(MenuContext)

const MenuProvider: React.FC = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </MenuContext.Provider>
  )
}

export default MenuProvider
