import { FaArrowUp, FaArrowDown } from 'react-icons/fa'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { decrementBreak, incrementBreak, selectBreak, selectInterval } from '../features/timerSlice'

export const BreakLength = () => {
  const dispatch = useAppDispatch()
  const breakValue = useAppSelector(selectBreak)
  const interval = useAppSelector(selectInterval)

  const handleUpClick = () => {
    if (!interval) dispatch(incrementBreak())
  }

  const handleDownClick = () => {
    if (!interval) dispatch(decrementBreak())
  }

  return (
    <div className="flex flex-col text-xl py-1 items-center md:mr-4">
      <div id="break-label">
        Break Length
      </div>
      <div className="flex justify-center items-center">
        <FaArrowUp className="cursor-pointer" onClick={handleUpClick} id="break-increment"/>
        <span className="mx-2" id="break-length">{breakValue}</span>
        <FaArrowDown className="cursor-pointer" onClick={handleDownClick} id="break-decrement"/>
      </div>
    </div>
  )
}
