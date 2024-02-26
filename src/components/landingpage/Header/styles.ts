import Image from "next/image";
import tw from "tailwind-styled-components";

export const header = tw.header`
flex
items-center
justify-between
py-5
`;

export const logo = tw(Image)`
h-8
w-24
`;

export const button = tw.button`
p-5
`;
