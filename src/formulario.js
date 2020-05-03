import React, { Component } from "react";
import FormValidator from "./common/formValidator";
import PopUp from "./common/popUp";

class FormDado extends Component {

    /**o propost tem origem de quem importa esta classe/component */
    constructor(props) {
        super(props);


        /**@summary utilização do módulo validator para validar o formulário abaixo definicao de regras a serem utilizadas por cada campo */
        this.validator = new FormValidator(
            [
                { campo: 'preco', metodo: 'isInt', args: [{ min: 0, max: 99999 }], validoQuando: true, mensagem: 'Preencher o Preço com um valor numérico entre 0 e 9999!' },
                { campo: 'preco', metodo: 'isEmpty', validoQuando: false, mensagem: 'Preencher o Preço!' },
                { campo: 'nome', metodo: 'isEmpty', validoQuando: false, mensagem: 'Preencher o Nome!' },
                { campo: 'autor', metodo: 'isEmpty', validoQuando: false, mensagem: 'Preencher o Autor!' }
            ]);


        /** @property  estado inicial da página */
        this.stateIni =  { autor: '', nome: '', preco: '', validacao: this.validator.valido()}
        this.state = this.stateIni;
    }

    /**@function formAlterado
     * @description Altera o valor do state de acordo com o que foi informado no Fomulário(usuário)
     * @param {any} event - event que gerou a alteracao
     */
    formAlterado = event => {

        /**@summary propriedades html contidas no target */
        const { name, value } = event.target;

        /**@summary altera o state para a propridade enviada no target de acordo com o name e value */
        this.setState({
            [name]: value
        });
    }

    incluirDado = () => {

        console.log("passei no log");
        /**@summary verifica se o formulário está preenchido de acordo com as regras aplicadas */
        var validacao = this.validator.validate(this.state);

        if (validacao.isValid) {
            console.log("Form válido!!")
            this.props.adicionarItem(this.state);
            this.setState(this.stateIni);

        }else{ // varre campos inválidos e mostrar alerta ao usuário

            const {nome, autor, preco} = validacao;
            const campos = [nome, autor, preco];
            const camposInvalidos = campos.filter(elem => {
                return elem.isInvalid;
            });

            camposInvalidos.forEach(campo=>{
                PopUp.showMenssage(campo.message);
            });
        }

    }

    render() {
        const { autor, nome, preco } = this.state;
        return (
            <form>
                <h3>Adicionar Dados</h3>
                <div className="row">
                    <div className="input-field col s3">
                        <label className="input-field" htmlFor="autor">Nome</label>
                        <input id="autor" type="text" name="autor" value={autor} onChange={this.formAlterado} />
                    </div>
                    <div className="input-field col s3">
                        <label className="input-field" htmlFor="nome">Livro</label>
                        <input id="nome" type="text" name="nome" onChange={this.formAlterado} value={nome} />
                    </div>
                    <div className="input-field col s3">
                        <label className="input-field" htmlFor="preco">Preço</label>
                        <input id="preco" type="text" name="preco" value={preco} onChange={this.formAlterado} />
                    </div>
                    <div className="input-field col s3">
                        <button type="button" className="waves-effect waves-light btn" onClick={this.incluirDado}>Salvar</button>
                    </div>
                </div>
            </form>

        );
    }
}
export default FormDado;