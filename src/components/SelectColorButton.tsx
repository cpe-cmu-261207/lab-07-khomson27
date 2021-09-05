import {PixelPainterStore,select} from '../stores/PixelPainterStore'
type SelectColorButtonProps = {
  color: string;
}

const SelectColorButton = ({ color }: SelectColorButtonProps) => {

  //modify this function to highlight correctly
  const state = PixelPainterStore.useState()

  const computeRingSize = () => {
    if(color === state.selectcolor)
    return "ring-8 ring-green-400"
    else return ""
  }

  return (
    <div className={`${computeRingSize()} rounded-md border-black border-2 w-12 h-12 cursor-pointer`}
      style={{ backgroundColor: color }} 
      onClick = {() => {select(color)}}
    >
    </div>
  )
}

export default SelectColorButton