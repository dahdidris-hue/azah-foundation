export default function ContactPage() {
  const contacts = [
    {
      number: "01",
      title: "General Inquiries",
      text: "For general questions about Azah Charitable Foundation, our mission, and our areas of work.",
      email: "administration@azahcharitablefoundation.com",
    },
    {
      number: "02",
      title: "Partnerships",
      text: "For institutions, donors, NGOs, companies, and agencies interested in collaboration.",
      email: "partnerships@azahcharitablefoundation.com",
    },
    {
      number: "03",
      title: "Volunteer & Join Us",
      text: "For individuals who want to support Azah through skills, time, remote work, or field-based engagement.",
      email: "careers@azahcharitablefoundation.com",
    },
    {
      number: "04",
      title: "Media & Communications",
      text: "For press, media, interviews, event coverage, and communications-related inquiries.",
      email: "comms@azahcharitablefoundation.com",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F7F4EE] text-[#1E2A44]">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-8 pt-24 pb-20">
        <p className="uppercase tracking-[0.35em] text-sm text-[#556F2B] mb-6">
          Contact Us
        </p>

        <h1 className="text-5xl md:text-7xl font-bold tracking-[-0.05em] leading-[1] max-w-5xl mb-10">
          Let’s build meaningful humanitarian impact together.
        </h1>

        <p className="text-xl leading-9 text-[#4A5565] max-w-4xl">
          Azah Charitable Foundation welcomes meaningful collaboration in
          support of vulnerable communities across Sudan.
        </p>
      </section>

      {/* CONTACT SECTIONS */}
      <section className="max-w-7xl mx-auto px-8 pb-24">
        <div className="grid md:grid-cols-2 gap-8">

          {contacts.map((item) => (

            <div
              key={item.number}
              className="bg-white rounded-[36px] border border-[#E5DED3] p-10 shadow-sm hover:shadow-lg transition-all duration-300"
            >

              <div className="flex items-center gap-6 mb-10">
                <span className="text-[#9E3B3B] text-4xl font-bold tracking-[-0.04em]">
                  {item.number}
                </span>

                <div className="h-[1px] bg-[#D9D3C8] flex-1" />
              </div>

              <h2 className="text-4xl font-bold tracking-[-0.04em] leading-tight mb-8">
                {item.title}
              </h2>

              <p className="text-[#4A5565] text-lg leading-9 mb-10 max-w-xl">
                {item.text}
              </p>

              <a
                href={`mailto:${item.email}`}
                className="text-[#B89B5E] font-semibold text-lg break-all hover:text-[#556F2B] transition"
              >
                {item.email}
              </a>

            </div>

          ))}

        </div>
      </section>

      {/* MESSAGE FORM */}
      <section className="max-w-7xl mx-auto px-8 pb-32">
        <div className="bg-white rounded-[40px] border border-[#E5DED3] p-12 md:p-16">

          <p className="uppercase tracking-[0.35em] text-sm text-[#556F2B] mb-6">
            Write A Message
          </p>

          <h2 className="text-5xl md:text-6xl font-bold tracking-[-0.05em] leading-tight max-w-4xl mb-12">
            We welcome partnerships, collaboration, and humanitarian engagement.
          </h2>

          <form className="grid md:grid-cols-2 gap-8">

            <div>
              <label className="block text-sm font-semibold mb-4">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-[#F7F4EE] border border-[#E5DED3] rounded-2xl px-6 py-5 outline-none focus:border-[#556F2B] transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-4">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-[#F7F4EE] border border-[#E5DED3] rounded-2xl px-6 py-5 outline-none focus:border-[#556F2B] transition"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-4">
                Subject
              </label>

              <input
                type="text"
                placeholder="Message subject"
                className="w-full bg-[#F7F4EE] border border-[#E5DED3] rounded-2xl px-6 py-5 outline-none focus:border-[#556F2B] transition"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-4">
                Message
              </label>

              <textarea
                rows={7}
                placeholder="Write your message..."
                className="w-full bg-[#F7F4EE] border border-[#E5DED3] rounded-2xl px-6 py-5 outline-none focus:border-[#556F2B] transition resize-none"
              />
            </div>

            <div className="md:col-span-2 pt-2">
              <button
                type="submit"
                className="bg-[#1E2A44] text-white px-10 py-5 rounded-full font-semibold hover:bg-[#556F2B] transition"
              >
                Send Message
              </button>
            </div>

          </form>
        </div>
      </section>

    </main>
  );
}