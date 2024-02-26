import * as S from "./styles";
import { WrittenLogo } from "./WrittenLogo";
import { Nurse } from "./Nurse";
import { Social } from "./Social";

export const Presentation = () => {
  return (
    <S.container>
      <WrittenLogo />

      <Nurse />

      <S.button>Entre em contato</S.button>

      <Social />
    </S.container>
  );
};
