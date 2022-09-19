# Welcome to Cryptonite Ecosystem

## Main Features

- [ ] NFT Market place (in progress)
- [ ] DeFi Exchange
- [ ] DAO Governance

## Tech stack

`NextJS` , `Typescript` , `Tailwindcss` , `Solidity`

## Libraries

`ethers` , `hardhat` , `openzeppelin` , `ipfs-http-client` , `commitlint` \
`prettier` , `husky`

## Engine lock

`use yarn only` \
`node >=14.0.0` \
`yarn >=1.22.0`

# Frontend

## Create Next App

```bash
yarn create next-app frontend --typescript
```

## Install dependencies

```bash
yarn add ethers hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers web3modal @openzeppelin/contracts ipfs-http-client@50.1.2 axios
```

## Install dev dependencies

```bash
yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest prettier @commitlint/config-conventional @commitlint/cli
```

## Tailwind

```bash
npx tailwindcss init -p
```

### Replace `content` in `tailwind.config.js` to:

```javascript
['./pages/**/*.{js,ts,jsx,tsx}',
'./components/**/*.{js,ts,jsx,tsx}',],
```

### Add to `styles/global.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Hardhat

```bash
npx hardhat
```

### Add to `hardhat.config.js`

```typescript
const projectId: string | undefined = process.env.projectId;
const privateKey: string | undefined = process.env.privateKey;

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${projectId}`,
      accounts: [privateKey],
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
```

## Husky

```bash
npx husky install
```

Create pre-commit hook

```bash
npx husky add .husky/pre-commit "yarn lint"
```

Create pre-push hook

```bash
npx husky add .husky/pre-push "yarn build"
```

## Commitlint

Enable Commitlint via Husky

```bash
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
```

## Available scripts

### Linting - `yarn lint`

### Prepare - `yarn prepare`

### Prettify - `yarn prettier`
