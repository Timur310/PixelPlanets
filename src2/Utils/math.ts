import { Vector3 } from "three"

/**
 * @param min lower bound of the random numer
 * @param max upper bound of the random number
 * @returns random number between the specified min and max bound
 */
export const randBetween = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * @returns true or false, based on a primitive coinflip simulation
 */
export const flip = (): boolean => {
    return Math.random() > 0.5
}

/**
 * 
 * @param radius the radius of the sphere
 * @returns object of x, y, z component of the random point
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
 * @returns PRNG number
 */
export const mulberry32 = (): number => {
    let seed = Math.random();
    let t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
}