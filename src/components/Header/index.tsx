import * as Dialog from "@radix-ui/react-dialog";

import logoSvg from "../../assets/dt-money.svg";
import { NewTransationModal } from "../NewTransationModal";
import { HeaderContainer, HeaderContent, NewTrasactionButton } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoSvg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTrasactionButton>Nova transação</NewTrasactionButton>
          </Dialog.Trigger>

          <NewTransationModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
