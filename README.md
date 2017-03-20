# eslint-plugin-tl3

Code styleguide for TL3

## Installation

### Install plugin

#### Locally

```bash
cd my-project-dir
yarn add eslint https://github.com/Travelab/eslint-plugin-tl3.git
```

#### Globally

```bash
yarn global add eslint https://github.com/Travelab/eslint-plugin-tl3.git
```

### Use it

Add these to package.json
```json
"eslintConfig": {
  "extends": "tl3"
}
```

or add these to .eslintrc.json

```json
{
  "extends": "tl3"
}
```

### Command Line Interface

Please refer to [eslint](http://eslint.org/docs/user-guide/command-line-interface)

Basic commands:

```bash
eslint "packages/*" # for global installation
node_modules/.bin/eslint packages/* # for local installation
```