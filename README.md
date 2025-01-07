# GeracaoNFSe

Link para o site [[ ACESSAR ](https://main.dkife1rhl6lbv.amplifyapp.com)]

## Objetivo

Desenvolver uma página HTML com JavaScript para permitir a emissão de uma **Nota Fiscal de Serviço (NFS-e)** com dados
repassados pelo usuário. <br>
A seguir estão as principais funcionalidades da página e suas explicações:

### Dados Necessários

A página coleta os seguintes dados do usuário para a emissão da Nota Fiscal de Serviço:

- **Valor da Venda**
- **Itens Vendidos** (descrição dos itens que estão sendo vendidos)
- **Porcentagem dos Impostos**:
    - **IRPF** (Imposto de Renda de Pessoa Física)
    - **PIS** (Programa de Integração Social)
    - **COFINS** (Contribuição para o Financiamento da Seguridade Social)
    - **INSS** (Instituto Nacional do Seguro Social)
    - **ISSQN** (Imposto sobre Serviços de Qualquer Natureza)

---

### Cálculo dos Impostos

Com base nos dados inseridos, os impostos serão calculados automaticamente. <br>
O cálculo será feito da seguinte forma:

- Cada imposto será calculado como uma porcentagem do **Valor da Venda**.
- O valor de cada imposto será exibido na Nota Fiscal gerada.
- Os valores são somados e exibidos como total de impostos.

---

### Geração e Exibição da Nota Fiscal

Após o cálculo dos impostos, a Nota Fiscal será gerada e exibida na própria página com os seguintes dados:

- **Valor da Venda**.
- **Itens Vendidos**.
- **Impostos**:
    - IRPF
    - PIS
    - COFINS
    - INSS
    - ISSQN
- **Total de Impostos**.
- **Valor Líquido** (Valor da Venda - Total de Impostos).

A Nota Fiscal será exibida de forma clara e organizada, permitindo que o usuário veja os cálculos realizados com base
nos dados fornecidos.

Por fim, será disponibilizado um botão para realizar o download da nota fiscal formatada (em formato txt).