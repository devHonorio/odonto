"use client";
import { MenuIcon } from "@/components/Icons";
import * as S from "./styles";

export const Header = () => {
  return (
    <S.header>
      <S.logo src="/logo.png" alt="Cola Logo" width={180} height={180} />

      <S.button>
        <MenuIcon />
      </S.button>
    </S.header>
  );
};
