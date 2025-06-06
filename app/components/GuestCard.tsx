import { NavLink } from "react-router-dom";
import { useTheme } from "~/context/ThemeContext";
import type GuestData from "~/types/guestData";

interface GuestCardProps {
  guest: GuestData;
}

export function GuestCard({ guest }: GuestCardProps) {
  const { isDarkMode } = useTheme();

  const CardContent = (
    <div
      className={`group flex flex-col items-center w-32 sm:w-36 md:w-40 lg:w-36 xl:w-32 ${
        guest.episodeUrl ? 'cursor-pointer' : 'cursor-default'
      }`}
      role="article"
      aria-labelledby={`guest-${guest.id}-name`}
    >
      {/* Avatar Container with daisyUI styling */}
      <div className="avatar mb-4">
        <div
          className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-24 lg:h-24 xl:w-20 xl:h-20 rounded-full ring ring-offset-base-100 ring-offset-2 transition-all duration-300 group-hover:ring-4 ${
            isDarkMode
              ? 'ring-[#71BEA9] group-hover:ring-[#71BEA9]'
              : 'ring-[#FFC425] group-hover:ring-[#FFC425]'
          }`}
        >
          <img
            src={guest.src}
            alt={guest.alt}
            className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>

      {/* Guest Info */}
      <div className="text-center">
        <h3
          id={`guest-${guest.id}-name`}
          className="text-white font-semibold text-sm md:text-base mb-1 group-hover:text-[#FFC425] transition-colors duration-200"
        >
          {guest.organization}
        </h3>
        <div
          className={`badge badge-outline text-xs transition-colors duration-200 ${
            isDarkMode
              ? 'border-[#71BEA9] text-[#71BEA9] group-hover:bg-[#71BEA9] group-hover:text-white'
              : 'border-[#FFC425] text-[#FFC425] group-hover:bg-[#FFC425] group-hover:text-[#2F241D]'
          }`}
        >
          Guest
        </div>
      </div>
    </div>
  );

  // If episodeUrl exists and is not empty, wrap in NavLink
  return guest.episodeUrl ? (
    <NavLink to={guest.episodeUrl}>
      {CardContent}
    </NavLink>
  ) : (
    CardContent
  );
}
