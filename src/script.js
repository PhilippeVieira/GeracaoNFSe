
function calcularImpostos(valor, impostos) {
    return impostos.map(imp => ({nome: imp.nome, valor: (valor * imp.percentual / 100).toFixed(2)}));
}

function validador() {
    const valorVenda = parseFloat(document.getElementById('valorVenda').value);
    const itens = document.getElementById('itens').value.trim();
    const impostos = [
        {nome: 'IRPF', percentual: parseFloat(document.getElementById('irpf').value)},
        {nome: 'PIS', percentual: parseFloat(document.getElementById('pis').value)},
        {nome: 'COFINS', percentual: parseFloat(document.getElementById('cofins').value)},
        {nome: 'INSS', percentual: parseFloat(document.getElementById('inss').value)},
        {nome: 'ISSQN', percentual: parseFloat(document.getElementById('issqn').value)}
    ];
    if (isNaN(valorVenda) || !itens || impostos.some(imp => isNaN(imp.percentual))) {
        alert("Por favor, preencha todos os campos.");
        return;
    }
    if (valorVenda < 0) {
        alert("Valor da venda não pode ser negativo.");
        return;
    }
    const calculos = calcularImpostos(valorVenda, impostos);
    const totalImpostos = calculos.reduce((acc, imp) => acc + parseFloat(imp.valor), 0).toFixed(2);
    const valorLiquido = (valorVenda - totalImpostos).toFixed(2);
    if (parseFloat(valorLiquido) < 0) {
        alert(`O valor líquido não pode ser negativo (calculo= ${valorLiquido}).\nRevise os valores repassados.`);
        return;
    }

    gerarNotaFiscal(valorVenda, itens, calculos, totalImpostos, valorLiquido);
}

function gerarNotaFiscal(valorVenda, itens, calculos, totalImpostos, valorLiquido) {
    const notaFiscal = `
Nota Fiscal de Serviço
=======================

Valor da Venda: R$ ${valorVenda.toFixed(2)}

Itens Vendidos:
${itens.split('\n').map(item => `* ${item}`).join('\n')}

Impostos:
${calculos.map(imp => `- ${imp.nome}: R$ ${imp.valor}`).join('\n')}

Total de Impostos: R$ ${totalImpostos}
Valor Líquido: R$ ${valorLiquido}
`;

    const divNotaFiscal = document.getElementById('notaFiscal');
    divNotaFiscal.innerHTML = `
                <h2>Nota Fiscal de Serviço</h2>
                <p><strong>Valor da Venda:</strong> R$ ${valorVenda.toFixed(2)}</p>
                <p><strong>Itens Vendidos:</strong></p>
                <p>${itens.split('\n').map(item => `* ${item}`).join('<br>')}</p>
                <h3>Impostos:</h3>
                <ul>
                    ${calculos.map(imp => `<li>${imp.nome}: R$ ${imp.valor}</li>`).join('')}
                </ul>
                <p><strong>Total de Impostos:</strong> R$ ${totalImpostos}</p>
                <p><strong>Valor Líquido:</strong> R$ ${valorLiquido}</p>
            `;
    divNotaFiscal.hidden = false;

    const btnBaixar = document.getElementById('btnBaixar');
    btnBaixar.hidden = false;
    btnBaixar.onclick = () => baixarNotaFiscal(encodeURIComponent(notaFiscal));

    document.getElementById('formNFSe').hidden = true;
    document.getElementById('btnGerar').hidden = true;
    document.getElementById('btnEditar').hidden = false;
}

function editarFormulario() {
    document.getElementById('formNFSe').hidden = false;
    document.getElementById('btnGerar').hidden = false;
    document.getElementById('btnEditar').hidden = true;

    const divNotaFiscal = document.getElementById('notaFiscal');
    divNotaFiscal.hidden = true;

    const btnBaixar = document.getElementById('btnBaixar');
    btnBaixar.hidden = true;
}

function baixarNotaFiscal(notaFiscal) {
    const decoded = decodeURIComponent(notaFiscal);
    const blob = new Blob([decoded], {type: 'text/plain'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Nota_Fiscal.txt';
    a.click();
    URL.revokeObjectURL(url);
}