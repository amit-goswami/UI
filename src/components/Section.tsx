import { ButtonSection } from './BottomSection'
import { FirstBar } from './FirstBar'
import { SecondBar } from './SecondBar'

export const Section = () => {
  return (
    <section className="flex flex-col items-center justify-between gap-y-4 px-24">
      <FirstBar />
      <SecondBar />
      <ButtonSection />
    </section>
  )
}
