import { memo } from 'react'

import { Layout, Wrapper, Subjects } from '@components'
import Board from "@components/Board"
import { LeftContent, RightContent } from './styled'
import useControlItems from "./hooks/useControlItems"

const App = () => {
  const { removeItems, savePosition, downloadJSON } = useControlItems()

  return (
      <Layout>
        <LeftContent>
          <Wrapper>
            <Subjects />
          </Wrapper>
          <Wrapper>
            <button onClick={savePosition}>Save</button>
            <button onClick={downloadJSON}>download</button>
            <button onClick={removeItems}>remove</button>
          </Wrapper>
        </LeftContent>
        <RightContent>
          <Board />
        </RightContent>
      </Layout>
  )
}

export default memo(App)
