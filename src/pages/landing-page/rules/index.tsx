import FAQs from '../../../components/FAQ/FAQs'
import SectionHeader from '../../../components/SectionHeader'


const Rules = () => {
  return (
    <main className="mt-16">
      <SectionHeader
        title="Trading Rules"
        subtitle="Traddoo is built and designed to offer the greatest experience for our traders. It's simple, be a consistent and disciplined trader."
        titleStyles="mt-24"
        subtitleStyles="font-poppins font-medium text-[#717171] mt-3"
      />
      <FAQs />
    </main>
  )
}

export default Rules
