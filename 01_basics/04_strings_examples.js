// Different ways to initialize and work with strings in JavaScript
// Demonstrates: single/double quotes, template literals, escaping,
// String constructor vs literal, String.raw, Unicode/code points, tagged templates.

const name = "Ashish Srivastava";
const repoCount = 25;

// 1) Single quotes and double quotes (no difference in behavior)
const singleQuoted = 'hello single quotes';
const doubleQuoted = "hello double quotes";
console.log(singleQuoted, '-', doubleQuoted);

// 2) Concatenation with +
console.log(name + ' has total ' + repoCount + ' repos on GitHub.');

// 3) Template literals (backticks) - allow interpolation and multi-line strings
console.log(`Hi, my name is ${name}, I have ${repoCount} repositories on GitHub.`);
console.log(`Uppercased name: ${name.toUpperCase()}`);

// Multi-line with template literals
const multiLine = `This is line 1
This is line 2
Tab:\tand a backslash:\\`;
console.log('Multi-line example:\n' + multiLine);

// 4) Expression interpolation inside template literals
console.log(`2 + 3 = ${2 + 3}`);

// 5) Tagged template (a simple tag that shows raw and cooked strings)
function showTag(strings, ...values) {
  console.log('tag strings (cooked):', strings);
  console.log('tag values:', values);
  // return a simple joined result
  return strings.reduce((acc, s, i) => acc + s + (i < values.length ? `[${values[i]}]` : ''), '');
}
const tagged = showTag`Name: ${name}, Repos: ${repoCount}`;
console.log('Tagged template returned:', tagged);

// 6) String constructor vs string literal
const lit = 'hello';
const obj = new String('hello');
console.log('typeof lit ->', typeof lit); // 'string'
console.log('typeof obj ->', typeof obj); // 'object'
console.log('obj instanceof String ->', obj instanceof String);

// Note: avoid using `new String()` for normal strings — it creates an object wrapper.

// 7) String.raw - preserves backslashes (useful for regex patterns, file paths, etc.)
console.log(String.raw`C:\Users\Ashish\projects\repo`);

// 8) Escaping and Unicode
const escaped = 'It\'s fine to escape single quotes';
console.log(escaped);
console.log('Unicode escape for heart: \u2764 ->', '\u2764');
console.log('Emoji using code point ->', String.fromCodePoint(0x1F600));

// 9) String.fromCharCode / fromCodePoint and char codes
console.log('FromCharCode 65 ->', String.fromCharCode(65)); // 'A'
console.log('FromCodePoint 0x1F60A ->', String.fromCodePoint(0x1F60A)); // 😊

// 10) Strings are immutable
let s = 'abc';
const s2 = s.replace('b', 'B');
console.log('original:', s, 'after replace:', s2);

// 11) Useful methods quick demo
console.log('slice:', 'hello'.slice(1, 4));
console.log('includes:', 'hello world'.includes('world'));
console.log('startsWith/endsWith:', 'hello'.startsWith('h'), 'hello'.endsWith('o'));

// 12) Concatenation alternatives
console.log('concat:', 'hello'.concat(' ', 'world'));

// 13) When to use what (short guidance):
// - Use single/double quotes for simple strings. Use template literals for interpolation and multi-line.
// - Avoid `new String()` unless you need a String object (rare).
// - In TypeScript prefer the primitive `string` type (see companion TS file).

// End of examples
