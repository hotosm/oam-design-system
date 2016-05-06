# OAM Design System

**Work in progress.** Use at your own risk!  

The following guide explains how to use the `oam-design-system` in a new project. For information on how to develop the `oam-design-system` checkout the [DEVELOPMENT.md](DEVELOPMENT.md)  

---

Style guide and UI components library that aims to standardize the look and feel across all OAM-related applications, while defining coding best practices and conventions.

Install it as an `npm` module: (not available yet)
```
npm install oam-design-system
```

**Note:**
This design system makes some assumptions which are described below for each of the elements.  
Check the build system of [OAM docs](https://github.com/hotosm/oam-docs/blob/master/gulpfile.js), a project that uses the `oam-design-system`.

## Overview

The shared assets are all in the `assets` directory. It is organized as follows:

### assets/scripts
Utility libraries and shared components.

**USAGE**  
Use as any node module:
```js
import { Dropdown, user } from 'oam-design-system';
```
If you want to minimize bundle size you can also include the components directly.  
Bindings exported from `oam-design-system` are also available in `oam-design-system/assets/scripts`

### assets/styles
General styles. Requires burbon. [Add more info]

**INSTALLATION**  
Add the module path to the `includePaths` of gulp-sass. Should look something like:
```js
.pipe($.sass({
  outputStyle: 'expanded',
  precision: 10,
  includePaths: require('node-bourbon').with('node_modules/jeet/scss', require('oam-design-system/gulp-addons').scssPath)
}))
```

**USAGE**  
Now you can include it in the main scss file:
```scss
// Bourbon is a dependency
@import "bourbon";

@import "jeet/index";

@import "oam-design-system";
```
In case you don't need all the elements, they can be individually imported.  
[link to the file on github - it's easier.]

### assets/icons
The `oam-design-system` includes svg icons that are compiled into a webfont and included in the styles.  
To use them check the `_oam-ds-icons.scss` for the class names.

### assets/graphics
Graphics that are to be shared among projects.

**INSTALLATION**  
Add the `graphicsMiddleware` to browserSync. This is only to aid development.  
Should look something like:
```js
browserSync({
  port: 3000,
  server: {
    baseDir: ['.tmp', 'app'],
    routes: {
      '/node_modules': './node_modules'
    },
    middleware: require('oam-design-system/gulp-addons').graphicsMiddleware(fs) // <<< This line
  }
});
```
*Basically every time there's a request to a path like `/assets/graphics/**`, browserSync will check in the `oam-design-system` folder first. If it doesn't find anything it will look in the normal project's asset folder.*

You also need to ensure that the images are copied over on build.
This ensures that the graphics are copied over when building the project.
```js
gulp.task('images', function () {
  return gulp.src(['app/assets/graphics/**/*', require('oam-design-system/gulp-addons').graphicsPath + '/**/*'])
    .pipe($.cache($.imagemin({
```

**USAGE**  
Just include the images from the list using the path `assets/graphics/[graphic-type]/[graphic-name]`:  
[link to the file list on github - it's easier.]
