import { AnimatedTestimonials } from "../../../components/ui/animated-testimonials";
import SectionHeader from "../../../components/SectionHeader";

// Import the images in the desired order
import FinanceMagnates from "../../../assets/landing-page/testimonials/financemagnates.png";
import User1 from "../../../assets/landing-page/testimonials/2399A9DF-D1DB-424F-A5FB-8AB47FA7D964.png";
import FinanceFeed from "../../../assets/landing-page/testimonials/financefeed.png";
import User2 from "../../../assets/landing-page/testimonials/3253FDCF-6A10-4F55-96FE-2AD5D34AC6AE.png";
import User3 from "../../../assets/landing-page/testimonials/352E6913-0229-4CA6-B035-01B9130BA195.png";

const testimonials = [
  {
    quote: "Traddoo's innovative EOD drawdown system is revolutionizing how prop firms evaluate traders, allowing for focused strategy execution...",
    name: "Finance Magnates",
    designation: "Leading Financial News Outlet",
    src: FinanceMagnates,
    link: "https://www.financemagnates.com/article-on-traddoo"
  },
  {
    quote: "Traddoo is a great firm with the best support in the world and super fast payouts. Challenges are a bit different than most traditional firms...",
    name: "MrTHoRR",
    designation: "Futures Trader",
    src: User1
  },
  {
    quote: "Traddoo's direct market access through Interactive Brokers sets a new standard for prop trading firms, delivering institutional-grade execution...",
    name: "Finance Feed",
    designation: "Industry Publication",
    src: FinanceFeed,
    link: "https://financefeed.com/traddoo-review"
  },
  {
    quote: "Great experience with Traddoo. Great trading environment and good support by traddoo team.",
    name: "Sudheesh PGM",
    designation: "ES Trader",
    src: User2
  },
  {
    quote: "Amazing experience! I was skeptical due the 1 star review but they are just complainers. The company works perfectly and when there is a problem...",
    name: "Raudel",
    designation: "Professional Trader",
    src: User3
  }
];

const Testimonials = () => {
  return (
    <div className="flex flex-col gap-8">
      <SectionHeader
        title="Featured In The Press"
        subtitle="Recognized by leading financial publications and trusted by successful traders worldwide."
      />
      <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
    </div>
  );
};

export default Testimonials; 