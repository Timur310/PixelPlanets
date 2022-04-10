import { PerspectiveCamera } from "three";

export const createCamera = (fov,aspect,near,far) =>
{
    return new PerspectiveCamera(fov, aspect, near, far);
}