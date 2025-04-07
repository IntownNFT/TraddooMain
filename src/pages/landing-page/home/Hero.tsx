import { useRef } from "react";
import { ContainerScroll } from "../../../components/ui/container-scroll-animation";
import DashboardImg from "../../../assets/landing-page/home/dashboard.png";

const Hero = () => {
  return (
    <div className="flex flex-col overflow-hidden pb-[150px] mt-[-100px] md:mt-[-120px]">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="font-raleway font-extrabold text-5xl sm:text-6xl md:text-[80px] -tracking-[2.55px] md:-tracking-[4.55px] leading-tight md:leading-[91px] text-center max-w-[900px] mx-auto text-balance md:text-wrap">
              <span className="text-blue">Traddoo</span>: Reimagined for <br />
              <span className="text-5xl md:text-[80px] font-extrabold mt-1 leading-tight">
                Futures Traders
              </span>
            </h1>
            
            <p className="font-kanit font-medium max-w-[600px] mx-auto -tracking-[1px] leading-[28px] text-xl sm:text-2xl text-center mt-6 mb-16">
              No consistency rules once funded. No time restrictions or cap on payouts. No activation fees once funded.
            </p>
            
            <div className="h-[52px]"></div>
          </>
        }
      >
        <div className="relative h-full w-full bg-[#0d0d0d] flex items-center justify-center">
          <img 
            src={DashboardImg} 
            alt="Traddoo Trading Dashboard" 
            className="w-full h-auto object-cover max-w-[1200px] rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.12)] transform hover:scale-[1.02] transition-transform duration-700"
          />
        </div>
      </ContainerScroll>
    </div>
  );
};

export default Hero;
