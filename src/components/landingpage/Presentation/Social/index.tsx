import { FacebookIcon, InstagramIcon, WhatsappIcon } from "@/components/Icons";
import * as S from "./styles";
export const Social = () => {
  return (
    <S.containerSocial>
      <S.linkSocial href="#">
        <WhatsappIcon />
      </S.linkSocial>

      <S.linkSocial href="#">
        <InstagramIcon />
      </S.linkSocial>

      <S.linkSocial href="#">
        <FacebookIcon />
      </S.linkSocial>
    </S.containerSocial>
  );
};
