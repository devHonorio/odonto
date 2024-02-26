import Image from "next/image";
import tw from "tailwind-styled-components";

export const nurseContainer = tw.div`
relative
flex
justify-center
`;
export const nurseImage = tw(Image)`
z-50
rounded-b-full
shadow-green-700
drop-shadow-2xl
`;

export const ornament = tw.div`
absolute
bottom-0
h-80
w-80
rounded-full
bg-gradient-to-b
from-green-500
to-green-800
`;
