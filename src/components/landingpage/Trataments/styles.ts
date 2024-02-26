import tw from "tailwind-styled-components";

export const container = tw.div`
flex
flex-col
gap-5
py-20
`;

export const h2 = tw.h2`
text-2xl
font-bold`;

export const ul = tw.ul`
flex
flex-wrap
gap-5
`;

export const li = tw.li`
rounded-full
border
border-black
px-5
py-3
hover:text-green-600
hover:border-green-600
`;

export const p = tw.p`
text-lg
`;

export const button = tw.button`
rounded-full
border
border-green-600
px-5
py-4
text-lg
text-green-600
`;
