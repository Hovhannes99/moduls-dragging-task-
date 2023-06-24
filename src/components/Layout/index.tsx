import React, { memo } from 'react'

import { Section } from './styled'

interface IEmptyContainer {
  children: React.ReactNode
}

const Layout = ({ children }: IEmptyContainer) => {
  return <Section>{children}</Section>
}

export default memo(Layout)
