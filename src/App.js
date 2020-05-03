import React, { Component, Fragment } from 'react';
import Table from './table';
import FormDado from './formulario';
import PopUp from "./common/popUp";
import Header from './header';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';

class App extends Component {

  state = {
    dados: [
      { autor: 'Paulo', nome: 'React JS', preco: '2000' },
      { autor: 'Daniel', nome: 'Angular', preco: '200' },
      { autor: 'Marcos', nome: 'Muito Bom', preco: '100000' },
      { autor: 'Bruno', nome: 'JQuery O Que é isso?', preco: '1000' },
      { autor: 'Bruno', nome: 'JQuery O Que é isso?', preco: '1000' },
      { autor: 'Bruno', nome: 'JQuery O Que é isso?', preco: '1000' }
    ],
  };

  /**
   * @function removerItem
   * @description Varre o array de itens verifica o item com o mesmo index do item clicado na tabela e o remove do array
   * @param {int} index - Index do item clicado na tabela
   */
  removerItem = index => {

    /** @summary array de itens com se encontra atualmente no state */
    const { dados } = this.state;
    this.setState(
      {
        dados: dados.filter((dado, posAtual) => {
          return index !== posAtual;
        })
      }
    );
    PopUp.showMenssage("Item removido da lista!!",'warning');
  };

  /**
 * @function removerItem
 * @description Varre o array de itens verifica o item com o mesmo index do item clicado na tabela e o remove do array
 * @param {int} index - Index do item clicado na tabela
 */
  adicionarItem = dado => {

    /**@summary Neste ponto é utilizado o operacor spread para setar a prop dados com os valores ja contidos em dados(this.state.dados) mais o dado enviado na chamada da function*/
    this.setState(
      {
        dados: [...this.state.dados, dado]
      }
    );

    PopUp.showMenssage("Dados cadastrados com sucesso!!",'success');

  };

  render() {
    return (

      <Fragment key="app">
        <Header />
        <div className="container">
          <Table dados={this.state.dados} removerItem={this.removerItem} />
          <FormDado adicionarItem={this.adicionarItem} />
        </div>
      </Fragment>
    );
  }
}
export default App;
