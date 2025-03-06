import { expect, test } from "bun:test";
import { evaluateGuess } from "./wordle";

/**
example JavaScript test:
------------------------

test("description of the test", () => {
  const result = callFunction("with", "some", "arguments");
  expect(result).toBe(42);
});
*/

test.todo('`evaluateGuess` result includes `"-"`s for letters not in the answer');

test('`evaluateGuess` result includes `"g"`s for letters in the right place',()=>{
  expect(evaluateGuess("abcde","axxxx")).toBe("g----");
  expect(evaluateGuess("abcde","abxxx")).toBe("gg---");
  expect(evaluateGuess("abcde","abcxx")).toBe("ggg--");
  expect(evaluateGuess("abcde","abcdx")).toBe("gggg-");
  expect(evaluateGuess("abcde","abcde")).toBe("ggggg");
});

test('`evaluateGuess` result includes `"o"`s for letters in the wrong place',()=>{
  expect(evaluateGuess("abcde","xaxxx")).toBe("-o---");
  expect(evaluateGuess("abcde","xabxx")).toBe("-oo--");
  expect(evaluateGuess("abcde","xabcx")).toBe("-ooo-");
  expect(evaluateGuess("abcde","xabcd")).toBe("-oooo");
  expect(evaluateGuess("abcde","eabcd")).toBe("ooooo");
});

test('`evaluateGuess` If a letter in the guess is somewhere else in the answer, you may or may not want to mark this as orange - it depends on whether the presence of that letter in the answer has already been indicated by other feedback',()=>{
  expect(evaluateGuess("abcde","xbxxb")).toBe("-g---"); 
});