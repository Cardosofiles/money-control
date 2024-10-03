import { Header } from "../../components/Header";
import { Sumarry } from "../../Summary";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Sumarry />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de Site</td>
              <td>
                <PriceHighlight variant="income">R$ 10.000,000</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>12/08/2021</td>
            </tr>

            <tr>
              <td width="50%">Desenvolvimento de Site</td>
              <td>
                <PriceHighlight variant="outcome"> - R$ 100,000</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>12/08/2021</td>
            </tr>

            <tr>
              <td width="50%">Desenvolvimento de Site</td>
              <td>
                <PriceHighlight variant="income">R$ 100,000</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>12/08/2021</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
