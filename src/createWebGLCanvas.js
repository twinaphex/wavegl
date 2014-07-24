/*
 * This file is part of wavegl: https://github.com/gre/wavegl
 *
 * Copyright 2014 Zengularity
 *
 * wavegl is free software: you can redistribute it and/or modify
 * it under the terms of the AFFERO GNU General Public License as published by
 * the Free Software Foundation.
 *
 * wavegl is distributed "AS-IS" AND WITHOUT ANY WARRANTY OF ANY KIND,
 * INCLUDING ANY IMPLIED WARRANTY OF MERCHANTABILITY,
 * NON-INFRINGEMENT, OR FITNESS FOR A PARTICULAR PURPOSE. See
 * the AFFERO GNU General Public License for the complete license terms.
 *
 * You should have received a copy of the AFFERO GNU General Public License
 * along with wavegl.  If not, see <http://www.gnu.org/licenses/agpl-3.0.html>
 */

function createWebGLCanvas (width, height) {
  var canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;

  var gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
  if(!gl) {
    throw new Error("WebGL not supported?");
  }
  return {
    canvas: canvas,
    gl: gl
  };
}

module.exports = createWebGLCanvas;
