For CommonJS and CommonJS-like environments where a proper `windowis present, execute the factory and get jQueryFor environments that do not have a `window` with a `document(such as Node.js), expose a factory as module.exportsThis accentuates the need for the creation of a real `window`e.g. var jQuery = require("jquery")(window)See ticket #14549 for more info.


#topページのメニューがスラッシュ区切りになっている。