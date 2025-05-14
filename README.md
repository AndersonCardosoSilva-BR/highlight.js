# highlight.js com suporte à linguagem xBase (Harbour / Clipper)

🎨 Este fork adiciona suporte à linguagem de programação xBase, incluindo Harbour, Clipper e xHarbour, ao [Highlight.js](https://highlightjs.org/).

---

## ✅ Como usar

### 1. Clone o repositório:

```bash
git clone https://github.com/AndersonCardosoSilva-BR/highlight.js
cd highlight.js
```

### 2. Instale as dependências:

```bash
npm install
```

### 3. Compile com suporte à xBase:

```bash
node tools/build.js -t browser :common xbase
```

### 4. O arquivo gerado estará em:

```bash
build/highlight.min.js
```

Você pode incluir esse arquivo no seu site ou fórum, junto com um tema CSS (ex: `default.css`), para habilitar o realce automático com `hljs.highlightAll()`.

---

## 🚀 Destaques de sintaxe suportados

### Palavras-chave (`keyword`)
```
FUNCTION, PROCEDURE, RETURN, IF, ELSE, ELSEIF, ENDIF, DO, WHILE, ENDDO, FOR, NEXT,
SWITCH, CASE, OTHERWISE, ENDCASE, TRY, CATCH, FINALLY, ENDTRY, CLASS, METHOD, ENDCLASS
```

### Literais (`literal`)
```
.T., .F., NIL, TRUE, FALSE
```

### Funções embutidas (`built_in`)
```
LEN(), CHR(), STR(), VAL(), SUBSTR(), LEFT(), RIGHT(), DTOC(), CTOD(), SPACE(), LTRIM(), UPPER(), etc.
```

---

## 📁 Estrutura adicionada

- `src/languages/xbase.js` → Definição da linguagem xBase
- `highlight.min.js` → Gerado após build, contendo a linguagem incluída

---

## 🛠️ Exemplo de uso no HTML

```html
<pre><code class="language-xbase">
FUNCTION Hello()
   LOCAL nome := "Anderson"
   ? nome
RETURN NIL
</code></pre>

<script src="highlight.min.js"></script>
<script>hljs.highlightAll();</script>
```

---

## ✍️ Autor

**Anderson Cardoso Silva**  
[https://www.linguagemclipper.com.br](https://www.linguagemclipper.com.br)

MIT License
