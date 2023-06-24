import React, { memo } from 'react'

import { Section } from './styled'

interface IWrapper {
  children: React.ReactNode
}
const Wrapper = ({ children }: IWrapper) => {
  return <Section>{children}</Section>
}

export default memo(Wrapper)
