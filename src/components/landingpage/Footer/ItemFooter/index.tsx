import * as S from "./styles";
import Link from "next/link";

interface ItemFooterProps {
  label: string;
  href: string;
  content: string;
}
export const ItemFooter = ({ label, href, content }: ItemFooterProps) => {
  return (
    <Link href={href}>
      <S.label>{label}</S.label>
      {content}
    </Link>
  );
};
