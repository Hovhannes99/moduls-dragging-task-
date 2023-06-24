import React, {HTMLProps} from "react"
import { Img } from "@components/Board/styled"

const Box = (props:any) => {
  return (
            <div
              {...props}
              className='box'
              style={{
                margin: 0,
                height: "100%",
                backgroundColor: props.color
              }}
            >
                <Img key={props.id} src={props.img} alt='' />
            </div>
  )
}

export default Box
