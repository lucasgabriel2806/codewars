# Growth of a Population

<p>Em uma pequena cidade, a população é <code>p0 = 1000</code> no início do ano. A população aumenta regularmente <code>2%</code> ao ano e, além disso, <code>50</code> novos habitantes chegam à cidade anualmente. Em quantos anos a cidade precisa para que sua população seja igual ou superior a <code>p = 1200</code> habitantes?</p>

```
Ao final do primeiro ano haverá:
1000 + 1000 * 0,02 + 50 => 1070 habitantes

Ao final do segundo ano haverá:
1070 + 1070 * 0,02 + 50 => 1141 habitantes (** o número de habitantes é um inteiro **)

Ao final do terceiro ano haverá:
1141 + 1141 * 0,02 + 50 => 1213

Serão necessários 3 anos completos.
```

<p>De forma mais geral, dados os parâmetros:</p>

<p>
<code>p0, percent, aug (habitantes que chegam ou saem a cada ano), p (população a ser igual ou superior a p)</code>
</p>

<p>
a função <code>nb_year</code> deve retornar <code>n</code>, o número de anos completos necessários para obter uma população maior ou igual a <code>p</code>.
</p>

<p>
aug é um número inteiro, percent é um número de ponto flutuante positivo ou nulo, e p0 e p são números inteiros positivos (> 0).
</p>

```
Exemplos:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10
```

## Nota:

<ul>
<li>Não se esqueça de converter o parâmetro percent para porcentagem no corpo da sua função: se o parâmetro percent for 2, você precisa convertê-lo para 0,02.</li>

<br>

<li>Não existem frações de pessoas. No final de cada ano, a contagem da população é um número inteiro: 252,8 pessoas arredondadas para baixo resultam em 252 pessoas.</li>
</ul>

<a href="https://www.codewars.com/kata/563b662a59afc2b5120000c6" target="_blank">link do desafio</a>