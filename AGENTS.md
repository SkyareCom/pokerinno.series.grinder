# Regra de idiomas — série POKERINNO

Esta regra se aplica a toda alteração de interface neste repositório.

- Manter PT-BR (`pt-BR`), EN-US (`en-US`) e ES-ES (`es-ES`) em paralelo.
- Ao criar ou alterar texto visível, traduzir os três idiomas na mesma tarefa, sem aguardar novo pedido.
- Usar chaves semânticas e `t()` de `dist/i18n.js`; não inserir novos textos fixos nas telas.
- Incluir login, cadastro, títulos, botões, cards, descrições, menus, mensagens, estados vazios, diálogos, placeholders, acessibilidade e erros.
- Preservar nomes de marca, siglas de poker e nomes dos apps. Adaptar datas, números e moeda ao idioma e ao formato de jogo.
- Manter o idioma escolhido persistente e aplicar `document.documentElement.lang`.
- Não enviar dados pessoais ou credenciais a serviços de tradução. Traduzir somente conteúdo da interface durante o desenvolvimento.
- Executar `npm run i18n:audit` após toda alteração. Resolver chaves ausentes, vazias, interpolação incompatível e novos textos fora do catálogo.
- Usar `npm run i18n:audit:strict` ao concluir a migração do texto legado. Não declarar o app totalmente traduzido enquanto a varredura apontar candidatos legados.
- Revisar legibilidade e transbordamento nos três idiomas. Não ocultar controles para acomodar traduções.
- Não substituir autenticação ou motores existentes. Não alterar main nem publicar Railway.
