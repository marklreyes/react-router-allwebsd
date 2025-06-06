import { useTheme } from "~/context/ThemeContext";
import { GuestCard } from "~/components/GuestCard";
import type GuestData from "~/types/guestData";

export function GuestShowcase() {

  const guests: GuestData[] = [
    {
      id: "family-proud",
      name: "Family Proud",
      src: "/images/guests/family_proud_logo.jpeg",
      alt: "Family Proud logo",
      organization: "Family Proud",
      episodeUrl: "/episodes/s2-episode-05-meet-family-proud"
    },
    {
      id: "myworkingsoul",
      name: "My Working Soul",
      src: "/images/guests/myworkingsoul_logo.jpeg",
      alt: "My Working Soul logo",
      organization: "My Working Soul",
      episodeUrl: "/episodes/s7-episode-01-meet-my-working-soul"
    },
    {
      id: "sd-discovery-museum",
      name: "San Diego Children's Discovery Museum",
      src: "/images/guests/san_diego_childrens_discovery_museum_logo.jpeg",
      alt: "San Diego Children's Discovery Museum logo",
      organization: "SD Children's Discovery Museum",
      episodeUrl: "/episodes/s8-episode-02-san-diego-childrens-discovery-museum"
    },
    {
      id: "sd-futures-foundation",
      name: "San Diego Futures Foundation",
      src: "/images/guests/san_diego_futures_foundation_logo.jpeg",
      alt: "San Diego Futures Foundation logo",
      organization: "SD Futures Foundation",
      episodeUrl: "/episodes/s5-episode-02-san-diego-futures-foundation"
    },
    {
      id: "well-iq",
      name: "Well IQ",
      src: "/images/guests/well_iq_logo.jpeg",
      alt: "Well IQ logo",
      organization: "Well IQ",
      episodeUrl: "/episodes/s7-episode-02-meet-well-iq"
    }
  ];

  return (
    <section
      className="w-full pb-6 md:pb-12"
      aria-labelledby="guest-showcase-title"
    >
      {/* Section Header */}
      <div className="text-center mb-6">
        <h2
          id="guest-showcase-title"
          className="text-2xl md:text-3xl font-bold text-white mb-4"
        >
          Featured Past Guests
        </h2>
        <p className="text-white text-lg mx-auto">
          Join the community of innovative leaders who have shared their stories on AllWebSD!
        </p>
      </div>

      {/* Guest Grid */}
      <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto px-4">
        {guests.map((guest) => (
          <GuestCard key={guest.id} guest={guest} />
        ))}
      </div>
    </section>
  );
}
