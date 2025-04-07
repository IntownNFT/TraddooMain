import TraddooBeach from "../../../assets/landing-page/founders/traddoobeach.png";

const Founders = () => {
  return (
    <div className="w-full max-w-[1120px] mx-auto text-center px-6 py-12 border-t border-light-grey">
      <h3 className="font-raleway font-bold text-3xl md:text-4xl mb-6">
        A New Chapter: From Vision to Reality
      </h3>
      
      <div className="max-w-3xl mx-auto text-lg text-white/75">
        <p className="mb-6 leading-relaxed">
          We're excited to announce that production testing of our platform begins today—a milestone that represents far more than just a product launch.
        </p>
        <p className="mb-6 leading-relaxed">
          This journey has challenged us in ways we never imagined. When we lost our technology partnerships and found ourselves starting over, we made a pivotal decision: rather than seeking another temporary solution, we would build something truly ours.
        </p>
        <p className="mb-6 leading-relaxed">
          For the past eighteen months, we've been learning to code while simultaneously developing our proprietary platform. What began as a distant aspiration has transformed into tangible reality—the first of many products that will carry our name and embody our vision.
        </p>
        <p className="mb-6 leading-relaxed">
          We founded Traddoo with a simple mission: to create a space where both traders and our team could thrive. Despite facing substantial setbacks across legal, financial, and operational fronts, that mission has remained our north star.
        </p>
        <p className="mb-6 leading-relaxed">
          To our community who has stood with us through this rebuilding phase—your patience and encouragement have been invaluable. We're now moving forward with infrastructure and partnerships built on relationships that have weathered these challenges alongside us.
        </p>
        <p className="mb-6 leading-relaxed">
          This isn't just a relaunch. It's a rebirth, built on ownership, resilience, and the unwavering belief in what Traddoo can become.
        </p>
        
        {/* Success Metrics Section (moved to just before the signature) */}
        <div className="my-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-dark-blue border border-light-grey rounded-lg p-6 transform hover:scale-105 transition-all duration-500">
              <h4 className="text-5xl font-bold text-primary mb-2">$1.2M+</h4>
              <p className="text-white/75 text-lg">Total Payouts to Traders</p>
            </div>
            <div className="bg-dark-blue border border-light-grey rounded-lg p-6 transform hover:scale-105 transition-all duration-500">
              <h4 className="text-5xl font-bold text-primary mb-2">250+</h4>
              <p className="text-white/75 text-lg">Funded Traders Served</p>
            </div>
          </div>
        </div>
        
        <div className="mt-4 font-semibold text-white">
          <p>—The Traddoo Founders</p>
        </div>
      </div>
    </div>
  );
};

export default Founders; 