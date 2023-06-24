import { memo, useContext, useEffect, useState } from 'react'

import { ISubjects } from '@appTypes/global'
import { MainContext } from '@contexts/general'
import { subjectsData } from '@collections/images'
import { v4 as uuidv4 } from 'uuid'
import { Section, Item } from './styled'

const ListOfSubjects = () => {
  const { setItems, items } = useContext(MainContext)
  const generateId = uuidv4()
  const [data] = useState(localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data") || " ") : [])

  useEffect(() => {
    if (data.length) {
      setItems(data)
    }
  },[])
  const handleAddItemInToBoard = (item:ISubjects) => {
    setItems([...items, { ...item, id: generateId }])
  }

  return (
        <Section>
          {subjectsData.map((item) => {
            const { id, img } = item

            return (
                <Item key={id} onClick={() => handleAddItemInToBoard(item)}>
                  <img src={img} alt={id} />
                </Item>
            )
          })}
        </Section>
  )
}

export default memo(ListOfSubjects)
