import Link from "next/link";
import tw from "tailwind-styled-components";

export const containerSocial = tw.div`
flex
items-center
justify-center
gap-5
py-5`;

export const linkSocial = tw(Link)`
rounded-3xl
bg-green-500
p-4
shadow-xl`;
