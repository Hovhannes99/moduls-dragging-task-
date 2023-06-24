import { MovableItem } from '@appTypes/global'
import { createContext, Dispatch, SetStateAction} from 'react'

export interface IMainContext {
  items: MovableItem[]
  setItems: Dispatch<SetStateAction<MovableItem[]>>
}

export const MainContext = createContext<any>({} as IMainContext)
