export interface Ipoint3D {
    x: number;
    y: number;
    z: number
}


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
 * @returns a random point on a sphere with radius of 2
 */
export const randomPointOnSphere = (): Ipoint3D => {
    const u = Math.random();
    const v = Math.random();

    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);

    const point3D: Ipoint3D = {
        x: 0 + (1 * Math.sin(phi) * Math.cos(theta)),
        y: 0 + (1 * Math.sin(phi) * Math.sin(theta)),
        z: 0 + (1 * Math.cos(phi))
    }
    return point3D;
}