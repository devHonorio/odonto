import tw from "tailwind-styled-components";
import { logo } from "../Header/styles";

export const container = tw.footer`
flex
flex-col
items-center
gap-10
bg-green-50
py-10
text-sm
mt-24
`;

export const logoFooter = tw(logo)`
h-14
w-40
`;

export const containerItemFooter = tw.div`
flex
flex-col
gap-10
`;
