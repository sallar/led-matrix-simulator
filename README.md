LED Matrix Simulator
===

I was too impatient for my [Adafruit 32x16 LED Matrix display](https://www.adafruit.com/products/420) to arrive, so I made one using HTML5 Canvas.

:warning: Note that this is an untested project meant for fun and learning, it's not meant to be used in production. 

:round_pushpin: [See in in action here](https://sallar.github.io/led-matrix-simulator/)

Technologies used:

  - Typescript
  - Preact
  - HTML5 Canvas

## Bitmap fonts

Microcontrollers need special bitmap fonts to display text or digits on Crystal or LED Matrix displays. These fonts are usually represented in an array of arrays of hexadecimal bytes. Something like this:

``` c++
const unsigned char font[96][6] = {
  {0x00,0x00,0x00,0x00,0x00,0x00}, //  
  {0x2f,0x00,0x00,0x00,0x00,0x00}, // !
  {0x03,0x00,0x03,0x00,0x00,0x00}, // "
        ...
```

This array contains 96 characters (each character 6 bytes) ordered by their character code in Unicode table. So for example `space` is index 0, `!` is index 1 and so on. So to find the character's index, we need to subtract 32 from it's characrer code. Each character in this font map is an array of 6 bytes, and each byte represents a column on the external display:

``` c++
{0x3C,0x12,0x12,0x12,0x3E,0x00}, // A
```

To turn this into pixel data, each hex item needs to be converted to binary. This can be done easily in Javascript:

```
0x12.toString(2); // 00010010
```

From here it get's easy. `00010010` is a column on the display, and six of those form a letter. [Read more about these fonts](http://jared.geek.nz/2014/jan/custom-fonts-for-microcontrollers).

## LICENSE

Released under the [MIT License](https://sallar.mit-license.org/).
