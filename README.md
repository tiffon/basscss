# u-basscss

Forked from [basscss](https://github.com/basscss/basscss)

## Global Changes

- All resources are local to this package (in `./src`), rather than in sub-packages
- All class names have `u-` prepended (i.e. `u` for util)
- Multiple modules are compiled and can be imported (e.g. `import 'u-basscss/css/u-layout.css';`)
- Margin and padding start at `0.25rem` instead of `0.5rem`
- The minified, custom-prop and important builds are no longer generated

## Typography Module Changes

Renamed text alignment classes:

- `.u-left-align` => `.u-tx-left-align`
- `.u-center` => `.u-tx-center`
- `.u-right-align` => `.u-tx-right-align`
- `.u-justify` => `.u-tx-justify`

Added the following class:

- `.u-line-height-noraml { line-height: normal }`


--------

# Basscss

Low-level CSS toolkit <http://basscss.com>

[![Build Status](https://travis-ci.org/basscss/basscss.svg)](https://travis-ci.org/basscss/basscss)
[![npm version](https://badge.fury.io/js/basscss.svg)](https://badge.fury.io/js/basscss)

## Lightning-Fast Modular CSS with No Side Effects

Basscss is a lightweight collection of immutable utilities designed for speed, clarity, performance, and scalability.


## Features

### Code with Confidence

Using clear, humanized naming conventions, Basscss is quick to internalize
and easy to reason about while speeding up development time with more scalable,
more readable code.

### No Side Effects

Things behave exactly as expected with immutable utilities
and styles that follow the open/closed principle
to help prevent common pitfalls with CSS.

### Composable

Reusable, interoperable styles
work like building blocks to lay the foundation for any stylesheet
and can be mixed and matched in any number of combinations.

## Designed for Design

Basscss strikes a balance between consistency and flexibility
to allow for rapid prototyping and quick iterative changes
when designing in the browser.

## Responsive by Default

Basscss provides lightweight, performant styles
and flexible utilities to design for any device
and to help reduce boilerplate in stylesheets.

## Unassuming

Modular and customizable typography and layout styles don’t dictate
what things should look like and play well with other stylesheets and frameworks.

[Read More](http://basscss.com)

---

## Base styles

The core Basscss package does not include any base element styles.
For an out-of-the-box solution, see:

https://github.com/basscss/basic

## Addons

In addition to the core modules, optional modules,
including responsive margin, padding, layout, and typography styles, can be found here:

https://github.com/basscss/addons

## Ace.css

For a bundle with the core Basscss and all optional modules, see:

https://github.com/basscss/ace

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

---

[MIT license](LICENSE.md)
