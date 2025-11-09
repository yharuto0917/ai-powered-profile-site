import ScrollHero from "@/components/common/scrollHero";
import IntroBox from "@/components/IntroduceMySelf/IntroBox";
import MySkills from "@/components/IntroduceMySelf/mySkills";

export default function Home() {
  return (
    <>
      <ScrollHero />
      <div className="flex items-center justify-center min-h-screen p-4 mb-30 sm:p-8">
        <div className="w-full max-w-[65rem]">
          <IntroBox />
          <MySkills />
        </div>
      </div>
    </>
  );
}