const name = "Ashish Srivastava"
const repoCount = 25

console.log(name + " has total " + repoCount + " on GitHub.");

console.log(`Hi, My name is ${name}, I have total ${repoCount} repositories on GitHub.`)           
// String Interpolation ` `(back tick) used in Advanced Programming. It has many benifits, one can see in below case.

console.log(`Hi, My name is ${name.toUpperCase()}, I have total ${repoCount} repositories on GitHub.`)



// Different types of String methods:
// Common string methods (immutable)
const sample = " Hello, JavaScript! 👋 ";
console.log("length:", sample.length);
console.log("trim:", "${sample.trim()}");
console.log("toLowerCase:", sample.toLowerCase());
console.log("toUpperCase:", sample.toUpperCase());
console.log("charAt(1):", sample.charAt(1));
console.log("codePointAt(8):", sample.codePointAt(8));
console.log("indexOf('Java'):", sample.indexOf("Java"));
console.log("includes('Script'):", sample.includes("Script"));
console.log("startsWith(' He'):", sample.startsWith(" He"));
console.log("endsWith('! '):", sample.endsWith("! "));
console.log("slice(2, 7):", sample.slice(2, 7));
console.log("substring(2,7):", sample.substring(2, 7));
console.log("repeat(2):", sample.trim().repeat(2));
console.log("padStart/padEnd:", "5".padStart(3, "0"), "9".padEnd(3, "*"));
console.log("split by comma:", "a,b,c".split(","));

// replace (string and regex)
console.log("replace:", "abc abc".replace("abc", "x")); // first only
console.log("replaceAll:", "abc abc".replaceAll("abc", "x")); // all
console.log("regex replace (global):", "foo1 foo2".replace(/foo/g, "bar"));

// match / matchAll / search
console.log("match:", "a1 b2 c3".match(/\d/g));
console.log("matchAll:", Array.from("a1 b2 c3".matchAll(/(\d)/g), m => m[1]));

// localeCompare, normalize
console.log("localeCompare:", "a".localeCompare("b"));
console.log("normalize:", "e\u0301".normalize("NFC"));

// Static helpers
console.log("fromCodePoint:", String.fromCodePoint(0x1F44B)); // 👋
console.log("raw template:", String.raw`Line1\nLine2`);

// Immutability example
let a = "abc";
let b = a.toUpperCase();
console.log(a, b);

// Note: substr is legacy, prefer slice/substring

// End of examples
