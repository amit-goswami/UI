import { Row1 } from './Row1'
import { Row2 } from './Row2'
import { Row3 } from './Row3'
import { Row4 } from './Row4'

export const ButtonSection = () => {
  return (
    <div className="flex gap-2 w-[calc(100vw-192px)]">
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
    </div>
  )
}
