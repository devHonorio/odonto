"use client";
import * as S from "./styles";

export const Clinic = () => {
  return (
    <>
      <S.titleClinic>Clinica</S.titleClinic>

      <S.containerImageClinic>
        <S.imageWide
          src="/consultorio-externo.jpg"
          alt="sobre"
          width={500}
          height={500}
        />
        <S.image src="/atendimento.jpg" alt="sobre" width={500} height={500} />

        <S.image src="/espera.jpg" alt="sobre" width={500} height={500} />
        <S.imageWide src="/balcao.jpg" alt="sobre" width={500} height={500} />
      </S.containerImageClinic>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
        modi aspernatur laudantium, voluptates molestiae facilis quas nemo esse
        quasi quia accusamus dignissimos ut perspiciatis doloribus consectetur
        libero tempore aperiam quidem.
      </p>
    </>
  );
};
