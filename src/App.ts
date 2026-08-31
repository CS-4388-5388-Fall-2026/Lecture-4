/* Lecture 4
 * CS 4388/ CS 5388, Fall 2026, Texas State University
 * Instructor: Isayas Berhe Adhanom <isayas@txstate.edu> * 
 * License: Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International. Adapted from course materials by Evan Suma Rosenberg.
 */ 

import * as gfx from 'gophergfx'

export class App extends gfx.GfxApp
{
    private ship: gfx.Mesh2;
    private star: gfx.Mesh2;
    private starField: gfx.Particles2;
    // --- Create the App class ---
    constructor()
    {
        // initialize the base class gfx.GfxApp
        super();
        this.ship = gfx.Geometry2Factory.createBox();
        this.star = gfx.Geometry2Factory.createBox();
        this.starField = new gfx.Particles2(this.star, 200);

    }


    // --- Initialize the graphics scene ---
    createScene(): void 
    {
        this.scene.add(this.ship);
        this.ship.material.texture = new gfx.Texture('playerShip2_green.png');
        this.ship.scale.set(0.08, 0.08);

       

        for (let i = 0; i < this.starField.numParticles; i++)
        {
            this.starField.particleSizes[i] = Math.random()*0.008 + 0.002;
            this.starField.particlePositions[i].set(Math.random()*2-1, Math.random()*2-1);
        }
        this.starField.update(true, true);

        this.scene.add(this.starField);


    }

    
    // --- Update is called once each frame by the main graphics loop ---
    update(deltaTime: number): void 
    {

    }
}