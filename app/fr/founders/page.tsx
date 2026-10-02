import Image from "next/image";

export default function FoundersPageFR() {
  return (
    <main className="bg-[#F7F4EE] text-[#1E2A44]">
      {/* Page Introduction */}
      <section className="border-b border-[#E7E2D8]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 pt-10 pb-9 md:py-24">
          <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-[#556F2B] font-semibold mb-5">
            Fondatrices et direction
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-[-0.05em] leading-[1] max-w-4xl">
            Celles qui font vivre Azah.
          </h1>
          <p className="text-lg md:text-xl leading-8 md:leading-9 text-[#4A5565] max-w-3xl mt-6 md:mt-8">
            Un engagement commun au service des autres, à la responsabilité et
            à la reconstruction de vies dans la dignité.
          </p>
        </div>
      </section>

      {/* Azah */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 pt-5 pb-10 md:py-24">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6 md:gap-16 lg:gap-20 items-start">
          {/* Photo */}
          <div>
            <div className="relative w-full aspect-[4/3.85] md:aspect-[4/5] rounded-[28px] md:rounded-[40px] overflow-hidden bg-[#E7E2D8]">
              <Image
                src="/azah-founder-photo-2026.png"
                alt="Azah Mohielden Mabrouk"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority
              />
            </div>
          </div>

          {/* Profile */}
          <div>
            <h2 className="text-[2.9rem] sm:text-5xl md:text-5xl font-bold tracking-[-0.04em] leading-[1.15]">
              Azah Mohielden Mabrouk
            </h2>
            <p
              dir="rtl"
              className="text-2xl md:text-3xl font-semibold text-[#556F2B] mt-3 text-left"
            >
              عزة محيي الدين مبروك
            </p>

            {/* Role and Foundation */}
            <p className="mt-5 text-xl md:text-2xl font-bold text-[#1E2A44]">
              Présidente et fondatrice
            </p>
            <p className="mt-3 text-lg md:text-xl text-[#4A5565]">
              Fondation caritative Azah
            </p>
            <div className="mt-5 md:mt-8 border-t border-[#D9D3C8] pt-5 md:pt-6">
              <p className="text-lg md:text-xl font-semibold text-[#4A5565]">
                Épouse du Premier ministre du Soudan
              </p>
            </div>

            {/* Message */}
            <div className="mt-7 md:mt-10 bg-white border border-[#E5DED3] rounded-[28px] md:rounded-[36px] p-7 md:p-10 shadow-sm">
              <p className="uppercase tracking-[0.3em] text-xs text-[#B89B5E] font-semibold mb-6">
                Message de la fondatrice
              </p>
              <div className="text-lg leading-9 text-[#4A5565] whitespace-pre-line">
                {`À Azah Charitable Foundation, nous sommes profondément convaincus que servir les personnes et répondre à l’ensemble de leurs besoins constitue une responsabilité morale et humaine. C’est pourquoi nous mettons nos capacités au service de cette ambition, avec l’espoir de la transformer en actions concrètes permettant de restaurer une vie digne pour les habitants de notre pays.`}
              </div>
              <div className="mt-8 pt-6 border-t border-[#E7E2D8]">
                <p className="text-lg font-bold text-[#1E2A44]">
                  Azah Mohielden Mabrouk
                </p>
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
      <section className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 pt-5 pb-10 md:py-24">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 md:gap-16 lg:gap-20 items-start">
          {/* Profile */}
          <div className="order-2 lg:order-1">
            <h2 className="text-[2.9rem] sm:text-5xl md:text-5xl font-bold tracking-[-0.04em] leading-[1.15]">
              Dahd Kamil Idris
            </h2>
            <p
              dir="rtl"
              className="text-2xl md:text-3xl font-semibold text-[#556F2B] mt-3 text-left"
            >
              دعد كامل إدريس
            </p>

            {/* Role and Foundation */}
            <p className="mt-5 text-xl md:text-2xl font-bold text-[#1E2A44]">
              Directrice des opérations et cofondatrice
            </p>
            <p className="mt-3 text-lg md:text-xl text-[#4A5565]">
              Fondation caritative Azah
            </p>

            {/* Message */}
            <div className="mt-7 md:mt-10 bg-white border border-[#E5DED3] rounded-[28px] md:rounded-[36px] p-7 md:p-10 shadow-sm">
              <p className="uppercase tracking-[0.3em] text-xs text-[#B89B5E] font-semibold mb-6">
                Message de la cofondatrice
              </p>
              <div className="text-lg leading-9 text-[#4A5565] whitespace-pre-line">
                {`Bienvenue à Azah Charitable Foundation !

Cette fondation est née de la conviction que la compassion doit se traduire en actions, que les ressources doivent être distribuées et utilisées avec discernement afin d’obtenir des résultats concrets, et que ces résultats doivent pouvoir être mesurés et suivis. Nous intervenons à l’échelle internationale, mais notre première priorité est le Soudan. La raison est évidente : c’est un devoir.

À Azah, nous accordons une importance fondamentale à la responsabilité publique, à la transparence et à la communication de nos résultats. Nous avons intégré une politique de tolérance zéro à l’égard de la corruption dans chacun de nos projets. Chaque projet fait également l’objet d’un processus rigoureux de suivi et d’évaluation, complété par des organes externes chargés de la revue, de la gestion financière et du contrôle.

Mon parcours dans les relations internationales et la santé mondiale m’a montré que les conflits ne touchent pas uniquement les institutions et les systèmes. Ils affectent et bouleversent des vies humaines réelles, lorsqu’ils ne les détruisent pas entièrement. Derrière les statistiques se trouvent des personnes, et aucune vie humaine ne doit disparaître derrière les chiffres.

Construire cette fondation avec ma mère, Azah, dont le nom évoque également celui de notre grande nation, le Soudan, est pour moi une immense source de fierté et de joie. Je considère cette mission comme un grand privilège, mais aussi comme une responsabilité envers le peuple soudanais — une responsabilité dans laquelle nous ne pouvons tout simplement pas nous permettre d’échouer.

Nous concentrons notre action sur les déplacements de population, le bien-être des femmes et des filles, les enfants, la santé, l’insécurité alimentaire, l’éducation et la protection sociale.

Nous devons reconstruire et restaurer ce que la guerre a touché. Le moment est venu et, en unissant nos efforts, nous pouvons y parvenir ensemble.

Contactez-nous si vous avez une idée, une compétence que vous souhaitez mettre à contribution, si vous représentez une organisation souhaitant établir un partenariat avec nous, si vous souhaitez faire du bénévolat ou apporter un soutien financier. Échangez avec nous et agissons ensemble pour le Soudan !`}
              </div>
              <div className="mt-8 pt-6 border-t border-[#E7E2D8]">
                <p className="text-lg font-bold text-[#1E2A44]">
                  Dahd Kamil Idris
                </p>
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 lg:order-2">
            <div className="relative w-full aspect-[4/3.85] md:aspect-[4/5] rounded-[28px] md:rounded-[40px] overflow-hidden bg-[#E7E2D8]">
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
            Restaurer la dignité. Reconstruire l’espoir.
          </h2>
        </div>
      </section>
    </main>
  );
}
