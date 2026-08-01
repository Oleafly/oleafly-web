---

title: "Duplo-cego bem feito"
description: "O que anonimizar, como citar a si mesmo e os metadados que traem você."
category: "venue-formats"
order: 6
level: "intermediate"
tags: ["venues", "review"]
featured: false
updated: 2026-07-25
---

# Duplo-cego bem feito

A revisão duplo-cega significa que os revisores não sabem quem escreveu o artigo. Errar é um dos poucos erros de formatação que podem fazer com que um artigo seja rejeitado sem ser lido, portanto, trate o anonimato como uma lista de verificação, não como uma vibração.

## O que deve ir

| Artigo | O que fazer |
|---|---|
| Nomes de autores e afiliações | Remover ou substituir por "Autor(es) Anônimo(s)" |
| Agradecimentos | Excluir para envio (financiadores e colegas identificam você) |
| Links de repositório e projeto | Substitua por um link anônimo, veja abaixo |
| Detalhes específicos da instituição | “cluster da nossa universidade” vence “cluster GPU de Stanford” |
| Frase "Nosso trabalho anterior" | Reescreva em terceira pessoa, veja abaixo |
| Logotipos, marcas d'água, cabeçalhos | Retire qualquer coisa com um nome de grupo ou laboratório |

Muitas classes automatizam a primeira linha. Com a classe do ACM é uma opção:

```latex
\documentclass[sigconf,review,anonymous]{acmart}
```

Outros locais enviam uma variante de envio de seu modelo. Os locais [IEEEtran](/learn/ieee-format-in-practice/) geralmente apenas dizem para você omitir o bloco do autor.

## Citando seu próprio trabalho

A regra é simples: cite a si mesmo exatamente como citaria um estranho.

Errado: "Em nosso trabalho anterior [7], mostramos..."
À direita: "Lovelace et al. [7] mostraram..."

Não omita seus próprios documentos relevantes. Os revisores esperam que o trabalho óbvio relacionado seja citado, e uma lacuna suspeita pode desanonimizar você tão eficazmente quanto um nome. A única exceção são os trabalhos genuinamente inéditos, que você pode enviar como material suplementar anônimo.

## Artefatos anônimos

Os revisores esperam cada vez mais códigos e dados. Os links do GitHub são radioativos: o nome de usuário está ali. Opções que funcionam:

- Serviços desenvolvidos para isso (anonymous.4open.science é o padrão de campo)
- Um novo repositório em uma conta descartável com histórico de commits limpo
- Zip complementar enviado com a submissão, com os nomes dos autores removidos dos cabeçalhos dos arquivos e cadernos

Verifique o zip antes de fazer upload: arquivos de licença, `AUTORES`, metadados do notebook e caminhos de diretório inicial codificados (`/home/ada/...`), todos nomes vazados.

## Os acidentes que te traem

O texto do papel é anônimo, mas o PDF não pode ser:

- **Metadados PDF.** O campo Autor geralmente é preenchido automaticamente no seu sistema. Verifique `pdfinfo` ou as propriedades do documento do seu visualizador e limpe-o via `\hypersetup{pdfauthor={}}`.
- **Nomes de arquivos.** `lovelace-sigconf-final.pdf` desfaz tudo. Nomeie-o como `paper.pdf` ou o número de envio.
- **Fontes de figuras.** Os gráficos exportados das ferramentas podem incorporar nomes de usuários em metadados ou em um caminho visível em uma captura de tela.
- **Pré-impressões.** Publicar no arXiv antes de enviar é permitido em muitos locais e proibido em outros. O PCP diz qual. Leia. Isso faz parte da escolha do local](/learn/choose-your-venue/).

## Pronto para câmera vira de volta

Após a aceitação, tudo retorna: nomes, afiliações, agradecimentos, o link real do repositório e a frase em primeira pessoa, se você gostar. Reserve uma hora para o passe de desanonimização. Ele atinge mais lugares do que você lembra, e a [lista de verificação pronta para a câmera](/learn/first-paper-roadmap/) é o momento de capturar os retardatários.