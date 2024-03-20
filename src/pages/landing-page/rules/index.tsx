import FAQs from '../../../components/FAQ/FAQs'
import SectionHeader from '../../../components/SectionHeader'
import { FAQsData } from './Data'

const Rules = () => {
  return (
    <main className="mt-16">
      <SectionHeader
        title="Trading Rules"
        subtitle="Traddoo is built and designed to offer the greatest experience for our traders. It's simple, be a consistent and disciplined trader."
        subtitleStyles="font-poppins font-medium text-[#717171] mt-3"
      />
      <FAQs file={FAQsData} />
    </main>
  )
}

export default Rules
