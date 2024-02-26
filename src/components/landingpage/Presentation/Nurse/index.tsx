"use client";
import * as S from "./styles";

export const Nurse = () => {
  return (
    <S.nurseContainer>
      <S.nurseImage
        src="/dentista.png"
        alt="dentista"
        width={300}
        height={300}
      />
      <S.ornament />
    </S.nurseContainer>
  );
};
