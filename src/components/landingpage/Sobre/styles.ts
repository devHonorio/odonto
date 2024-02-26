import tw from "tailwind-styled-components";
import { h2 } from "../Trataments/styles";
import Image from "next/image";
import { button } from "../Presentation/styles";

export const container = tw.div`
my-5
flex
flex-col
gap-5
`;

export const title = tw(h2)``;

export const aboutMeContainer = tw.div`
flex
`;

export const imageVertical = tw(Image)`
w-24
`;

export const aboutMePContainer = tw.div`
mt-5
bg-gradient-to-tr
from-green-400
to-green-600
p-5
`;

export const valuesContainer = tw.div`
my-36
flex
flex-col
gap-5
`;

export const valuesImage = tw(Image)`
w-full
`;

export const buttonValues = tw(button)``;
