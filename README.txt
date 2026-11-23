# La Bella Pizza — React + Vite

## Desenvolvimento
- Node.js 18 ou superior
- npm install
- npm run dev
- npm run build

## Estrutura
- src/App.jsx: páginas, navegação, cardápio, carrinho e formulário de entrega.
- src/data/products.js: catálogo centralizado.
- src/state/CartContext.jsx: estado do carrinho e persistência local.
- src/react.css: ajustes específicos da interface React.
- style.css: identidade visual herdada da versão atualizada.
- images/: imagens do catálogo.

## Como trocar ou adicionar imagens
Abra src/data/products.js e altere o campo image do produto. Use caminhos relativos à pasta public (por exemplo, /images/calabresa.png). Coloque novas imagens dentro de public/images para que o Vite as sirva corretamente.

## Catálogo
O catálogo migrado contém 90 pizzas: 20 tradicionais, 20 especiais, 20 premium, 10 vegetarianas e 20 doces. Bebidas e complementos serão adicionados em uma próxima etapa do catálogo.

## Observações
O formulário de entrega, consulta de CEP e confirmação de pedido são demonstrações locais. Não existe integração de pagamento, envio real de pedido ou rastreamento com backend nesta versão.
Os arquivos HTML e script.js antigos foram mantidos como referência durante a migração.
