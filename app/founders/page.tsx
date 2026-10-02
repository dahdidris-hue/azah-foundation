import Image from "next/image";

export default function FoundersPage() {
  return (
    <main className="bg-[#F7F4EE] text-[#1E2A44]">
      {/* Page Introduction */}
      <section className="border-b border-[#E7E2D8]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-16 md:py-24">
          <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-[#556F2B] font-semibold mb-5">
            Founders & Leadership
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-[-0.05em] leading-[1] max-w-4xl">
            The people behind Azah.
          </h1>

          <p className="text-lg md:text-xl leading-8 md:leading-9 text-[#4A5565] max-w-3xl mt-8">
            A shared commitment to service, accountability, and rebuilding
            lives with dignity.
          </p>
        </div>
      </section>

      {/* Azah */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 lg:gap-20 items-start">
          {/* Photo */}
          <div>
            <div className="relative w-full aspect-[4/5] rounded-[28px] md:rounded-[40px] overflow-hidden bg-[#E7E2D8]">
              <Image
                src="/azah-founder-photo.png"
                alt="Azah Mohielden Mabrouk"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority
              />
            </div>
          </div>

          {/* Profile */}
          <div className="lg:pt-4">
            <p className="uppercase tracking-[0.3em] text-xs text-[#7B826A] font-semibold mb-5">
              President & Founder
            </p>

            <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.04em] leading-tight">
              Azah Mohielden Mabrouk
            </h2>

            <p
              dir="rtl"
              className="text-2xl md:text-3xl font-semibold text-[#556F2B] mt-3 text-left"
            >
              عزة محيي الدين مبروك
            </p>

            <div className="mt-8 border-t border-[#D9D3C8] pt-6 space-y-3">
              <div>
                <p className="font-semibold">
                  President, Azah Charitable Foundation
                </p>
                <p dir="rtl" className="text-[#6B7280] text-sm mt-1 text-left">
                  رئيسة مؤسسة عزة الخيرية
                </p>
              </div>

              <div>
                <p className="font-semibold">Founder</p>
                <p dir="rtl" className="text-[#6B7280] text-sm mt-1 text-left">
                  المؤسِّسة
                </p>
              </div>

              <div>
                <p className="font-semibold">
                  Wife of the Prime Minister of Sudan
                </p>
                <p dir="rtl" className="text-[#6B7280] text-sm mt-1 text-left">
                  حرم رئيس وزراء السودان
                </p>
              </div>
            </div>

            <div className="mt-10 bg-white border border-[#E5DED3] rounded-[28px] md:rounded-[36px] p-7 md:p-10 shadow-sm">
              <p className="uppercase tracking-[0.3em] text-xs text-[#B89B5E] font-semibold mb-6">
                Message from the Founder
              </p>

              <div
                dir="rtl"
                className="text-lg leading-9 text-[#4A5565] text-right whitespace-pre-line"
              >
                {`نحن في مؤسّسه عزه الخيريه نؤمن ايماناً قاطعا بان خدمه الإنسان في جميع احتياجاته هي مسؤليه أخلاقيه وإنسانيه
لذلك فإننا نعمل علي تسخير قدراتنا علي نحقيق هذا الطموح
نامل علي تحويل هذا الطموح لعمل يعيد بناء الحياة الكريمه لإنسان هذا الوطن.`}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8">
        <div className="border-t border-[#D9D3C8]" />
      </div>

      {/* Dahd */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-16 lg:gap-20 items-start">
          {/* Profile */}
          <div className="order-2 lg:order-1 lg:pt-4">
            <p className="uppercase tracking-[0.3em] text-xs text-[#7B826A] font-semibold mb-5">
              Chief Operating Officer & Co-Founder
            </p>

            <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.04em] leading-tight">
              Dahd Kamil Idris
            </h2>

            <p
              dir="rtl"
              className="text-2xl md:text-3xl font-semibold text-[#556F2B] mt-3 text-left"
            >
              دعد كامل إدريس
            </p>

            <div className="mt-8 border-t border-[#D9D3C8] pt-6 space-y-3">
              <div>
                <p className="font-semibold">Chief Operating Officer</p>
                <p dir="rtl" className="text-[#6B7280] text-sm mt-1 text-left">
                  الرئيس التنفيذي للعمليات
                </p>
              </div>

              <div>
                <p className="font-semibold">Co-Founder</p>
                <p dir="rtl" className="text-[#6B7280] text-sm mt-1 text-left">
                  المؤسِّسة المشاركة
                </p>
              </div>
            </div>

            <div className="mt-10 bg-white border border-[#E5DED3] rounded-[28px] md:rounded-[36px] p-7 md:p-10 shadow-sm">
              <p className="uppercase tracking-[0.3em] text-xs text-[#B89B5E] font-semibold mb-6">
                Message from the Co-Founder
              </p>

              <div className="text-lg leading-9 text-[#4A5565] whitespace-pre-line">
                {`Welcome to Azah Charitable Foundation! 
This was founded on the basis that compassion must be translated into action, resources must be distributed and wisely translated into results, and those results must be measurable and tracked. We operate internationally, but our first priority is Sudan, the reason is very obvious. It’s a duty. 

At Azah, we value full public accountability, transparency and reporting. We embedded a zero corruption policy into every project. We have a strict monitoring and evaluation process for each project as well as external boards for review and financial management and monitoring. 

My background in international relations and global health has shown me that conflict can affect more than institutions and systems, it affects and disrupts, if not completely destroys, real human lives. These are not stats, people cannot disappear into numbers.

Building this foundation with my mother Azah, who carries the same name as our great nation Sudan, gives me great pride and joy. I consider this a great privilege and responsibility, a responsibility to the people of Sudan. One that simply cannot fail.

We focus on Displacement, Women and Girls welfare, Children, Health, Food Insecurity, Education and Social Security. 

We must rebuild and restore what war has touched, this is the time, and through us, we can do just that, together. 

Reach out, if you have an idea, a skill you want to contribute, are part of an organisation that you want to partner up with us, volunteer, donate, talk with us and let’s do something for Sudan!`}
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 lg:order-2">
            <div className="relative w-full aspect-[4/5] rounded-[28px] md:rounded-[40px] overflow-hidden bg-[#E7E2D8]">
              <Image
                src="/dahd-founder-photo.jpg"
                alt="Dahd Kamil Idris"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-[#1E2A44] text-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 md:px-8 py-16 md:py-20 text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-[#BFC8A5] mb-5">
            Azah Charitable Foundation
          </p>

          <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.04em] leading-tight">
            Restoring dignity. Rebuilding hope.
          </h2>
        </div>
      </section>
    </main>
  );
}
