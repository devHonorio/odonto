import { Bars2Icon } from "@heroicons/react/24/outline";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import tw from "tailwind-styled-components";

export const MenuIcon = tw(Bars2Icon)`
h-6
w-6
`;

export const WhatsappIcon = tw(FaWhatsapp)`
h-5
w-5
text-white
`;

export const InstagramIcon = tw(FaInstagram)`
h-5
w-5
text-white
`;

export const FacebookIcon = tw(FaFacebook)`
h-5
w-5
text-white
`;
