# SCSS Quick Start - Make CSS Fun

<strong>13 August 2020</strong>

From getting to know Sass, to writing intermediate level of SCSS.

# Background

After extensively writing CSS in projects, one starts to observe a pattern where lots of CSS code is repetitive, redundant, lacks modularity and as the lines of code(LOC) increase, chances of errors also increase. This situation gives rise to a lot of challenges from Software Engineering point-of-view, with the principles of maintainability, scalability, reusability, extensibility.

To reinvigorate the fun of writing CSS and to give it 'super powers', Hampton Catlin designed a style sheet language known as **Sass(Syntactically Awesome Style Sheets)** in 2006, written in Ruby for Haml templating language. He stayed in the core team till 2009 and later Natalie Weizenbaum became the primary developer and designer of Sass, who was involved in this project "since the second commit". She was also joined by Chris Eppstein in 2008 and they both together are responsible for leading design and development of Sass.

<div class="blog-post_image">
    <img src="assets/images/blog-posts/2.1.png" alt="Sass Image" />
</div>

From the Sass's <a href="https://github.com/sass/sass" target="_blank">repository</a>:

> Sass is an extension of CSS, adding nested rules, variables, mixins, selector inheritance, and more. It's translated to well-formatted, standard CSS using the command line tool or a plugin for your build system.

Over the years, there is no doubt that Sass has definitely become an industry-standard and is the go-to language to write CSS for professionals.

# Usage

Sass has two syntaxes - Sass also called the indented syntax and SCSS which uses the file extension `.scss` and can be considered as the superset of CSS. This post will be using the SCSS syntax.

In order to get up and running with Sass you just need NPM(or download the package from Github and just add to your PATH environment variable) and execute the following command:

```bash
npm install sass -g
```

Now, you can make use of the `sass` CLI for majorly one task central to the implementation of Sass i.e. compile SCSS/Sass files to CSS files. For example:

```bash
sass awesomeSassyCss.scss goodOldCss.css --watch --poll -s=expanded --embed-source-map
```

Note the usage of different flags, which make the [CLI](https://sass-lang.com/documentation/cli/dart-sass) very powerful.


# Concepts

Before getting your hands-onto Sass, following concepts will give you a glimpse of what is going on under the hood.

## Pre-Processing

Sass is called a CSS pre-processor, which essentially means to do something(some process) before the actual processing of CSS code; more technically, a pre-processor program processes its input data and gives a 'pre-processed output' that is used as the input for some other program. So, applying this concept here, Sass pre-processes the CSS code, before it(CSS) is processed by the browser(or browser engine).

<div class="blog-post_image">
    <img src="assets/images/blog-posts/2.2.jpg" alt="Pre-processing Image" />
</div>

With the help of pre-processing, Sass enables us to use its features like inheritance, nesting, variables, etc. You can implement the above shown workflow in the figure via Sass's CLI:

```bash
sass inputStyles.scss outputStyle.css
```

## Parsing

Sass Pre-Processor directly parses the Sass stylesheet from a sequence of Unicode points, without being converted to a token stream and during this process, if it encounters invalid syntax, it will halt the parsing and throw useful errors with the relevant information(like line number and file name). 

This is another huge advantage of using Sass over plain CSS as it helps to catch errors immediately at compile time.

---

# Structure of a Sass File

A Sass stylesheet can be broken down into **Statements** and **Expressions**. 

<div class="blog-post_image">
    <img src="assets/images/blog-posts/2.3.png" alt="Structure of Stylesheet Image" />
</div>

## Statements

Statements are the building blocks of a Sass stylesheet. They are feature rich and let you do lots of logical stylesheet writing. A basic example of a statement can be:

```scss
.mySassyClass {
	color: 'linen';
}
```

- **Universal Statements**

    These includes:

    - Variable declarations(like `$variable: someValue`)
    - At-rules(like `@if`, `@each`)
    - `@error`, `@debug` rules.

- **CSS Statements**

    These produce CSS and can be used everywhere expect inside `@function`:

    - Style Rules
    - CSS specific at-rules(like `@media`, `@font-face`)
    - Mixins(using `@include`)
    - `@at-root` rule

- **Top-Level Statements**

    These are used at the top of the stylesheet or at the top of a CSS statement, if nested:

    - Module loads - `@use`
    - Imports - `@import`
    - Mixin definitions - `@mixin`
    - Function definitions - `@function`

- **Others**

    These don't fall under the above categories:

    - Property Declarations(like `color: tomato`)
    - `@extend` rule

## Expressions

Expressions produce certain values and are anything that comes on the RHS of variable/property declaration. All valid CSS property values are valid Sass expressions, with added powers.

> Sass's expression syntax is called SassScript.

- **Literals**
    - Numbers
    - Strings
    - Colors
    - Booleans - `true`, `false`
    - `null`
    - Lists of values
    - Maps

- **Operations**
    - Equality check with `==`, `!=`
    - Mathematical - `+`, `-`, `*`, `/`, `%`, `>`, `<`, `>=`, `<=`.
    - Booleans - `and`, `or`, `not`
    - Parenthesis - `)`, `(`

    Operators `+`, `-`, `/` can be used to concatenate strings.

- **Others**
    - Variables(like `$variable`)
    - Function calls(like `nth($list,1)`)
    - Special Functions(like `url(https://sahilbabbar.com`)
        - They have unique parsing rules.
    - Parent Selector - `&`
    - `!important`

---

# Elements

Read the following sections carefully, as in each section multiple elements of SCSS may be discussed.

## Comments

- `/* First Type */` - Compiled to CSS (can be used for multiple lines) but are stripped (loud).
- `// Second Type` - Not compiled to CSS (silent).
- `/*! Third Type */` - Always included in compiled CSS and are not stripped (loud).
- `/// Fourth Type` - Can be read by SassDoc to generate helpful documentation.

## Modules

You can break your Sass code into different files and import them as modules in other files. The following defines `_vegetables.scss` file with a prefixed underscore, and is called a partial file. These files are not compiled into CSS.

```scss
// _vegetables.scss
$tomato: #ff6347 !default;
$olive: #808000 !default;
```

```scss
// food.scss
use 'vegetables' as *; // using star removes the need to use any namespace, like 'vegetables.$olive'

.veg-plate {
	&-tomato { // In CSS, the class name will be 'veg-plate-tomato'
		color: $tomato;
	}
	&-olive { 
		color: $olive;
	}
}
```

Here, observe how the chaining and nesting of classes is achieved in SCSS.

## Mixins

In order to make reusable blocks of code, that can be imported in other blocks of code, we can make use of mixins. For example:

```scss
@mixin highlight { // Defining Mixin
	color: tomato;
	background-color: khaki;
	border-bottom: 2px solid dotted;
}

.headline {
	@include highlight; // Importing Mixin

	font-family: 'Lato', sans-serif;
}
```

## Inheritance

Sass has a way to make a class inherit styles from another class/classes. This way we can extend the styles and follow DRY principle also.

```scss
.vegetable {
	width: 5px;
	height: 10px;
	border: 1px olive solid;
}

.redTomatoes {
	@extend .vegetable; // Inherit styles from 'vegetable' class
	background-color: tomato;
}
```

---

# Summary

The above content should provide a flavor of SCSS and how you can benefit from it. There is no question of whether to use Sass or any pre-processor for that matter, because it is indispensable in today's time and frontend development workflow. Using CSS pre-processors has been an industry standard for quite sometime now, because we strive to do better everyday and in every task. There are other CSS pre-processors like LESS, Stylus, etc and you can choose one depending on your parameters of filtering.

Sass makes CSS fun to write and mesmerizes the developer in the process. Once you get the 'Sassy Super Powers', there is no going back.
