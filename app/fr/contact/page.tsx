"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const contacts = [
    {
      number: "01",
      title: "Renseignements généraux",
      text: "Pour toute question concernant Azah Charitable Foundation, notre mission et nos domaines d’intervention.",
      email: "administration@azahcharitablefoundation.com",
    },
    {
      number: "02",
      title: "Partenariats",
      text: "Pour les institutions, donateurs, ONG, entreprises et organismes souhaitant collaborer avec nous.",
      email: "partnerships@azahcharitablefoundation.com",
    },
    {
      number: "03",
      title: "Bénévolat et rejoindre Azah",
      text: "Pour les personnes souhaitant soutenir Azah par leurs compétences, leur temps, à distance ou à travers un engagement sur le terrain.",
      email: "careers@azahcharitablefoundation.com",
    },
    {
      number: "04",
      title: "Médias et communication",
      text: "Pour les demandes concernant la presse, les médias, les interviews, la couverture d’événements et la communication.",
      email: "comms@azahcharitablefoundation.com",
    },
  ];

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mjykqzqz", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-[#F7F4EE] text-[#1E2A44]">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-8 pt-24 pb-20">
        <p className="uppercase tracking-[0.35em] text-sm text-[#556F2B] mb-6">
          Contactez-nous
        </p>

        <h1 className="text-5xl md:text-7xl font-bold tracking-[-0.05em] leading-[1] max-w-5xl mb-10">
          Construisons ensemble un impact humanitaire concret et durable.
        </h1>

        <p className="text-xl leading-9 text-[#4A5565] max-w-4xl">
          Azah Charitable Foundation accueille les collaborations porteuses de
          sens afin de soutenir les communautés vulnérables à travers le Soudan.
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
            Écrivez-nous
          </p>

          <h2 className="text-5xl md:text-6xl font-bold tracking-[-0.05em] leading-tight max-w-4xl mb-12">
            Nous accueillons les partenariats, les collaborations et l’engagement humanitaire.
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-8"
          >
            <input type="hidden" name="language" value="French" />

            <div>
              <label className="block text-sm font-semibold mb-4">
                Nom complet
              </label>

              <input
                type="text"
                name="full_name"
                required
                placeholder="Votre nom"
                className="w-full bg-[#F7F4EE] border border-[#E5DED3] rounded-2xl px-6 py-5 outline-none focus:border-[#556F2B] transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-4">
                Adresse e-mail
              </label>

              <input
                type="email"
                name="email"
                required
                placeholder="Votre adresse e-mail"
                className="w-full bg-[#F7F4EE] border border-[#E5DED3] rounded-2xl px-6 py-5 outline-none focus:border-[#556F2B] transition"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-4">
                Objet
              </label>

              <input
                type="text"
                name="subject"
                required
                placeholder="Objet de votre message"
                className="w-full bg-[#F7F4EE] border border-[#E5DED3] rounded-2xl px-6 py-5 outline-none focus:border-[#556F2B] transition"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-4">
                Message
              </label>

              <textarea
                rows={7}
                name="message"
                required
                placeholder="Écrivez votre message..."
                className="w-full bg-[#F7F4EE] border border-[#E5DED3] rounded-2xl px-6 py-5 outline-none focus:border-[#556F2B] transition resize-none"
              />
            </div>

            <div className="md:col-span-2 pt-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-[#1E2A44] text-white px-10 py-5 rounded-full font-semibold hover:bg-[#556F2B] transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending"
                  ? "Envoi en cours..."
                  : "Envoyer le message"}
              </button>

              {status === "success" && (
                <p className="mt-6 text-[#556F2B] font-semibold">
                  Merci. Votre message a bien été envoyé.
                </p>
              )}

              {status === "error" && (
                <p className="mt-6 text-[#9E3B3B] font-semibold">
                  Une erreur s’est produite. Veuillez réessayer ou nous contacter par e-mail.
                </p>
              )}
            </div>

          </form>
        </div>
      </section>

    </main>
  );
}
