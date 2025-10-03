# CSS Minifier and Beautifier

This project provides utilities to minify and beautify CSS code.

## Features

- **Minifier:** Removes comments, whitespace, and unnecessary formatting.
- **Beautifier:** Formats compressed or messy CSS to be human-readable.

## Usage

1. Place your CSS into the code or adapt the modules for your own use.

## Example

```
const { minifyCSS } = require('./cssMinifier');
const { beautifyCSS } = require('./cssBeautifier');

const css = 'body { color: red; }';
console.log(minifyCSS(css));
console.log(beautifyCSS(css));
```

## Future enhancements

- Support for advanced CSS parsing
- Customizable formatting rules
