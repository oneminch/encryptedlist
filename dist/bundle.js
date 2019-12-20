/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nvar product_list = exports.product_list = [\n// List of all products\n{\n\tname: \"Firefox Send\",\n\tdescription: \"Share files with end-to-end encryption and a link that automatically expires.\",\n\turl: \"https://send.firefox.com\",\n\timg_url: \"./assets/img/firefoxsend.svg\",\n\tcategory: [\"All\", \"File Transfer\"],\n\ttags: [\"all\", \"free\", \"web-app\", \"open-source\"]\n}, {\n\tname: \"Datash\",\n\tdescription: \"Send and receive files with end-to-end encryption.\",\n\turl: \"https://datash.co/\",\n\timg_url: \"./assets/img/datash.png\",\n\tcategory: [\"All\", \"File Transfer\"],\n\ttags: [\"all\", \"free\", \"web-app\", \"open-source\"]\n}, {\n\tname: \"EteSync\",\n\tdescription: \"Secure, end-to-end encrypted, and privacy respecting sync for your contacts, calendars and tasks.\",\n\turl: \"https://www.etesync.com/\",\n\timg_url: \"./assets/img/etesync.png\",\n\tcategory: [\"All\", \"Productivity\"],\n\ttags: [\"all\", \"web-app\", \"premium\", \"open-source\", \"cross-platform\"]\n}, {\n\tname: \"Scannie\",\n\tdescription: \"Secure and end-to-end encrypted document scanner and storage.\",\n\turl: \"https://www.scannieapp.com/\",\n\timg_url: \"./assets/img/scannie.png\",\n\tcategory: [\"All\", \"Productivity\"],\n\ttags: [\"all\", \"free\", \"open-source\", \"decentralized\"]\n}, {\n\tname: \"Wickr\",\n\tdescription: \"Fully encrypted, Enterprise-ready, Private, Secure Team Collaboration Space\",\n\turl: \"https://wickr.com/\",\n\timg_url: \"./assets/img/wickr.png\",\n\tcategory: [\"All\", \"Communication\", \"Collaboration\"],\n\ttags: [\"all\", \"freemium\", \"cross-platform\"]\n}, {\n\tname: \"Wire\",\n\tdescription: \"A collaboration platform with the most advanced security and superior user experience.\",\n\turl: \"https://wire.com/en/\",\n\timg_url: \"./assets/img/wire.svg\",\n\tcategory: [\"All\", \"Productivity\", \"Communication\", \"File Transfer\", \"Collaboration\"],\n\ttags: [\"all\", \"web-app\", \"freemium\", \"open-source\", \"cross-platform\"]\n}, {\n\tname: \"Tox\",\n\tdescription: \"Encrypted instant messaging that is free, distributed, and open-source.\",\n\turl: \"https://tox.chat/\",\n\timg_url: \"./assets/img/tox.svg\",\n\tcategory: [\"All\", \"Communication\", \"File Transfer\", \"Collaboration\"],\n\ttags: [\"all\", \"beta\", \"free\", \"open-source\", \"cross-platform\"]\n}, {\n\tname: \"Riot\",\n\tdescription: \"A secure and robust communication and collaboration platform.\",\n\turl: \"https://about.riot.im/\",\n\timg_url: \"./assets/img/riot.svg\",\n\tcategory: [\"All\", \"Communication\", \"File Transfer\", \"Collaboration\"],\n\ttags: [\"all\", \"free\", \"web-app\", \"open-source\", \"decentralized\", \"cross-platform\"]\n}, {\n\tname: \"Mumble\",\n\tdescription: \"An end to end encrypted text and voice chat for online communities.\",\n\turl: \"https://trymumble.com\",\n\timg_url: \"./assets/img/mumble.svg\",\n\tcategory: [\"All\", \"Communication\", \"Collaboration\"],\n\ttags: [\"all\", \"free\", \"web-app\", \"decentralized\"]\n}, {\n\tname: \"Viber\",\n\tdescription: \"Free and secure calls and messages with end-to-end encryption.\",\n\turl: \"https://www.viber.com/\",\n\timg_url: \"./assets/img/viber.svg\",\n\tcategory: [\"All\", \"Communication\"],\n\ttags: [\"all\", \"free\", \"proprietary\", \"cross-platform\"]\n}, {\n\tname: \"Facebook Messenger\",\n\tdescription: \"End-to-end encrypted messages when using opt-in 'Secret Conversations'.\",\n\turl: \"https://www.messenger.com/\",\n\timg_url: \"./assets/img/messenger.svg\",\n\tcategory: [\"All\", \"Communication\", \"File Transfer\"],\n\ttags: [\"all\", \"free\", \"web-app\", \"proprietary\", \"cross-platform\"]\n}, {\n\tname: \"Stackfield\",\n\tdescription: \"Encrypted projects, tasks & team communication.\",\n\turl: \"https://www.stackfield.com/\",\n\timg_url: \"./assets/img/stackfield.png\",\n\tcategory: [\"All\", \"Productivity\", \"Communication\", \"Collaboration\"],\n\ttags: [\"all\", \"web-app\", \"freemium\", \"proprietary\", \"cross-platform\"]\n}, {\n\tname: \"dPhone\",\n\tdescription: \"A secure calling app with P2P architecture and end-to-end encryption.\",\n\turl: \"https://dphone.app/\",\n\timg_url: \"./assets/img/dphone.png\",\n\tcategory: [\"All\", \"Communication\"],\n\ttags: [\"all\", \"free\", \"open-source\", \"decentralized\"]\n}, {\n\tname: \"Signal\",\n\tdescription: \"Fast, simple, and secure messaging\",\n\turl: \"https://signal.org/\",\n\timg_url: \"./assets/img/signal.png\",\n\tcategory: [\"All\", \"Communication\"],\n\ttags: [\"all\", \"free\", \"open-source\", \"cross-platform\"]\n}, {\n\tname: \"Keybase Chat\",\n\tdescription: \"End-to-end encrypted chat built into Keybase\",\n\turl: \"https://keybase.io/download\",\n\timg_url: \"./assets/img/keybase.png\",\n\tcategory: [\"All\", \"Storage\", \"Communication\", \"File Transfer\"],\n\ttags: [\"all\", \"free\", \"open-source\", \"cross-platform\"]\n}, {\n\tname: \"Safer.Chat\",\n\tdescription: \"End-to-end encrypted group webchat that allows users to create rooms with up to 4 participants.\",\n\turl: \"https://safer.chat/\",\n\timg_url: \"./assets/img/saferchat.png\",\n\tcategory: [\"All\", \"Communication\"],\n\ttags: [\"all\", \"free\", \"web-app\", \"open-source\"]\n}, {\n\tname: \"Confide\",\n\tdescription: \"Confidential messenger with encrypted, ephemeral and screenshot-proof messages.\",\n\turl: \"https://getconfide.com/\",\n\timg_url: \"./assets/img/confide.png\",\n\tcategory: [\"All\", \"Communication\"],\n\ttags: [\"all\", \"freemium\", \"proprietary\", \"cross-platform\"]\n}, {\n\tname: \"Skype\",\n\tdescription: \"End-to-end encryption when using Private Conversations (opt-in and not on by default)\",\n\turl: \"https://skype.com/en\",\n\timg_url: \"./assets/img/skype.svg\",\n\tcategory: [\"All\", \"Communication\"],\n\ttags: [\"all\", \"free\", \"web-app\", \"proprietary\", \"cross-platform\"]\n}, {\n\tname: \"Google Duo\",\n\tdescription: \"Simple and secure video calling with upto 8 people.\",\n\turl: \"https://duo.google.com/about/\",\n\timg_url: \"./assets/img/duo.png\",\n\tcategory: [\"All\", \"Communication\"],\n\ttags: [\"all\", \"free\", \"web-app\", \"proprietary\", \"cross-platform\"]\n}, {\n\tname: \"Telegram\",\n\tdescription: \"A cloud-based messaging app which offers e2ee when using Secret Chats\",\n\turl: \"https://telegram.org/\",\n\timg_url: \"./assets/img/telegram.svg\",\n\tcategory: [\"All\", \"Communication\"],\n\ttags: [\"all\", \"free\", \"web-app\", \"proprietary\", \"cross-platform\"]\n}, {\n\tname: \"WhatsApp\",\n\tdescription: \"A Facebook-owned calling and messaging app with end-to-end encryption.\",\n\turl: \"https://www.whatsapp.com/\",\n\timg_url: \"./assets/img/whatsapp.svg\",\n\tcategory: [\"All\", \"Communication\"],\n\ttags: [\"all\", \"free\", \"proprietary\", \"cross-platform\"]\n}, {\n\tname: \"KeeperChat\",\n\tdescription: \"Communicate privately with end-to-end encryption for messages at rest and in transit.\",\n\turl: \"https://keepersecurity.com/keeperchat.html\",\n\timg_url: \"./assets/img/keeperchat.svg\",\n\tcategory: [\"All\", \"Communication\"],\n\ttags: [\"all\", \"premium\", \"proprietary\", \"cross-platform\"]\n}, {\n\tname: \"Threema\",\n\tdescription: \"An encrypted messenger built with security and privacy in mind.\",\n\turl: \"https://threema.ch/en\",\n\timg_url: \"./assets/img/threema.svg\",\n\tcategory: [\"All\", \"Communication\"],\n\ttags: [\"all\", \"premium\", \"proprietary\", \"cross-platform\"]\n}, {\n\tname: \"Tutanota Mail\",\n\tdescription: \"A secure email service with built-in encrypted calendar, easy to use and private by design.\",\n\turl: \"https://tutanota.com/secure-email\",\n\timg_url: \"./assets/img/tutanota.svg\",\n\tcategory: [\"All\", \"Email\", \"Communication\"],\n\ttags: [\"all\", \"web-app\", \"freemium\", \"open-source\", \"cross-platform\"]\n}, {\n\tname: \"Protonmail\",\n\tdescription: \"An email service with e2e encryption and a modern design.\",\n\turl: \"https://protonmail.com/\",\n\timg_url: \"./assets/img/protonmail.svg\",\n\tcategory: [\"All\", \"Email\", \"Communication\"],\n\ttags: [\"all\", \"web-app\", \"freemium\", \"open-source\", \"cross-platform\"]\n}, {\n\tname: \"Mailfence\",\n\tdescription: \"End-to-end encrypted emails, contacts, calendars and documents.\",\n\turl: \"https://mailfence.com/\",\n\timg_url: \"./assets/img/mailfence.png\",\n\tcategory: [\"All\", \"Email\", \"Communication\"],\n\ttags: [\"all\", \"web-app\", \"freemium\", \"proprietary\"]\n}, {\n\tname: \"Canary Mail\",\n\tdescription: \"An email <b>client</b> with built-in end-to-end encryption.\",\n\turl: \"https://canarymail.io/\",\n\timg_url: \"./assets/img/canarymail.png\",\n\tcategory: [\"All\", \"Email\"],\n\ttags: [\"all\", \"premium\", \"proprietary\"]\n}, {\n\tname: \"Mega\",\n\tdescription: \"A simple, convenient & secure cloud storage and communication.\",\n\turl: \"https://mega.nz/\",\n\timg_url: \"./assets/img/mega.svg\",\n\tcategory: [\"All\", \"Storage\", \"Communication\", \"File Transfer\"],\n\ttags: [\"all\", \"web-app\", \"freemium\", \"open-source\", \"cross-platform\"]\n}, {\n\tname: \"Tresorit\",\n\tdescription: \"End-to-end encrypted secure cloud to store, sync and share files easily from anywhere, anytime.\",\n\turl: \"https://tresorit.com/\",\n\timg_url: \"./assets/img/tresorit.svg\",\n\tcategory: [\"All\", \"Storage\", \"Productivity\"],\n\ttags: [\"all\", \"web-app\", \"premium\", \"proprietary\", \"cross-platform\"]\n}, {\n\tname: \"SpiderOak\",\n\tdescription: \"A suite of end-to-end encrypted services: Semaphor, One Backup and Encryptr.\",\n\turl: \"https://spideroak.com/\",\n\timg_url: \"./assets/img/spideroak.svg\",\n\tcategory: [\"All\", \"Storage\", \"Communication\", \"Collaboration\"],\n\ttags: [\"all\", \"free\", \"premium\", \"proprietary\", \"open-source\", \"decentralized\", \"cross-platform\"]\n}, {\n\tname: \"pDrive\",\n\tdescription: \"A safe, secure and 100% private storage with built-in end-to-end encryption.\",\n\turl: \"https://pdrive.co/\",\n\timg_url: \"./assets/img/pdrive.png\",\n\tcategory: [\"All\", \"Storage\"],\n\ttags: [\"all\", \"free\", \"web-app\", \"decentralized\"]\n}, {\n\tname: \"Encrypt My Photos\",\n\tdescription: \"End-to-end encrypted photo storage 📸\",\n\turl: \"https://encryptmyphotos.com/\",\n\timg_url: \"./assets/img/encryptmyphotos.png\",\n\tcategory: [\"All\", \"Storage\"],\n\ttags: [\"all\", \"free\", \"web-app\", \"open-source\", \"decentralized\"]\n}, {\n\tname: \"Photo Vault\",\n\tdescription: \"Unlimited free and secure storage for your private photos with end-to-end encryption.\",\n\turl: \"https://photovault.online/\",\n\timg_url: \"./assets/img/photovault.png\",\n\tcategory: [\"All\", \"Storage\"],\n\ttags: [\"all\", \"free\", \"web-app\", \"proprietary\", \"decentralized\"]\n}, {\n\tname: \"Recall Photos\",\n\tdescription: \"A secure, free, end-to-end encrypted and open-source alternative to Google Photos.\",\n\turl: \"https://app.recall.photos/\",\n\timg_url: \"./assets/img/recallphotos.svg\",\n\tcategory: [\"All\", \"Storage\"],\n\ttags: [\"all\", \"free\", \"web-app\", \"open-source\", \"decentralized\"]\n}, {\n\tname: \"Pixus\",\n\tdescription: \"Organize, explore and share end-to-end encrypted photos.\",\n\turl: \"https://pixus.tech/\",\n\timg_url: \"./assets/img/pixus.png\",\n\tcategory: [\"All\", \"Storage\"],\n\ttags: [\"all\", \"free\", \"web-app\", \"open-source\", \"decentralized\"]\n}, {\n\tname: \"Boxcryptor\",\n\tdescription: \"End-to-end encryption for your cloud data.\",\n\turl: \"https://www.boxcryptor.com/en/\",\n\timg_url: \"./assets/img/boxcryptor.png\",\n\tcategory: [\"All\", \"Storage\"],\n\ttags: [\"all\", \"freemium\", \"proprietary\", \"cross-platform\"]\n}, {\n\tname: \"Virtru\",\n\tdescription: \"Easily Protect Your Data Wherever It’s Created or Shared with End-to-End Encryption.\",\n\turl: \"https://www.virtru.com/\",\n\timg_url: \"./assets/img/virtru.png\",\n\tcategory: [\"All\", \"Email\", \"Storage\", \"Communication\", \"File Transfer\"],\n\ttags: [\"all\", \"premium\", \"cross-platform\"]\n}, {\n\tname: \"Bitwarden\",\n\tdescription: \"Open source password management solutions with end-to-end encryption.\",\n\turl: \"https://www.bitwarden.com/\",\n\timg_url: \"./assets/img/bitwarden.svg\",\n\tcategory: [\"All\", \"Storage\", \"Productivity\"],\n\ttags: [\"all\", \"web-app\", \"freemium\", \"open-source\", \"cross-platform\"]\n}, {\n\tname: \"Roboform\",\n\tdescription: \"Password management tool for individuals and businesses.\",\n\turl: \"https://www.roboform.com/\",\n\timg_url: \"./assets/img/roboform.png\",\n\tcategory: [\"All\", \"Storage\", \"Productivity\"],\n\ttags: [\"all\", \"web-app\", \"freemium\", \"proprietary\", \"cross-platform\"]\n}, {\n\tname: \"1Password\",\n\tdescription: \"A private by design end-to-end encrypted password manager.\",\n\turl: \"https://www.1password.com/\",\n\timg_url: \"./assets/img/1password.png\",\n\tcategory: [\"All\", \"Storage\", \"Productivity\"],\n\ttags: [\"all\", \"premium\", \"web-app\", \"proprietary\", \"cross-platform\"]\n}, {\n\tname: \"Tutanota Calendar\",\n\tdescription: \"Free zero-knowledge calendar with built-in encryption by Tutanota.\",\n\turl: \"https://tutanota.com/calendar/\",\n\timg_url: \"./assets/img/tutanota.svg\",\n\tcategory: [\"All\", \"Email\", \"Productivity\"],\n\ttags: [\"all\", \"free\", \"web-app\", \"open-source\", \"cross-platform\"]\n}, {\n\tname: \"Secure Calendar\",\n\tdescription: \"Secure, end-to-end encrypted, and privacy respecting calendar.\",\n\turl: \"https://securecalendar.online/\",\n\timg_url: \"./assets/img/securecalendar.png\",\n\tcategory: [\"All\", \"Productivity\"],\n\ttags: [\"all\", \"free\", \"web-app\", \"open-source\", \"decentralized\"]\n}, {\n\tname: \"Standard Notes\",\n\tdescription: \"A free, open-source, and completely encrypted notes app.\",\n\turl: \"https://app.standardnotes.org\",\n\timg_url: \"./assets/img/snotes.svg\",\n\tcategory: [\"All\", \"Notes\", \"Productivity\"],\n\ttags: [\"all\", \"web-app\", \"freemium\", \"open-source\", \"cross-platform\"]\n}, {\n\tname: \"Notes by Firefox\",\n\tdescription: \"A simple, secure notepad extension for Firefox that has a companion app for Android. \",\n\turl: \"https://addons.mozilla.org/en-US/firefox/addon/notes-by-firefox/\",\n\timg_url: \"./assets/img/firefoxnotes.png\",\n\tcategory: [\"All\", \"Notes\", \"Productivity\"],\n\ttags: [\"all\", \"beta\", \"free\", \"open-source\"]\n}];\n\n// List of available tags\nvar tag_list = exports.tag_list = [\"all\", \"beta\", \"free\", \"premium\", \"freemium\", \"proprietary\", \"open-source\", \"decentralized\", \"cross-platform\" //, \"\", \"\", \"\", \"\", \"\"\n];\n// List of available categories\nvar catergory_list = exports.catergory_list = [\"All\", \"Email\", \"Notes\", \"Storage\", \"Productivity\", \"Communication\", \"File Transfer\", \"Collaboration\"];\n\n//# sourceURL=webpack:///./src/data.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _data = __webpack_require__(/*! ./data */ \"./src/data.js\");\n\nvar json_data = _interopRequireWildcard(_data);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nvar disclaimer_btn = document.querySelector(\".disclaimer-btn\");\nvar disclaimer_text = document.querySelector(\".disclaimer\");\n\nvar list_type = document.querySelector(\".list__type\");\nvar list_container = document.querySelector(\".list__container\");\n\nvar tag_dropdown = document.querySelector(\".tags__list\");\nvar category_dropdown = document.querySelector(\".category__list\");\nvar dropdown_lists = document.querySelectorAll(\".dropdown__list\");\n\n// 404 Image URL for empty list \nvar empty_list_img = \"./assets/img/404.png\";\n\n// Get data values from 'data.js' module\nvar data_array = json_data.product_list;\nvar tag_names = json_data.tag_list;\nvar catergory_names = json_data.catergory_list;\n\n// Load up dropdown values from corresponding arrays\nwindow.addEventListener(\"load\", function () {\n   dropdown_lists.forEach(function (dropdown) {\n      if (dropdown.classList.contains(\"tags__list\")) {\n         renderOptions(tag_names, tag_dropdown);\n      } else if (dropdown.classList.contains(\"category__list\")) {\n         renderOptions(catergory_names, category_dropdown);\n      }\n   });\n   // Render from current value (onload)\n   renderFromValue(data_array, selectedValues()[0], selectedValues()[1]);\n});\n\nvar renderOptions = function renderOptions(dropdown_type, dropdown_type_parent) {\n   var dropdown_markup = \"\";\n   for (var i = 0; i < dropdown_type.length; i++) {\n      var val = dropdown_type[i];\n      dropdown_markup += \"<option value = \\\"\" + val + \"\\\" \" + (val.toLowerCase() == \"all\" ? 'selected' : '') + \">\" + val + \"</option>\";\n   }\n   dropdown_type_parent.insertAdjacentHTML(\"afterbegin\", dropdown_markup);\n};\n\n// Renders values from array to list container\nvar renderItems = function renderItems(items_arr) {\n   var markup = \"\";\n   for (var i = 0; i < items_arr.length; i++) {\n      markup += \"\\n         <a target=\\\"_blank\\\" href=\\\"\" + items_arr[i].url + \"\\\" class=\\\"list__item\\\">\\n            <div class=\\\"icon\\\">\\n               <img src=\\\"\" + items_arr[i].img_url + \"\\\" alt=\\\"\" + items_arr[i].name + \" logo\\\">\\n            </div>\\n            <div class=\\\"info\\\">\\n               <div class=\\\"name\\\">\" + items_arr[i].name + \"</div>\\n               <div class=\\\"desc\\\">\" + items_arr[i].description + \"</div>\\n               <div class=\\\"tags\\\">\";\n      for (var j = 1; j < items_arr[i].tags.length; j++) {\n         markup += \"<span>#\" + items_arr[i].tags[j] + \"</span>\";\n      }\n      markup += \"</div></div></a>\";\n   }\n   list_container.innerHTML = \"\";\n   list_container.innerHTML = markup;\n   var list_end_markup = \"\\n      <hr class='list__end'>\\n      <a href=\\\"https://github.com/oneminch/encryptedlist\\\" class=\\\"github-page\\\" title=\\\"How to submit\\\">\\n      <img src=\\\"./assets/img/logo/github.svg\\\" alt=\\\"GitHub Page\\\"/>            \\n      </a>\\n   \";\n   list_container.insertAdjacentHTML(\"beforeend\", list_end_markup);\n};\n\n// Renders items from passed array list \n// with matching category and tag values\nvar renderFromValue = function renderFromValue(items_list, cat_val, tag_val) {\n   var filterArr = [];\n\n   // Find items with matching cat_val & tag_val\n   for (var i = 0; i < items_list.length; i++) {\n      if (items_list[i].category.includes(cat_val) && items_list[i].tags.includes(tag_val)) {\n         filterArr.push(items_list[i]);\n      }\n   }\n\n   // Render \n   // 1) results if items match\n   // 2) 404 output if no match\n   renderItems(filterArr);\n   if (filterArr.length > 0) {\n      list_type.innerHTML = cat_val + \" (\" + tag_val + \")\";\n   } else {\n      var content_empty = \"\\n         <h2>No products with that specification.</h2>\\n         <img src=\" + empty_list_img + \" alt=\\\"Empty List\\\">\\n      \";\n      list_type.innerHTML = \"\";\n      list_container.insertAdjacentHTML('afterbegin', content_empty);\n   }\n};\n\n// Returns current category and tag values\nvar selectedValues = function selectedValues() {\n   // Get current category value\n   var category_index = category_dropdown.selectedIndex;\n   var category_value = category_dropdown.options[category_index].value;\n\n   // Get current tag value\n   var tag_index = tag_dropdown.selectedIndex;\n   var tag_value = tag_dropdown.options[tag_index].value;\n\n   return [category_value, tag_value];\n};\n\n// Render from changed dropdown values\ndropdown_lists.forEach(function (dropdown) {\n   return dropdown.addEventListener(\"change\", function () {\n      renderFromValue(data_array, selectedValues()[0], selectedValues()[1]);\n\n      if (disclaimer_text.classList.contains(\"show\")) {\n         disclaimer_text.classList.remove(\"show\");\n         disclaimer_text.classList.add(\"hide\");\n      }\n   });\n});\n\n// Toggle disclaimer text\nvar toggleDisclaimer = function toggleDisclaimer() {\n   if (disclaimer_text.classList.contains(\"show\")) {\n      disclaimer_text.classList.remove(\"show\");\n      disclaimer_text.classList.add(\"hide\");\n   } else {\n      disclaimer_text.classList.remove(\"hide\");\n      disclaimer_text.classList.add(\"show\");\n   }\n};\ndisclaimer_btn.addEventListener(\"click\", toggleDisclaimer);\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });