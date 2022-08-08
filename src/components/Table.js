import React, { Component } from 'react';

class Table extends Component {
  render() {
    return (
      <>
        <div>Table</div>
        <table border="1">
          <thead>
            <tr>
              <th>Descrição</th>
              <td>{}</td>
            </tr>
            <tr>
              <th>Tag:</th>
              <td>{}</td>
            </tr>
            <tr>
              <th>Método de pagamento</th>
              <td>{}</td>
            </tr>
            <tr>
              <th>Valor</th>
              <td>{}</td>
            </tr>
            <tr>
              <th>Moeda</th>
              <td>{}</td>
            </tr>
            <tr>
              <th>Câmbio utilizado</th>
              <td>{}</td>
            </tr>
            <tr>
              <th>Valor convertido</th>
              <td>{}</td>
            </tr>
            <tr>
              <th>Moeda de conversão</th>
              <td>{}</td>
            </tr>
            <tr>
              <th>Editar/Excluir</th>
              <td>{}</td>
            </tr>
          </thead>

        </table>
      </>
    );
  }
}
export default Table;
