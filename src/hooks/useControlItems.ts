import { useContext } from "react"
import { MainContext } from "@contexts/general"

const useControlItems = () => {
  const { items, setItems } = useContext(MainContext)

  const savePosition = () => {
    localStorage.setItem("data", JSON.stringify(items))
  }

  function downloadJSON() {
    const dataURI = `data:application/json;charset=utf-8,${encodeURIComponent(JSON.stringify(items, null, 2))}`
    const a = document.createElement('a')
    a.href = dataURI
    a.download = "Position"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  const removeItems = () => {
    localStorage.setItem("data", JSON.stringify([]))
    setItems([])
  }

  return {
    savePosition,
    removeItems,
    downloadJSON
  }
}

export default useControlItems
