"use client";

import * as S from "./styles";

import Image from "next/image";
import { Social } from "../Presentation/Social";

export const Sobre = () => {
  return (
    <S.container>
      <S.title>Um pouco sobre mim</S.title>

      <S.aboutMeContainer>
        <S.imageVertical
          src="/dentista-de-lado.jpeg"
          alt="sobre"
          width={250}
          height={250}
        />

        <div>
          <S.aboutMePContainer>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi,
              facilis exercitationem? Minus accusamus delectus debitis sequi
              quasi aliquid ducimus perferendis impedit, hic vel similique?
              Repudiandae
            </p>
          </S.aboutMePContainer>

          <Social />
        </div>
      </S.aboutMeContainer>

      <S.valuesContainer>
        <S.title>Valores em que acredito</S.title>
        <Image
          src="/dentista-com-criancas.jpeg"
          alt="Dentista com crianças"
          width={500}
          height={500}
        />

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi earum
          impedit possimus cumque recusandae vel temporibus nisi deleniti!
          Aspernatur maiores aperiam minus accusamus veritatis recusandae, cum
          error nisi fugit magnam.
        </p>

        <S.buttonValues>Entre em contato</S.buttonValues>
      </S.valuesContainer>
    </S.container>
  );
};
