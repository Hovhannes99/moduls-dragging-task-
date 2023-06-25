import React, { memo, useContext } from 'react'

import { MainContext } from '@contexts/general'

import { Rnd } from 'react-rnd'
import { MovableItem } from "@appTypes/global"
import Box from "../Box/index"

const enable = {
  top: false,
  bottom: false,
  right: false,
  left: false,
  bottomRight: false,
  bottomLeft: false,
  topLeft: false,
  topRight: false
}

const Board = () => {
  const { items, setItems } = useContext(MainContext)

  return (
        <div
          style={{
            width: "400px",
            height: "400px"
          }}
        >
            <Rnd
              default={{
                x: 0,
                y: 0,
                width: 500,
                height: 500
              }}
              minWidth={100}
              minHeight={0}
              bounds='parent'
              onDrag={(e: any) => {
                e.stopImmediatePropagation()
              }}
              enableResizing={enable}
            >
                <Box height='500px' width='500px' color='black' />
                {items.map((item:MovableItem) => {
                  return (<Rnd
                    default={{
                      x: item.x || 1,
                      y: item.y || 1,
                      width: 100,
                      height: 90
                    }}
                    minWidth={0}
                    minHeight={0}
                    bounds='parent'
                    onDrag={(e:any) => {
                      e.stopImmediatePropagation()
                    }}
                    onDragStop={(e,d) => {
                      setItems((oldItems:MovableItem[]) => oldItems?.map((current:MovableItem) => {
                        if (current.id === item.id) {
                          return { ...item, x: d.x, y: d.y, id: item.id }
                        }
                        return current
                      }))
                    }}
                    enableResizing={enable}
                  >
                    <Box {...item} />
                          </Rnd>)
                })}
            </Rnd>
        </div>
  )
}

export default memo(Board)
