class CaixaDaLanchonete {
    constructor() {
        this.menu = {
            cafe: { descricao: 'Café', valor: 3.00 },
            chantily: { descricao: 'Chantily (extra do Café)', valor: 1.50 },
            suco: { descricao: 'Suco Natural', valor: 6.20 },
            sanduiche: { descricao: 'Sanduíche', valor: 6.50 },
            queijo: { descricao: 'Queijo (extra do Sanduíche)', valor: 2.00 },
            salgado: { descricao: 'Salgado', valor: 7.25 },
            combo1: { descricao: '1 Suco e 1 Sanduíche', valor: 9.50 },
            combo2: { descricao: ' 1 Café e 1 Sanduíche', valor: 7.50 },
            };

            this.formaDePagamento = ['dinheiro', 'debito', 'credito'];
        }

    calcularValorDaCompra(metodoDePagamento, itens) {
        if (!this.formaDePagamento.includes(metodoDePagamento)) {
        return "Forma de pagamento inválida!";
    }

        if (itens.length === 0) {
        return "Não há itens no carrinho de compra!";
  }
        let total = 0;
        let cafeQuantidade = 0;
        let sanduicheQuantidade = 0;

        for (const item of itens) {
            const [codigo, quantidade] = item.split(',');
            if (!this.cardapio[codigo]) {
                return `Item inválido: ${codigo}`;
            }

            const { descricao, valor } = this.cardapio[codigo];
            if (codigo === 'cafe') {
                cafeQuantidade += parseInt(quantidade);
            } else if (codigo === 'sanduiche') {
                sanduicheQuantidade += parseInt(quantidade);
            }

            if (codigo !== 'chantily' && codigo !== 'queijo' && codigo !== 'combo1' && codigo !== 'combo2') {
                total += valor * parseInt(quantidade);
            }
        }

        if (cafeQuantidade < sanduicheQuantidade) {
            return "Item extra não pode ser pedido sem o principal!";
        }

        if (metodoDePagamento === 'credito') {
            total *= 1.03;
        }

        if (metodoDePagamento === 'dinheiro') {
            total *= 0.95;
        }

        return `R$ ${total.toFixed(2).replace('.', ',')}`;
    }
}

export { CaixaDaLanchonete };
