"use client";
import * as S from "./styles";
import { logo as Logo } from "../Header/styles";
import { Social } from "../Presentation/Social";
import { ItemFooter } from "./ItemFooter";

export const Footer = () => {
  return (
    <S.container>
      <S.logoFooter src="/logo.png" alt="Cola Logo" width={280} height={280} />
      <S.containerItemFooter>
        <ItemFooter
          label="Endereço"
          href="#"
          content="Rua Papa João Paulo - 570, Água verde, Ampére - PR"
        />

        <ItemFooter label="Contato" href="#" content="(46) 9 88158699" />

        <ItemFooter
          label="Instagram"
          href="#"
          content="@alessandracola&@arianecola"
        />
      </S.containerItemFooter>
      <Social />© 2024 Cola. Todos os direitos reservados.
    </S.container>
  );
};
