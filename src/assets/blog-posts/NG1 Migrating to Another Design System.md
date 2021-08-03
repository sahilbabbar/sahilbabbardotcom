# Migrating Enterprise Angular App to Another Design System

<strong>22 April 2020</strong>



Large enterprise software organisations(> 100,000 employees) have a set of defined guidelines and frameworks to build software products and services, that make their software development process stable, manageable and predictable. But with the progress in technology and design, there comes a time to re-think, re-design and re-develop those legacy frameworks, to harness the power of state-of-the-art technology which is only achievable by being stead-fast with the technology growth curve. In regards to customer facing aspects, these type of technology shifts often appear in the areas of UX/UI design, multi-device usability and support, software and server architecture; where old technology is scrapped and new one is brought in its place.

This write-up talks about the exact situation, primarily involving the areas of frontend development and UX/UI design.

## Background

An enterprise product with a large codebase(1M+ LOC) is using a particular UI framework say **UIF<sub>OLD</sub>** based on an old design system say **DS<sub>OLD</sub>**, developed lots of years back. Now, the time arrives when the entire organisation's branding is being overhauled, thus giving birth to a new design system say **DS<sub>NEW</sub>** and also **UIF<sub>NEW</sub>**. A new development team is formed and given the responsibility to develop a new framework on top DS<sub>NEW</sub> namely UIF<sub>NEW</sub>.

This situation brings us to consider the following aspects:

**Challenges**

- Since there is a huge time gap between the advent of UIF<sub>OLD</sub> and UIF<sub>NEW</sub>, **there is no migration path from UIF<sub>OLD</sub> to UIF<sub>NEW</sub>**.
- Enterprise products have large codebase, so **completely re-writing the product is not an option**.
- Changing any small part of a large product, invites long and time taking processes and checkpoints of QA and SCM, so the **functional parts of the product cannot be modified or even touched!**
- The migration strategy from UIF<sub>OLD</sub> to UIF<sub>NEW</sub> should be such, that **it should take care of all future migrations** that may be to any design system say **DS<sub>X</sub>**, so that if this situation arises again in the future, the organisation is already equipped.
- Moreover, since a product is a uniform whole entity in itself and is shipped wholly, so there cannot be a scenario where one page has two different UX/UI of a same component, the technical team has to **migrate in one major release, not in different small releases**. Defying that invites questions on organisation's 'One Organisation One UX' philosphy.

So this brings us to the following:

> **Problem Statement**
>
> Migrate the complete enterprise product currently using UIF<sub>OLD</sub> based on DS<sub>OLD</sub> to UIF<sub>NEW</sub> that can adapt to any design system DS<sub>X</sub>.

Every software project manager has these obvious expectations - minimum time, effort and resources along with maximum scalability and maintainability. So, consider them as obvious as the invisible air your breathe, which although you cannot see, but can only feel!

Moving on, to be specific here, **UIF refers to a custom-built in-house enterprise Angular framework**, comprising of reusable components, used to create apps at the organisation(like Google built and uses Angular Material).

Perhaps, this problem statement falls under the 'weirdest' category in software architecture, and there is no actual solution to it, but by engineering certain aspects of the product, we tried to adopt the new design system as much as possible.

## Strategy & Approach

Following are the approaches that were explored and one was finally chosen and implemented, that checked the most number of boxes. Each approach is evaluated on the basis of scalability, maintainability, future readyness and effort estimation. 

> Moreover, we will neglect layout level modifications and will only focus on component-level changes. Also, we will try to solve the problem statement by just modifying the CSS code and keeping the markup and all the functional parts, untouched.

Now, just to put the complexity of the problem in perspective, lets consider an example of 'Button' component. In the following image, LHS has the old button styles and RHS has the new button styles, with their various respective states. 

In other words, **our motive is to go from old button styles to new button styles, i.e. UIF<sub>OLD</sub> to UIF<sub>NEW</sub>**.

<img src="assets/images/blog-posts/1.1 Buttons.png" width="600" alt="Buttons"/>

Now, we have to find different properties of this tiny looking component that need to be modified, like: background-color, color, font-family, border, box-shadow, border-radius, padding, margin, etc; and these properties change at different button states. We also have to consider the responsive behaviour of the component for different viewports.

With this perspective and our original problem statement in mind, lets go over the following approaches:

### #1 Use Host-Context

Angular provides in-built support to apply styles on the context of the host, i.e outside of a component's view. This is achieved by a special selector that apply styles to a component, based on certain condition:

```scss
:host-context(.theme_dark) div {
	background: #000;
} 
```

Here, if the `div`'s ancestor class is `.theme_dark` then the background style will be applied. 

This approach is used to create different themes(like dark, light, solarized) for Angular apps where few counted class property value change. But, we will try to use this feature to go from one design system to another, where there will be lots of class property values that will change, for each component.

So we can use this feature to change our components' styles based on the top-level class, as follows:

- `dsNew` - New Design System Class
- `dsOld` - Old Design System Class

```scss
// button.component.scss
/*----------------------------------------
 *  OLD DESIGN SYSTEM STYLES
  ----------------------------------------*/
:host-context(.dsOld) {
  // ---------- GLOBAL STYLES ----------
  * {
    font-family: 'Arial', serif;
  }
  a {
    color: blue;
    &:hover {
      cursor: pointer;
    }
  }
  // ---------- BUTTON STYLES ----------
  .btn {
    border: 1px solid #ddd;
    border-radius: 5px;
    background-image: linear-gradient(0deg, #dddddd, #eeeeee);
    width: 150px;
    height: 50px;
    font-size: 20px;
    transition: border 0.5s ease;
    &:hover {
      cursor: pointer;
      border: 1.2px rgb(124, 123, 123) solid;
   }
    &::before {
      content: 'Old ';
    }
  }
}
/*----------------------------------------
 * NEW DESIGN SYSTEM STYLES
  ----------------------------------------*/
:host-context(.dsNew) {
  // ---------- GLOBAL STYLES ----------
  * {
    font-family: 'Arial', sans-serif;
  }
  a {
    color: rgb(0, 81, 255);
    text-decoration: none;
    &:hover {
      cursor: pointer;
    }
  }
  // ---------- BUTTON STYLES ----------
  .btn {
    background: #02CCF9;
    border: none;
    border-radius: 10px;
    font-family: 'Product Sans', sans-serif;
    width: 150px;
    height: 50px;
    font-size: 20px;
    transition: box-shadow 0.5s ease;
    &:hover {
      cursor: pointer;
      box-shadow: 0px 0px 20px 2px #00000080;
    }
    &::before {
      content: 'New ';
    }
  }
}
```

This is how the end result looks like:

<img src="assets/images/blog-posts/1.2 Host Context Demo.gif" alt="Host Context Demo" />

To understand what's happening under the hood, take a look at the Angular component:

```typescript
// app.component.ts
import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  host: {
    "[class.dsOld]": "( ds === 'old' )",
    "[class.dsNew]": "( ds === 'new' )"
  }
})
export class AppComponent {
  ds = "old";
}
```

Here, the app component is applying `dsOld` and `dsNew` classes to its host, i.e. application `root` component, under which all the app's component are rendered.

<img src="assets/images/blog-posts/1.3 Inspecting Host Context.png" alt="Inspecting Host Context"/>

*Source Code: https://stackblitz.com/edit/ngg-host-context*

So, from here its very obvious that whenever this class will change, different styles will be applied.

#### Advantages

- This approach **can solve the problem** statement.
- Users will be **able to switch between both the design systems** and this will help the app owners to slowly transition existing users to the new design system, so that they don't feel overwhelmed.

#### Disadvantages

- We are trying to use a feature to switch between design system, which is **meant for theming**.
- We will have to modify each component's styles from UIF<sub>NEW</sub> to **match the CSS rule chaining** in UIF<sub>OLD</sub>.
- When fixes/features will be released by the team maintaining UIF<sub>NEW</sub>, it will be **very tedious to merge new release changes** into the codebase, as it will manually require to add/remove each change.
- In order to leverage the power of a CSS pre-processor like SCSS, the standard guidelines are to create variables for cases where the CSS property is the same and only the value differs. But here, since all the property values are different for the button component, we will have to create almost as many variables as there are property values. This **will increase SCSS code's complexity.**
  - Lengthy SCSS variable files need to be maintained, for each component.
- It will also happen that one CSS property is used in UIF<sub>NEW</sub> but not in UIF<sub>OLD</sub>. So, while developing any new component, two **separate styles have to be maintained for a single component**. This holds true for fixes/enhancements for each component. So making maintainability a little difficult.
  - If after few years any new design system comes up, say DS<sub>X</sub>, then, we will have multiple styles to maintain for each component. Although, we can gradually deprecate one design system with time.
- One of the theme's SCSS code will never be used, hence will occupy space and will never be used. *(CONFIRM)*

### #2 Copy & Modify

Another approach is to copy all the new stylesheets of each component and place them besides their old counterparts. Pretty straightforward! 

<img src="assets/images/blog-posts/1.4 Modify & Copy.png" alt="Modify & Copy" />

Also, modify these newly imported stylesheets so that CSS rule chaining in the old markup picks up the styles from these files. Now, at this point we can make few project level configurations:

- Provide feasibility to build apps with new stylesheets, by picking up the new files and ignore the old ones; or vice-versa or keeping both. This can be done using a task-runner like Gulp.
- The same can be done for developement purposes, where the app is only served.

#### Advantages

- This approach **can also solve the problem**(but not gracefully). 
- Seems to be an **easy and quick** way out and is very straightforward.
- This approach allows the developer to **apply both type of styles at the same time**, on the same page, for a particular component. Although, it is not desirable to have two different looking buttons on a single page, but it might help to phase-out old styles, if used wisely.
  - This can be achieved by cleverly modifying CSS class rule names, based on certain condition.

#### Disadvantages

- Being a brute-force like approach, we are **not leveraging the powers** of Angular and nor any CSS pre-processor.
- Developers will **not be able to provide the feasibility to switch** between old and new design system to their end users, if the app is built using one type of styles.
  - If the feasibility to switch is provided, then **both type of stylesheets have to be shipped** along with the product, thus making it bloated.
- This approach will **bloat the repository** size, with redundant CSS code, as mostly only one theme will be used.
- We will have to **maintain two different stylesheets** for one component, till the time one design system is totally discarded or de-commissioned.
- Same from Approach #1:
  - When fixes/features will be released by the team maintaining UIF<sub>NEW</sub>, it will be **very tedious to merge new release changes** into the codebase, as it will manually require to add/remove each change.
  - We will have to modify each component's styles from UIF<sub>NEW</sub> to **match the CSS rule chaining** in UIF<sub>OLD</sub>.

### #3 Restructure Stylesheets

The last approach can be to restructure the existing stylesheets using SCSS, in such a way that all the variable CSS property values are supplied via Sass variables. Now, depending on whether to render a component in old or new design system, the variables' values can be modified. 

So, we have one stylesheet for each component in which mostly all of its CSS property values get their actual values from Sass variables and it also imports the appropriate variables file, programatically.

```scss
// button.component.scss
// GET OLD DESIGN SYSTEM'S VARIABLES
@import '../buttonValues.old.scss';

.btn {
  border: $btn-border;
  border-radius: $btn-border_rad;
  background: $btn-bg;
  background-image: $btn-bg_img;
  width: 150px;
  height: 50px;
  font-size: $btn-font;
  transition: $btn-transition;
  &:hover {
    cursor: pointer;
    border: $btn-border_hov;
    box-shadow: $btn-boxShadow;
  }
}
```

```scss
// buttonValues.old.scss
$btn-border: 1px solid #ddd;
$btn-border_rad: 5px;
$btn-bg: none;
$btn-bg_img: linear-gradient(0deg, #dddddd, #eeeeee);
$btn-font: 20px;
$btn-transition: border 0.5s ease;
$btn-border_hov: 1.2px rgb(124, 123, 123) solid;
$btn-boxShadow: none;
```

**Source Code:** https://stackblitz.com/edit/ngg-scss-theming

Similarly, we can make `buttonValues.new.scss` for the new design system. So, now at build-time or compile-time, we can use a task-runner like Gulp to programatically import only those variable files which are required, i.e. import only `...old.scss` files for old design system and `...new.scss` for new.

#### Advantages

- This approach **perfectly solves the problem statement**, as it also take cares of the migration to any design system D<sub>X</sub> that may come up in the future.
- This approach is modular as it **leverages the powers of SCSS**; moreover it's **scalable and maintainable**.
- This methodology also can be **configured to achieve switching feasibility** between design systems.

#### Disadvantages

- There can be few or more properties which will not be applicable for a component belonging to a particular design system. So, this will **increase unused/unnecessary code**, although this can be ignored, given this approach's advantages and modularity.
- To restructure/rewrite existing stylesheet for a component is **tedious** and will also require **QA before any major release**, as the existing CSS code is modified, for the whole product. Moreover, the variables for new design system have to be extracted out of the new stylesheets.

## Summary

To conclude this peculiar but realistic project's adventure, there are lots of open points to ponder upon. For example, how can we better these approaches by leveraging the power of SCSS, Angular or any other frontend tool, in order to reduce their shortcomings. Since the above mentioned problem statement involve broader areas like UX/UI design, frontend frameworks like Angular, there can be more approaches to solve this problem, apart from the ones mentioned above. 



If you would like to say anything about the above post, do let me know. 

Always Welcome. Anytime.
