var path = require('path');

// /////////////////////////////////////////////////////////////////////////////
// ----------------------- Node module settings ------------------------------//
// -------------------------- (Do not modify) --------------------------------//
module.exports.scssPath = path.join(__dirname, './assets/styles');

module.exports.graphicsPath = path.join(__dirname, './assets/graphics');

module.exports.graphicsMiddleware = function (fs) {
  return function (req, res, next) {
    var r = new RegExp('/?assets/graphics/(.+)');
    var pieces = req.url.match(r);
    if (!pieces) return next();
    try {
      if (pieces[1].match(/\.svgz?$/)) {
        res.setHeader('Content-Type', 'image/svg+xml');
      }
      // Body gets modified. End response.
      return res.end(fs.readFileSync(path.join(__dirname, './assets/graphics', pieces[1])));
    } catch (e) {
      // Nothing to do there.
      return next();
    }
  };
};
