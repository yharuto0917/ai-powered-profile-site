import IntroBox from "@/components/IntroduceMySelf/IntroBox";
import MySkills from "@/components/IntroduceMySelf/mySkills";
import ChangeLog from "@/components/IntroduceMySelf/changelog";
import SNSBox from "@/components/IntroduceMySelf/SNSBox";
import HeroSection from "@/components/common/HeroSection";

export default function Home() {
  return (
    <>
      <div id="home" style={{ height: '100dvh', width: '100%', overflowX: 'hidden', position: 'relative' }}>
        <HeroSection />
      </div>
      <div className="flex flex-col justify-center items-center pb-30">
        <div className="w-full max-w-[75rem]">
          <IntroBox />
          <MySkills />
          <ChangeLog />
          <SNSBox />
        </div>
      </div>
    </>
  );
}