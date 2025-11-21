import IntroBox from "@/components/IntroduceMySelf/IntroBox";
import MySkills from "@/components/IntroduceMySelf/mySkills";
import HeroSection from "@/components/common/HeroSection";

export default function Home() {
  return (
    <>
      <div style={{ height: '100vh', width: '100%', overflowX: 'hidden', position: 'relative' }}>
        <HeroSection />
      </div>
      <div className="flex items-center justify-center min-h-screen p-4 mb-30 sm:p-8">
        <div className="w-full max-w-[75rem]">
          <div className="flex flex-col">
            <h2 className="title-font text-4xl font-bold -rotate-4 ml-20 z-5 relative">Introduce Myself</h2>
            <IntroBox />
            <MySkills />
          </div>
        </div>
      </div>
    </>
  );
}