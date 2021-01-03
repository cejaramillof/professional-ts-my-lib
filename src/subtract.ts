/*
import { product } from "./legacy"
product(3, 4);
import * as legacy from "./legacy" // namespace import
legacy.product(3, 4);
 */

/*
// module.exports = product; equals: expor = product; // if was exported like this, need be imported:
 import product = require('./legacy');
 product(3, 4);
 */
/**
 * Calculate the difference between two numbers
 *
 * @param a - first number
 * @param b - second number
 *
 * @beta
 */
export function subtract(a: number, b: number): number {
  return a - b;
}
