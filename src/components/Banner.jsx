import bannerImg from "../assets/imgs/Banner.jpg";
import Group18 from "../assets/imgs/Group18.png";

export default function Banner() {
  return (
    <section className="w-full">
      <div
        className="
          relative isolate w-full overflow-hidden inline-block
          h-[320px] sm:h-[480px] md:h-[640px] lg:h-[720px]

          after:content-[''] after:absolute after:inset-y-0 after:left-0 after:w-[30%]
          after:bg-blue-900/40 after:blur-2xl after:pointer-events-none after:z-10

          before:content-[''] before:absolute before:bottom-0 before:right-0 before:w-[55%] before:h-[60%]
          before:bg-blue-500/90
          before:[clip-path:polygon(35%_0,100%_0,100%_100%,0_100%)]
          before:pointer-events-none before:z-10
        "
      >
        {/* Background Image */}
        <img
          src={bannerImg}
          alt="banner"
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />

        {/* Blue diagonal shape */}
        <div
          className="
            absolute inset-0 z-20
            bg-[var(--nav-bg)]
            [clip-path:polygon(90%_0,100%_0,100%_100%,20%_100%)]
            flex items-end justify-end
          "
        >
          <img
            src={Group18}
            alt="Group18"
            className="
              h-full object-cover
              w-[78%] sm:w-10/12
            "
          />
        </div>

        {/* Text Content */}
        <div
          dir="rtl"
          className="
            absolute inset-0 z-40
            flex items-end justify-end
            px-4 sm:px-8 lg:px-16
            pb-6 sm:pb-10 md:pb-14
          "
        >
          <div
            className="
              ml-auto w-full
              max-w-[520px] md:max-w-[600px]
              text-white text-right
              flex flex-col items-end
            "
          >
            <h1 className="font-['Almarai'] font-bold text-[20px] sm:text-[25px] md:text-[30px] leading-tight text-right w-full">
              تجارة ناجحة من أول مرة!
            </h1>

            <p className="mt-4 font-['Almarai'] text-[16px] sm:text-[18px] md:text-[20px] leading-[1.9] text-white/90">
              لوريم ايبسوم دولار سيت أميت كومودو دولار أد إكزيرسيتيشن كونسيكتيتور دولار أليكويب إي سيت أديبيسشينج دونك،
              تيت كويرات. ميو فوليتيات. ماغنيت، بيريتيتيس. نيسيوت كويرات مينيم إنكيديديونت نيسيوت أليكا كونسيفيكات كويرات.
              كلارينتي كونسيكتيتور إنتيرديكتوم ماجنا فينيام، كومودو فينيام، سيت أد نيسي لابورام لامبور أوت ماجنا سيد سيت.
              توب دولار تيمبور أليكويب
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
