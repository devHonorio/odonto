import tw from "tailwind-styled-components";
import { title } from "../Sobre/styles";
import Image from "next/image";

export const titleClinic = tw(title)`
`;

export const container = tw.div`
grid
`;

export const containerImageClinic = tw.div`
grid
grid-cols-3
`;

export const imageWide = tw(Image)`
col-span-2
w-full
`;

export const image = tw(Image)`
h-full
object-cover
`;
