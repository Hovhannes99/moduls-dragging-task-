import React, { useState } from 'react'

import { MainContext } from '@contexts/general'

const ContextWrapper = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState()

  return <MainContext.Provider value={{ items, setItems }}>{children}</MainContext.Provider>
}

export default ContextWrapper
