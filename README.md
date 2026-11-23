# La Bella Pizza — React

Aplicação migrada de HTML/CSS/JavaScript para React + Vite.

## Requisitos
- Node.js 18 ou superior
- npm

## Desenvolvimento
```bash
npm install
npm run dev
```

## Build de produção
```bash
npm run build
npm run preview
```

## Tecnologias
- React 18
- Vite 6
- React Router 6
- Lucide React
- Context API e localStorage para o carrinho

## Estrutura
- `src/App.jsx`: páginas, navegação e componentes da interface
- `src/CartContext.jsx`: estado global do carrinho
- `src/menu.js`: catálogo de produtos
- `src/styles.css`: estilos responsivos
- `public/assets`: imagens utilizadas pela aplicação

## Observações importantes
- O carrinho é salvo no navegador via localStorage.
- O checkout atual é demonstrativo: não envia pedidos para um servidor e não processa pagamentos.
- PIX real requer integração com um provedor de pagamentos e geração de BR Code dinâmico. Não exiba QR Code ilustrativo como pagamento válido.
- Rastreamento real de entregas requer backend e integração com o sistema operacional da pizzaria.
