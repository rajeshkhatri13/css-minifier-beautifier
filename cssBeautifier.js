/**
 * Beautifies minified or messy CSS for readability.
 * @param {string} css
 * @returns {string}
 */
function beautifyCSS(css) {
  // Add line breaks after braces and semicolons
  css = css.replace(/}/g, '}\n');
  css = css.replace(/{/g, '{\n');
  css = css.replace(/;/g, ';\n');
  // Indent rules and declarations
  let indent = 0;
  return css.split('\n').map(line => {
    line = line.trim();
    if (line.endsWith('}')) indent--;
    let indented = '  '.repeat(Math.max(indent, 0)) + line;
    if (line.endsWith('{')) indent++;
    return indented;
  }).join('\n').replace(/\n\s*\n/g, '\n');
}

module.exports = { beautifyCSS };