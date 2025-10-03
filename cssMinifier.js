/**
 * Minifies CSS by removing whitespace, comments, and unnecessary characters.
 * @param {string} css
 * @returns {string}
 */
function minifyCSS(css) {
  // Remove comments
  css = css.replace(/\/\*[\s\S]*?\*\/g, '');
  // Remove whitespace around symbols
  css = css.replace(/\s*([\{\}:;,.\)\]])\s*/g, '$1');
  // Remove unnecessary semicolons and whitespace
  css = css.replace(/;\s*}/g, '}');
  // Remove extra spaces
  css = css.replace(/\s+/g, ' ');
  return css.trim();
}

module.exports = { minifyCSS };