import React, {useState, createContext, ReactNode} from 'react'

type TPropType = {
  children: any,
}
interface IlinkContextType {
  link: string,
  setLink: Function,
}
const initValue: IlinkContextType = {
  link: "",
  setLink: ()=> {},
}

const LinkContext = createContext<IlinkContextType>({link: "", setLink: ()=> {}});

const LinkProvider: React.FC<TPropType> = ({ children }) => {
  const [link, setLink] = useState("")

  return ( 
    <LinkContext.Provider value={{link, setLink}}>
      {children}
    </LinkContext.Provider>
   ); 
}
export { LinkProvider, LinkContext}