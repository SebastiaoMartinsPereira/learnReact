import React, { Component } from "react";

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Autor</th>
                <th>Nome</th>
                <th>Preço</th>
                <th>Ações</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {

    // cria uma variável com "linhas" para popular a tabela
    const linhas = props.dados.map((d, index) => {
        return (
            <tr key={index}>
                <td>{d.autor}</td>
                <td>{d.nome}</td>
                <td>{d.preco}</td>
                <td><button  onClick={() => { props.removerItem(index) }} className="waves-effect waves-light btn" >Remover</button></td>
            </tr>
        );
    });

    return (
        <tbody>
            {linhas}
        </tbody>
    );
}

class Table extends Component {

    render() {

        const { dados, removerItem } = this.props;
        // dados tem origem no arquivo App.Js e vem sendo passoado atráves de props
        return (

            <table className="striped highlight centered responsive-table">
                <caption>Meus dados</caption>
                <TableHeader />
                <TableBody dados={dados} removerItem={removerItem} />
            </table>
        );

    }
}

export default Table;