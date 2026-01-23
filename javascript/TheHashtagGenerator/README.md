# The Hashtag Generator

<p>A equipe de marketing está perdendo muito tempo digitando hashtags.
Vamos ajudá-los com o nosso próprio Gerador de Hashtags!</p>

<p>Funciona assim:</p>

<ul>

  <li>A palavra deve começar com um símbolo de hashtag (<code>#</code>).</li>

  <li>Todas as palavras devem ter a primeira letra maiúscula e as demais minúsculas.</li>

  <li>Se o resultado final tiver mais de 140 caracteres, deve retornar <code>false</code>.</li>

  <li>Se a entrada ou o resultado for uma string vazia, deve retornar <code>false</code>.</li>

</ul>

## Exemplos

```
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
```

https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript