import { Vector2 } from "three";
import { Group } from "three";
import { Clock, Scene, WebGLRenderer } from "three";

export function createScene() {
    return new Scene();
}

export function createClock() {
    return new Clock();
}

export function createWebGlRenderer() {
    return new WebGLRenderer();
}

export function createGroup() {
    return new Group();
}