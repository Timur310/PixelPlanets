import { Vector3 } from "three"

/**
 * Return a random number between min and max, inclusive.
 * @param {number} min - The minimum number that can be returned
 * @param {number} max - The maximum number that can be returned.
 * @returns A random number between min and max
 */
export const randBetween = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * It returns a random boolean
 * @returns A boolean value
 */
export const flip = (): boolean => {
    return Math.random() > 0.5
}

/**
 * It generates a random point on the surface of a sphere with a given radius
 * @param {number} radius - The radius of the sphere.
 * @returns A random point on the surface of a sphere with a given radius.
 */
export const randomPointOnSphere = (radius: number): Vector3 => {
    const u = Math.random();
    const v = Math.random();

    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);

    const x = radius * Math.sin(phi) * Math.cos(theta)
    const y = radius * Math.sin(phi) * Math.sin(theta)
    const z = radius * Math.cos(phi)

    return new Vector3(x, y, z);
}

/**
 * it has nothing to do with mulberry32 but earlier it was used
 * too lazy to change the spelling for all layer
 * It returns a random number between 0 and 1.
 * @returns A random number between 0 and 1
 */
export const mulberry32 = (): number => {
    return Math.random() * (1000000.0 - -1000000.0) + -1000000.0;
}