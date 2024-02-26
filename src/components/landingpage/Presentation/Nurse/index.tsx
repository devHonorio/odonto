"use client";
import * as S from "./styles";

export const Nurse = () => {
  return (
    <S.nurseContainer>
      <S.nurseImage
        src="/dentistas.png"
        alt="dentista"
        width={350}
        height={350}
      />
      <S.ornament />
    </S.nurseContainer>
  );
};
