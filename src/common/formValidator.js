import validator from 'validator';

class FormValidator {

    /**
     * @constructor
     * @param {*} validacoes - array com regras de validacao a serem tratadas
     */
    constructor(validacoes) {
        this.validacoes = validacoes;
    }


    /**@function validate
     * @description verifica se todos os campos são válidos de acordo com as regras especificadas.
     * @param {any} state - estado do formulário enviado
     */
    validate(state) {

        let validacao = this.valido();

        this.validacoes.forEach(regra => {

            //se o campo já estiver inválido não faz uma nova verificação
            if(validacao[regra.campo].isInvalid){  console.log("campo já invalido"); return; }

            const valorCampo = state[regra.campo.toString()];
            const metodoValidacao = validator[regra.metodo];
            const args = regra.args || [];

            if (metodoValidacao(valorCampo, ...args, state) !== regra.validoQuando) {
                validacao[regra.campo] = {
                    isInvalid: true,
                    message: regra.mensagem
                }
                validacao.isValid =false;
                console.log(regra);
            }
        });
        return validacao;
    }

    /**@function valido
     * @description método default para setar o estado do form valido
     * @summary utilizado sempre que o form precisar ser reiniciado
     */
    valido() {
        const validacao = {}
        this.validacoes.map(regra => (
            validacao[regra.campo] = { isInvalid: false, message: '' }
        ));

        return { isValid: true, ...validacao }
    }
}

export default FormValidator;