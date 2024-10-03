import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SumarryCard, SumarryContainer } from "./styles";

export function Sumarry() {
  return (
    <SumarryContainer>
      <SumarryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>17.400,00</strong>
      </SumarryCard>

      <SumarryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>17.400,00</strong>
      </SumarryCard>

      <SumarryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>17.400,00</strong>
      </SumarryCard>
    </SumarryContainer>
  );
}
