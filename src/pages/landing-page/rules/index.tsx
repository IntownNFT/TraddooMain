import FAQs from '../../../components/FAQ/FAQs'
import SectionHeader from '../../../components/SectionHeader'
import file from "./FAQs_Traddoo.md";


const Rules = () => {
  return (
    <main className="mt-16">
      <SectionHeader
        title="Trading Rules"
        subtitle="Traddoo is built and designed to offer the greatest experience for our traders. It's simple, be a consistent and disciplined trader."
        subtitleStyles="font-poppins font-medium text-[#717171] mt-3"
      />
      <FAQs file={file} />
    </main>
  )
}

export default Rules
