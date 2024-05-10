var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
(function() {
  var _csvModal, _chartType, _randomValue, _screenshotListener, _title, _theme, _comingFrom, _content, _uniqueId, _id, _themeRadios, _themeHeader;
  "use strict";
  var __vite_style__ = document.createElement("style");
  __vite_style__.textContent = '@charset "UTF-8";@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap");\n\n\n.typo_title-display1 {\n  font-size: 48px;\n  font-weight: bold;\n  font-family: "Montserrat";\n}\n.typo_title-displaySub {\n  font-size: 32px;\n  font-weight: medium;\n  font-family: "Montserrat";\n}\n.typo_title-title1 {\n  font-size: 32px;\n  font-weight: bold;\n  font-family: "Montserrat";\n}\n.typo_title-title2 {\n  font-size: 24px;\n  font-weight: bold;\n  font-family: "Montserrat";\n}\n.typo_title-title3 {\n  font-size: 20px;\n  font-weight: bold;\n  font-family: "Montserrat";\n}\n.typo_title-title4 {\n  font-size: 18px;\n  font-weight: bold;\n  font-family: "Montserrat";\n}\n.typo_title-title5 {\n  font-size: 16px;\n  font-weight: bold;\n  font-family: "Montserrat";\n}\n.typo_text-xlText {\n  font-size: 20px;\n  font-weight: normal;\n  font-family: "Montserrat";\n}\n.typo_text-lgText {\n  font-size: 18px;\n  font-weight: normal;\n  font-family: "Montserrat";\n}\n.typo_text-mText {\n  font-size: 16px;\n  font-weight: normal;\n  font-family: "Montserrat";\n}\n.typo_text-smText {\n  font-size: 14px;\n  font-weight: normal;\n  font-family: "Montserrat";\n}\n.typo_text-xsText {\n  font-size: 12px;\n  font-weight: normal;\n  font-family: "Montserrat";\n}\n.typo_code-lgText {\n  font-size: 18px;\n  font-weight: normal;\n  font-family: "Consolas";\n}\n.typo_code-mText {\n  font-size: 16px;\n  font-weight: normal;\n  font-family: "Consolas";\n}\n.typo_code-smText {\n  font-size: 14px;\n  font-weight: normal;\n  font-family: "Consolas";\n}\n.typo_code-xsText {\n  font-size: 12px;\n  font-weight: normal;\n  font-family: "Consolas";\n}\n.btn-xsmall-primary-var1 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  color: black;\n  border-radius: 16px;\n  border: none;\n  background-color: rgb(6, 149, 208);\n  width: 104px;\n  height: 24px;\n  font-family: Montserrat;\n  font-size: 12px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-xsmall-primary-var1:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: black;\n}\n.btn-xsmall-primary-var1:not(:disabled):active {\n  border: 2px solid #11b5f8;\n  color: black;\n}\n.btn-xsmall-primary-var1:not(:disabled):focus-visible {\n  color: black;\n  outline: 2px solid #05719e;\n  outline-offset: 3px;\n}\n.btn-xsmall-primary-var1:disabled {\n  color: black;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-xsmall-primary-var2 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  color: black;\n  border-radius: 16px;\n  border: 2px solid rgb(6, 149, 208);\n  background-color: rgb(255, 255, 255);\n  width: 104px;\n  height: 24px;\n  font-family: Montserrat;\n  font-size: 12px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-xsmall-primary-var2:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: black;\n}\n.btn-xsmall-primary-var2:not(:disabled):active {\n  border: 2px solid #11b5f8;\n  color: black;\n}\n.btn-xsmall-primary-var2:not(:disabled):focus-visible {\n  color: black;\n  outline: 2px solid #e6e6e6;\n  outline-offset: 3px;\n}\n.btn-xsmall-primary-var2:disabled {\n  color: black;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-xsmall-primary-var3 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  color: black;\n  border-radius: 16px;\n  border: 2px solid rgb(6, 149, 208);\n  background-color: rgb(238, 250, 254);\n  width: 104px;\n  height: 24px;\n  font-family: Montserrat;\n  font-size: 12px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-xsmall-primary-var3:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: black;\n}\n.btn-xsmall-primary-var3:not(:disabled):active {\n  border: 2px solid #11b5f8;\n  color: black;\n}\n.btn-xsmall-primary-var3:not(:disabled):focus-visible {\n  color: black;\n  outline: 2px solid #beecfb;\n  outline-offset: 3px;\n}\n.btn-xsmall-primary-var3:disabled {\n  color: black;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-xsmall-accent-var1 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  color: black;\n  border-radius: 16px;\n  border: none;\n  background-color: rgb(117, 189, 219);\n  width: 104px;\n  height: 24px;\n  font-family: Montserrat;\n  font-size: 12px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-xsmall-accent-var1:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: black;\n}\n.btn-xsmall-accent-var1:not(:disabled):active {\n  border: 2px solid #9dd0e6;\n  color: black;\n}\n.btn-xsmall-accent-var1:not(:disabled):focus-visible {\n  color: black;\n  outline: 2px solid #4daad0;\n  outline-offset: 3px;\n}\n.btn-xsmall-accent-var1:disabled {\n  color: black;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-xsmall-negative-var1 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  color: white;\n  border-radius: 16px;\n  border: none;\n  background-color: rgb(148, 9, 1);\n  width: 104px;\n  height: 24px;\n  font-family: Montserrat;\n  font-size: 12px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-xsmall-negative-var1:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: white;\n}\n.btn-xsmall-negative-var1:not(:disabled):active {\n  border: 2px solid #610601;\n  color: white;\n}\n.btn-xsmall-negative-var1:not(:disabled):focus-visible {\n  color: white;\n  outline: 2px solid #610601;\n  outline-offset: 3px;\n}\n.btn-xsmall-negative-var1:disabled {\n  color: white;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-xsmall-secondary-var1 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  color: black;\n  border-radius: 16px;\n  border: none;\n  background-color: rgb(215, 215, 215);\n  width: 104px;\n  height: 24px;\n  font-family: Montserrat;\n  font-size: 12px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-xsmall-secondary-var1:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: black;\n}\n.btn-xsmall-secondary-var1:not(:disabled):active {\n  border: 2px solid #f1f1f1;\n  color: black;\n}\n.btn-xsmall-secondary-var1:not(:disabled):focus-visible {\n  color: black;\n  outline: 2px solid #bebebe;\n  outline-offset: 3px;\n}\n.btn-xsmall-secondary-var1:disabled {\n  color: black;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-xsmall-secondary-var2 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  color: white;\n  border-radius: 16px;\n  border: 2px solid rgb(32, 32, 32);\n  background-color: rgb(0, 0, 0);\n  width: 104px;\n  height: 24px;\n  font-family: Montserrat;\n  font-size: 12px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-xsmall-secondary-var2:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: white;\n}\n.btn-xsmall-secondary-var2:not(:disabled):active {\n  border: 2px solid #070707;\n  color: white;\n}\n.btn-xsmall-secondary-var2:not(:disabled):focus-visible {\n  color: white;\n  outline: 2px solid black;\n  outline-offset: 3px;\n}\n.btn-xsmall-secondary-var2:disabled {\n  color: white;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-xsmall-static-var1 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  color: black;\n  border-radius: 16px;\n  border: none;\n  background-color: rgb(255, 255, 255);\n  width: 104px;\n  height: 24px;\n  font-family: Montserrat;\n  font-size: 12px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-xsmall-static-var1:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: black;\n}\n.btn-xsmall-static-var1:not(:disabled):active {\n  border: 2px solid white;\n  color: black;\n}\n.btn-xsmall-static-var1:not(:disabled):focus-visible {\n  color: black;\n  outline: 2px solid #e6e6e6;\n  outline-offset: 3px;\n}\n.btn-xsmall-static-var1:disabled {\n  color: black;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-xsmall-static-var2 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  color: white;\n  border-radius: 16px;\n  border: none;\n  background-color: rgb(0, 0, 0);\n  width: 104px;\n  height: 24px;\n  font-family: Montserrat;\n  font-size: 12px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-xsmall-static-var2:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: white;\n}\n.btn-xsmall-static-var2:not(:disabled):active {\n  border: 2px solid black;\n  color: white;\n}\n.btn-xsmall-static-var2:not(:disabled):focus-visible {\n  color: white;\n  outline: 2px solid black;\n  outline-offset: 3px;\n}\n.btn-xsmall-static-var2:disabled {\n  color: white;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-xsmall-link-var1 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  color: black;\n  border-radius: 16px;\n  border: none;\n  background-color: transparent;\n  width: 104px;\n  height: 24px;\n  font-family: Montserrat;\n  font-size: 12px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-xsmall-link-var1:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: black;\n}\n.btn-xsmall-link-var1:not(:disabled):active {\n  border: 2px solid black;\n  color: black;\n}\n.btn-xsmall-link-var1:not(:disabled):focus-visible {\n  color: black;\n  outline: 2px solid black;\n  outline-offset: 3px;\n}\n.btn-xsmall-link-var1:disabled {\n  color: black;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-xsmall-hico-var1 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  color: black;\n  border-radius: 16px;\n  border: none;\n  background-color: rgb(58, 220, 255);\n  width: 104px;\n  height: 24px;\n  font-family: Montserrat;\n  font-size: 12px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-xsmall-hico-var1:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: black;\n}\n.btn-xsmall-hico-var1:not(:disabled):active {\n  border: 2px solid #6de5ff;\n  color: black;\n}\n.btn-xsmall-hico-var1:not(:disabled):focus-visible {\n  color: black;\n  outline: 2px solid #07d3ff;\n  outline-offset: 3px;\n}\n.btn-xsmall-hico-var1:disabled {\n  color: black;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-small-primary-var1 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  color: black;\n  border-radius: 16px;\n  border: none;\n  background-color: rgb(6, 149, 208);\n  width: 104px;\n  height: 40px;\n  font-family: Montserrat;\n  font-size: 14px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-small-primary-var1:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: black;\n}\n.btn-small-primary-var1:not(:disabled):active {\n  border: 2px solid #11b5f8;\n  color: black;\n}\n.btn-small-primary-var1:not(:disabled):focus-visible {\n  color: black;\n  outline: 2px solid #05719e;\n  outline-offset: 3px;\n}\n.btn-small-primary-var1:disabled {\n  color: black;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-small-primary-var2 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  color: black;\n  border-radius: 16px;\n  border: 2px solid rgb(6, 149, 208);\n  background-color: rgb(255, 255, 255);\n  width: 104px;\n  height: 40px;\n  font-family: Montserrat;\n  font-size: 14px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-small-primary-var2:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: black;\n}\n.btn-small-primary-var2:not(:disabled):active {\n  border: 2px solid #11b5f8;\n  color: black;\n}\n.btn-small-primary-var2:not(:disabled):focus-visible {\n  color: black;\n  outline: 2px solid #e6e6e6;\n  outline-offset: 3px;\n}\n.btn-small-primary-var2:disabled {\n  color: black;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-small-primary-var3 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  color: black;\n  border-radius: 16px;\n  border: 2px solid rgb(6, 149, 208);\n  background-color: rgb(238, 250, 254);\n  width: 104px;\n  height: 40px;\n  font-family: Montserrat;\n  font-size: 14px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-small-primary-var3:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: black;\n}\n.btn-small-primary-var3:not(:disabled):active {\n  border: 2px solid #11b5f8;\n  color: black;\n}\n.btn-small-primary-var3:not(:disabled):focus-visible {\n  color: black;\n  outline: 2px solid #beecfb;\n  outline-offset: 3px;\n}\n.btn-small-primary-var3:disabled {\n  color: black;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-small-accent-var1 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  color: black;\n  border-radius: 16px;\n  border: none;\n  background-color: rgb(117, 189, 219);\n  width: 104px;\n  height: 40px;\n  font-family: Montserrat;\n  font-size: 14px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-small-accent-var1:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: black;\n}\n.btn-small-accent-var1:not(:disabled):active {\n  border: 2px solid #9dd0e6;\n  color: black;\n}\n.btn-small-accent-var1:not(:disabled):focus-visible {\n  color: black;\n  outline: 2px solid #4daad0;\n  outline-offset: 3px;\n}\n.btn-small-accent-var1:disabled {\n  color: black;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-small-negative-var1 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  color: white;\n  border-radius: 16px;\n  border: none;\n  background-color: rgb(148, 9, 1);\n  width: 104px;\n  height: 40px;\n  font-family: Montserrat;\n  font-size: 14px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-small-negative-var1:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: white;\n}\n.btn-small-negative-var1:not(:disabled):active {\n  border: 2px solid #610601;\n  color: white;\n}\n.btn-small-negative-var1:not(:disabled):focus-visible {\n  color: white;\n  outline: 2px solid #610601;\n  outline-offset: 3px;\n}\n.btn-small-negative-var1:disabled {\n  color: white;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-small-secondary-var1 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  color: black;\n  border-radius: 16px;\n  border: none;\n  background-color: rgb(215, 215, 215);\n  width: 104px;\n  height: 40px;\n  font-family: Montserrat;\n  font-size: 14px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-small-secondary-var1:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: black;\n}\n.btn-small-secondary-var1:not(:disabled):active {\n  border: 2px solid #f1f1f1;\n  color: black;\n}\n.btn-small-secondary-var1:not(:disabled):focus-visible {\n  color: black;\n  outline: 2px solid #bebebe;\n  outline-offset: 3px;\n}\n.btn-small-secondary-var1:disabled {\n  color: black;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-small-secondary-var2 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  color: white;\n  border-radius: 16px;\n  border: 2px solid rgb(32, 32, 32);\n  background-color: rgb(0, 0, 0);\n  width: 104px;\n  height: 40px;\n  font-family: Montserrat;\n  font-size: 14px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-small-secondary-var2:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: white;\n}\n.btn-small-secondary-var2:not(:disabled):active {\n  border: 2px solid #070707;\n  color: white;\n}\n.btn-small-secondary-var2:not(:disabled):focus-visible {\n  color: white;\n  outline: 2px solid black;\n  outline-offset: 3px;\n}\n.btn-small-secondary-var2:disabled {\n  color: white;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-small-static-var1 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  color: black;\n  border-radius: 16px;\n  border: none;\n  background-color: rgb(255, 255, 255);\n  width: 104px;\n  height: 40px;\n  font-family: Montserrat;\n  font-size: 14px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-small-static-var1:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: black;\n}\n.btn-small-static-var1:not(:disabled):active {\n  border: 2px solid white;\n  color: black;\n}\n.btn-small-static-var1:not(:disabled):focus-visible {\n  color: black;\n  outline: 2px solid #e6e6e6;\n  outline-offset: 3px;\n}\n.btn-small-static-var1:disabled {\n  color: black;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-small-static-var2 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  color: white;\n  border-radius: 16px;\n  border: none;\n  background-color: rgb(0, 0, 0);\n  width: 104px;\n  height: 40px;\n  font-family: Montserrat;\n  font-size: 14px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-small-static-var2:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: white;\n}\n.btn-small-static-var2:not(:disabled):active {\n  border: 2px solid black;\n  color: white;\n}\n.btn-small-static-var2:not(:disabled):focus-visible {\n  color: white;\n  outline: 2px solid black;\n  outline-offset: 3px;\n}\n.btn-small-static-var2:disabled {\n  color: white;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-small-link-var1 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  color: black;\n  border-radius: 16px;\n  border: none;\n  background-color: transparent;\n  width: 104px;\n  height: 40px;\n  font-family: Montserrat;\n  font-size: 14px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-small-link-var1:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: black;\n}\n.btn-small-link-var1:not(:disabled):active {\n  border: 2px solid black;\n  color: black;\n}\n.btn-small-link-var1:not(:disabled):focus-visible {\n  color: black;\n  outline: 2px solid black;\n  outline-offset: 3px;\n}\n.btn-small-link-var1:disabled {\n  color: black;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-small-hico-var1 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  color: black;\n  border-radius: 16px;\n  border: none;\n  background-color: rgb(58, 220, 255);\n  width: 104px;\n  height: 40px;\n  font-family: Montserrat;\n  font-size: 14px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-small-hico-var1:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: black;\n}\n.btn-small-hico-var1:not(:disabled):active {\n  border: 2px solid #6de5ff;\n  color: black;\n}\n.btn-small-hico-var1:not(:disabled):focus-visible {\n  color: black;\n  outline: 2px solid #07d3ff;\n  outline-offset: 3px;\n}\n.btn-small-hico-var1:disabled {\n  color: black;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-medium-primary-var1 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  color: black;\n  border-radius: 16px;\n  border: none;\n  background-color: rgb(6, 149, 208);\n  width: 136px;\n  height: 40px;\n  font-family: Montserrat;\n  font-size: 16px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-medium-primary-var1:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: black;\n}\n.btn-medium-primary-var1:not(:disabled):active {\n  border: 2px solid #11b5f8;\n  color: black;\n}\n.btn-medium-primary-var1:not(:disabled):focus-visible {\n  color: black;\n  outline: 2px solid #05719e;\n  outline-offset: 3px;\n}\n.btn-medium-primary-var1:disabled {\n  color: black;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-medium-primary-var2 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  color: black;\n  border-radius: 16px;\n  border: 2px solid rgb(6, 149, 208);\n  background-color: rgb(255, 255, 255);\n  width: 136px;\n  height: 40px;\n  font-family: Montserrat;\n  font-size: 16px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-medium-primary-var2:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: black;\n}\n.btn-medium-primary-var2:not(:disabled):active {\n  border: 2px solid #11b5f8;\n  color: black;\n}\n.btn-medium-primary-var2:not(:disabled):focus-visible {\n  color: black;\n  outline: 2px solid #e6e6e6;\n  outline-offset: 3px;\n}\n.btn-medium-primary-var2:disabled {\n  color: black;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-medium-primary-var3 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  color: black;\n  border-radius: 16px;\n  border: 2px solid rgb(6, 149, 208);\n  background-color: rgb(238, 250, 254);\n  width: 136px;\n  height: 40px;\n  font-family: Montserrat;\n  font-size: 16px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-medium-primary-var3:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: black;\n}\n.btn-medium-primary-var3:not(:disabled):active {\n  border: 2px solid #11b5f8;\n  color: black;\n}\n.btn-medium-primary-var3:not(:disabled):focus-visible {\n  color: black;\n  outline: 2px solid #beecfb;\n  outline-offset: 3px;\n}\n.btn-medium-primary-var3:disabled {\n  color: black;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-medium-accent-var1 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  color: black;\n  border-radius: 16px;\n  border: none;\n  background-color: rgb(117, 189, 219);\n  width: 136px;\n  height: 40px;\n  font-family: Montserrat;\n  font-size: 16px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-medium-accent-var1:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: black;\n}\n.btn-medium-accent-var1:not(:disabled):active {\n  border: 2px solid #9dd0e6;\n  color: black;\n}\n.btn-medium-accent-var1:not(:disabled):focus-visible {\n  color: black;\n  outline: 2px solid #4daad0;\n  outline-offset: 3px;\n}\n.btn-medium-accent-var1:disabled {\n  color: black;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-medium-negative-var1 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  color: white;\n  border-radius: 16px;\n  border: none;\n  background-color: rgb(148, 9, 1);\n  width: 136px;\n  height: 40px;\n  font-family: Montserrat;\n  font-size: 16px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-medium-negative-var1:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: white;\n}\n.btn-medium-negative-var1:not(:disabled):active {\n  border: 2px solid #610601;\n  color: white;\n}\n.btn-medium-negative-var1:not(:disabled):focus-visible {\n  color: white;\n  outline: 2px solid #610601;\n  outline-offset: 3px;\n}\n.btn-medium-negative-var1:disabled {\n  color: white;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-medium-secondary-var1 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  color: black;\n  border-radius: 16px;\n  border: none;\n  background-color: rgb(215, 215, 215);\n  width: 136px;\n  height: 40px;\n  font-family: Montserrat;\n  font-size: 16px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-medium-secondary-var1:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: black;\n}\n.btn-medium-secondary-var1:not(:disabled):active {\n  border: 2px solid #f1f1f1;\n  color: black;\n}\n.btn-medium-secondary-var1:not(:disabled):focus-visible {\n  color: black;\n  outline: 2px solid #bebebe;\n  outline-offset: 3px;\n}\n.btn-medium-secondary-var1:disabled {\n  color: black;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-medium-secondary-var2 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  color: white;\n  border-radius: 16px;\n  border: 2px solid rgb(32, 32, 32);\n  background-color: rgb(0, 0, 0);\n  width: 136px;\n  height: 40px;\n  font-family: Montserrat;\n  font-size: 16px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-medium-secondary-var2:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: white;\n}\n.btn-medium-secondary-var2:not(:disabled):active {\n  border: 2px solid #070707;\n  color: white;\n}\n.btn-medium-secondary-var2:not(:disabled):focus-visible {\n  color: white;\n  outline: 2px solid black;\n  outline-offset: 3px;\n}\n.btn-medium-secondary-var2:disabled {\n  color: white;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-medium-static-var1 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  color: black;\n  border-radius: 16px;\n  border: none;\n  background-color: rgb(255, 255, 255);\n  width: 136px;\n  height: 40px;\n  font-family: Montserrat;\n  font-size: 16px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-medium-static-var1:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: black;\n}\n.btn-medium-static-var1:not(:disabled):active {\n  border: 2px solid white;\n  color: black;\n}\n.btn-medium-static-var1:not(:disabled):focus-visible {\n  color: black;\n  outline: 2px solid #e6e6e6;\n  outline-offset: 3px;\n}\n.btn-medium-static-var1:disabled {\n  color: black;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-medium-static-var2 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  color: white;\n  border-radius: 16px;\n  border: none;\n  background-color: rgb(0, 0, 0);\n  width: 136px;\n  height: 40px;\n  font-family: Montserrat;\n  font-size: 16px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-medium-static-var2:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: white;\n}\n.btn-medium-static-var2:not(:disabled):active {\n  border: 2px solid black;\n  color: white;\n}\n.btn-medium-static-var2:not(:disabled):focus-visible {\n  color: white;\n  outline: 2px solid black;\n  outline-offset: 3px;\n}\n.btn-medium-static-var2:disabled {\n  color: white;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-medium-link-var1 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  color: black;\n  border-radius: 16px;\n  border: none;\n  background-color: transparent;\n  width: 136px;\n  height: 40px;\n  font-family: Montserrat;\n  font-size: 16px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-medium-link-var1:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: black;\n}\n.btn-medium-link-var1:not(:disabled):active {\n  border: 2px solid black;\n  color: black;\n}\n.btn-medium-link-var1:not(:disabled):focus-visible {\n  color: black;\n  outline: 2px solid black;\n  outline-offset: 3px;\n}\n.btn-medium-link-var1:disabled {\n  color: black;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-medium-hico-var1 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  color: black;\n  border-radius: 16px;\n  border: none;\n  background-color: rgb(58, 220, 255);\n  width: 136px;\n  height: 40px;\n  font-family: Montserrat;\n  font-size: 16px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-medium-hico-var1:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: black;\n}\n.btn-medium-hico-var1:not(:disabled):active {\n  border: 2px solid #6de5ff;\n  color: black;\n}\n.btn-medium-hico-var1:not(:disabled):focus-visible {\n  color: black;\n  outline: 2px solid #07d3ff;\n  outline-offset: 3px;\n}\n.btn-medium-hico-var1:disabled {\n  color: black;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-large-primary-var1 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  color: black;\n  border-radius: 16px;\n  border: none;\n  background-color: rgb(6, 149, 208);\n  width: 240px;\n  height: 40px;\n  font-family: Montserrat;\n  font-size: 18px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-large-primary-var1:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: black;\n}\n.btn-large-primary-var1:not(:disabled):active {\n  border: 2px solid #11b5f8;\n  color: black;\n}\n.btn-large-primary-var1:not(:disabled):focus-visible {\n  color: black;\n  outline: 2px solid #05719e;\n  outline-offset: 3px;\n}\n.btn-large-primary-var1:disabled {\n  color: black;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-large-primary-var2 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  color: black;\n  border-radius: 16px;\n  border: 2px solid rgb(6, 149, 208);\n  background-color: rgb(255, 255, 255);\n  width: 240px;\n  height: 40px;\n  font-family: Montserrat;\n  font-size: 18px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-large-primary-var2:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: black;\n}\n.btn-large-primary-var2:not(:disabled):active {\n  border: 2px solid #11b5f8;\n  color: black;\n}\n.btn-large-primary-var2:not(:disabled):focus-visible {\n  color: black;\n  outline: 2px solid #e6e6e6;\n  outline-offset: 3px;\n}\n.btn-large-primary-var2:disabled {\n  color: black;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-large-primary-var3 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  color: black;\n  border-radius: 16px;\n  border: 2px solid rgb(6, 149, 208);\n  background-color: rgb(238, 250, 254);\n  width: 240px;\n  height: 40px;\n  font-family: Montserrat;\n  font-size: 18px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-large-primary-var3:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: black;\n}\n.btn-large-primary-var3:not(:disabled):active {\n  border: 2px solid #11b5f8;\n  color: black;\n}\n.btn-large-primary-var3:not(:disabled):focus-visible {\n  color: black;\n  outline: 2px solid #beecfb;\n  outline-offset: 3px;\n}\n.btn-large-primary-var3:disabled {\n  color: black;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-large-accent-var1 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  color: black;\n  border-radius: 16px;\n  border: none;\n  background-color: rgb(117, 189, 219);\n  width: 240px;\n  height: 40px;\n  font-family: Montserrat;\n  font-size: 18px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-large-accent-var1:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: black;\n}\n.btn-large-accent-var1:not(:disabled):active {\n  border: 2px solid #9dd0e6;\n  color: black;\n}\n.btn-large-accent-var1:not(:disabled):focus-visible {\n  color: black;\n  outline: 2px solid #4daad0;\n  outline-offset: 3px;\n}\n.btn-large-accent-var1:disabled {\n  color: black;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-large-negative-var1 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  color: white;\n  border-radius: 16px;\n  border: none;\n  background-color: rgb(148, 9, 1);\n  width: 240px;\n  height: 40px;\n  font-family: Montserrat;\n  font-size: 18px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-large-negative-var1:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: white;\n}\n.btn-large-negative-var1:not(:disabled):active {\n  border: 2px solid #610601;\n  color: white;\n}\n.btn-large-negative-var1:not(:disabled):focus-visible {\n  color: white;\n  outline: 2px solid #610601;\n  outline-offset: 3px;\n}\n.btn-large-negative-var1:disabled {\n  color: white;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-large-secondary-var1 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  color: black;\n  border-radius: 16px;\n  border: none;\n  background-color: rgb(215, 215, 215);\n  width: 240px;\n  height: 40px;\n  font-family: Montserrat;\n  font-size: 18px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-large-secondary-var1:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: black;\n}\n.btn-large-secondary-var1:not(:disabled):active {\n  border: 2px solid #f1f1f1;\n  color: black;\n}\n.btn-large-secondary-var1:not(:disabled):focus-visible {\n  color: black;\n  outline: 2px solid #bebebe;\n  outline-offset: 3px;\n}\n.btn-large-secondary-var1:disabled {\n  color: black;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-large-secondary-var2 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  color: white;\n  border-radius: 16px;\n  border: 2px solid rgb(32, 32, 32);\n  background-color: rgb(0, 0, 0);\n  width: 240px;\n  height: 40px;\n  font-family: Montserrat;\n  font-size: 18px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-large-secondary-var2:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: white;\n}\n.btn-large-secondary-var2:not(:disabled):active {\n  border: 2px solid #070707;\n  color: white;\n}\n.btn-large-secondary-var2:not(:disabled):focus-visible {\n  color: white;\n  outline: 2px solid black;\n  outline-offset: 3px;\n}\n.btn-large-secondary-var2:disabled {\n  color: white;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-large-static-var1 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  color: black;\n  border-radius: 16px;\n  border: none;\n  background-color: rgb(255, 255, 255);\n  width: 240px;\n  height: 40px;\n  font-family: Montserrat;\n  font-size: 18px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-large-static-var1:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: black;\n}\n.btn-large-static-var1:not(:disabled):active {\n  border: 2px solid white;\n  color: black;\n}\n.btn-large-static-var1:not(:disabled):focus-visible {\n  color: black;\n  outline: 2px solid #e6e6e6;\n  outline-offset: 3px;\n}\n.btn-large-static-var1:disabled {\n  color: black;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-large-static-var2 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  color: white;\n  border-radius: 16px;\n  border: none;\n  background-color: rgb(0, 0, 0);\n  width: 240px;\n  height: 40px;\n  font-family: Montserrat;\n  font-size: 18px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-large-static-var2:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: white;\n}\n.btn-large-static-var2:not(:disabled):active {\n  border: 2px solid black;\n  color: white;\n}\n.btn-large-static-var2:not(:disabled):focus-visible {\n  color: white;\n  outline: 2px solid black;\n  outline-offset: 3px;\n}\n.btn-large-static-var2:disabled {\n  color: white;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-large-link-var1 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  color: black;\n  border-radius: 16px;\n  border: none;\n  background-color: transparent;\n  width: 240px;\n  height: 40px;\n  font-family: Montserrat;\n  font-size: 18px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-large-link-var1:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: black;\n}\n.btn-large-link-var1:not(:disabled):active {\n  border: 2px solid black;\n  color: black;\n}\n.btn-large-link-var1:not(:disabled):focus-visible {\n  color: black;\n  outline: 2px solid black;\n  outline-offset: 3px;\n}\n.btn-large-link-var1:disabled {\n  color: black;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-large-hico-var1 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  color: black;\n  border-radius: 16px;\n  border: none;\n  background-color: rgb(58, 220, 255);\n  width: 240px;\n  height: 40px;\n  font-family: Montserrat;\n  font-size: 18px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-large-hico-var1:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: black;\n}\n.btn-large-hico-var1:not(:disabled):active {\n  border: 2px solid #6de5ff;\n  color: black;\n}\n.btn-large-hico-var1:not(:disabled):focus-visible {\n  color: black;\n  outline: 2px solid #07d3ff;\n  outline-offset: 3px;\n}\n.btn-large-hico-var1:disabled {\n  color: black;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-circle-primary-var1 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-radius: 50%;\n  border: none;\n  background-color: rgb(6, 149, 208);\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  width: 24px;\n  font-family: Montserrat;\n  font-size: 16px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 4px;\n}\n.btn-circle-primary-var1:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: black;\n}\n.btn-circle-primary-var1:not(:disabled):active {\n  border: 2px solid #11b5f8;\n  color: black;\n}\n.btn-circle-primary-var1:not(:disabled):focus-visible {\n  color: black;\n  outline: 2px solid #05719e;\n  outline-offset: 3px;\n}\n.btn-circle-primary-var1:disabled {\n  color: black;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-circle-primary-var2 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-radius: 50%;\n  border: 2px solid rgb(6, 149, 208);\n  background-color: rgb(255, 255, 255);\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  width: 24px;\n  font-family: Montserrat;\n  font-size: 16px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 4px;\n}\n.btn-circle-primary-var2:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: black;\n}\n.btn-circle-primary-var2:not(:disabled):active {\n  border: 2px solid #11b5f8;\n  color: black;\n}\n.btn-circle-primary-var2:not(:disabled):focus-visible {\n  color: black;\n  outline: 2px solid #e6e6e6;\n  outline-offset: 3px;\n}\n.btn-circle-primary-var2:disabled {\n  color: black;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-circle-primary-var3 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-radius: 50%;\n  border: 2px solid rgb(6, 149, 208);\n  background-color: rgb(238, 250, 254);\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  width: 24px;\n  font-family: Montserrat;\n  font-size: 16px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 4px;\n}\n.btn-circle-primary-var3:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: black;\n}\n.btn-circle-primary-var3:not(:disabled):active {\n  border: 2px solid #11b5f8;\n  color: black;\n}\n.btn-circle-primary-var3:not(:disabled):focus-visible {\n  color: black;\n  outline: 2px solid #beecfb;\n  outline-offset: 3px;\n}\n.btn-circle-primary-var3:disabled {\n  color: black;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-circle-accent-var1 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-radius: 50%;\n  border: none;\n  background-color: rgb(117, 189, 219);\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  width: 24px;\n  font-family: Montserrat;\n  font-size: 16px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 4px;\n}\n.btn-circle-accent-var1:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: black;\n}\n.btn-circle-accent-var1:not(:disabled):active {\n  border: 2px solid #9dd0e6;\n  color: black;\n}\n.btn-circle-accent-var1:not(:disabled):focus-visible {\n  color: black;\n  outline: 2px solid #4daad0;\n  outline-offset: 3px;\n}\n.btn-circle-accent-var1:disabled {\n  color: black;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-circle-negative-var1 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-radius: 50%;\n  border: none;\n  background-color: rgb(148, 9, 1);\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  width: 24px;\n  font-family: Montserrat;\n  font-size: 16px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 4px;\n}\n.btn-circle-negative-var1:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: white;\n}\n.btn-circle-negative-var1:not(:disabled):active {\n  border: 2px solid #610601;\n  color: white;\n}\n.btn-circle-negative-var1:not(:disabled):focus-visible {\n  color: white;\n  outline: 2px solid #610601;\n  outline-offset: 3px;\n}\n.btn-circle-negative-var1:disabled {\n  color: white;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-circle-secondary-var1 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-radius: 50%;\n  border: none;\n  background-color: rgb(215, 215, 215);\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  width: 24px;\n  font-family: Montserrat;\n  font-size: 16px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 4px;\n}\n.btn-circle-secondary-var1:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: black;\n}\n.btn-circle-secondary-var1:not(:disabled):active {\n  border: 2px solid #f1f1f1;\n  color: black;\n}\n.btn-circle-secondary-var1:not(:disabled):focus-visible {\n  color: black;\n  outline: 2px solid #bebebe;\n  outline-offset: 3px;\n}\n.btn-circle-secondary-var1:disabled {\n  color: black;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-circle-secondary-var2 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-radius: 50%;\n  border: 2px solid rgb(32, 32, 32);\n  background-color: rgb(0, 0, 0);\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  width: 24px;\n  font-family: Montserrat;\n  font-size: 16px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 4px;\n}\n.btn-circle-secondary-var2:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: white;\n}\n.btn-circle-secondary-var2:not(:disabled):active {\n  border: 2px solid #070707;\n  color: white;\n}\n.btn-circle-secondary-var2:not(:disabled):focus-visible {\n  color: white;\n  outline: 2px solid black;\n  outline-offset: 3px;\n}\n.btn-circle-secondary-var2:disabled {\n  color: white;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-circle-static-var1 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-radius: 50%;\n  border: none;\n  background-color: rgb(255, 255, 255);\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  width: 24px;\n  font-family: Montserrat;\n  font-size: 16px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 4px;\n}\n.btn-circle-static-var1:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: black;\n}\n.btn-circle-static-var1:not(:disabled):active {\n  border: 2px solid white;\n  color: black;\n}\n.btn-circle-static-var1:not(:disabled):focus-visible {\n  color: black;\n  outline: 2px solid #e6e6e6;\n  outline-offset: 3px;\n}\n.btn-circle-static-var1:disabled {\n  color: black;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-circle-static-var2 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-radius: 50%;\n  border: none;\n  background-color: rgb(0, 0, 0);\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  width: 24px;\n  font-family: Montserrat;\n  font-size: 16px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 4px;\n}\n.btn-circle-static-var2:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: white;\n}\n.btn-circle-static-var2:not(:disabled):active {\n  border: 2px solid black;\n  color: white;\n}\n.btn-circle-static-var2:not(:disabled):focus-visible {\n  color: white;\n  outline: 2px solid black;\n  outline-offset: 3px;\n}\n.btn-circle-static-var2:disabled {\n  color: white;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-circle-link-var1 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-radius: 50%;\n  border: none;\n  background-color: transparent;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  width: 24px;\n  font-family: Montserrat;\n  font-size: 16px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 4px;\n}\n.btn-circle-link-var1:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: black;\n}\n.btn-circle-link-var1:not(:disabled):active {\n  border: 2px solid black;\n  color: black;\n}\n.btn-circle-link-var1:not(:disabled):focus-visible {\n  color: black;\n  outline: 2px solid black;\n  outline-offset: 3px;\n}\n.btn-circle-link-var1:disabled {\n  color: black;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-circle-hico-var1 {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-radius: 50%;\n  border: none;\n  background-color: rgb(58, 220, 255);\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  width: 24px;\n  font-family: Montserrat;\n  font-size: 16px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 4px;\n}\n.btn-circle-hico-var1:not(:disabled):hover {\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);\n  color: black;\n}\n.btn-circle-hico-var1:not(:disabled):active {\n  border: 2px solid #6de5ff;\n  color: black;\n}\n.btn-circle-hico-var1:not(:disabled):focus-visible {\n  color: black;\n  outline: 2px solid #07d3ff;\n  outline-offset: 3px;\n}\n.btn-circle-hico-var1:disabled {\n  color: black;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn-icon {\n  border: none;\n  background: none;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-radius: 50%;\n  border: none;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  width: 24px;\n  background-color: transparent;\n  font-family: Montserrat;\n  font-size: 16px;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 4px;\n}\n.btn-icon:disabled > * {\n  opacity: 0.5;\n}\n.checkbox_label_light {\n  font-size: 16px;\n  font-family: Montserrat;\n  display: flex;\n  align-items: center;\n  flex-direction: row-reverse;\n  color: rgb(0, 0, 0);\n}\n.checkbox_label_light:hover {\n  cursor: pointer;\n  text-shadow: 0px 0px 1px rgb(6, 149, 208);\n}\n.chkbox_light {\n  border: 4px solid rgb(101, 101, 101);\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  width: 32px;\n  height: 32px;\n  margin-right: 4px;\n  border-radius: 8px;\n  cursor: pointer;\n  border-color: none;\n}\n.chkbox_light:not(:checked) {\n  background-color: rgb(255, 255, 255);\n  z-index: 1;\n}\n.chkbox_light:checked {\n  background: rgb(6, 149, 208);\n  width: 32px;\n  height: 32px;\n}\n.chkbox_light:checked::before {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  border: none;\n}\n.chkbox_light:checked::after {\n  content: url("/widget-svg/icon6-0.7.39.svg");\n  position: absolute;\n  top: 25%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 16px;\n  height: 16px;\n}\n.chkbox_light::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  line-height: 32px;\n  border-radius: 8px;\n  text-align: center;\n  border: none;\n  outline: none;\n}\n.chkbox_light::after {\n  content: "";\n  background: none;\n  position: absolute;\n  top: -2px;\n  left: -2px;\n  right: -2px;\n  bottom: -2px;\n  font-size: 20px;\n  line-height: 32px;\n  border-radius: 8px;\n  border: none;\n  text-align: center;\n  outline: rgb(6, 149, 208) auto 0px;\n}\n.chkbox_light:hover:not(:disabled)::before {\n  color: rgba(6, 149, 208, 0.7);\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 0;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: none;\n  background-color: rgba(6, 149, 208, 0.7);\n}\n.chkbox_light:hover:not(:disabled):not(:checked)::after {\n  z-index: 1;\n  background-color: rgb(255, 255, 255);\n  border: rgb(6, 149, 208) auto 1px;\n  outline: rgb(6, 149, 208) auto 1px;\n}\n.chkbox_light:hover:not(:disabled):checked::after {\n  z-index: 1;\n  background-color: rgb(6, 149, 208);\n  border: none;\n}\n.chkbox_light:focus:not(:disabled):not(:checked)::after {\n  z-index: 1;\n  border: rgb(6, 149, 208) auto 1px;\n  outline: rgb(6, 149, 208) auto 1px;\n}\n.chkbox_light:focus:not(:disabled):checked::after {\n  z-index: 1;\n  background-color: rgb(6, 149, 208);\n  border: none;\n}\ninput[type=checkbox].chkbox_light {\n  cursor: pointer;\n  -webkit-appearance: none;\n  margin-right: 10px;\n  -moz-appearance: none;\n  appearance: none;\n  outline: 0;\n  height: 32px;\n  width: 32px;\n  border: 2px solid rgb(101, 101, 101);\n  color: rgb(0, 0, 0);\n}\ninput[type=checkbox].chkbox_light:disabled {\n  background-color: rgb(255, 255, 255);\n  border-color: rgb(229, 230, 230);\n  cursor: not-allowed;\n}\ninput[type=checkbox].chkbox_light:focus-visible {\n  border: 2px solid rgb(6, 149, 208);\n}\ninput[type=checkbox].chkbox_light:focus-visible::-moz-focus-inner {\n  border: 0;\n}\ninput[type=checkbox].chkbox_light:focus-visible:not(:checked):not(:disabled)::before {\n  content: "";\n  position: absolute;\n  border: none;\n}\n.checkbox_label_dark {\n  font-size: 16px;\n  font-family: Montserrat;\n  display: flex;\n  align-items: center;\n  flex-direction: row-reverse;\n  color: rgb(246, 246, 247);\n}\n.checkbox_label_dark:hover {\n  cursor: pointer;\n  text-shadow: 0px 0px 1px rgb(117, 189, 219);\n}\n.chkbox_dark {\n  border: 4px solid rgb(215, 215, 215);\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  width: 32px;\n  height: 32px;\n  margin-right: 4px;\n  border-radius: 8px;\n  cursor: pointer;\n  border-color: none;\n}\n.chkbox_dark:not(:checked) {\n  background-color: rgb(64, 64, 64);\n  z-index: 1;\n}\n.chkbox_dark:checked {\n  background: rgb(117, 189, 219);\n  width: 32px;\n  height: 32px;\n}\n.chkbox_dark:checked::before {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  border: none;\n}\n.chkbox_dark:checked::after {\n  content: url("/widget-svg/icon6-0.7.39.svg");\n  position: absolute;\n  top: 25%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 16px;\n  height: 16px;\n}\n.chkbox_dark::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  line-height: 32px;\n  border-radius: 8px;\n  text-align: center;\n  border: none;\n  outline: none;\n}\n.chkbox_dark::after {\n  content: "";\n  background: none;\n  position: absolute;\n  top: -2px;\n  left: -2px;\n  right: -2px;\n  bottom: -2px;\n  font-size: 20px;\n  line-height: 32px;\n  border-radius: 8px;\n  border: none;\n  text-align: center;\n  outline: rgb(117, 189, 219) auto 0px;\n}\n.chkbox_dark:hover:not(:disabled)::before {\n  color: rgba(117, 189, 219, 0.7);\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 0;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: none;\n  background-color: rgba(117, 189, 219, 0.7);\n}\n.chkbox_dark:hover:not(:disabled):not(:checked)::after {\n  z-index: 1;\n  background-color: rgb(64, 64, 64);\n  border: rgb(117, 189, 219) auto 1px;\n  outline: rgb(117, 189, 219) auto 1px;\n}\n.chkbox_dark:hover:not(:disabled):checked::after {\n  z-index: 1;\n  background-color: rgb(117, 189, 219);\n  border: none;\n}\n.chkbox_dark:focus:not(:disabled):not(:checked)::after {\n  z-index: 1;\n  border: rgb(117, 189, 219) auto 1px;\n  outline: rgb(117, 189, 219) auto 1px;\n}\n.chkbox_dark:focus:not(:disabled):checked::after {\n  z-index: 1;\n  background-color: rgb(117, 189, 219);\n  border: none;\n}\ninput[type=checkbox].chkbox_dark {\n  cursor: pointer;\n  -webkit-appearance: none;\n  margin-right: 10px;\n  -moz-appearance: none;\n  appearance: none;\n  outline: 0;\n  height: 32px;\n  width: 32px;\n  border: 2px solid rgb(215, 215, 215);\n  color: rgb(246, 246, 247);\n}\ninput[type=checkbox].chkbox_dark:disabled {\n  background-color: rgb(101, 101, 101);\n  border-color: rgb(32, 32, 32);\n  cursor: not-allowed;\n}\ninput[type=checkbox].chkbox_dark:focus-visible {\n  border: 2px solid rgb(117, 189, 219);\n}\ninput[type=checkbox].chkbox_dark:focus-visible::-moz-focus-inner {\n  border: 0;\n}\ninput[type=checkbox].chkbox_dark:focus-visible:not(:checked):not(:disabled)::before {\n  content: "";\n  position: absolute;\n  border: none;\n}\n.checkbox_label_high-contrast {\n  font-size: 16px;\n  font-family: Montserrat;\n  display: flex;\n  align-items: center;\n  flex-direction: row-reverse;\n  color: rgb(255, 255, 255);\n}\n.checkbox_label_high-contrast:hover {\n  cursor: pointer;\n  text-shadow: 0px 0px 1px rgb(58, 220, 255);\n}\n.chkbox_high-contrast {\n  border: 4px solid rgb(255, 255, 255);\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  width: 32px;\n  height: 32px;\n  margin-right: 4px;\n  border-radius: 8px;\n  cursor: pointer;\n  border-color: none;\n}\n.chkbox_high-contrast:not(:checked) {\n  background-color: rgb(0, 0, 0);\n  z-index: 1;\n}\n.chkbox_high-contrast:checked {\n  background: rgb(58, 220, 255);\n  width: 32px;\n  height: 32px;\n}\n.chkbox_high-contrast:checked::before {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  border: none;\n}\n.chkbox_high-contrast:checked::after {\n  content: url("/widget-svg/icon6-0.7.39.svg");\n  position: absolute;\n  top: 25%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 16px;\n  height: 16px;\n}\n.chkbox_high-contrast::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  line-height: 32px;\n  border-radius: 8px;\n  text-align: center;\n  border: none;\n  outline: none;\n}\n.chkbox_high-contrast::after {\n  content: "";\n  background: none;\n  position: absolute;\n  top: -2px;\n  left: -2px;\n  right: -2px;\n  bottom: -2px;\n  font-size: 20px;\n  line-height: 32px;\n  border-radius: 8px;\n  border: none;\n  text-align: center;\n  outline: rgb(58, 220, 255) auto 0px;\n}\n.chkbox_high-contrast:hover:not(:disabled)::before {\n  color: rgba(58, 220, 255, 0.7);\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 0;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: none;\n  background-color: rgba(58, 220, 255, 0.7);\n}\n.chkbox_high-contrast:hover:not(:disabled):not(:checked)::after {\n  z-index: 1;\n  background-color: rgb(0, 0, 0);\n  border: rgb(58, 220, 255) auto 1px;\n  outline: rgb(58, 220, 255) auto 1px;\n}\n.chkbox_high-contrast:hover:not(:disabled):checked::after {\n  z-index: 1;\n  background-color: rgb(58, 220, 255);\n  border: none;\n}\n.chkbox_high-contrast:focus:not(:disabled):not(:checked)::after {\n  z-index: 1;\n  border: rgb(58, 220, 255) auto 1px;\n  outline: rgb(58, 220, 255) auto 1px;\n}\n.chkbox_high-contrast:focus:not(:disabled):checked::after {\n  z-index: 1;\n  background-color: rgb(58, 220, 255);\n  border: none;\n}\ninput[type=checkbox].chkbox_high-contrast {\n  cursor: pointer;\n  -webkit-appearance: none;\n  margin-right: 10px;\n  -moz-appearance: none;\n  appearance: none;\n  outline: 0;\n  height: 32px;\n  width: 32px;\n  border: 2px solid rgb(255, 255, 255);\n  color: rgb(255, 255, 255);\n}\ninput[type=checkbox].chkbox_high-contrast:disabled {\n  background-color: rgb(0, 0, 0);\n  border-color: rgb(0, 0, 0);\n  cursor: not-allowed;\n}\ninput[type=checkbox].chkbox_high-contrast:focus-visible {\n  border: 2px solid rgb(58, 220, 255);\n}\ninput[type=checkbox].chkbox_high-contrast:focus-visible::-moz-focus-inner {\n  border: 0;\n}\ninput[type=checkbox].chkbox_high-contrast:focus-visible:not(:checked):not(:disabled)::before {\n  content: "";\n  position: absolute;\n  border: none;\n}\n.chkbox-label-container_row {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  font-size: 16px;\n  font-family: Montserrat;\n}\n.chkbox-label-container_column {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  font-size: 16px;\n  font-family: Montserrat;\n}\n.icon-primary__hover-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(1, 115, 163);\n}\n.icon-primary__hover-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(1, 115, 163);\n}\n.icon-primary__hover-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(1, 115, 163);\n}\n.icon-primary__hover-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(1, 115, 163);\n}\n.icon-accent__hover-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(58, 142, 177);\n}\n.icon-accent__hover-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(58, 142, 177);\n}\n.icon-accent__hover-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(58, 142, 177);\n}\n.icon-accent__hover-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(58, 142, 177);\n}\n.icon-highcontrast__hover-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(0, 159, 193);\n}\n.icon-highcontrast__hover-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(0, 159, 193);\n}\n.icon-highcontrast__hover-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(0, 159, 193);\n}\n.icon-highcontrast__hover-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(0, 159, 193);\n}\n.icon-quorum__blue__150-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(18, 90, 119);\n}\n.icon-quorum__blue__150-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(18, 90, 119);\n}\n.icon-quorum__blue__150-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(18, 90, 119);\n}\n.icon-quorum__blue__150-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(18, 90, 119);\n}\n.icon-quorum__blue__100-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(6, 149, 208);\n}\n.icon-quorum__blue__100-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(6, 149, 208);\n}\n.icon-quorum__blue__100-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(6, 149, 208);\n}\n.icon-quorum__blue__100-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(6, 149, 208);\n}\n.icon-quorum__blue__50-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(117, 189, 219);\n}\n.icon-quorum__blue__50-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(117, 189, 219);\n}\n.icon-quorum__blue__50-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(117, 189, 219);\n}\n.icon-quorum__blue__50-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(117, 189, 219);\n}\n.icon-quorum__blue__25-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(172, 209, 223);\n}\n.icon-quorum__blue__25-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(172, 209, 223);\n}\n.icon-quorum__blue__25-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(172, 209, 223);\n}\n.icon-quorum__blue__25-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(172, 209, 223);\n}\n.icon-quorum__blue__10-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(238, 250, 254);\n}\n.icon-quorum__blue__10-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(238, 250, 254);\n}\n.icon-quorum__blue__10-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(238, 250, 254);\n}\n.icon-quorum__blue__10-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(238, 250, 254);\n}\n.icon-neutral__black-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(0, 0, 0);\n}\n.icon-neutral__black-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(0, 0, 0);\n}\n.icon-neutral__black-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(0, 0, 0);\n}\n.icon-neutral__black-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(0, 0, 0);\n}\n.icon-neutral__grey__95-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(32, 32, 32);\n}\n.icon-neutral__grey__95-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(32, 32, 32);\n}\n.icon-neutral__grey__95-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(32, 32, 32);\n}\n.icon-neutral__grey__95-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(32, 32, 32);\n}\n.icon-neutral__grey__85-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(43, 43, 43);\n}\n.icon-neutral__grey__85-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(43, 43, 43);\n}\n.icon-neutral__grey__85-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(43, 43, 43);\n}\n.icon-neutral__grey__85-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(43, 43, 43);\n}\n.icon-neutral__grey__75-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(54, 54, 55);\n}\n.icon-neutral__grey__75-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(54, 54, 55);\n}\n.icon-neutral__grey__75-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(54, 54, 55);\n}\n.icon-neutral__grey__75-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(54, 54, 55);\n}\n.icon-neutral__grey__65-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(64, 64, 64);\n}\n.icon-neutral__grey__65-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(64, 64, 64);\n}\n.icon-neutral__grey__65-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(64, 64, 64);\n}\n.icon-neutral__grey__65-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(64, 64, 64);\n}\n.icon-neutral__grey__50-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(101, 101, 101);\n}\n.icon-neutral__grey__50-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(101, 101, 101);\n}\n.icon-neutral__grey__50-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(101, 101, 101);\n}\n.icon-neutral__grey__50-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(101, 101, 101);\n}\n.icon-neutral__grey__40-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(114, 114, 114);\n}\n.icon-neutral__grey__40-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(114, 114, 114);\n}\n.icon-neutral__grey__40-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(114, 114, 114);\n}\n.icon-neutral__grey__40-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(114, 114, 114);\n}\n.icon-neutral__grey__25-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(215, 215, 215);\n}\n.icon-neutral__grey__25-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(215, 215, 215);\n}\n.icon-neutral__grey__25-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(215, 215, 215);\n}\n.icon-neutral__grey__25-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(215, 215, 215);\n}\n.icon-neutral__grey__15-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(229, 230, 230);\n}\n.icon-neutral__grey__15-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(229, 230, 230);\n}\n.icon-neutral__grey__15-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(229, 230, 230);\n}\n.icon-neutral__grey__15-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(229, 230, 230);\n}\n.icon-neutral__grey__10-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(246, 246, 247);\n}\n.icon-neutral__grey__10-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(246, 246, 247);\n}\n.icon-neutral__grey__10-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(246, 246, 247);\n}\n.icon-neutral__grey__10-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(246, 246, 247);\n}\n.icon-neutral__white-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(255, 255, 255);\n}\n.icon-neutral__white-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(255, 255, 255);\n}\n.icon-neutral__white-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(255, 255, 255);\n}\n.icon-neutral__white-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(255, 255, 255);\n}\n.icon-text__neutral__black-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(0, 0, 0);\n}\n.icon-text__neutral__black-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(0, 0, 0);\n}\n.icon-text__neutral__black-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(0, 0, 0);\n}\n.icon-text__neutral__black-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(0, 0, 0);\n}\n.icon-text__neutral__grey__95-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(32, 32, 32);\n}\n.icon-text__neutral__grey__95-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(32, 32, 32);\n}\n.icon-text__neutral__grey__95-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(32, 32, 32);\n}\n.icon-text__neutral__grey__95-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(32, 32, 32);\n}\n.icon-text__neutral__grey__10-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(246, 246, 247);\n}\n.icon-text__neutral__grey__10-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(246, 246, 247);\n}\n.icon-text__neutral__grey__10-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(246, 246, 247);\n}\n.icon-text__neutral__grey__10-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(246, 246, 247);\n}\n.icon-text__neutral__white-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(255, 255, 255);\n}\n.icon-text__neutral__white-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(255, 255, 255);\n}\n.icon-text__neutral__white-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(255, 255, 255);\n}\n.icon-text__neutral__white-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(255, 255, 255);\n}\n.icon-text__hico__red-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(190, 11, 0);\n}\n.icon-text__hico__red-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(190, 11, 0);\n}\n.icon-text__hico__red-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(190, 11, 0);\n}\n.icon-text__hico__red-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(190, 11, 0);\n}\n.icon-text__hico__blue-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(58, 220, 255);\n}\n.icon-text__hico__blue-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(58, 220, 255);\n}\n.icon-text__hico__blue-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(58, 220, 255);\n}\n.icon-text__hico__blue-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(58, 220, 255);\n}\n.icon-text__hico__yellow-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(255, 230, 0);\n}\n.icon-text__hico__yellow-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(255, 230, 0);\n}\n.icon-text__hico__yellow-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(255, 230, 0);\n}\n.icon-text__hico__yellow-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(255, 230, 0);\n}\n.icon-text__hico__orange-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(255, 168, 0);\n}\n.icon-text__hico__orange-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(255, 168, 0);\n}\n.icon-text__hico__orange-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(255, 168, 0);\n}\n.icon-text__hico__orange-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(255, 168, 0);\n}\n.icon-text__hico__green-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(0, 255, 148);\n}\n.icon-text__hico__green-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(0, 255, 148);\n}\n.icon-text__hico__green-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(0, 255, 148);\n}\n.icon-text__hico__green-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(0, 255, 148);\n}\n.icon-text__hico__pink-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(254, 124, 217);\n}\n.icon-text__hico__pink-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(254, 124, 217);\n}\n.icon-text__hico__pink-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(254, 124, 217);\n}\n.icon-text__hico__pink-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(254, 124, 217);\n}\n.icon-text__hico__grey-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(229, 230, 230);\n}\n.icon-text__hico__grey-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(229, 230, 230);\n}\n.icon-text__hico__grey-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(229, 230, 230);\n}\n.icon-text__hico__grey-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(229, 230, 230);\n}\n.icon-text__dark__green-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(175, 254, 217);\n}\n.icon-text__dark__green-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(175, 254, 217);\n}\n.icon-text__dark__green-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(175, 254, 217);\n}\n.icon-text__dark__green-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(175, 254, 217);\n}\n.icon-text__dark__yellow-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(255, 244, 149);\n}\n.icon-text__dark__yellow-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(255, 244, 149);\n}\n.icon-text__dark__yellow-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(255, 244, 149);\n}\n.icon-text__dark__yellow-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(255, 244, 149);\n}\n.icon-text__dark__blue-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(172, 209, 223);\n}\n.icon-text__dark__blue-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(172, 209, 223);\n}\n.icon-text__dark__blue-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(172, 209, 223);\n}\n.icon-text__dark__blue-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(172, 209, 223);\n}\n.icon-text__dark__pink-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(249, 161, 198);\n}\n.icon-text__dark__pink-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(249, 161, 198);\n}\n.icon-text__dark__pink-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(249, 161, 198);\n}\n.icon-text__dark__pink-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(249, 161, 198);\n}\n.icon-text__dark__orange-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(249, 161, 198);\n}\n.icon-text__dark__orange-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(249, 161, 198);\n}\n.icon-text__dark__orange-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(249, 161, 198);\n}\n.icon-text__dark__orange-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(249, 161, 198);\n}\n.icon-text__dark__grey-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(173, 173, 173);\n}\n.icon-text__dark__grey-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(173, 173, 173);\n}\n.icon-text__dark__grey-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(173, 173, 173);\n}\n.icon-text__dark__grey-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(173, 173, 173);\n}\n.icon-text__dark__purple-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(215, 154, 253);\n}\n.icon-text__dark__purple-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(215, 154, 253);\n}\n.icon-text__dark__purple-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(215, 154, 253);\n}\n.icon-text__dark__purple-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(215, 154, 253);\n}\n.icon-text__light__purple-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(130, 0, 101);\n}\n.icon-text__light__purple-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(130, 0, 101);\n}\n.icon-text__light__purple-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(130, 0, 101);\n}\n.icon-text__light__purple-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(130, 0, 101);\n}\n.icon-text__light__blue-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(16, 69, 172);\n}\n.icon-text__light__blue-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(16, 69, 172);\n}\n.icon-text__light__blue-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(16, 69, 172);\n}\n.icon-text__light__blue-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(16, 69, 172);\n}\n.icon-text__light__pink-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(204, 5, 55);\n}\n.icon-text__light__pink-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(204, 5, 55);\n}\n.icon-text__light__pink-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(204, 5, 55);\n}\n.icon-text__light__pink-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(204, 5, 55);\n}\n.icon-text__light__orange-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(157, 75, 0);\n}\n.icon-text__light__orange-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(157, 75, 0);\n}\n.icon-text__light__orange-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(157, 75, 0);\n}\n.icon-text__light__orange-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(157, 75, 0);\n}\n.icon-text__light__green-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(41, 116, 6);\n}\n.icon-text__light__green-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(41, 116, 6);\n}\n.icon-text__light__green-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(41, 116, 6);\n}\n.icon-text__light__green-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(41, 116, 6);\n}\n.icon-text__light__red-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(107, 0, 0);\n}\n.icon-text__light__red-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(107, 0, 0);\n}\n.icon-text__light__red-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(107, 0, 0);\n}\n.icon-text__light__red-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(107, 0, 0);\n}\n.icon-text__light__grey-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(101, 101, 101);\n}\n.icon-text__light__grey-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(101, 101, 101);\n}\n.icon-text__light__grey-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(101, 101, 101);\n}\n.icon-text__light__grey-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(101, 101, 101);\n}\n.icon-secondary__red__100-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(148, 9, 1);\n}\n.icon-secondary__red__100-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(148, 9, 1);\n}\n.icon-secondary__red__100-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(148, 9, 1);\n}\n.icon-secondary__red__100-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(148, 9, 1);\n}\n.icon-secondary__red__50-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(188, 118, 114);\n}\n.icon-secondary__red__50-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(188, 118, 114);\n}\n.icon-secondary__red__50-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(188, 118, 114);\n}\n.icon-secondary__red__50-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(188, 118, 114);\n}\n.icon-secondary__orange-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(255, 136, 17);\n}\n.icon-secondary__orange-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(255, 136, 17);\n}\n.icon-secondary__orange-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(255, 136, 17);\n}\n.icon-secondary__orange-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(255, 136, 17);\n}\n.icon-secondary__green-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(5, 134, 45);\n}\n.icon-secondary__green-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(5, 134, 45);\n}\n.icon-secondary__green-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(5, 134, 45);\n}\n.icon-secondary__green-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(5, 134, 45);\n}\n.icon-secondary__hover__grey-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(199, 197, 197);\n}\n.icon-secondary__hover__grey-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(199, 197, 197);\n}\n.icon-secondary__hover__grey-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(199, 197, 197);\n}\n.icon-secondary__hover__grey-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(199, 197, 197);\n}\n.icon-secondary__hover__red-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(115, 7, 1);\n}\n.icon-secondary__hover__red-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(115, 7, 1);\n}\n.icon-secondary__hover__red-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(115, 7, 1);\n}\n.icon-secondary__hover__red-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(115, 7, 1);\n}\n.icon-attention__red__25-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(255, 116, 116);\n}\n.icon-attention__red__25-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(255, 116, 116);\n}\n.icon-attention__red__25-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(255, 116, 116);\n}\n.icon-attention__red__25-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(255, 116, 116);\n}\n.icon-attention__red__100-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgb(255, 0, 0);\n}\n.icon-attention__red__100-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgb(255, 0, 0);\n}\n.icon-attention__red__100-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgb(255, 0, 0);\n}\n.icon-attention__red__100-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgb(255, 0, 0);\n}\n.icon-gradients__text__light-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: linear-gradient(90deg, #202020 50%, #202020 50%, rgba(32, 32, 32, 0) 96.34%);\n}\n.icon-gradients__text__light-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: linear-gradient(90deg, #202020 50%, #202020 50%, rgba(32, 32, 32, 0) 96.34%);\n}\n.icon-gradients__text__light-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: linear-gradient(90deg, #202020 50%, #202020 50%, rgba(32, 32, 32, 0) 96.34%);\n}\n.icon-gradients__text__light-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: linear-gradient(90deg, #202020 50%, #202020 50%, rgba(32, 32, 32, 0) 96.34%);\n}\n.icon-gradients__text__dark-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: linear-gradient(90deg, #F6F6F7 37.8%, rgba(246, 246, 247, 0) 101.11%);\n}\n.icon-gradients__text__dark-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: linear-gradient(90deg, #F6F6F7 37.8%, rgba(246, 246, 247, 0) 101.11%);\n}\n.icon-gradients__text__dark-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: linear-gradient(90deg, #F6F6F7 37.8%, rgba(246, 246, 247, 0) 101.11%);\n}\n.icon-gradients__text__dark-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: linear-gradient(90deg, #F6F6F7 37.8%, rgba(246, 246, 247, 0) 101.11%);\n}\n.icon-gradients__text__highcontrast-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: linear-gradient(90deg, #FFFFFF 16.67%, rgba(255, 255, 255, 0) 101.11%);\n}\n.icon-gradients__text__highcontrast-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: linear-gradient(90deg, #FFFFFF 16.67%, rgba(255, 255, 255, 0) 101.11%);\n}\n.icon-gradients__text__highcontrast-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: linear-gradient(90deg, #FFFFFF 16.67%, rgba(255, 255, 255, 0) 101.11%);\n}\n.icon-gradients__text__highcontrast-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: linear-gradient(90deg, #FFFFFF 16.67%, rgba(255, 255, 255, 0) 101.11%);\n}\n.icon-gradients__text__grey__65-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: linear-gradient(90deg, #414040 7.78%, rgba(65, 64, 64, 0) 101.11%);\n}\n.icon-gradients__text__grey__65-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: linear-gradient(90deg, #414040 7.78%, rgba(65, 64, 64, 0) 101.11%);\n}\n.icon-gradients__text__grey__65-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: linear-gradient(90deg, #414040 7.78%, rgba(65, 64, 64, 0) 101.11%);\n}\n.icon-gradients__text__grey__65-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: linear-gradient(90deg, #414040 7.78%, rgba(65, 64, 64, 0) 101.11%);\n}\n.icon-gradients__text__grey__40-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: linear-gradient(90deg, #727272 1.11%, rgba(114, 114, 114, 0) 101.11%);\n}\n.icon-gradients__text__grey__40-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: linear-gradient(90deg, #727272 1.11%, rgba(114, 114, 114, 0) 101.11%);\n}\n.icon-gradients__text__grey__40-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: linear-gradient(90deg, #727272 1.11%, rgba(114, 114, 114, 0) 101.11%);\n}\n.icon-gradients__text__grey__40-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: linear-gradient(90deg, #727272 1.11%, rgba(114, 114, 114, 0) 101.11%);\n}\n.icon-gradients__text__grey__25-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: linear-gradient(90deg, #D7D7D7 3.33%, rgba(215, 215, 215, 0) 98.89%);\n}\n.icon-gradients__text__grey__25-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: linear-gradient(90deg, #D7D7D7 3.33%, rgba(215, 215, 215, 0) 98.89%);\n}\n.icon-gradients__text__grey__25-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: linear-gradient(90deg, #D7D7D7 3.33%, rgba(215, 215, 215, 0) 98.89%);\n}\n.icon-gradients__text__grey__25-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: linear-gradient(90deg, #D7D7D7 3.33%, rgba(215, 215, 215, 0) 98.89%);\n}\n.icon-gradients__text__grey__10-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: linear-gradient(90deg, #F6F6F7 1.11%, rgba(246, 246, 247, 0) 101.11%);\n}\n.icon-gradients__text__grey__10-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: linear-gradient(90deg, #F6F6F7 1.11%, rgba(246, 246, 247, 0) 101.11%);\n}\n.icon-gradients__text__grey__10-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: linear-gradient(90deg, #F6F6F7 1.11%, rgba(246, 246, 247, 0) 101.11%);\n}\n.icon-gradients__text__grey__10-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: linear-gradient(90deg, #F6F6F7 1.11%, rgba(246, 246, 247, 0) 101.11%);\n}\n.icon-transparency__primary-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgba(6, 149, 208, 0.5);\n}\n.icon-transparency__primary-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgba(6, 149, 208, 0.5);\n}\n.icon-transparency__primary-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgba(6, 149, 208, 0.5);\n}\n.icon-transparency__primary-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgba(6, 149, 208, 0.5);\n}\n.icon-transparency__accent-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgba(58, 142, 177, 0.5);\n}\n.icon-transparency__accent-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgba(58, 142, 177, 0.5);\n}\n.icon-transparency__accent-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgba(58, 142, 177, 0.5);\n}\n.icon-transparency__accent-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgba(58, 142, 177, 0.5);\n}\n.icon-transparency__hico-size-1 {\n  width: 16px;\n  min-width: 16px;\n  min-height: 16px;\n  height: 16px;\n  fill: rgba(0, 159, 193, 0.5);\n}\n.icon-transparency__hico-size-2 {\n  width: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  height: 24px;\n  fill: rgba(0, 159, 193, 0.5);\n}\n.icon-transparency__hico-size-3 {\n  width: 32px;\n  min-width: 32px;\n  min-height: 32px;\n  height: 32px;\n  fill: rgba(0, 159, 193, 0.5);\n}\n.icon-transparency__hico-size-4 {\n  width: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  height: 40px;\n  fill: rgba(0, 159, 193, 0.5);\n}\n.radio_label_light {\n  font-size: 16px;\n  font-family: Montserrat;\n  display: flex;\n  margin-bottom: 0;\n  align-items: center;\n  flex-direction: row-reverse;\n  color: rgb(0, 0, 0);\n}\n.radio_label_light:hover {\n  cursor: pointer;\n  color: rgb(6, 149, 208);\n}\n.radio_light {\n  border: 4px solid rgb(101, 101, 101);\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  width: 24px !important;\n  height: 24px !important;\n  margin-right: 4px;\n  border-radius: 50%;\n  border-color: none;\n  transition: all 0.2s ease-in-out;\n}\n.radio_light::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  line-height: 24px !important;\n  border-radius: 50%;\n  text-align: center;\n  border: none;\n  outline: none;\n}\n.radio_light:not(:checked)::after {\n  content: "";\n  background-color: rgb(255, 255, 255);\n  position: absolute;\n  top: -2px;\n  left: -2px;\n  right: -2px;\n  bottom: -2px;\n  font-size: 20px;\n  line-height: 24px !important;\n  border-radius: 50%;\n  text-align: center;\n  outline: rgb(101, 101, 101) auto 2px;\n  outline-offset: 2px;\n}\n.radio_light:checked::after {\n  content: "";\n  background-color: rgb(6, 149, 208);\n  position: absolute;\n  top: -2px;\n  left: -2px;\n  right: -2px;\n  bottom: -2px;\n  font-size: 20px;\n  line-height: 24px !important;\n  border-radius: 50%;\n  border: none;\n  text-align: center;\n  outline: rgb(6, 149, 208) auto 2px;\n  outline-offset: 2px;\n}\n.radio_light:hover:not(:disabled)::before {\n  color: rgba(6, 149, 208, 0.5);\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -1;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: none;\n  background-color: rgba(6, 149, 208, 0.5);\n}\n.radio_light:hover:not(:disabled)::after {\n  content: "";\n  background-color: rgb(6, 149, 208);\n  position: absolute;\n  top: -2px;\n  left: -2px;\n  right: -2px;\n  bottom: -2px;\n  font-size: 20px;\n  line-height: 24px !important;\n  border-radius: 50%;\n  border: none;\n  text-align: center;\n}\ninput[type=radio] .radio_light {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  outline: 0;\n  height: 24px !important;\n  width: 24px !important;\n  border: 2px solid rgb(101, 101, 101);\n}\ninput[type=radio] .radio_light:disabled {\n  background-color: rgb(255, 255, 255);\n  border-color: rgb(229, 230, 230);\n  cursor: not-allowed;\n  pointer-events: none;\n}\ninput[type=radio] .radio_light::before {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -1;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: none;\n  background-color: rgba(6, 149, 208, 0.5);\n}\ninput[type=radio] .radio_light:focus-visible {\n  border: 2px solid rgb(6, 149, 208);\n}\ninput[type=radio] .radio_light:focus-visible::-moz-focus-inner {\n  border: 0;\n}\ninput[type=radio] .radio_light:focus-visible:not(:checked):not(:disabled)::before {\n  content: "";\n  position: absolute;\n  border: none;\n}\n.radio_label_dark {\n  font-size: 16px;\n  font-family: Montserrat;\n  display: flex;\n  margin-bottom: 0;\n  align-items: center;\n  flex-direction: row-reverse;\n  color: rgb(246, 246, 247);\n}\n.radio_label_dark:hover {\n  cursor: pointer;\n  color: rgb(117, 189, 219);\n}\n.radio_dark {\n  border: 4px solid rgb(215, 215, 215);\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  width: 24px !important;\n  height: 24px !important;\n  margin-right: 4px;\n  border-radius: 50%;\n  border-color: none;\n  transition: all 0.2s ease-in-out;\n}\n.radio_dark::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  line-height: 24px !important;\n  border-radius: 50%;\n  text-align: center;\n  border: none;\n  outline: none;\n}\n.radio_dark:not(:checked)::after {\n  content: "";\n  background-color: rgb(32, 32, 32);\n  position: absolute;\n  top: -2px;\n  left: -2px;\n  right: -2px;\n  bottom: -2px;\n  font-size: 20px;\n  line-height: 24px !important;\n  border-radius: 50%;\n  text-align: center;\n  outline: rgb(215, 215, 215) auto 2px;\n  outline-offset: 2px;\n}\n.radio_dark:checked::after {\n  content: "";\n  background-color: rgb(117, 189, 219);\n  position: absolute;\n  top: -2px;\n  left: -2px;\n  right: -2px;\n  bottom: -2px;\n  font-size: 20px;\n  line-height: 24px !important;\n  border-radius: 50%;\n  border: none;\n  text-align: center;\n  outline: rgb(117, 189, 219) auto 2px;\n  outline-offset: 2px;\n}\n.radio_dark:hover:not(:disabled)::before {\n  color: rgba(117, 189, 219, 0.5);\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -1;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: none;\n  background-color: rgba(117, 189, 219, 0.5);\n}\n.radio_dark:hover:not(:disabled)::after {\n  content: "";\n  background-color: rgb(117, 189, 219);\n  position: absolute;\n  top: -2px;\n  left: -2px;\n  right: -2px;\n  bottom: -2px;\n  font-size: 20px;\n  line-height: 24px !important;\n  border-radius: 50%;\n  border: none;\n  text-align: center;\n}\ninput[type=radio] .radio_dark {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  outline: 0;\n  height: 24px !important;\n  width: 24px !important;\n  border: 2px solid rgb(215, 215, 215);\n}\ninput[type=radio] .radio_dark:disabled {\n  background-color: rgb(101, 101, 101);\n  border-color: rgb(32, 32, 32);\n  cursor: not-allowed;\n  pointer-events: none;\n}\ninput[type=radio] .radio_dark::before {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -1;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: none;\n  background-color: rgba(117, 189, 219, 0.5);\n}\ninput[type=radio] .radio_dark:focus-visible {\n  border: 2px solid;\n}\ninput[type=radio] .radio_dark:focus-visible::-moz-focus-inner {\n  border: 0;\n}\ninput[type=radio] .radio_dark:focus-visible:not(:checked):not(:disabled)::before {\n  content: "";\n  position: absolute;\n  border: none;\n}\n.radio_label_high-contrast {\n  font-size: 16px;\n  font-family: Montserrat;\n  display: flex;\n  margin-bottom: 0;\n  align-items: center;\n  flex-direction: row-reverse;\n  color: rgb(255, 255, 255);\n}\n.radio_label_high-contrast:hover {\n  cursor: pointer;\n  color: rgb(58, 220, 255);\n}\n.radio_high-contrast {\n  border: 4px solid rgb(255, 255, 255);\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  width: 24px !important;\n  height: 24px !important;\n  margin-right: 4px;\n  border-radius: 50%;\n  border-color: none;\n  transition: all 0.2s ease-in-out;\n}\n.radio_high-contrast::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  line-height: 24px !important;\n  border-radius: 50%;\n  text-align: center;\n  border: none;\n  outline: none;\n}\n.radio_high-contrast:not(:checked)::after {\n  content: "";\n  background-color: rgb(0, 0, 0);\n  position: absolute;\n  top: -2px;\n  left: -2px;\n  right: -2px;\n  bottom: -2px;\n  font-size: 20px;\n  line-height: 24px !important;\n  border-radius: 50%;\n  text-align: center;\n  outline: rgb(255, 255, 255) auto 2px;\n  outline-offset: 2px;\n}\n.radio_high-contrast:checked::after {\n  content: "";\n  background-color: rgb(58, 220, 255);\n  position: absolute;\n  top: -2px;\n  left: -2px;\n  right: -2px;\n  bottom: -2px;\n  font-size: 20px;\n  line-height: 24px !important;\n  border-radius: 50%;\n  border: none;\n  text-align: center;\n  outline: rgb(58, 220, 255) auto 2px;\n  outline-offset: 2px;\n}\n.radio_high-contrast:hover:not(:disabled)::before {\n  color: rgba(58, 220, 255, 0.5);\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -1;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: none;\n  background-color: rgba(58, 220, 255, 0.5);\n}\n.radio_high-contrast:hover:not(:disabled)::after {\n  content: "";\n  background-color: rgb(58, 220, 255);\n  position: absolute;\n  top: -2px;\n  left: -2px;\n  right: -2px;\n  bottom: -2px;\n  font-size: 20px;\n  line-height: 24px !important;\n  border-radius: 50%;\n  border: none;\n  text-align: center;\n}\ninput[type=radio] .radio_high-contrast {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  outline: 0;\n  height: 24px !important;\n  width: 24px !important;\n  border: 2px solid rgb(255, 255, 255);\n}\ninput[type=radio] .radio_high-contrast:disabled {\n  background-color: rgb(0, 0, 0);\n  border-color: rgb(0, 0, 0);\n  cursor: not-allowed;\n  pointer-events: none;\n}\ninput[type=radio] .radio_high-contrast::before {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -1;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: none;\n  background-color: rgba(58, 220, 255, 0.5);\n}\ninput[type=radio] .radio_high-contrast:focus-visible {\n  border: 2px solid;\n}\ninput[type=radio] .radio_high-contrast:focus-visible::-moz-focus-inner {\n  border: 0;\n}\ninput[type=radio] .radio_high-contrast:focus-visible:not(:checked):not(:disabled)::before {\n  content: "";\n  position: absolute;\n  border: none;\n}\n.radio-image {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  width: 24px !important;\n  height: 24px !important;\n  margin-right: 4px;\n  border-radius: 50%;\n  border-color: none;\n  transition: all 0.2s ease-in-out;\n  border: none;\n  outline: none;\n  background-color: none;\n  background-image: url(../images/radio.png);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 24px 24px;\n  cursor: pointer;\n}\n.radio-label-container_row {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  font-size: 16px;\n  font-family: Montserrat;\n  column-gap: 8px;\n}\n.radio-label-container_column {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  font-size: 16px;\n  font-family: Montserrat;\n  row-gap: 16px;\n}\n.spinner {\n  width: 40px;\n  height: 40px;\n}\n.textbox_Wxsm_Hsm {\n  height: 32px;\n  width: 60px;\n  font-size: 19.2px;\n}\n.textbox_Wsm_Hsm {\n  height: 32px;\n  width: 96px;\n  font-size: 19.2px;\n}\n.textbox_Wmd_Hsm {\n  height: 32px;\n  width: 192px;\n  font-size: 19.2px;\n}\n.textbox_Wlg_Hsm {\n  height: 32px;\n  width: 384px;\n  font-size: 19.2px;\n}\n.textbox_Wxlg_Hsm {\n  height: 32px;\n  width: 512px;\n  font-size: 19.2px;\n}\n.textbox_Wxxlg_Hsm {\n  height: 32px;\n  width: 768px;\n  font-size: 19.2px;\n}\n.textbox_Wxsm_Hmd {\n  height: 40px;\n  width: 60px;\n  font-size: 24px;\n}\n.textbox_Wsm_Hmd {\n  height: 40px;\n  width: 96px;\n  font-size: 24px;\n}\n.textbox_Wmd_Hmd {\n  height: 40px;\n  width: 192px;\n  font-size: 24px;\n}\n.textbox_Wlg_Hmd {\n  height: 40px;\n  width: 384px;\n  font-size: 24px;\n}\n.textbox_Wxlg_Hmd {\n  height: 40px;\n  width: 512px;\n  font-size: 24px;\n}\n.textbox_Wxxlg_Hmd {\n  height: 40px;\n  width: 768px;\n  font-size: 24px;\n}\n.textbox_Wxsm_Hlg {\n  height: 48px;\n  width: 60px;\n  font-size: 28.8px;\n}\n.textbox_Wsm_Hlg {\n  height: 48px;\n  width: 96px;\n  font-size: 28.8px;\n}\n.textbox_Wmd_Hlg {\n  height: 48px;\n  width: 192px;\n  font-size: 28.8px;\n}\n.textbox_Wlg_Hlg {\n  height: 48px;\n  width: 384px;\n  font-size: 28.8px;\n}\n.textbox_Wxlg_Hlg {\n  height: 48px;\n  width: 512px;\n  font-size: 28.8px;\n}\n.textbox_Wxxlg_Hlg {\n  height: 48px;\n  width: 768px;\n  font-size: 28.8px;\n}\n.textarea--sm--light {\n  height: 112px;\n  width: 192px;\n  box-sizing: border-box;\n  background-color: rgb(255, 255, 255) !important;\n  border: 1px solid rgb(64, 64, 64) !important;\n  color: rgb(0, 0, 0) !important;\n  border-radius: 4px;\n  font-family: Montserrat, sans-serif;\n  font-weight: 400;\n}\n.textarea--sm--light:disabled {\n  background-color: rgb(215, 215, 215) !important;\n  border-color: rgb(64, 64, 64) !important;\n  color: rgb(114, 114, 114) !important;\n}\n.textarea--sm--light:focus-visible {\n  border-color: rgb(172, 209, 223) !important;\n  color: !important;\n}\n.textarea--sm--light::placeholder {\n  color: rgb(114, 114, 114) !important;\n}\n.textarea--sm--light.error {\n  border-color: rgb(148, 9, 1) !important;\n}\n.textarea--md--light {\n  height: 224px;\n  width: 384px;\n  box-sizing: border-box;\n  background-color: rgb(255, 255, 255) !important;\n  border: 1px solid rgb(64, 64, 64) !important;\n  color: rgb(0, 0, 0) !important;\n  border-radius: 4px;\n  font-family: Montserrat, sans-serif;\n  font-weight: 400;\n}\n.textarea--md--light:disabled {\n  background-color: rgb(215, 215, 215) !important;\n  border-color: rgb(64, 64, 64) !important;\n  color: rgb(114, 114, 114) !important;\n}\n.textarea--md--light:focus-visible {\n  border-color: rgb(172, 209, 223) !important;\n  color: !important;\n}\n.textarea--md--light::placeholder {\n  color: rgb(114, 114, 114) !important;\n}\n.textarea--md--light.error {\n  border-color: rgb(148, 9, 1) !important;\n}\n.textarea--lg--light {\n  height: 298.67px;\n  width: 512px;\n  box-sizing: border-box;\n  background-color: rgb(255, 255, 255) !important;\n  border: 1px solid rgb(64, 64, 64) !important;\n  color: rgb(0, 0, 0) !important;\n  border-radius: 4px;\n  font-family: Montserrat, sans-serif;\n  font-weight: 400;\n}\n.textarea--lg--light:disabled {\n  background-color: rgb(215, 215, 215) !important;\n  border-color: rgb(64, 64, 64) !important;\n  color: rgb(114, 114, 114) !important;\n}\n.textarea--lg--light:focus-visible {\n  border-color: rgb(172, 209, 223) !important;\n  color: !important;\n}\n.textarea--lg--light::placeholder {\n  color: rgb(114, 114, 114) !important;\n}\n.textarea--lg--light.error {\n  border-color: rgb(148, 9, 1) !important;\n}\n.textarea--xlg--light {\n  height: 448px;\n  width: 768px;\n  box-sizing: border-box;\n  background-color: rgb(255, 255, 255) !important;\n  border: 1px solid rgb(64, 64, 64) !important;\n  color: rgb(0, 0, 0) !important;\n  border-radius: 4px;\n  font-family: Montserrat, sans-serif;\n  font-weight: 400;\n}\n.textarea--xlg--light:disabled {\n  background-color: rgb(215, 215, 215) !important;\n  border-color: rgb(64, 64, 64) !important;\n  color: rgb(114, 114, 114) !important;\n}\n.textarea--xlg--light:focus-visible {\n  border-color: rgb(172, 209, 223) !important;\n  color: !important;\n}\n.textarea--xlg--light::placeholder {\n  color: rgb(114, 114, 114) !important;\n}\n.textarea--xlg--light.error {\n  border-color: rgb(148, 9, 1) !important;\n}\n.textarea--sm--dark {\n  height: 112px;\n  width: 192px;\n  box-sizing: border-box;\n  background-color: rgb(64, 64, 64) !important;\n  border: 1px solid rgb(114, 114, 114) !important;\n  color: rgb(215, 215, 215) !important;\n  border-radius: 4px;\n  font-family: Montserrat, sans-serif;\n  font-weight: 400;\n}\n.textarea--sm--dark:disabled {\n  background-color: rgb(43, 43, 43) !important;\n  border-color: rgb(114, 114, 114) !important;\n  color: rgb(101, 101, 101) !important;\n}\n.textarea--sm--dark:focus-visible {\n  border-color: rgb(6, 149, 208) !important;\n  color: !important;\n}\n.textarea--sm--dark::placeholder {\n  color: rgb(215, 215, 215) !important;\n}\n.textarea--sm--dark.error {\n  border-color: rgb(255, 116, 116) !important;\n}\n.textarea--md--dark {\n  height: 224px;\n  width: 384px;\n  box-sizing: border-box;\n  background-color: rgb(64, 64, 64) !important;\n  border: 1px solid rgb(114, 114, 114) !important;\n  color: rgb(215, 215, 215) !important;\n  border-radius: 4px;\n  font-family: Montserrat, sans-serif;\n  font-weight: 400;\n}\n.textarea--md--dark:disabled {\n  background-color: rgb(43, 43, 43) !important;\n  border-color: rgb(114, 114, 114) !important;\n  color: rgb(101, 101, 101) !important;\n}\n.textarea--md--dark:focus-visible {\n  border-color: rgb(6, 149, 208) !important;\n  color: !important;\n}\n.textarea--md--dark::placeholder {\n  color: rgb(215, 215, 215) !important;\n}\n.textarea--md--dark.error {\n  border-color: rgb(255, 116, 116) !important;\n}\n.textarea--lg--dark {\n  height: 298.67px;\n  width: 512px;\n  box-sizing: border-box;\n  background-color: rgb(64, 64, 64) !important;\n  border: 1px solid rgb(114, 114, 114) !important;\n  color: rgb(215, 215, 215) !important;\n  border-radius: 4px;\n  font-family: Montserrat, sans-serif;\n  font-weight: 400;\n}\n.textarea--lg--dark:disabled {\n  background-color: rgb(43, 43, 43) !important;\n  border-color: rgb(114, 114, 114) !important;\n  color: rgb(101, 101, 101) !important;\n}\n.textarea--lg--dark:focus-visible {\n  border-color: rgb(6, 149, 208) !important;\n  color: !important;\n}\n.textarea--lg--dark::placeholder {\n  color: rgb(215, 215, 215) !important;\n}\n.textarea--lg--dark.error {\n  border-color: rgb(255, 116, 116) !important;\n}\n.textarea--xlg--dark {\n  height: 448px;\n  width: 768px;\n  box-sizing: border-box;\n  background-color: rgb(64, 64, 64) !important;\n  border: 1px solid rgb(114, 114, 114) !important;\n  color: rgb(215, 215, 215) !important;\n  border-radius: 4px;\n  font-family: Montserrat, sans-serif;\n  font-weight: 400;\n}\n.textarea--xlg--dark:disabled {\n  background-color: rgb(43, 43, 43) !important;\n  border-color: rgb(114, 114, 114) !important;\n  color: rgb(101, 101, 101) !important;\n}\n.textarea--xlg--dark:focus-visible {\n  border-color: rgb(6, 149, 208) !important;\n  color: !important;\n}\n.textarea--xlg--dark::placeholder {\n  color: rgb(215, 215, 215) !important;\n}\n.textarea--xlg--dark.error {\n  border-color: rgb(255, 116, 116) !important;\n}\n.textarea--sm--high-contrast {\n  height: 112px;\n  width: 192px;\n  box-sizing: border-box;\n  background-color: rgb(0, 0, 0) !important;\n  border: 1px solid rgb(215, 215, 215) !important;\n  color: rgb(255, 255, 255) !important;\n  border-radius: 4px;\n  font-family: Montserrat, sans-serif;\n  font-weight: 400;\n}\n.textarea--sm--high-contrast:disabled {\n  background-color: rgb(246, 246, 247) !important;\n  border-color: rgb(215, 215, 215) !important;\n  color: !important;\n}\n.textarea--sm--high-contrast:focus-visible {\n  border-color: rgb(6, 149, 208) !important;\n  color: !important;\n}\n.textarea--sm--high-contrast::placeholder {\n  color: !important;\n}\n.textarea--sm--high-contrast.error {\n  border-color: rgb(255, 0, 0) !important;\n}\n.textarea--md--high-contrast {\n  height: 224px;\n  width: 384px;\n  box-sizing: border-box;\n  background-color: rgb(0, 0, 0) !important;\n  border: 1px solid rgb(215, 215, 215) !important;\n  color: rgb(255, 255, 255) !important;\n  border-radius: 4px;\n  font-family: Montserrat, sans-serif;\n  font-weight: 400;\n}\n.textarea--md--high-contrast:disabled {\n  background-color: rgb(246, 246, 247) !important;\n  border-color: rgb(215, 215, 215) !important;\n  color: !important;\n}\n.textarea--md--high-contrast:focus-visible {\n  border-color: rgb(6, 149, 208) !important;\n  color: !important;\n}\n.textarea--md--high-contrast::placeholder {\n  color: !important;\n}\n.textarea--md--high-contrast.error {\n  border-color: rgb(255, 0, 0) !important;\n}\n.textarea--lg--high-contrast {\n  height: 298.67px;\n  width: 512px;\n  box-sizing: border-box;\n  background-color: rgb(0, 0, 0) !important;\n  border: 1px solid rgb(215, 215, 215) !important;\n  color: rgb(255, 255, 255) !important;\n  border-radius: 4px;\n  font-family: Montserrat, sans-serif;\n  font-weight: 400;\n}\n.textarea--lg--high-contrast:disabled {\n  background-color: rgb(246, 246, 247) !important;\n  border-color: rgb(215, 215, 215) !important;\n  color: !important;\n}\n.textarea--lg--high-contrast:focus-visible {\n  border-color: rgb(6, 149, 208) !important;\n  color: !important;\n}\n.textarea--lg--high-contrast::placeholder {\n  color: !important;\n}\n.textarea--lg--high-contrast.error {\n  border-color: rgb(255, 0, 0) !important;\n}\n.textarea--xlg--high-contrast {\n  height: 448px;\n  width: 768px;\n  box-sizing: border-box;\n  background-color: rgb(0, 0, 0) !important;\n  border: 1px solid rgb(215, 215, 215) !important;\n  color: rgb(255, 255, 255) !important;\n  border-radius: 4px;\n  font-family: Montserrat, sans-serif;\n  font-weight: 400;\n}\n.textarea--xlg--high-contrast:disabled {\n  background-color: rgb(246, 246, 247) !important;\n  border-color: rgb(215, 215, 215) !important;\n  color: !important;\n}\n.textarea--xlg--high-contrast:focus-visible {\n  border-color: rgb(6, 149, 208) !important;\n  color: !important;\n}\n.textarea--xlg--high-contrast::placeholder {\n  color: !important;\n}\n.textarea--xlg--high-contrast.error {\n  border-color: rgb(255, 0, 0) !important;\n}\n.textarea_sm {\n  height: 112px;\n  width: 192px;\n  box-sizing: border-box;\n}\n.textarea_md {\n  height: 224px;\n  width: 384px;\n  box-sizing: border-box;\n}\n.textarea_lg {\n  height: 298.67px;\n  width: 512px;\n  box-sizing: border-box;\n}\n.textarea_xlg {\n  height: 448px;\n  width: 768px;\n  box-sizing: border-box;\n}\n.textarea--outerContainer {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  width: 100%;\n  height: 100%;\n}\n.keystroke {\n  position: relative;\n  display: inline-block;\n  width: fit-content;\n  height: 32px;\n  border-radius: 4px;\n  margin: 2px;\n  font-size: 16px;\n  font-weight: bold;\n  background-color: #fff;\n  color: #000;\n  font-family: Montserrat, sans-serif;\n}\n.keystroke-content {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n.subscript {\n  font-size: 10px;\n  vertical-align: super;\n}\n.superscript {\n  font-size: 10px;\n  vertical-align: sub;\n}\n.data11y_switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n  border-radius: 34px;\n}\n.data11y_switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.data11y_switch .data11y_slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #ccc;\n  border-radius: 34px;\n}\n.data11y_switch .data11y_slider:before {\n  position: absolute;\n  content: "";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background: white;\n  transition: 0.4s;\n  border-radius: 50%;\n}\n.data11y_switch input:checked:focus-visible + .data11y_slider {\n  box-shadow: 0 0 1px #2196F3;\n  outline-offset: 2px;\n  outline: 2px solid rgb(6, 149, 208);\n}\n.data11y_switch input:not(checked):focus-visible + .data11y_slider {\n  box-shadow: 0 0 1px #2196F3;\n  outline-offset: 1px;\n  outline: 2px solid rgb(215, 215, 215);\n}\n.data11y_switch input:checked + .data11y_slider {\n  background: rgb(6, 149, 208);\n}\n.data11y_switch input:not(checked) + .data11y_slider:before {\n  background: rgb(215, 215, 215);\n}\n.data11y_switch input:checked + .data11y_slider:before {\n  background: rgb(255, 255, 255);\n  transform: translateX(26px);\n}\n.tab-list-light {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  width: fit-content;\n  height: fit-content;\n  padding: 0;\n  background: rgb(255, 255, 255);\n  margin: 0;\n  list-style: none;\n  border-radius: 4px 4px 0 0;\n}\n.tab-and-close-button-light {\n  display: flex;\n  justify-content: flex-start;\n  color: inherit;\n  align-items: center;\n  border-radius: 4px 4px 0 0;\n  position: relative;\n  background: inherit;\n  border: none;\n  box-sizing: border-box;\n  font-size: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: calc(100% - 30px);\n  height: fit-content;\n  white-space: nowrap;\n  flex-direction: row;\n}\n.close-button-light {\n  display: flex;\n  align-items: center;\n  border: none;\n  box-sizing: inherit;\n  justify-content: center;\n  width: 30px;\n  height: inherit;\n  border-bottom: inherit;\n  padding: 0;\n  color: inherit;\n  background: inherit;\n}\n.close-button-light:hover {\n  color: red;\n}\n.tab-plus-button-light {\n  display: flex;\n  align-items: center;\n  margin-left: 5px;\n  justify-content: center;\n  border: none;\n  width: 24px;\n  height: 24px;\n  border: none;\n  background: inherit;\n}\n.tab-plus-button-light:hover {\n  background: rgba(172, 209, 223, 0.4);\n  border: 2px solid rgb(172, 209, 223);\n  border-radius: 4px;\n}\n.tab-plus-button-light:focus-visible {\n  outline: rgb(172, 209, 223) auto 2px;\n}\n.tab_text-light {\n  display: flex;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  max-width: 100%;\n  background: linear-gradient(90deg, rgb(0, 0, 0) 85%, rgb(0, 0, 0) 85%, rgba(32, 32, 32, 0) 98.34%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.tab-sm-light {\n  background-color: rgb(255, 255, 255);\n  color: rgb(0, 0, 0);\n  width: 160px;\n  height: 35px;\n  line-height: 1.5;\n  display: flex;\n  box-sizing: border-box;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid rgb(215, 215, 215);\n  border-bottom: none;\n  position: relative;\n  border-radius: 4px 4px 0 0;\n  text-align: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 17.5px;\n}\n.tab-sm-light:hover {\n  background-color: rgb(172, 209, 223);\n  border: rgb(172, 209, 223);\n  width: fit-content;\n  min-width: 160px;\n  overflow: hidden;\n}\n.tab-sm-light:hover .tab_text-light {\n  background: none;\n  -webkit-background-clip: initial;\n  -webkit-text-fill-color: initial;\n  background-clip: initial;\n}\n.tab-sm-light:focus-within {\n  width: fit-content;\n  min-width: 160px;\n  overflow: hidden;\n}\n.tab-sm-light:focus-within .tab_text-light {\n  background: none;\n  -webkit-background-clip: initial;\n  -webkit-text-fill-color: initial;\n  background-clip: initial;\n}\n.tab-sm-light:active {\n  background-color: rgb(255, 255, 255);\n  color: rgb(0, 0, 0);\n}\n.tab-sm-light:disabled {\n  background-color: rgb(246, 246, 247);\n  border: rgb(215, 215, 215);\n}\n.tab-sm-light.tab_selected {\n  background-color: rgb(255, 255, 255);\n  border-bottom: 2px solid rgb(6, 149, 208);\n  color: rgb(0, 0, 0);\n}\n.tab-sm-light.tab_selected:active {\n  background-color: rgb(255, 255, 255);\n  border: rgb(6, 149, 208);\n  color: rgb(0, 0, 0);\n}\n.tab-md-light {\n  background-color: rgb(255, 255, 255);\n  color: rgb(0, 0, 0);\n  width: 200px;\n  height: 40px;\n  line-height: 1.5;\n  display: flex;\n  box-sizing: border-box;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid rgb(215, 215, 215);\n  border-bottom: none;\n  position: relative;\n  border-radius: 4px 4px 0 0;\n  text-align: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 20px;\n}\n.tab-md-light:hover {\n  background-color: rgb(172, 209, 223);\n  border: rgb(172, 209, 223);\n  width: fit-content;\n  min-width: 200px;\n  overflow: hidden;\n}\n.tab-md-light:hover .tab_text-light {\n  background: none;\n  -webkit-background-clip: initial;\n  -webkit-text-fill-color: initial;\n  background-clip: initial;\n}\n.tab-md-light:focus-within {\n  width: fit-content;\n  min-width: 200px;\n  overflow: hidden;\n}\n.tab-md-light:focus-within .tab_text-light {\n  background: none;\n  -webkit-background-clip: initial;\n  -webkit-text-fill-color: initial;\n  background-clip: initial;\n}\n.tab-md-light:active {\n  background-color: rgb(255, 255, 255);\n  color: rgb(0, 0, 0);\n}\n.tab-md-light:disabled {\n  background-color: rgb(246, 246, 247);\n  border: rgb(215, 215, 215);\n}\n.tab-md-light.tab_selected {\n  background-color: rgb(255, 255, 255);\n  border-bottom: 2px solid rgb(6, 149, 208);\n  color: rgb(0, 0, 0);\n}\n.tab-md-light.tab_selected:active {\n  background-color: rgb(255, 255, 255);\n  border: rgb(6, 149, 208);\n  color: rgb(0, 0, 0);\n}\n.tab-lg-light {\n  background-color: rgb(255, 255, 255);\n  color: rgb(0, 0, 0);\n  width: 240px;\n  height: 45px;\n  line-height: 1.5;\n  display: flex;\n  box-sizing: border-box;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid rgb(215, 215, 215);\n  border-bottom: none;\n  position: relative;\n  border-radius: 4px 4px 0 0;\n  text-align: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 22.5px;\n}\n.tab-lg-light:hover {\n  background-color: rgb(172, 209, 223);\n  border: rgb(172, 209, 223);\n  width: fit-content;\n  min-width: 240px;\n  overflow: hidden;\n}\n.tab-lg-light:hover .tab_text-light {\n  background: none;\n  -webkit-background-clip: initial;\n  -webkit-text-fill-color: initial;\n  background-clip: initial;\n}\n.tab-lg-light:focus-within {\n  width: fit-content;\n  min-width: 240px;\n  overflow: hidden;\n}\n.tab-lg-light:focus-within .tab_text-light {\n  background: none;\n  -webkit-background-clip: initial;\n  -webkit-text-fill-color: initial;\n  background-clip: initial;\n}\n.tab-lg-light:active {\n  background-color: rgb(255, 255, 255);\n  color: rgb(0, 0, 0);\n}\n.tab-lg-light:disabled {\n  background-color: rgb(246, 246, 247);\n  border: rgb(215, 215, 215);\n}\n.tab-lg-light.tab_selected {\n  background-color: rgb(255, 255, 255);\n  border-bottom: 2px solid rgb(6, 149, 208);\n  color: rgb(0, 0, 0);\n}\n.tab-lg-light.tab_selected:active {\n  background-color: rgb(255, 255, 255);\n  border: rgb(6, 149, 208);\n  color: rgb(0, 0, 0);\n}\n.tab-list-dark {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  width: fit-content;\n  height: fit-content;\n  padding: 0;\n  background: rgb(54, 54, 55);\n  margin: 0;\n  list-style: none;\n  border-radius: 4px 4px 0 0;\n}\n.tab-and-close-button-dark {\n  display: flex;\n  justify-content: flex-start;\n  color: inherit;\n  align-items: center;\n  border-radius: 4px 4px 0 0;\n  position: relative;\n  background: inherit;\n  border: none;\n  box-sizing: border-box;\n  font-size: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: calc(100% - 30px);\n  height: fit-content;\n  white-space: nowrap;\n  flex-direction: row;\n}\n.close-button-dark {\n  display: flex;\n  align-items: center;\n  border: none;\n  box-sizing: inherit;\n  justify-content: center;\n  width: 30px;\n  height: inherit;\n  border-bottom: inherit;\n  padding: 0;\n  color: inherit;\n  background: inherit;\n}\n.close-button-dark:hover {\n  color: red;\n}\n.tab-plus-button-dark {\n  display: flex;\n  align-items: center;\n  margin-left: 5px;\n  justify-content: center;\n  border: none;\n  width: 24px;\n  height: 24px;\n  border: none;\n  background: inherit;\n}\n.tab-plus-button-dark:hover {\n  background: rgba(6, 149, 208, 0.4);\n  border: 2px solid rgb(117, 189, 219);\n  border-radius: 4px;\n}\n.tab-plus-button-dark:focus-visible {\n  outline: rgb(117, 189, 219) auto 2px;\n}\n.tab_text-dark {\n  display: flex;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  max-width: 100%;\n  background: linear-gradient(90deg, rgb(255, 255, 255) 85%, rgb(255, 255, 255) 85%, rgba(32, 32, 32, 0) 98.34%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.tab-sm-dark {\n  background-color: rgb(54, 54, 55);\n  color: rgb(255, 255, 255);\n  width: 160px;\n  height: 35px;\n  line-height: 1.5;\n  display: flex;\n  box-sizing: border-box;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid rgb(43, 43, 43);\n  border-bottom: none;\n  position: relative;\n  border-radius: 4px 4px 0 0;\n  text-align: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 17.5px;\n}\n.tab-sm-dark:hover {\n  background-color: rgb(6, 149, 208);\n  border: rgb(117, 189, 219);\n  color: rgb(255, 255, 255);\n  width: fit-content;\n  min-width: 160px;\n  overflow: hidden;\n}\n.tab-sm-dark:hover .tab_text-dark {\n  background: none;\n  -webkit-background-clip: initial;\n  -webkit-text-fill-color: initial;\n  background-clip: initial;\n  color: rgb(255, 255, 255);\n}\n.tab-sm-dark:focus-within {\n  width: fit-content;\n  min-width: 160px;\n  overflow: hidden;\n}\n.tab-sm-dark:focus-within .tab_text-dark {\n  background: none;\n  -webkit-background-clip: initial;\n  -webkit-text-fill-color: initial;\n  background-clip: initial;\n  color: rgb(255, 255, 255);\n}\n.tab-sm-dark:active {\n  background-color: rgb(54, 54, 55);\n  color: rgb(255, 255, 255);\n}\n.tab-sm-dark:disabled {\n  background-color: rgb(54, 54, 55);\n  border: rgb(32, 32, 32);\n  color: rgb(255, 255, 255);\n}\n.tab-sm-dark.tab_selected {\n  background-color: rgb(54, 54, 55);\n  border-bottom: 2px solid rgb(6, 149, 208);\n  color: rgb(255, 255, 255);\n}\n.tab-sm-dark.tab_selected:active {\n  background-color: rgb(54, 54, 55);\n  color: rgb(255, 255, 255);\n}\n.tab-md-dark {\n  background-color: rgb(54, 54, 55);\n  color: rgb(255, 255, 255);\n  width: 200px;\n  height: 40px;\n  line-height: 1.5;\n  display: flex;\n  box-sizing: border-box;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid rgb(43, 43, 43);\n  border-bottom: none;\n  position: relative;\n  border-radius: 4px 4px 0 0;\n  text-align: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 20px;\n}\n.tab-md-dark:hover {\n  background-color: rgb(6, 149, 208);\n  border: rgb(117, 189, 219);\n  color: rgb(255, 255, 255);\n  width: fit-content;\n  min-width: 200px;\n  overflow: hidden;\n}\n.tab-md-dark:hover .tab_text-dark {\n  background: none;\n  -webkit-background-clip: initial;\n  -webkit-text-fill-color: initial;\n  background-clip: initial;\n  color: rgb(255, 255, 255);\n}\n.tab-md-dark:focus-within {\n  width: fit-content;\n  min-width: 200px;\n  overflow: hidden;\n}\n.tab-md-dark:focus-within .tab_text-dark {\n  background: none;\n  -webkit-background-clip: initial;\n  -webkit-text-fill-color: initial;\n  background-clip: initial;\n  color: rgb(255, 255, 255);\n}\n.tab-md-dark:active {\n  background-color: rgb(54, 54, 55);\n  color: rgb(255, 255, 255);\n}\n.tab-md-dark:disabled {\n  background-color: rgb(54, 54, 55);\n  border: rgb(32, 32, 32);\n  color: rgb(255, 255, 255);\n}\n.tab-md-dark.tab_selected {\n  background-color: rgb(54, 54, 55);\n  border-bottom: 2px solid rgb(6, 149, 208);\n  color: rgb(255, 255, 255);\n}\n.tab-md-dark.tab_selected:active {\n  background-color: rgb(54, 54, 55);\n  color: rgb(255, 255, 255);\n}\n.tab-lg-dark {\n  background-color: rgb(54, 54, 55);\n  color: rgb(255, 255, 255);\n  width: 240px;\n  height: 45px;\n  line-height: 1.5;\n  display: flex;\n  box-sizing: border-box;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid rgb(43, 43, 43);\n  border-bottom: none;\n  position: relative;\n  border-radius: 4px 4px 0 0;\n  text-align: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 22.5px;\n}\n.tab-lg-dark:hover {\n  background-color: rgb(6, 149, 208);\n  border: rgb(117, 189, 219);\n  color: rgb(255, 255, 255);\n  width: fit-content;\n  min-width: 240px;\n  overflow: hidden;\n}\n.tab-lg-dark:hover .tab_text-dark {\n  background: none;\n  -webkit-background-clip: initial;\n  -webkit-text-fill-color: initial;\n  background-clip: initial;\n  color: rgb(255, 255, 255);\n}\n.tab-lg-dark:focus-within {\n  width: fit-content;\n  min-width: 240px;\n  overflow: hidden;\n}\n.tab-lg-dark:focus-within .tab_text-dark {\n  background: none;\n  -webkit-background-clip: initial;\n  -webkit-text-fill-color: initial;\n  background-clip: initial;\n  color: rgb(255, 255, 255);\n}\n.tab-lg-dark:active {\n  background-color: rgb(54, 54, 55);\n  color: rgb(255, 255, 255);\n}\n.tab-lg-dark:disabled {\n  background-color: rgb(54, 54, 55);\n  border: rgb(32, 32, 32);\n  color: rgb(255, 255, 255);\n}\n.tab-lg-dark.tab_selected {\n  background-color: rgb(54, 54, 55);\n  border-bottom: 2px solid rgb(6, 149, 208);\n  color: rgb(255, 255, 255);\n}\n.tab-lg-dark.tab_selected:active {\n  background-color: rgb(54, 54, 55);\n  color: rgb(255, 255, 255);\n}\n.tab-list-high-contrast {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  width: fit-content;\n  height: fit-content;\n  padding: 0;\n  background: rgb(0, 0, 0);\n  margin: 0;\n  list-style: none;\n  border-radius: 4px 4px 0 0;\n}\n.tab-and-close-button-high-contrast {\n  display: flex;\n  justify-content: flex-start;\n  color: inherit;\n  align-items: center;\n  border-radius: 4px 4px 0 0;\n  position: relative;\n  background: inherit;\n  border: none;\n  box-sizing: border-box;\n  font-size: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: calc(100% - 30px);\n  height: fit-content;\n  white-space: nowrap;\n  flex-direction: row;\n}\n.close-button-high-contrast {\n  display: flex;\n  align-items: center;\n  border: none;\n  box-sizing: inherit;\n  justify-content: center;\n  width: 30px;\n  height: inherit;\n  border-bottom: inherit;\n  padding: 0;\n  color: inherit;\n  background: inherit;\n}\n.close-button-high-contrast:hover {\n  color: red;\n}\n.tab-plus-button-high-contrast {\n  display: flex;\n  align-items: center;\n  margin-left: 5px;\n  justify-content: center;\n  border: none;\n  width: 24px;\n  height: 24px;\n  border: none;\n  background: inherit;\n}\n.tab-plus-button-high-contrast:hover {\n  background: rgba(0, 159, 193, 0.4);\n  border: 2px solid rgb(117, 189, 219);\n  border-radius: 4px;\n}\n.tab-plus-button-high-contrast:focus-visible {\n  outline: rgb(117, 189, 219) auto 2px;\n}\n.tab_text-high-contrast {\n  display: flex;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  max-width: 100%;\n  background: linear-gradient(90deg, rgb(255, 255, 255) 85%, rgb(255, 255, 255) 85%, rgba(32, 32, 32, 0) 98.34%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.tab-sm-high-contrast {\n  background-color: rgb(0, 0, 0);\n  color: rgb(255, 255, 255);\n  width: 160px;\n  height: 35px;\n  line-height: 1.5;\n  display: flex;\n  box-sizing: border-box;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid rgb(255, 255, 255);\n  border-bottom: none;\n  position: relative;\n  border-radius: 4px 4px 0 0;\n  text-align: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 17.5px;\n}\n.tab-sm-high-contrast:hover {\n  background-color: #009FC1;\n  border: rgb(117, 189, 219);\n  color: rgb(255, 255, 255);\n  width: fit-content;\n  min-width: 160px;\n  overflow: hidden;\n}\n.tab-sm-high-contrast:hover .tab_text-high-contrast {\n  background: none;\n  -webkit-background-clip: initial;\n  -webkit-text-fill-color: initial;\n  background-clip: initial;\n  color: rgb(255, 255, 255);\n}\n.tab-sm-high-contrast:focus-within {\n  width: fit-content;\n  min-width: 160px;\n  overflow: hidden;\n}\n.tab-sm-high-contrast:focus-within .tab_text-high-contrast {\n  background: none;\n  -webkit-background-clip: initial;\n  -webkit-text-fill-color: initial;\n  background-clip: initial;\n  color: rgb(255, 255, 255);\n}\n.tab-sm-high-contrast:active {\n  background-color: rgb(0, 0, 0);\n  border: #009FC1;\n  color: rgb(255, 255, 255);\n}\n.tab-sm-high-contrast:disabled {\n  background-color: rgb(54, 54, 55);\n  border: rgb(32, 32, 32);\n  color: rgb(255, 255, 255);\n}\n.tab-sm-high-contrast.tab_selected {\n  background-color: rgb(0, 0, 0);\n  border-bottom: 2px solid rgb(58, 220, 255);\n  color: rgb(255, 255, 255);\n}\n.tab-sm-high-contrast.tab_selected:active {\n  background-color: rgb(0, 0, 0);\n  color: rgb(255, 255, 255);\n}\n.tab-md-high-contrast {\n  background-color: rgb(0, 0, 0);\n  color: rgb(255, 255, 255);\n  width: 200px;\n  height: 40px;\n  line-height: 1.5;\n  display: flex;\n  box-sizing: border-box;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid rgb(255, 255, 255);\n  border-bottom: none;\n  position: relative;\n  border-radius: 4px 4px 0 0;\n  text-align: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 20px;\n}\n.tab-md-high-contrast:hover {\n  background-color: #009FC1;\n  border: rgb(117, 189, 219);\n  color: rgb(255, 255, 255);\n  width: fit-content;\n  min-width: 200px;\n  overflow: hidden;\n}\n.tab-md-high-contrast:hover .tab_text-high-contrast {\n  background: none;\n  -webkit-background-clip: initial;\n  -webkit-text-fill-color: initial;\n  background-clip: initial;\n  color: rgb(255, 255, 255);\n}\n.tab-md-high-contrast:focus-within {\n  width: fit-content;\n  min-width: 200px;\n  overflow: hidden;\n}\n.tab-md-high-contrast:focus-within .tab_text-high-contrast {\n  background: none;\n  -webkit-background-clip: initial;\n  -webkit-text-fill-color: initial;\n  background-clip: initial;\n  color: rgb(255, 255, 255);\n}\n.tab-md-high-contrast:active {\n  background-color: rgb(0, 0, 0);\n  border: #009FC1;\n  color: rgb(255, 255, 255);\n}\n.tab-md-high-contrast:disabled {\n  background-color: rgb(54, 54, 55);\n  border: rgb(32, 32, 32);\n  color: rgb(255, 255, 255);\n}\n.tab-md-high-contrast.tab_selected {\n  background-color: rgb(0, 0, 0);\n  border-bottom: 2px solid rgb(58, 220, 255);\n  color: rgb(255, 255, 255);\n}\n.tab-md-high-contrast.tab_selected:active {\n  background-color: rgb(0, 0, 0);\n  color: rgb(255, 255, 255);\n}\n.tab-lg-high-contrast {\n  background-color: rgb(0, 0, 0);\n  color: rgb(255, 255, 255);\n  width: 240px;\n  height: 45px;\n  line-height: 1.5;\n  display: flex;\n  box-sizing: border-box;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid rgb(255, 255, 255);\n  border-bottom: none;\n  position: relative;\n  border-radius: 4px 4px 0 0;\n  text-align: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 22.5px;\n}\n.tab-lg-high-contrast:hover {\n  background-color: #009FC1;\n  border: rgb(117, 189, 219);\n  color: rgb(255, 255, 255);\n  width: fit-content;\n  min-width: 240px;\n  overflow: hidden;\n}\n.tab-lg-high-contrast:hover .tab_text-high-contrast {\n  background: none;\n  -webkit-background-clip: initial;\n  -webkit-text-fill-color: initial;\n  background-clip: initial;\n  color: rgb(255, 255, 255);\n}\n.tab-lg-high-contrast:focus-within {\n  width: fit-content;\n  min-width: 240px;\n  overflow: hidden;\n}\n.tab-lg-high-contrast:focus-within .tab_text-high-contrast {\n  background: none;\n  -webkit-background-clip: initial;\n  -webkit-text-fill-color: initial;\n  background-clip: initial;\n  color: rgb(255, 255, 255);\n}\n.tab-lg-high-contrast:active {\n  background-color: rgb(0, 0, 0);\n  border: #009FC1;\n  color: rgb(255, 255, 255);\n}\n.tab-lg-high-contrast:disabled {\n  background-color: rgb(54, 54, 55);\n  border: rgb(32, 32, 32);\n  color: rgb(255, 255, 255);\n}\n.tab-lg-high-contrast.tab_selected {\n  background-color: rgb(0, 0, 0);\n  border-bottom: 2px solid rgb(58, 220, 255);\n  color: rgb(255, 255, 255);\n}\n.tab-lg-high-contrast.tab_selected:active {\n  background-color: rgb(0, 0, 0);\n  color: rgb(255, 255, 255);\n}\n.new-tab-button-full-width {\n  width: 100%;\n}\n.container--grid--mobile {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  margin: 24px;\n  border-radius: 4px;\n  height: 624px;\n  max-width: 326px;\n  justify-items: stretch;\n  grid-auto-flow: dense;\n  grid-auto-rows: minmax(0, auto);\n}\n.container--grid--tablet {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 24px;\n  margin: 40px;\n  border-radius: 4px;\n  height: 624px;\n  max-width: 768px;\n  justify-items: stretch;\n  grid-auto-flow: dense;\n  grid-auto-rows: minmax(0, auto);\n}\n.container--grid--desktop {\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  grid-gap: 24px;\n  margin: 40px;\n  border-radius: 4px;\n  height: 624px;\n  max-width: 1090px;\n  justify-items: stretch;\n  grid-auto-flow: dense;\n  grid-auto-rows: minmax(0, auto);\n}\n.container--grid--responsive {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  margin: 24px;\n  border-radius: 4px;\n  height: 624px;\n  max-width: 326px;\n  justify-items: stretch;\n  min-width: 320px;\n  grid-auto-flow: dense;\n  grid-auto-rows: minmax(0, auto);\n}\n@media only screen and (min-width: 768px) {\n  .container--grid--responsive {\n    grid-template-columns: repeat(6, 1fr);\n    grid-gap: 24px;\n    margin: 40px;\n    border-radius: 4px;\n    height: 624px;\n    max-width: 768px;\n    justify-items: stretch;\n    min-width: 0;\n  }\n}\n@media only screen and (min-width: 1090px) {\n  .container--grid--responsive {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n    margin: 40px;\n    border-radius: 4px;\n    height: 624px;\n    max-width: 1090px;\n    justify-items: stretch;\n    min-width: 0;\n  }\n}\n.container--flex--mobile {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 24px;\n  border-radius: 4px;\n  height: 624px;\n  max-width: 326px;\n  justify-content: stretch;\n}\n.container--flex--tablet {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 40px;\n  border-radius: 4px;\n  height: 624px;\n  max-width: 768px;\n  justify-content: stretch;\n}\n.container--flex--desktop {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 40px;\n  border-radius: 4px;\n  height: 624px;\n  max-width: 1090px;\n  justify-content: stretch;\n}\n.container--flex--responsive {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 24px;\n  border-radius: 4px;\n  height: 624px;\n  max-width: 326px;\n  justify-content: stretch;\n  min-width: 320px;\n}\n@media only screen and (min-width: 768px) {\n  .container--flex--responsive {\n    margin: 40px;\n    border-radius: 4px;\n    height: 624px;\n    max-width: 768px;\n    justify-content: stretch;\n    min-width: 0;\n  }\n}\n@media only screen and (min-width: 1090px) {\n  .container--flex--responsive {\n    margin: 40px;\n    border-radius: 4px;\n    height: 624px;\n    max-width: 1090px;\n    justify-content: stretch;\n    min-width: 0;\n  }\n}\n.option-row {\n  display: grid;\n  grid-gap: 32px;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  padding: 0 32px;\n  justify-items: center;\n}\n@media (max-width: 500px) {\n  .option-row {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.QuorumUIContainer {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  position: relative;\n  z-index: 1;\n  height: 50vh;\n  min-height: 100px;\n  max-height: 1000px;\n  width: 100%;\n  border-top: 1px solid rgb(6, 149, 208);\n  border-bottom: 1px solid rgb(6, 149, 208);\n  background-color: white;\n  font-family: Montserrat, sans-serif;\n}\n.modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 80%;\n  max-width: 500px;\n  background-color: #ffffff;\n  padding: 20px;\n  border-radius: 5px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n  z-index: 1000;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;\n}\n.modal.open {\n  opacity: 1;\n  visibility: visible;\n}\n.backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 900;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;\n}\n.backdrop.open {\n  opacity: 1;\n  visibility: visible;\n}\n.selectionList__outer--container--light {\n  width: initial;\n  border-radius: 16px;\n  margin-top: 8px;\n  height: 298px;\n  min-height: 200px;\n  padding: 16px;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  background-color: rgb(255, 255, 255);\n  border: 1px solid rgb(215, 215, 215);\n  color: rgb(0, 0, 0);\n}\n.selectionList__inner--container--light {\n  width: auto;\n  overflow-y: auto;\n  height: 298px;\n  min-height: 200px;\n  background-color: inherit;\n  padding: 0;\n  border: none;\n  margin-left: 0;\n}\n.selectionList__item--light {\n  align-items: center;\n  background-color: rgb(255, 255, 255);\n  border-radius: 8px;\n  border: none;\n  box-sizing: border-box;\n  color: rgb(0, 0, 0);\n  display: flex;\n  font-family: Montserrat;\n  font-size: 16px;\n  font-weight: 400;\n  gap: 8px;\n  height: 60px;\n  justify-content: space-between;\n  margin: 0;\n  padding: 8px 16px 8px 16px;\n  width: 100%;\n}\n.selectionList__item__icon--light {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background-color: rgb(255, 255, 255);\n  border: 1px solid rgb(215, 215, 215);\n  color: rgb(0, 0, 0);\n}\n.selectionList__item--light:hover {\n  background-color: rgb(18, 90, 119);\n  border: 1px solid rgb(172, 209, 223);\n  color: rgb(255, 255, 255);\n  font-weight: 700;\n}\n.selectionList__item--light:focus-visible {\n  border: 1px solid rgb(6, 149, 208);\n  outline: rgb(6, 149, 208);\n  color: rgb(0, 0, 0);\n}\n.selectionList__item--light.selected {\n  color: rgb(0, 0, 0);\n}\n.selectionList__item--light.selected:hover:focus-visible {\n  color: rgb(255, 255, 255);\n}\n.selectionList__item--light.selected:hover {\n  color: rgb(255, 255, 255);\n}\n.selectionList__inner--container--light::-webkit-scrollbar {\n  width: 8px;\n  background-color: transparent;\n}\n.selectionList__inner--container--light::-webkit-scrollbar-thumb {\n  background-color: rgb(18, 90, 119);\n  margin-right: 8px;\n  border-radius: 8px;\n}\n.selectionList__inner--container--light::-webkit-scrollbar-thumb:hover {\n  background-color: rgb(18, 90, 119);\n}\n.selectionList__inner--container--light::-webkit-scrollbar-thumb:active {\n  background-color: rgb(18, 90, 119);\n}\n.selectionList__outer--container--dark {\n  width: initial;\n  border-radius: 16px;\n  margin-top: 8px;\n  height: 298px;\n  min-height: 200px;\n  padding: 16px;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  background-color: rgb(54, 54, 55);\n  border: 1px solid rgb(215, 215, 215);\n  color: rgb(255, 255, 255);\n}\n.selectionList__inner--container--dark {\n  width: auto;\n  overflow-y: auto;\n  height: 298px;\n  min-height: 200px;\n  background-color: inherit;\n  padding: 0;\n  border: none;\n  margin-left: 0;\n}\n.selectionList__item--dark {\n  align-items: center;\n  background-color: rgb(54, 54, 55);\n  border-radius: 8px;\n  border: none;\n  box-sizing: border-box;\n  color: rgb(255, 255, 255);\n  display: flex;\n  font-family: Montserrat;\n  font-size: 16px;\n  font-weight: 400;\n  gap: 8px;\n  height: 60px;\n  justify-content: space-between;\n  margin: 0;\n  padding: 8px 16px 8px 16px;\n  width: 100%;\n}\n.selectionList__item__icon--dark {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background-color: rgb(54, 54, 55);\n  border: 1px solid rgb(215, 215, 215);\n  color: rgb(255, 255, 255);\n}\n.selectionList__item--dark:hover {\n  background-color: rgb(172, 209, 223);\n  border: 1px solid rgb(172, 209, 223);\n  font-weight: 700;\n}\n.selectionList__item--dark:focus-visible {\n  border: 1px solid rgb(6, 149, 208);\n  outline: rgb(6, 149, 208);\n  color: rgb(255, 255, 255);\n}\n.selectionList__item--dark.selected {\n  color: rgb(255, 255, 255);\n}\n.selectionList__item--dark.selected:hover:focus-visible {\n  color: rgb(255, 255, 255);\n}\n.selectionList__item--dark.selected:hover {\n  color: rgb(255, 255, 255);\n}\n.selectionList__inner--container--dark::-webkit-scrollbar {\n  width: 8px;\n  background-color: transparent;\n}\n.selectionList__inner--container--dark::-webkit-scrollbar-thumb {\n  background-color: rgb(172, 209, 223);\n  margin-right: 8px;\n  border-radius: 8px;\n}\n.selectionList__inner--container--dark::-webkit-scrollbar-thumb:hover {\n  background-color: rgb(172, 209, 223);\n}\n.selectionList__inner--container--dark::-webkit-scrollbar-thumb:active {\n  background-color: rgb(172, 209, 223);\n}\n.selectionList__outer--container--high-contrast {\n  width: initial;\n  border-radius: 16px;\n  margin-top: 8px;\n  height: 298px;\n  min-height: 200px;\n  padding: 16px;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  background-color: rgb(0, 0, 0);\n  border: 1px solid rgb(215, 215, 215);\n  color: rgb(255, 255, 255);\n}\n.selectionList__inner--container--high-contrast {\n  width: auto;\n  overflow-y: auto;\n  height: 298px;\n  min-height: 200px;\n  background-color: inherit;\n  padding: 0;\n  border: none;\n  margin-left: 0;\n}\n.selectionList__item--high-contrast {\n  align-items: center;\n  background-color: rgb(0, 0, 0);\n  border-radius: 8px;\n  border: none;\n  box-sizing: border-box;\n  color: rgb(255, 255, 255);\n  display: flex;\n  font-family: Montserrat;\n  font-size: 16px;\n  font-weight: 400;\n  gap: 8px;\n  height: 60px;\n  justify-content: space-between;\n  margin: 0;\n  padding: 8px 16px 8px 16px;\n  width: 100%;\n}\n.selectionList__item__icon--high-contrast {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background-color: rgb(0, 0, 0);\n  border: 1px solid rgb(215, 215, 215);\n  color: rgb(255, 255, 255);\n}\n.selectionList__item--high-contrast:hover {\n  background-color: rgb(172, 209, 223);\n  border: 1px solid rgb(172, 209, 223);\n  font-weight: 700;\n}\n.selectionList__item--high-contrast:focus-visible {\n  border: 1px solid rgb(6, 149, 208);\n  outline: rgb(6, 149, 208);\n  color: rgb(255, 255, 255);\n}\n.selectionList__item--high-contrast.selected {\n  color: rgb(255, 255, 255);\n}\n.selectionList__item--high-contrast.selected:hover:focus-visible {\n  color: rgb(255, 255, 255);\n}\n.selectionList__item--high-contrast.selected:hover {\n  color: rgb(255, 255, 255);\n}\n.selectionList__inner--container--high-contrast::-webkit-scrollbar {\n  width: 8px;\n  background-color: transparent;\n}\n.selectionList__inner--container--high-contrast::-webkit-scrollbar-thumb {\n  background-color: rgb(172, 209, 223);\n  margin-right: 8px;\n  border-radius: 8px;\n}\n.selectionList__inner--container--high-contrast::-webkit-scrollbar-thumb:hover {\n  background-color: rgb(172, 209, 223);\n}\n.selectionList__inner--container--high-contrast::-webkit-scrollbar-thumb:active {\n  background-color: rgb(172, 209, 223);\n}\n.textField--sm--light {\n  background-color: rgb(255, 255, 255) !important;\n  border: 1px solid rgb(64, 64, 64) !important;\n  color: rgb(0, 0, 0) !important;\n  height: 32px;\n  border-radius: 4px;\n  padding: 0 8px;\n  font-size: 14px;\n  line-height: 16px;\n  font-family: Montserrat, sans-serif;\n  font-weight: 400;\n  box-sizing: initial !important;\n}\n.textField--sm--light:disabled {\n  background-color: rgb(215, 215, 215) !important;\n  border-color: rgb(64, 64, 64) !important;\n  color: rgb(114, 114, 114) !important;\n}\n.textField--sm--light:focus-visible {\n  border-color: rgb(172, 209, 223) !important;\n  color: !important;\n}\n.textField--sm--light::placeholder {\n  color: rgb(114, 114, 114) !important;\n}\n.textField--sm--light.error {\n  border-color: rgb(148, 9, 1) !important;\n}\n.textField--md--light {\n  background-color: rgb(255, 255, 255) !important;\n  border: 1px solid rgb(64, 64, 64) !important;\n  color: rgb(0, 0, 0) !important;\n  height: 40px;\n  border-radius: 4px;\n  padding: 0 12px;\n  font-size: 16px;\n  line-height: 20px;\n  font-family: Montserrat, sans-serif;\n  font-weight: 400;\n  box-sizing: initial !important;\n}\n.textField--md--light:disabled {\n  background-color: rgb(215, 215, 215) !important;\n  border-color: rgb(64, 64, 64) !important;\n  color: rgb(114, 114, 114) !important;\n}\n.textField--md--light:focus-visible {\n  border-color: rgb(172, 209, 223) !important;\n  color: !important;\n}\n.textField--md--light::placeholder {\n  color: rgb(114, 114, 114) !important;\n}\n.textField--md--light.error {\n  border-color: rgb(148, 9, 1) !important;\n}\n.textField--lg--light {\n  background-color: rgb(255, 255, 255) !important;\n  border: 1px solid rgb(64, 64, 64) !important;\n  color: rgb(0, 0, 0) !important;\n  height: 48px;\n  border-radius: 4px;\n  padding: 0 16px;\n  font-size: 18px;\n  line-height: 24px;\n  font-family: Montserrat, sans-serif;\n  font-weight: 400;\n  box-sizing: initial !important;\n}\n.textField--lg--light:disabled {\n  background-color: rgb(215, 215, 215) !important;\n  border-color: rgb(64, 64, 64) !important;\n  color: rgb(114, 114, 114) !important;\n}\n.textField--lg--light:focus-visible {\n  border-color: rgb(172, 209, 223) !important;\n  color: !important;\n}\n.textField--lg--light::placeholder {\n  color: rgb(114, 114, 114) !important;\n}\n.textField--lg--light.error {\n  border-color: rgb(148, 9, 1) !important;\n}\n.textField--sm--dark {\n  background-color: rgb(64, 64, 64) !important;\n  border: 1px solid rgb(114, 114, 114) !important;\n  color: rgb(215, 215, 215) !important;\n  height: 32px;\n  border-radius: 4px;\n  padding: 0 8px;\n  font-size: 14px;\n  line-height: 16px;\n  font-family: Montserrat, sans-serif;\n  font-weight: 400;\n  box-sizing: initial !important;\n}\n.textField--sm--dark:disabled {\n  background-color: rgb(43, 43, 43) !important;\n  border-color: rgb(114, 114, 114) !important;\n  color: rgb(101, 101, 101) !important;\n}\n.textField--sm--dark:focus-visible {\n  border-color: rgb(6, 149, 208) !important;\n  color: !important;\n}\n.textField--sm--dark::placeholder {\n  color: rgb(215, 215, 215) !important;\n}\n.textField--sm--dark.error {\n  border-color: rgb(255, 116, 116) !important;\n}\n.textField--md--dark {\n  background-color: rgb(64, 64, 64) !important;\n  border: 1px solid rgb(114, 114, 114) !important;\n  color: rgb(215, 215, 215) !important;\n  height: 40px;\n  border-radius: 4px;\n  padding: 0 12px;\n  font-size: 16px;\n  line-height: 20px;\n  font-family: Montserrat, sans-serif;\n  font-weight: 400;\n  box-sizing: initial !important;\n}\n.textField--md--dark:disabled {\n  background-color: rgb(43, 43, 43) !important;\n  border-color: rgb(114, 114, 114) !important;\n  color: rgb(101, 101, 101) !important;\n}\n.textField--md--dark:focus-visible {\n  border-color: rgb(6, 149, 208) !important;\n  color: !important;\n}\n.textField--md--dark::placeholder {\n  color: rgb(215, 215, 215) !important;\n}\n.textField--md--dark.error {\n  border-color: rgb(255, 116, 116) !important;\n}\n.textField--lg--dark {\n  background-color: rgb(64, 64, 64) !important;\n  border: 1px solid rgb(114, 114, 114) !important;\n  color: rgb(215, 215, 215) !important;\n  height: 48px;\n  border-radius: 4px;\n  padding: 0 16px;\n  font-size: 18px;\n  line-height: 24px;\n  font-family: Montserrat, sans-serif;\n  font-weight: 400;\n  box-sizing: initial !important;\n}\n.textField--lg--dark:disabled {\n  background-color: rgb(43, 43, 43) !important;\n  border-color: rgb(114, 114, 114) !important;\n  color: rgb(101, 101, 101) !important;\n}\n.textField--lg--dark:focus-visible {\n  border-color: rgb(6, 149, 208) !important;\n  color: !important;\n}\n.textField--lg--dark::placeholder {\n  color: rgb(215, 215, 215) !important;\n}\n.textField--lg--dark.error {\n  border-color: rgb(255, 116, 116) !important;\n}\n.textField--sm--high-contrast {\n  background-color: rgb(0, 0, 0) !important;\n  border: 1px solid rgb(215, 215, 215) !important;\n  color: rgb(255, 255, 255) !important;\n  height: 32px;\n  border-radius: 4px;\n  padding: 0 8px;\n  font-size: 14px;\n  line-height: 16px;\n  font-family: Montserrat, sans-serif;\n  font-weight: 400;\n  box-sizing: initial !important;\n}\n.textField--sm--high-contrast:disabled {\n  background-color: rgb(246, 246, 247) !important;\n  border-color: rgb(215, 215, 215) !important;\n  color: !important;\n}\n.textField--sm--high-contrast:focus-visible {\n  border-color: rgb(6, 149, 208) !important;\n  color: !important;\n}\n.textField--sm--high-contrast::placeholder {\n  color: !important;\n}\n.textField--sm--high-contrast.error {\n  border-color: rgb(255, 0, 0) !important;\n}\n.textField--md--high-contrast {\n  background-color: rgb(0, 0, 0) !important;\n  border: 1px solid rgb(215, 215, 215) !important;\n  color: rgb(255, 255, 255) !important;\n  height: 40px;\n  border-radius: 4px;\n  padding: 0 12px;\n  font-size: 16px;\n  line-height: 20px;\n  font-family: Montserrat, sans-serif;\n  font-weight: 400;\n  box-sizing: initial !important;\n}\n.textField--md--high-contrast:disabled {\n  background-color: rgb(246, 246, 247) !important;\n  border-color: rgb(215, 215, 215) !important;\n  color: !important;\n}\n.textField--md--high-contrast:focus-visible {\n  border-color: rgb(6, 149, 208) !important;\n  color: !important;\n}\n.textField--md--high-contrast::placeholder {\n  color: !important;\n}\n.textField--md--high-contrast.error {\n  border-color: rgb(255, 0, 0) !important;\n}\n.textField--lg--high-contrast {\n  background-color: rgb(0, 0, 0) !important;\n  border: 1px solid rgb(215, 215, 215) !important;\n  color: rgb(255, 255, 255) !important;\n  height: 48px;\n  border-radius: 4px;\n  padding: 0 16px;\n  font-size: 18px;\n  line-height: 24px;\n  font-family: Montserrat, sans-serif;\n  font-weight: 400;\n  box-sizing: initial !important;\n}\n.textField--lg--high-contrast:disabled {\n  background-color: rgb(246, 246, 247) !important;\n  border-color: rgb(215, 215, 215) !important;\n  color: !important;\n}\n.textField--lg--high-contrast:focus-visible {\n  border-color: rgb(6, 149, 208) !important;\n  color: !important;\n}\n.textField--lg--high-contrast::placeholder {\n  color: !important;\n}\n.textField--lg--high-contrast.error {\n  border-color: rgb(255, 0, 0) !important;\n}\n.textField--sm--light--Licon1 {\n  background-color: rgb(255, 255, 255);\n  background-image: url("/widget-svg/icon1-0.7.39.svg");\n  background-position: 8px 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(64, 64, 64);\n  color: rgb(0, 0, 0);\n  font-family: Montserrat, sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  height: 32px;\n  line-height: 16px;\n  padding-left: 32px;\n  padding: 0 8px;\n  position: relative;\n}\n.textField--sm--light--Licon1.error {\n  border-color: rgb(148, 9, 1);\n}\n.textField--sm--light--Licon1:disabled {\n  background-color: rgb(215, 215, 215);\n  border-color: rgb(64, 64, 64);\n  color: rgb(114, 114, 114);\n}\n.textField--sm--light--Licon1:focus {\n  border-color: rgb(172, 209, 223);\n}\n.textField--sm--light--Licon1::placeholder {\n  color: rgb(114, 114, 114);\n}\n.textField--sm--light--Licon2 {\n  background-color: rgb(255, 255, 255);\n  background-image: url("/widget-svg/icon2-0.7.39.svg");\n  background-position: 8px 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(64, 64, 64);\n  color: rgb(0, 0, 0);\n  font-family: Montserrat, sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  height: 32px;\n  line-height: 16px;\n  padding-left: 32px;\n  padding: 0 8px;\n  position: relative;\n}\n.textField--sm--light--Licon2.error {\n  border-color: rgb(148, 9, 1);\n}\n.textField--sm--light--Licon2:disabled {\n  background-color: rgb(215, 215, 215);\n  border-color: rgb(64, 64, 64);\n  color: rgb(114, 114, 114);\n}\n.textField--sm--light--Licon2:focus {\n  border-color: rgb(172, 209, 223);\n}\n.textField--sm--light--Licon2::placeholder {\n  color: rgb(114, 114, 114);\n}\n.textField--sm--light--Licon3 {\n  background-color: rgb(255, 255, 255);\n  background-image: url("/widget-svg/icon3-0.7.39.svg");\n  background-position: 8px 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(64, 64, 64);\n  color: rgb(0, 0, 0);\n  font-family: Montserrat, sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  height: 32px;\n  line-height: 16px;\n  padding-left: 32px;\n  padding: 0 8px;\n  position: relative;\n}\n.textField--sm--light--Licon3.error {\n  border-color: rgb(148, 9, 1);\n}\n.textField--sm--light--Licon3:disabled {\n  background-color: rgb(215, 215, 215);\n  border-color: rgb(64, 64, 64);\n  color: rgb(114, 114, 114);\n}\n.textField--sm--light--Licon3:focus {\n  border-color: rgb(172, 209, 223);\n}\n.textField--sm--light--Licon3::placeholder {\n  color: rgb(114, 114, 114);\n}\n.textField--md--light--Licon1 {\n  background-color: rgb(255, 255, 255);\n  background-image: url("/widget-svg/icon1-0.7.39.svg");\n  background-position: 8px 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(64, 64, 64);\n  color: rgb(0, 0, 0);\n  font-family: Montserrat, sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  height: 40px;\n  line-height: 20px;\n  padding-left: 40px;\n  padding: 0 12px;\n  position: relative;\n}\n.textField--md--light--Licon1.error {\n  border-color: rgb(148, 9, 1);\n}\n.textField--md--light--Licon1:disabled {\n  background-color: rgb(215, 215, 215);\n  border-color: rgb(64, 64, 64);\n  color: rgb(114, 114, 114);\n}\n.textField--md--light--Licon1:focus {\n  border-color: rgb(172, 209, 223);\n}\n.textField--md--light--Licon1::placeholder {\n  color: rgb(114, 114, 114);\n}\n.textField--md--light--Licon2 {\n  background-color: rgb(255, 255, 255);\n  background-image: url("/widget-svg/icon2-0.7.39.svg");\n  background-position: 8px 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(64, 64, 64);\n  color: rgb(0, 0, 0);\n  font-family: Montserrat, sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  height: 40px;\n  line-height: 20px;\n  padding-left: 40px;\n  padding: 0 12px;\n  position: relative;\n}\n.textField--md--light--Licon2.error {\n  border-color: rgb(148, 9, 1);\n}\n.textField--md--light--Licon2:disabled {\n  background-color: rgb(215, 215, 215);\n  border-color: rgb(64, 64, 64);\n  color: rgb(114, 114, 114);\n}\n.textField--md--light--Licon2:focus {\n  border-color: rgb(172, 209, 223);\n}\n.textField--md--light--Licon2::placeholder {\n  color: rgb(114, 114, 114);\n}\n.textField--md--light--Licon3 {\n  background-color: rgb(255, 255, 255);\n  background-image: url("/widget-svg/icon3-0.7.39.svg");\n  background-position: 8px 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(64, 64, 64);\n  color: rgb(0, 0, 0);\n  font-family: Montserrat, sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  height: 40px;\n  line-height: 20px;\n  padding-left: 40px;\n  padding: 0 12px;\n  position: relative;\n}\n.textField--md--light--Licon3.error {\n  border-color: rgb(148, 9, 1);\n}\n.textField--md--light--Licon3:disabled {\n  background-color: rgb(215, 215, 215);\n  border-color: rgb(64, 64, 64);\n  color: rgb(114, 114, 114);\n}\n.textField--md--light--Licon3:focus {\n  border-color: rgb(172, 209, 223);\n}\n.textField--md--light--Licon3::placeholder {\n  color: rgb(114, 114, 114);\n}\n.textField--lg--light--Licon1 {\n  background-color: rgb(255, 255, 255);\n  background-image: url("/widget-svg/icon1-0.7.39.svg");\n  background-position: 8px 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(64, 64, 64);\n  color: rgb(0, 0, 0);\n  font-family: Montserrat, sans-serif;\n  font-size: 18px;\n  font-weight: 400;\n  height: 48px;\n  line-height: 24px;\n  padding-left: 48px;\n  padding: 0 16px;\n  position: relative;\n}\n.textField--lg--light--Licon1.error {\n  border-color: rgb(148, 9, 1);\n}\n.textField--lg--light--Licon1:disabled {\n  background-color: rgb(215, 215, 215);\n  border-color: rgb(64, 64, 64);\n  color: rgb(114, 114, 114);\n}\n.textField--lg--light--Licon1:focus {\n  border-color: rgb(172, 209, 223);\n}\n.textField--lg--light--Licon1::placeholder {\n  color: rgb(114, 114, 114);\n}\n.textField--lg--light--Licon2 {\n  background-color: rgb(255, 255, 255);\n  background-image: url("/widget-svg/icon2-0.7.39.svg");\n  background-position: 8px 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(64, 64, 64);\n  color: rgb(0, 0, 0);\n  font-family: Montserrat, sans-serif;\n  font-size: 18px;\n  font-weight: 400;\n  height: 48px;\n  line-height: 24px;\n  padding-left: 48px;\n  padding: 0 16px;\n  position: relative;\n}\n.textField--lg--light--Licon2.error {\n  border-color: rgb(148, 9, 1);\n}\n.textField--lg--light--Licon2:disabled {\n  background-color: rgb(215, 215, 215);\n  border-color: rgb(64, 64, 64);\n  color: rgb(114, 114, 114);\n}\n.textField--lg--light--Licon2:focus {\n  border-color: rgb(172, 209, 223);\n}\n.textField--lg--light--Licon2::placeholder {\n  color: rgb(114, 114, 114);\n}\n.textField--lg--light--Licon3 {\n  background-color: rgb(255, 255, 255);\n  background-image: url("/widget-svg/icon3-0.7.39.svg");\n  background-position: 8px 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(64, 64, 64);\n  color: rgb(0, 0, 0);\n  font-family: Montserrat, sans-serif;\n  font-size: 18px;\n  font-weight: 400;\n  height: 48px;\n  line-height: 24px;\n  padding-left: 48px;\n  padding: 0 16px;\n  position: relative;\n}\n.textField--lg--light--Licon3.error {\n  border-color: rgb(148, 9, 1);\n}\n.textField--lg--light--Licon3:disabled {\n  background-color: rgb(215, 215, 215);\n  border-color: rgb(64, 64, 64);\n  color: rgb(114, 114, 114);\n}\n.textField--lg--light--Licon3:focus {\n  border-color: rgb(172, 209, 223);\n}\n.textField--lg--light--Licon3::placeholder {\n  color: rgb(114, 114, 114);\n}\n.textField--sm--dark--Licon1 {\n  background-color: rgb(64, 64, 64);\n  background-image: url("/widget-svg/icon1-0.7.39.svg");\n  background-position: 8px 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(114, 114, 114);\n  color: rgb(215, 215, 215);\n  font-family: Montserrat, sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  height: 32px;\n  line-height: 16px;\n  padding-left: 32px;\n  padding: 0 8px;\n  position: relative;\n}\n.textField--sm--dark--Licon1.error {\n  border-color: rgb(255, 116, 116);\n}\n.textField--sm--dark--Licon1:disabled {\n  background-color: rgb(43, 43, 43);\n  border-color: rgb(114, 114, 114);\n  color: rgb(101, 101, 101);\n}\n.textField--sm--dark--Licon1:focus {\n  border-color: rgb(6, 149, 208);\n}\n.textField--sm--dark--Licon1::placeholder {\n  color: rgb(215, 215, 215);\n}\n.textField--sm--dark--Licon2 {\n  background-color: rgb(64, 64, 64);\n  background-image: url("/widget-svg/icon2-0.7.39.svg");\n  background-position: 8px 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(114, 114, 114);\n  color: rgb(215, 215, 215);\n  font-family: Montserrat, sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  height: 32px;\n  line-height: 16px;\n  padding-left: 32px;\n  padding: 0 8px;\n  position: relative;\n}\n.textField--sm--dark--Licon2.error {\n  border-color: rgb(255, 116, 116);\n}\n.textField--sm--dark--Licon2:disabled {\n  background-color: rgb(43, 43, 43);\n  border-color: rgb(114, 114, 114);\n  color: rgb(101, 101, 101);\n}\n.textField--sm--dark--Licon2:focus {\n  border-color: rgb(6, 149, 208);\n}\n.textField--sm--dark--Licon2::placeholder {\n  color: rgb(215, 215, 215);\n}\n.textField--sm--dark--Licon3 {\n  background-color: rgb(64, 64, 64);\n  background-image: url("/widget-svg/icon3-0.7.39.svg");\n  background-position: 8px 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(114, 114, 114);\n  color: rgb(215, 215, 215);\n  font-family: Montserrat, sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  height: 32px;\n  line-height: 16px;\n  padding-left: 32px;\n  padding: 0 8px;\n  position: relative;\n}\n.textField--sm--dark--Licon3.error {\n  border-color: rgb(255, 116, 116);\n}\n.textField--sm--dark--Licon3:disabled {\n  background-color: rgb(43, 43, 43);\n  border-color: rgb(114, 114, 114);\n  color: rgb(101, 101, 101);\n}\n.textField--sm--dark--Licon3:focus {\n  border-color: rgb(6, 149, 208);\n}\n.textField--sm--dark--Licon3::placeholder {\n  color: rgb(215, 215, 215);\n}\n.textField--md--dark--Licon1 {\n  background-color: rgb(64, 64, 64);\n  background-image: url("/widget-svg/icon1-0.7.39.svg");\n  background-position: 8px 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(114, 114, 114);\n  color: rgb(215, 215, 215);\n  font-family: Montserrat, sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  height: 40px;\n  line-height: 20px;\n  padding-left: 40px;\n  padding: 0 12px;\n  position: relative;\n}\n.textField--md--dark--Licon1.error {\n  border-color: rgb(255, 116, 116);\n}\n.textField--md--dark--Licon1:disabled {\n  background-color: rgb(43, 43, 43);\n  border-color: rgb(114, 114, 114);\n  color: rgb(101, 101, 101);\n}\n.textField--md--dark--Licon1:focus {\n  border-color: rgb(6, 149, 208);\n}\n.textField--md--dark--Licon1::placeholder {\n  color: rgb(215, 215, 215);\n}\n.textField--md--dark--Licon2 {\n  background-color: rgb(64, 64, 64);\n  background-image: url("/widget-svg/icon2-0.7.39.svg");\n  background-position: 8px 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(114, 114, 114);\n  color: rgb(215, 215, 215);\n  font-family: Montserrat, sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  height: 40px;\n  line-height: 20px;\n  padding-left: 40px;\n  padding: 0 12px;\n  position: relative;\n}\n.textField--md--dark--Licon2.error {\n  border-color: rgb(255, 116, 116);\n}\n.textField--md--dark--Licon2:disabled {\n  background-color: rgb(43, 43, 43);\n  border-color: rgb(114, 114, 114);\n  color: rgb(101, 101, 101);\n}\n.textField--md--dark--Licon2:focus {\n  border-color: rgb(6, 149, 208);\n}\n.textField--md--dark--Licon2::placeholder {\n  color: rgb(215, 215, 215);\n}\n.textField--md--dark--Licon3 {\n  background-color: rgb(64, 64, 64);\n  background-image: url("/widget-svg/icon3-0.7.39.svg");\n  background-position: 8px 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(114, 114, 114);\n  color: rgb(215, 215, 215);\n  font-family: Montserrat, sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  height: 40px;\n  line-height: 20px;\n  padding-left: 40px;\n  padding: 0 12px;\n  position: relative;\n}\n.textField--md--dark--Licon3.error {\n  border-color: rgb(255, 116, 116);\n}\n.textField--md--dark--Licon3:disabled {\n  background-color: rgb(43, 43, 43);\n  border-color: rgb(114, 114, 114);\n  color: rgb(101, 101, 101);\n}\n.textField--md--dark--Licon3:focus {\n  border-color: rgb(6, 149, 208);\n}\n.textField--md--dark--Licon3::placeholder {\n  color: rgb(215, 215, 215);\n}\n.textField--lg--dark--Licon1 {\n  background-color: rgb(64, 64, 64);\n  background-image: url("/widget-svg/icon1-0.7.39.svg");\n  background-position: 8px 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(114, 114, 114);\n  color: rgb(215, 215, 215);\n  font-family: Montserrat, sans-serif;\n  font-size: 18px;\n  font-weight: 400;\n  height: 48px;\n  line-height: 24px;\n  padding-left: 48px;\n  padding: 0 16px;\n  position: relative;\n}\n.textField--lg--dark--Licon1.error {\n  border-color: rgb(255, 116, 116);\n}\n.textField--lg--dark--Licon1:disabled {\n  background-color: rgb(43, 43, 43);\n  border-color: rgb(114, 114, 114);\n  color: rgb(101, 101, 101);\n}\n.textField--lg--dark--Licon1:focus {\n  border-color: rgb(6, 149, 208);\n}\n.textField--lg--dark--Licon1::placeholder {\n  color: rgb(215, 215, 215);\n}\n.textField--lg--dark--Licon2 {\n  background-color: rgb(64, 64, 64);\n  background-image: url("/widget-svg/icon2-0.7.39.svg");\n  background-position: 8px 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(114, 114, 114);\n  color: rgb(215, 215, 215);\n  font-family: Montserrat, sans-serif;\n  font-size: 18px;\n  font-weight: 400;\n  height: 48px;\n  line-height: 24px;\n  padding-left: 48px;\n  padding: 0 16px;\n  position: relative;\n}\n.textField--lg--dark--Licon2.error {\n  border-color: rgb(255, 116, 116);\n}\n.textField--lg--dark--Licon2:disabled {\n  background-color: rgb(43, 43, 43);\n  border-color: rgb(114, 114, 114);\n  color: rgb(101, 101, 101);\n}\n.textField--lg--dark--Licon2:focus {\n  border-color: rgb(6, 149, 208);\n}\n.textField--lg--dark--Licon2::placeholder {\n  color: rgb(215, 215, 215);\n}\n.textField--lg--dark--Licon3 {\n  background-color: rgb(64, 64, 64);\n  background-image: url("/widget-svg/icon3-0.7.39.svg");\n  background-position: 8px 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(114, 114, 114);\n  color: rgb(215, 215, 215);\n  font-family: Montserrat, sans-serif;\n  font-size: 18px;\n  font-weight: 400;\n  height: 48px;\n  line-height: 24px;\n  padding-left: 48px;\n  padding: 0 16px;\n  position: relative;\n}\n.textField--lg--dark--Licon3.error {\n  border-color: rgb(255, 116, 116);\n}\n.textField--lg--dark--Licon3:disabled {\n  background-color: rgb(43, 43, 43);\n  border-color: rgb(114, 114, 114);\n  color: rgb(101, 101, 101);\n}\n.textField--lg--dark--Licon3:focus {\n  border-color: rgb(6, 149, 208);\n}\n.textField--lg--dark--Licon3::placeholder {\n  color: rgb(215, 215, 215);\n}\n.textField--sm--high-contrast--Licon1 {\n  background-color: rgb(0, 0, 0);\n  background-image: url("/widget-svg/icon1-0.7.39.svg");\n  background-position: 8px 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(215, 215, 215);\n  color: rgb(255, 255, 255);\n  font-family: Montserrat, sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  height: 32px;\n  line-height: 16px;\n  padding-left: 32px;\n  padding: 0 8px;\n  position: relative;\n}\n.textField--sm--high-contrast--Licon1.error {\n  border-color: rgb(255, 0, 0);\n}\n.textField--sm--high-contrast--Licon1:disabled {\n  background-color: rgb(246, 246, 247);\n  border-color: rgb(215, 215, 215);\n}\n.textField--sm--high-contrast--Licon1:focus {\n  border-color: rgb(6, 149, 208);\n}\n.textField--sm--high-contrast--Licon2 {\n  background-color: rgb(0, 0, 0);\n  background-image: url("/widget-svg/icon2-0.7.39.svg");\n  background-position: 8px 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(215, 215, 215);\n  color: rgb(255, 255, 255);\n  font-family: Montserrat, sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  height: 32px;\n  line-height: 16px;\n  padding-left: 32px;\n  padding: 0 8px;\n  position: relative;\n}\n.textField--sm--high-contrast--Licon2.error {\n  border-color: rgb(255, 0, 0);\n}\n.textField--sm--high-contrast--Licon2:disabled {\n  background-color: rgb(246, 246, 247);\n  border-color: rgb(215, 215, 215);\n}\n.textField--sm--high-contrast--Licon2:focus {\n  border-color: rgb(6, 149, 208);\n}\n.textField--sm--high-contrast--Licon3 {\n  background-color: rgb(0, 0, 0);\n  background-image: url("/widget-svg/icon3-0.7.39.svg");\n  background-position: 8px 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(215, 215, 215);\n  color: rgb(255, 255, 255);\n  font-family: Montserrat, sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  height: 32px;\n  line-height: 16px;\n  padding-left: 32px;\n  padding: 0 8px;\n  position: relative;\n}\n.textField--sm--high-contrast--Licon3.error {\n  border-color: rgb(255, 0, 0);\n}\n.textField--sm--high-contrast--Licon3:disabled {\n  background-color: rgb(246, 246, 247);\n  border-color: rgb(215, 215, 215);\n}\n.textField--sm--high-contrast--Licon3:focus {\n  border-color: rgb(6, 149, 208);\n}\n.textField--md--high-contrast--Licon1 {\n  background-color: rgb(0, 0, 0);\n  background-image: url("/widget-svg/icon1-0.7.39.svg");\n  background-position: 8px 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(215, 215, 215);\n  color: rgb(255, 255, 255);\n  font-family: Montserrat, sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  height: 40px;\n  line-height: 20px;\n  padding-left: 40px;\n  padding: 0 12px;\n  position: relative;\n}\n.textField--md--high-contrast--Licon1.error {\n  border-color: rgb(255, 0, 0);\n}\n.textField--md--high-contrast--Licon1:disabled {\n  background-color: rgb(246, 246, 247);\n  border-color: rgb(215, 215, 215);\n}\n.textField--md--high-contrast--Licon1:focus {\n  border-color: rgb(6, 149, 208);\n}\n.textField--md--high-contrast--Licon2 {\n  background-color: rgb(0, 0, 0);\n  background-image: url("/widget-svg/icon2-0.7.39.svg");\n  background-position: 8px 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(215, 215, 215);\n  color: rgb(255, 255, 255);\n  font-family: Montserrat, sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  height: 40px;\n  line-height: 20px;\n  padding-left: 40px;\n  padding: 0 12px;\n  position: relative;\n}\n.textField--md--high-contrast--Licon2.error {\n  border-color: rgb(255, 0, 0);\n}\n.textField--md--high-contrast--Licon2:disabled {\n  background-color: rgb(246, 246, 247);\n  border-color: rgb(215, 215, 215);\n}\n.textField--md--high-contrast--Licon2:focus {\n  border-color: rgb(6, 149, 208);\n}\n.textField--md--high-contrast--Licon3 {\n  background-color: rgb(0, 0, 0);\n  background-image: url("/widget-svg/icon3-0.7.39.svg");\n  background-position: 8px 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(215, 215, 215);\n  color: rgb(255, 255, 255);\n  font-family: Montserrat, sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  height: 40px;\n  line-height: 20px;\n  padding-left: 40px;\n  padding: 0 12px;\n  position: relative;\n}\n.textField--md--high-contrast--Licon3.error {\n  border-color: rgb(255, 0, 0);\n}\n.textField--md--high-contrast--Licon3:disabled {\n  background-color: rgb(246, 246, 247);\n  border-color: rgb(215, 215, 215);\n}\n.textField--md--high-contrast--Licon3:focus {\n  border-color: rgb(6, 149, 208);\n}\n.textField--lg--high-contrast--Licon1 {\n  background-color: rgb(0, 0, 0);\n  background-image: url("/widget-svg/icon1-0.7.39.svg");\n  background-position: 8px 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(215, 215, 215);\n  color: rgb(255, 255, 255);\n  font-family: Montserrat, sans-serif;\n  font-size: 18px;\n  font-weight: 400;\n  height: 48px;\n  line-height: 24px;\n  padding-left: 48px;\n  padding: 0 16px;\n  position: relative;\n}\n.textField--lg--high-contrast--Licon1.error {\n  border-color: rgb(255, 0, 0);\n}\n.textField--lg--high-contrast--Licon1:disabled {\n  background-color: rgb(246, 246, 247);\n  border-color: rgb(215, 215, 215);\n}\n.textField--lg--high-contrast--Licon1:focus {\n  border-color: rgb(6, 149, 208);\n}\n.textField--lg--high-contrast--Licon2 {\n  background-color: rgb(0, 0, 0);\n  background-image: url("/widget-svg/icon2-0.7.39.svg");\n  background-position: 8px 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(215, 215, 215);\n  color: rgb(255, 255, 255);\n  font-family: Montserrat, sans-serif;\n  font-size: 18px;\n  font-weight: 400;\n  height: 48px;\n  line-height: 24px;\n  padding-left: 48px;\n  padding: 0 16px;\n  position: relative;\n}\n.textField--lg--high-contrast--Licon2.error {\n  border-color: rgb(255, 0, 0);\n}\n.textField--lg--high-contrast--Licon2:disabled {\n  background-color: rgb(246, 246, 247);\n  border-color: rgb(215, 215, 215);\n}\n.textField--lg--high-contrast--Licon2:focus {\n  border-color: rgb(6, 149, 208);\n}\n.textField--lg--high-contrast--Licon3 {\n  background-color: rgb(0, 0, 0);\n  background-image: url("/widget-svg/icon3-0.7.39.svg");\n  background-position: 8px 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(215, 215, 215);\n  color: rgb(255, 255, 255);\n  font-family: Montserrat, sans-serif;\n  font-size: 18px;\n  font-weight: 400;\n  height: 48px;\n  line-height: 24px;\n  padding-left: 48px;\n  padding: 0 16px;\n  position: relative;\n}\n.textField--lg--high-contrast--Licon3.error {\n  border-color: rgb(255, 0, 0);\n}\n.textField--lg--high-contrast--Licon3:disabled {\n  background-color: rgb(246, 246, 247);\n  border-color: rgb(215, 215, 215);\n}\n.textField--lg--high-contrast--Licon3:focus {\n  border-color: rgb(6, 149, 208);\n}\n.textField--sm--light--Ricon1 {\n  background-color: rgb(255, 255, 255);\n  background-image: url("/widget-svg/icon1-0.7.39.svg");\n  background-position: 98% 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(64, 64, 64);\n  color: rgb(0, 0, 0);\n  font-family: Montserrat, sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  height: 32px;\n  line-height: 16px;\n  padding-right: 32px;\n  padding: 0 8px;\n  position: relative;\n}\n.textField--sm--light--Ricon1.error {\n  border-color: rgb(148, 9, 1);\n}\n.textField--sm--light--Ricon1:disabled {\n  background-color: rgb(215, 215, 215);\n  border-color: rgb(64, 64, 64);\n  color: rgb(114, 114, 114);\n}\n.textField--sm--light--Ricon1:focus-visible {\n  border-color: rgb(172, 209, 223);\n}\n.textField--sm--light--Ricon1::placeholder {\n  color: rgb(114, 114, 114);\n}\n.textField--sm--light--Ricon2 {\n  background-color: rgb(255, 255, 255);\n  background-image: url("/widget-svg/icon2-0.7.39.svg");\n  background-position: 98% 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(64, 64, 64);\n  color: rgb(0, 0, 0);\n  font-family: Montserrat, sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  height: 32px;\n  line-height: 16px;\n  padding-right: 32px;\n  padding: 0 8px;\n  position: relative;\n}\n.textField--sm--light--Ricon2.error {\n  border-color: rgb(148, 9, 1);\n}\n.textField--sm--light--Ricon2:disabled {\n  background-color: rgb(215, 215, 215);\n  border-color: rgb(64, 64, 64);\n  color: rgb(114, 114, 114);\n}\n.textField--sm--light--Ricon2:focus-visible {\n  border-color: rgb(172, 209, 223);\n}\n.textField--sm--light--Ricon2::placeholder {\n  color: rgb(114, 114, 114);\n}\n.textField--sm--light--Ricon3 {\n  background-color: rgb(255, 255, 255);\n  background-image: url("/widget-svg/icon3-0.7.39.svg");\n  background-position: 98% 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(64, 64, 64);\n  color: rgb(0, 0, 0);\n  font-family: Montserrat, sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  height: 32px;\n  line-height: 16px;\n  padding-right: 32px;\n  padding: 0 8px;\n  position: relative;\n}\n.textField--sm--light--Ricon3.error {\n  border-color: rgb(148, 9, 1);\n}\n.textField--sm--light--Ricon3:disabled {\n  background-color: rgb(215, 215, 215);\n  border-color: rgb(64, 64, 64);\n  color: rgb(114, 114, 114);\n}\n.textField--sm--light--Ricon3:focus-visible {\n  border-color: rgb(172, 209, 223);\n}\n.textField--sm--light--Ricon3::placeholder {\n  color: rgb(114, 114, 114);\n}\n.textField--md--light--Ricon1 {\n  background-color: rgb(255, 255, 255);\n  background-image: url("/widget-svg/icon1-0.7.39.svg");\n  background-position: 98% 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(64, 64, 64);\n  color: rgb(0, 0, 0);\n  font-family: Montserrat, sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  height: 40px;\n  line-height: 20px;\n  padding-right: 40px;\n  padding: 0 12px;\n  position: relative;\n}\n.textField--md--light--Ricon1.error {\n  border-color: rgb(148, 9, 1);\n}\n.textField--md--light--Ricon1:disabled {\n  background-color: rgb(215, 215, 215);\n  border-color: rgb(64, 64, 64);\n  color: rgb(114, 114, 114);\n}\n.textField--md--light--Ricon1:focus-visible {\n  border-color: rgb(172, 209, 223);\n}\n.textField--md--light--Ricon1::placeholder {\n  color: rgb(114, 114, 114);\n}\n.textField--md--light--Ricon2 {\n  background-color: rgb(255, 255, 255);\n  background-image: url("/widget-svg/icon2-0.7.39.svg");\n  background-position: 98% 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(64, 64, 64);\n  color: rgb(0, 0, 0);\n  font-family: Montserrat, sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  height: 40px;\n  line-height: 20px;\n  padding-right: 40px;\n  padding: 0 12px;\n  position: relative;\n}\n.textField--md--light--Ricon2.error {\n  border-color: rgb(148, 9, 1);\n}\n.textField--md--light--Ricon2:disabled {\n  background-color: rgb(215, 215, 215);\n  border-color: rgb(64, 64, 64);\n  color: rgb(114, 114, 114);\n}\n.textField--md--light--Ricon2:focus-visible {\n  border-color: rgb(172, 209, 223);\n}\n.textField--md--light--Ricon2::placeholder {\n  color: rgb(114, 114, 114);\n}\n.textField--md--light--Ricon3 {\n  background-color: rgb(255, 255, 255);\n  background-image: url("/widget-svg/icon3-0.7.39.svg");\n  background-position: 98% 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(64, 64, 64);\n  color: rgb(0, 0, 0);\n  font-family: Montserrat, sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  height: 40px;\n  line-height: 20px;\n  padding-right: 40px;\n  padding: 0 12px;\n  position: relative;\n}\n.textField--md--light--Ricon3.error {\n  border-color: rgb(148, 9, 1);\n}\n.textField--md--light--Ricon3:disabled {\n  background-color: rgb(215, 215, 215);\n  border-color: rgb(64, 64, 64);\n  color: rgb(114, 114, 114);\n}\n.textField--md--light--Ricon3:focus-visible {\n  border-color: rgb(172, 209, 223);\n}\n.textField--md--light--Ricon3::placeholder {\n  color: rgb(114, 114, 114);\n}\n.textField--lg--light--Ricon1 {\n  background-color: rgb(255, 255, 255);\n  background-image: url("/widget-svg/icon1-0.7.39.svg");\n  background-position: 98% 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(64, 64, 64);\n  color: rgb(0, 0, 0);\n  font-family: Montserrat, sans-serif;\n  font-size: 18px;\n  font-weight: 400;\n  height: 48px;\n  line-height: 24px;\n  padding-right: 48px;\n  padding: 0 16px;\n  position: relative;\n}\n.textField--lg--light--Ricon1.error {\n  border-color: rgb(148, 9, 1);\n}\n.textField--lg--light--Ricon1:disabled {\n  background-color: rgb(215, 215, 215);\n  border-color: rgb(64, 64, 64);\n  color: rgb(114, 114, 114);\n}\n.textField--lg--light--Ricon1:focus-visible {\n  border-color: rgb(172, 209, 223);\n}\n.textField--lg--light--Ricon1::placeholder {\n  color: rgb(114, 114, 114);\n}\n.textField--lg--light--Ricon2 {\n  background-color: rgb(255, 255, 255);\n  background-image: url("/widget-svg/icon2-0.7.39.svg");\n  background-position: 98% 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(64, 64, 64);\n  color: rgb(0, 0, 0);\n  font-family: Montserrat, sans-serif;\n  font-size: 18px;\n  font-weight: 400;\n  height: 48px;\n  line-height: 24px;\n  padding-right: 48px;\n  padding: 0 16px;\n  position: relative;\n}\n.textField--lg--light--Ricon2.error {\n  border-color: rgb(148, 9, 1);\n}\n.textField--lg--light--Ricon2:disabled {\n  background-color: rgb(215, 215, 215);\n  border-color: rgb(64, 64, 64);\n  color: rgb(114, 114, 114);\n}\n.textField--lg--light--Ricon2:focus-visible {\n  border-color: rgb(172, 209, 223);\n}\n.textField--lg--light--Ricon2::placeholder {\n  color: rgb(114, 114, 114);\n}\n.textField--lg--light--Ricon3 {\n  background-color: rgb(255, 255, 255);\n  background-image: url("/widget-svg/icon3-0.7.39.svg");\n  background-position: 98% 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(64, 64, 64);\n  color: rgb(0, 0, 0);\n  font-family: Montserrat, sans-serif;\n  font-size: 18px;\n  font-weight: 400;\n  height: 48px;\n  line-height: 24px;\n  padding-right: 48px;\n  padding: 0 16px;\n  position: relative;\n}\n.textField--lg--light--Ricon3.error {\n  border-color: rgb(148, 9, 1);\n}\n.textField--lg--light--Ricon3:disabled {\n  background-color: rgb(215, 215, 215);\n  border-color: rgb(64, 64, 64);\n  color: rgb(114, 114, 114);\n}\n.textField--lg--light--Ricon3:focus-visible {\n  border-color: rgb(172, 209, 223);\n}\n.textField--lg--light--Ricon3::placeholder {\n  color: rgb(114, 114, 114);\n}\n.textField--sm--dark--Ricon1 {\n  background-color: rgb(64, 64, 64);\n  background-image: url("/widget-svg/icon1-0.7.39.svg");\n  background-position: 98% 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(114, 114, 114);\n  color: rgb(215, 215, 215);\n  font-family: Montserrat, sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  height: 32px;\n  line-height: 16px;\n  padding-right: 32px;\n  padding: 0 8px;\n  position: relative;\n}\n.textField--sm--dark--Ricon1.error {\n  border-color: rgb(255, 116, 116);\n}\n.textField--sm--dark--Ricon1:disabled {\n  background-color: rgb(43, 43, 43);\n  border-color: rgb(114, 114, 114);\n  color: rgb(101, 101, 101);\n}\n.textField--sm--dark--Ricon1:focus-visible {\n  border-color: rgb(6, 149, 208);\n}\n.textField--sm--dark--Ricon1::placeholder {\n  color: rgb(215, 215, 215);\n}\n.textField--sm--dark--Ricon2 {\n  background-color: rgb(64, 64, 64);\n  background-image: url("/widget-svg/icon2-0.7.39.svg");\n  background-position: 98% 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(114, 114, 114);\n  color: rgb(215, 215, 215);\n  font-family: Montserrat, sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  height: 32px;\n  line-height: 16px;\n  padding-right: 32px;\n  padding: 0 8px;\n  position: relative;\n}\n.textField--sm--dark--Ricon2.error {\n  border-color: rgb(255, 116, 116);\n}\n.textField--sm--dark--Ricon2:disabled {\n  background-color: rgb(43, 43, 43);\n  border-color: rgb(114, 114, 114);\n  color: rgb(101, 101, 101);\n}\n.textField--sm--dark--Ricon2:focus-visible {\n  border-color: rgb(6, 149, 208);\n}\n.textField--sm--dark--Ricon2::placeholder {\n  color: rgb(215, 215, 215);\n}\n.textField--sm--dark--Ricon3 {\n  background-color: rgb(64, 64, 64);\n  background-image: url("/widget-svg/icon3-0.7.39.svg");\n  background-position: 98% 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(114, 114, 114);\n  color: rgb(215, 215, 215);\n  font-family: Montserrat, sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  height: 32px;\n  line-height: 16px;\n  padding-right: 32px;\n  padding: 0 8px;\n  position: relative;\n}\n.textField--sm--dark--Ricon3.error {\n  border-color: rgb(255, 116, 116);\n}\n.textField--sm--dark--Ricon3:disabled {\n  background-color: rgb(43, 43, 43);\n  border-color: rgb(114, 114, 114);\n  color: rgb(101, 101, 101);\n}\n.textField--sm--dark--Ricon3:focus-visible {\n  border-color: rgb(6, 149, 208);\n}\n.textField--sm--dark--Ricon3::placeholder {\n  color: rgb(215, 215, 215);\n}\n.textField--md--dark--Ricon1 {\n  background-color: rgb(64, 64, 64);\n  background-image: url("/widget-svg/icon1-0.7.39.svg");\n  background-position: 98% 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(114, 114, 114);\n  color: rgb(215, 215, 215);\n  font-family: Montserrat, sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  height: 40px;\n  line-height: 20px;\n  padding-right: 40px;\n  padding: 0 12px;\n  position: relative;\n}\n.textField--md--dark--Ricon1.error {\n  border-color: rgb(255, 116, 116);\n}\n.textField--md--dark--Ricon1:disabled {\n  background-color: rgb(43, 43, 43);\n  border-color: rgb(114, 114, 114);\n  color: rgb(101, 101, 101);\n}\n.textField--md--dark--Ricon1:focus-visible {\n  border-color: rgb(6, 149, 208);\n}\n.textField--md--dark--Ricon1::placeholder {\n  color: rgb(215, 215, 215);\n}\n.textField--md--dark--Ricon2 {\n  background-color: rgb(64, 64, 64);\n  background-image: url("/widget-svg/icon2-0.7.39.svg");\n  background-position: 98% 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(114, 114, 114);\n  color: rgb(215, 215, 215);\n  font-family: Montserrat, sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  height: 40px;\n  line-height: 20px;\n  padding-right: 40px;\n  padding: 0 12px;\n  position: relative;\n}\n.textField--md--dark--Ricon2.error {\n  border-color: rgb(255, 116, 116);\n}\n.textField--md--dark--Ricon2:disabled {\n  background-color: rgb(43, 43, 43);\n  border-color: rgb(114, 114, 114);\n  color: rgb(101, 101, 101);\n}\n.textField--md--dark--Ricon2:focus-visible {\n  border-color: rgb(6, 149, 208);\n}\n.textField--md--dark--Ricon2::placeholder {\n  color: rgb(215, 215, 215);\n}\n.textField--md--dark--Ricon3 {\n  background-color: rgb(64, 64, 64);\n  background-image: url("/widget-svg/icon3-0.7.39.svg");\n  background-position: 98% 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(114, 114, 114);\n  color: rgb(215, 215, 215);\n  font-family: Montserrat, sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  height: 40px;\n  line-height: 20px;\n  padding-right: 40px;\n  padding: 0 12px;\n  position: relative;\n}\n.textField--md--dark--Ricon3.error {\n  border-color: rgb(255, 116, 116);\n}\n.textField--md--dark--Ricon3:disabled {\n  background-color: rgb(43, 43, 43);\n  border-color: rgb(114, 114, 114);\n  color: rgb(101, 101, 101);\n}\n.textField--md--dark--Ricon3:focus-visible {\n  border-color: rgb(6, 149, 208);\n}\n.textField--md--dark--Ricon3::placeholder {\n  color: rgb(215, 215, 215);\n}\n.textField--lg--dark--Ricon1 {\n  background-color: rgb(64, 64, 64);\n  background-image: url("/widget-svg/icon1-0.7.39.svg");\n  background-position: 98% 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(114, 114, 114);\n  color: rgb(215, 215, 215);\n  font-family: Montserrat, sans-serif;\n  font-size: 18px;\n  font-weight: 400;\n  height: 48px;\n  line-height: 24px;\n  padding-right: 48px;\n  padding: 0 16px;\n  position: relative;\n}\n.textField--lg--dark--Ricon1.error {\n  border-color: rgb(255, 116, 116);\n}\n.textField--lg--dark--Ricon1:disabled {\n  background-color: rgb(43, 43, 43);\n  border-color: rgb(114, 114, 114);\n  color: rgb(101, 101, 101);\n}\n.textField--lg--dark--Ricon1:focus-visible {\n  border-color: rgb(6, 149, 208);\n}\n.textField--lg--dark--Ricon1::placeholder {\n  color: rgb(215, 215, 215);\n}\n.textField--lg--dark--Ricon2 {\n  background-color: rgb(64, 64, 64);\n  background-image: url("/widget-svg/icon2-0.7.39.svg");\n  background-position: 98% 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(114, 114, 114);\n  color: rgb(215, 215, 215);\n  font-family: Montserrat, sans-serif;\n  font-size: 18px;\n  font-weight: 400;\n  height: 48px;\n  line-height: 24px;\n  padding-right: 48px;\n  padding: 0 16px;\n  position: relative;\n}\n.textField--lg--dark--Ricon2.error {\n  border-color: rgb(255, 116, 116);\n}\n.textField--lg--dark--Ricon2:disabled {\n  background-color: rgb(43, 43, 43);\n  border-color: rgb(114, 114, 114);\n  color: rgb(101, 101, 101);\n}\n.textField--lg--dark--Ricon2:focus-visible {\n  border-color: rgb(6, 149, 208);\n}\n.textField--lg--dark--Ricon2::placeholder {\n  color: rgb(215, 215, 215);\n}\n.textField--lg--dark--Ricon3 {\n  background-color: rgb(64, 64, 64);\n  background-image: url("/widget-svg/icon3-0.7.39.svg");\n  background-position: 98% 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(114, 114, 114);\n  color: rgb(215, 215, 215);\n  font-family: Montserrat, sans-serif;\n  font-size: 18px;\n  font-weight: 400;\n  height: 48px;\n  line-height: 24px;\n  padding-right: 48px;\n  padding: 0 16px;\n  position: relative;\n}\n.textField--lg--dark--Ricon3.error {\n  border-color: rgb(255, 116, 116);\n}\n.textField--lg--dark--Ricon3:disabled {\n  background-color: rgb(43, 43, 43);\n  border-color: rgb(114, 114, 114);\n  color: rgb(101, 101, 101);\n}\n.textField--lg--dark--Ricon3:focus-visible {\n  border-color: rgb(6, 149, 208);\n}\n.textField--lg--dark--Ricon3::placeholder {\n  color: rgb(215, 215, 215);\n}\n.textField--sm--high-contrast--Ricon1 {\n  background-color: rgb(0, 0, 0);\n  background-image: url("/widget-svg/icon1-0.7.39.svg");\n  background-position: 98% 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(215, 215, 215);\n  color: rgb(255, 255, 255);\n  font-family: Montserrat, sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  height: 32px;\n  line-height: 16px;\n  padding-right: 32px;\n  padding: 0 8px;\n  position: relative;\n}\n.textField--sm--high-contrast--Ricon1.error {\n  border-color: rgb(255, 0, 0);\n}\n.textField--sm--high-contrast--Ricon1:disabled {\n  background-color: rgb(246, 246, 247);\n  border-color: rgb(215, 215, 215);\n}\n.textField--sm--high-contrast--Ricon1:focus-visible {\n  border-color: rgb(6, 149, 208);\n}\n.textField--sm--high-contrast--Ricon2 {\n  background-color: rgb(0, 0, 0);\n  background-image: url("/widget-svg/icon2-0.7.39.svg");\n  background-position: 98% 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(215, 215, 215);\n  color: rgb(255, 255, 255);\n  font-family: Montserrat, sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  height: 32px;\n  line-height: 16px;\n  padding-right: 32px;\n  padding: 0 8px;\n  position: relative;\n}\n.textField--sm--high-contrast--Ricon2.error {\n  border-color: rgb(255, 0, 0);\n}\n.textField--sm--high-contrast--Ricon2:disabled {\n  background-color: rgb(246, 246, 247);\n  border-color: rgb(215, 215, 215);\n}\n.textField--sm--high-contrast--Ricon2:focus-visible {\n  border-color: rgb(6, 149, 208);\n}\n.textField--sm--high-contrast--Ricon3 {\n  background-color: rgb(0, 0, 0);\n  background-image: url("/widget-svg/icon3-0.7.39.svg");\n  background-position: 98% 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(215, 215, 215);\n  color: rgb(255, 255, 255);\n  font-family: Montserrat, sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  height: 32px;\n  line-height: 16px;\n  padding-right: 32px;\n  padding: 0 8px;\n  position: relative;\n}\n.textField--sm--high-contrast--Ricon3.error {\n  border-color: rgb(255, 0, 0);\n}\n.textField--sm--high-contrast--Ricon3:disabled {\n  background-color: rgb(246, 246, 247);\n  border-color: rgb(215, 215, 215);\n}\n.textField--sm--high-contrast--Ricon3:focus-visible {\n  border-color: rgb(6, 149, 208);\n}\n.textField--md--high-contrast--Ricon1 {\n  background-color: rgb(0, 0, 0);\n  background-image: url("/widget-svg/icon1-0.7.39.svg");\n  background-position: 98% 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(215, 215, 215);\n  color: rgb(255, 255, 255);\n  font-family: Montserrat, sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  height: 40px;\n  line-height: 20px;\n  padding-right: 40px;\n  padding: 0 12px;\n  position: relative;\n}\n.textField--md--high-contrast--Ricon1.error {\n  border-color: rgb(255, 0, 0);\n}\n.textField--md--high-contrast--Ricon1:disabled {\n  background-color: rgb(246, 246, 247);\n  border-color: rgb(215, 215, 215);\n}\n.textField--md--high-contrast--Ricon1:focus-visible {\n  border-color: rgb(6, 149, 208);\n}\n.textField--md--high-contrast--Ricon2 {\n  background-color: rgb(0, 0, 0);\n  background-image: url("/widget-svg/icon2-0.7.39.svg");\n  background-position: 98% 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(215, 215, 215);\n  color: rgb(255, 255, 255);\n  font-family: Montserrat, sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  height: 40px;\n  line-height: 20px;\n  padding-right: 40px;\n  padding: 0 12px;\n  position: relative;\n}\n.textField--md--high-contrast--Ricon2.error {\n  border-color: rgb(255, 0, 0);\n}\n.textField--md--high-contrast--Ricon2:disabled {\n  background-color: rgb(246, 246, 247);\n  border-color: rgb(215, 215, 215);\n}\n.textField--md--high-contrast--Ricon2:focus-visible {\n  border-color: rgb(6, 149, 208);\n}\n.textField--md--high-contrast--Ricon3 {\n  background-color: rgb(0, 0, 0);\n  background-image: url("/widget-svg/icon3-0.7.39.svg");\n  background-position: 98% 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(215, 215, 215);\n  color: rgb(255, 255, 255);\n  font-family: Montserrat, sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  height: 40px;\n  line-height: 20px;\n  padding-right: 40px;\n  padding: 0 12px;\n  position: relative;\n}\n.textField--md--high-contrast--Ricon3.error {\n  border-color: rgb(255, 0, 0);\n}\n.textField--md--high-contrast--Ricon3:disabled {\n  background-color: rgb(246, 246, 247);\n  border-color: rgb(215, 215, 215);\n}\n.textField--md--high-contrast--Ricon3:focus-visible {\n  border-color: rgb(6, 149, 208);\n}\n.textField--lg--high-contrast--Ricon1 {\n  background-color: rgb(0, 0, 0);\n  background-image: url("/widget-svg/icon1-0.7.39.svg");\n  background-position: 98% 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(215, 215, 215);\n  color: rgb(255, 255, 255);\n  font-family: Montserrat, sans-serif;\n  font-size: 18px;\n  font-weight: 400;\n  height: 48px;\n  line-height: 24px;\n  padding-right: 48px;\n  padding: 0 16px;\n  position: relative;\n}\n.textField--lg--high-contrast--Ricon1.error {\n  border-color: rgb(255, 0, 0);\n}\n.textField--lg--high-contrast--Ricon1:disabled {\n  background-color: rgb(246, 246, 247);\n  border-color: rgb(215, 215, 215);\n}\n.textField--lg--high-contrast--Ricon1:focus-visible {\n  border-color: rgb(6, 149, 208);\n}\n.textField--lg--high-contrast--Ricon2 {\n  background-color: rgb(0, 0, 0);\n  background-image: url("/widget-svg/icon2-0.7.39.svg");\n  background-position: 98% 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(215, 215, 215);\n  color: rgb(255, 255, 255);\n  font-family: Montserrat, sans-serif;\n  font-size: 18px;\n  font-weight: 400;\n  height: 48px;\n  line-height: 24px;\n  padding-right: 48px;\n  padding: 0 16px;\n  position: relative;\n}\n.textField--lg--high-contrast--Ricon2.error {\n  border-color: rgb(255, 0, 0);\n}\n.textField--lg--high-contrast--Ricon2:disabled {\n  background-color: rgb(246, 246, 247);\n  border-color: rgb(215, 215, 215);\n}\n.textField--lg--high-contrast--Ricon2:focus-visible {\n  border-color: rgb(6, 149, 208);\n}\n.textField--lg--high-contrast--Ricon3 {\n  background-color: rgb(0, 0, 0);\n  background-image: url("/widget-svg/icon3-0.7.39.svg");\n  background-position: 98% 50%;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  border-radius: 4px;\n  border: 1px solid rgb(215, 215, 215);\n  color: rgb(255, 255, 255);\n  font-family: Montserrat, sans-serif;\n  font-size: 18px;\n  font-weight: 400;\n  height: 48px;\n  line-height: 24px;\n  padding-right: 48px;\n  padding: 0 16px;\n  position: relative;\n}\n.textField--lg--high-contrast--Ricon3.error {\n  border-color: rgb(255, 0, 0);\n}\n.textField--lg--high-contrast--Ricon3:disabled {\n  background-color: rgb(246, 246, 247);\n  border-color: rgb(215, 215, 215);\n}\n.textField--lg--high-contrast--Ricon3:focus-visible {\n  border-color: rgb(6, 149, 208);\n}\n.textField--outerContainer--light {\n  color: #000000;\n  display: flex;\n  align-content: center;\n  flex-direction: column;\n  height: fit-content;\n}\n.textField--outerContainer--dark {\n  color: #FFFFFF;\n  display: flex;\n  align-content: center;\n  flex-direction: column;\n  height: fit-content;\n}\n.textField--outerContainer--high-contrast {\n  color: #FFFFFF;\n  display: flex;\n  align-content: center;\n  flex-direction: column;\n  height: fit-content;\n}\n.light-mode .range-slider::-webkit-slider-runnable-track {\n  background: linear-gradient(to right, rgb(117, 189, 219) 0%, rgb(117, 189, 219) var(--value-percent), rgb(101, 101, 101) var(--value-percent), rgb(101, 101, 101) 100%);\n}\n.light-mode .range-slider::-moz-range-track {\n  background: linear-gradient(to right, rgb(117, 189, 219) 0%, rgb(117, 189, 219) var(--value-percent), rgb(101, 101, 101) var(--value-percent), rgb(101, 101, 101) 100%);\n}\n.light-mode .range-slider::-ms-track {\n  background: linear-gradient(to right, rgb(117, 189, 219) 0%, rgb(117, 189, 219) var(--value-percent), rgb(101, 101, 101) var(--value-percent), rgb(101, 101, 101) 100%);\n}\n.light-mode .range-slider::-webkit-slider-thumb {\n  background-color: rgb(6, 149, 208);\n}\n.light-mode .range-slider::-moz-range-thumb {\n  background-color: rgb(6, 149, 208);\n}\n.light-mode .range-slider::-ms-thumb {\n  background-color: rgb(6, 149, 208);\n}\n.light-mode .value-display {\n  background-color: rgb(229, 230, 230);\n  color: rgb(0, 0, 0);\n}\n.dark-mode .range-slider::-webkit-slider-runnable-track {\n  background: linear-gradient(to right, rgb(117, 189, 219) 0%, rgb(117, 189, 219) var(--value-percent), rgb(114, 114, 114) var(--value-percent), rgb(114, 114, 114) 100%);\n}\n.dark-mode .range-slider::-moz-range-track {\n  background: linear-gradient(to right, rgb(117, 189, 219) 0%, rgb(117, 189, 219) var(--value-percent), rgb(114, 114, 114) var(--value-percent), rgb(114, 114, 114) 100%);\n}\n.dark-mode .range-slider::-ms-track {\n  background: linear-gradient(to right, rgb(117, 189, 219) 0%, rgb(117, 189, 219) var(--value-percent), rgb(114, 114, 114) var(--value-percent), rgb(114, 114, 114) 100%);\n}\n.dark-mode .range-slider::-webkit-slider-thumb {\n  background-color: rgb(117, 189, 219);\n}\n.dark-mode .range-slider::-moz-range-thumb {\n  background-color: rgb(117, 189, 219);\n}\n.dark-mode .range-slider::-ms-thumb {\n  background-color: rgb(117, 189, 219);\n}\n.dark-mode .value-display {\n  background-color: rgb(64, 64, 64);\n  color: rgb(255, 255, 255);\n}\n.high-contrast-mode .range-slider::-webkit-slider-runnable-track {\n  background: linear-gradient(to right, rgb(58, 220, 255) 0%, rgb(58, 220, 255) var(--value-percent), rgb(43, 43, 43) var(--value-percent), rgb(43, 43, 43) 100%);\n}\n.high-contrast-mode .range-slider::-moz-range-track {\n  background: linear-gradient(to right, rgb(58, 220, 255) 0%, rgb(58, 220, 255) var(--value-percent), rgb(43, 43, 43) var(--value-percent), rgb(43, 43, 43) 100%);\n}\n.high-contrast-mode .range-slider::-ms-track {\n  background: linear-gradient(to right, rgb(58, 220, 255) 0%, rgb(58, 220, 255) var(--value-percent), rgb(43, 43, 43) var(--value-percent), rgb(43, 43, 43) 100%);\n}\n.high-contrast-mode .range-slider::-webkit-slider-thumb {\n  background-color: rgb(255, 255, 255);\n}\n.high-contrast-mode .range-slider::-moz-range-thumb {\n  background-color: rgb(255, 255, 255);\n}\n.high-contrast-mode .range-slider::-ms-thumb {\n  background-color: rgb(255, 255, 255);\n}\n.high-contrast-mode .value-display {\n  background-color: rgb(255, 255, 255);\n  color: rgb(0, 0, 0);\n}\n.slider-container {\n  width: 100%;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.range-slider {\n  width: 100%;\n  -webkit-appearance: none;\n  appearance: none;\n  background-color: transparent;\n  margin: 0;\n  padding: 0;\n  cursor: pointer;\n  height: 20px;\n}\n.range-slider::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 8px;\n  background-color: #ccc;\n  border-radius: 5px;\n}\n.range-slider::-moz-range-track {\n  width: 100%;\n  height: 8px;\n  background-color: #ccc;\n  border-radius: 5px;\n}\n.range-slider::-ms-track {\n  width: 100%;\n  height: 8px;\n  background-color: #ccc;\n  border-radius: 5px;\n}\n.range-slider::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 16px;\n  height: 16px;\n  background-color: #007bff;\n  border-radius: 50%;\n  cursor: pointer;\n  margin-top: -4px;\n  transition: background-color 0.2s;\n}\n.range-slider::-moz-range-thumb {\n  width: 16px;\n  height: 16px;\n  background-color: #007bff;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.range-slider::-ms-thumb {\n  width: 16px;\n  height: 16px;\n  background-color: #007bff;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.value-display {\n  display: inline-block;\n  border-radius: 8px;\n  padding: 8px;\n  box-sizing: border-box;\n  margin-left: 4px;\n  font-weight: bold;\n  line-height: 1;\n  width: 4em;\n  text-align: center;\n}\n.accordion {\n  padding: 10px 0;\n  background-color: #FFFFFF;\n  border-radius: 5px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.2);\n  box-sizing: border-box;\n  height: 100%;\n  overflow: auto;\n  font-family: "Montserrat", sans-serif;\n}\n.accordion .breadcrumb {\n  display: flex;\n  flex-wrap: wrap;\n  font-family: "Montserrat", sans-serif;\n  margin-bottom: 10px;\n  align-items: center;\n  margin-left: 4px;\n}\n.accordion .breadcrumb .breadHome-item {\n  font-size: 16px;\n  color: black;\n  cursor: pointer;\n  border: none;\n  background: none;\n  cursor: pointer;\n  width: 100%;\n  text-align: left;\n  padding: 0.5rem 0;\n  border-bottom: 1px solid black;\n  margin-bottom: 8px;\n}\n.accordion .breadcrumb .breadHome-item:hover {\n  text-decoration: underline;\n}\n.accordion .breadcrumb .breadHome-item::before {\n  content: url("/widget-svg/homeArrow-0.7.39.svg");\n  margin: 0 5px;\n}\n.accordion .breadcrumb .breadHome-item:last-child::after {\n  content: "";\n}\n.accordion .breadcrumb .breadcrumb-item {\n  font-size: 16px;\n  color: black;\n  cursor: pointer;\n}\n.accordion .breadcrumb .breadcrumb-item:hover {\n  text-decoration: underline;\n}\n.accordion .breadcrumb .breadcrumb-item::before {\n  content: url("/widget-svg/leftArrow-0.7.39.svg");\n  margin: 0 5px;\n}\n.accordion .breadcrumb .breadcrumb-item:last-child::after {\n  content: "";\n}\n.accordion-item-branch, .accordion-item-leaf {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px;\n  height: 36px;\n  box-sizing: border-box;\n  width: 100%;\n  font-size: 16px;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  font-family: "Montserrat", sans-serif;\n  transition: background-color 0.3s ease;\n}\n.accordion-item-branch:nth-child(odd), .accordion-item-leaf:nth-child(odd) {\n  background-color: #FFFFFF;\n}\n.accordion-item-branch:nth-child(even), .accordion-item-leaf:nth-child(even) {\n  background-color: #F0F0F0;\n}\n.accordion-item-branch:hover, .accordion-item-leaf:hover {\n  background-color: #e6e6e6;\n}\n.accordion-item-branch:focus, .accordion-item-leaf:focus {\n  background-color: #cccccc;\n}\n.accordion-item-branch::after {\n  content: url("/widget-svg/rightArrow-0.7.39.svg");\n  margin-left: 10px;\n}\n.accordion-item-branch[aria-expanded=true]::after {\n  content: "▼";\n}\n/* The container must be positioned relative: */\n.custom-select {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  position: relative;\n  font-family: Montserrat;\n}\n.custom-select-column {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 16px;\n}\n.custom-select select {\n  display: none; /*hide original SELECT element: */\n}\n.select-selected {\n  color: rgb(0, 0, 0);\n  padding: 8px 16px;\n  border: 1px solid rgb(32, 32, 32);\n  width: 100%;\n  cursor: pointer;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  border-radius: 8px;\n}\n/* Style the arrow inside the select element: */\n.select-selected:after {\n  position: absolute;\n  top: 14px;\n  right: 10px;\n  width: 0;\n  height: 0;\n  border: 1px solid rgb(32, 32, 32);\n}\n/* Point the arrow upwards when the select box is open (active): */\n.select-selected.select-arrow-active:after {\n  border-color: transparent transparent rgb(215, 215, 215) transparent;\n  top: 7px;\n}\n/* Style items (options): */\n.select-items {\n  position: absolute;\n  background-color: rgb(255, 255, 255);\n  border: 1px solid rgb(32, 32, 32);\n  top: 100%;\n  left: 0;\n  right: 0;\n  z-index: 99;\n  border-radius: 8px;\n  margin-top: 3px;\n  max-height: 264px;\n  overflow-y: auto;\n}\n.select-items div {\n  padding-left: 16px;\n  box-sizing: border-box;\n  padding-right: 16px;\n  border: 1px solid;\n  cursor: pointer;\n  border-color: transparent transparent rgb(215, 215, 215) transparent;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  min-height: 33px;\n  font-size: 14px;\n  font-weight: 400;\n  font-family: Montserrat;\n}\n.select-items div:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.select-items div:hover:first-child {\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n}\n.select-items div:hover:last-child {\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n.select-items::-webkit-scrollbar {\n  width: 8px;\n  background-color: transparent;\n}\n.select-items::-webkit-scrollbar-thumb {\n  background-color: rgb(6, 149, 208);\n  margin-right: 8px;\n  border-radius: 8px;\n}\n.select-items::-webkit-scrollbar-thumb:hover {\n  background-color: rgb(6, 149, 208);\n}\n.select-items::-webkit-scrollbar-thumb:active {\n  background-color: rgb(6, 149, 208);\n}\n/* Hide the items when the select box is closed: */\n.select-hide {\n  display: none;\n}\n/* light theme */\n.dropdown-light-theme {\n  border-color: #333333;\n  background-color: #ffffff !important;\n  color: #333333;\n}\n/* dark theme */\n.dropdown-dark-theme {\n  background-color: #333333 !important;\n  border-color: #ffffff;\n  color: #ffffff;\n}\n/* high-contrast theme */\n.dropdown-hico-theme {\n  background-color: #000000 !important;\n  border-color: #ffffff;\n  color: #ffffff;\n}\n.dropdown-arrow-black {\n  background: url("/widget-svg/icon4-0.7.39.svg") no-repeat 96% 50%;\n  background-size: 10px;\n}\n.dropdown-arrow-white {\n  background: url("/widget-svg/icon7-0.7.39.svg") no-repeat 96% 50%;\n  background-size: 10px;\n}\n.header-light {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  background-color: rgb(238, 250, 254);\n  color: #000;\n  height: fit-content;\n  border-top-right-radius: inherit;\n  border-top-left-radius: inherit;\n  box-sizing: border-box;\n  width: 100%;\n  padding: 16px;\n  row-gap: 16px;\n  line-height: 30px;\n  font-size: 24px;\n  font-weight: bold;\n  font-family: "Montserrat";\n}\n.header-dark {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  background-color: rgb(32, 32, 32);\n  color: #fff;\n  height: fit-content;\n  border-top-right-radius: inherit;\n  border-top-left-radius: inherit;\n  box-sizing: border-box;\n  width: 100%;\n  padding: 16px;\n  row-gap: 16px;\n  line-height: 30px;\n  font-size: 24px;\n  font-weight: bold;\n  font-family: "Montserrat";\n}\n.header-hico {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  background-color: rgb(0, 0, 0);\n  color: #fff;\n  height: fit-content;\n  border-top-right-radius: inherit;\n  border-top-left-radius: inherit;\n  box-sizing: border-box;\n  width: 100%;\n  padding: 16px;\n  row-gap: 16px;\n  line-height: 30px;\n  font-size: 24px;\n  font-weight: bold;\n  font-family: "Montserrat";\n}\n:root {\n  --ide-theme-checkbox: #75BDDB;\n  --ide-theme-slider: #75BDDB;\n  --ide-text-color: #000;\n  --tab-scrollbar-gutter-background: rgba(246, 246, 246, 1);\n  --tab-scrollbar-thumb-background: rgba(215, 215, 215, 1);\n  --tab-scrollbar-thumb-hover-color: #AAA;\n}\n.data11y-code.light .token.comment {\n  color: rgb(101, 101, 101);\n}\n.data11y-code.light .token.property,\n.data11y-code.light .token.tag,\n.data11y-code.light .token.number,\n.data11y-code.light .token.constant,\n.data11y-code.light .token.symbol,\n.data11y-code.light .token.deleted {\n  color: rgb(204, 5, 55);\n}\n.data11y-code.light .token.selector,\n.data11y-code.light .token.attr-name,\n.data11y-code.light .token.string,\n.data11y-code.light .token.char,\n.data11y-code.light .token.builtin,\n.data11y-code.light .token.inserted {\n  color: rgb(130, 0, 101);\n}\n.data11y-code.light .token.operator,\n.data11y-code.light .token.entity,\n.data11y-code.light .token.url,\n.data11y-code.light .language-css .token.string,\n.data11y-code.light .style .token.string {\n  color: rgb(157, 75, 0);\n}\n.data11y-code.light .token.atrule,\n.data11y-code.light .token.boolean,\n.data11y-code.light .token.attr-value,\n.data11y-code.light .token.keyword {\n  color: rgb(16, 69, 172);\n}\n.data11y-code.light .token.function,\n.data11y-code.light .token.class-name {\n  color: rgb(41, 116, 6);\n}\n.data11y-code.light .token.regex,\n.data11y-code.light .token.important,\n.data11y-code.light .token.variable {\n  color: rgb(130, 0, 101);\n}\n.data11y-code.dark .token.comment {\n  color: rgb(173, 173, 173);\n}\n.data11y-code.dark .token.property,\n.data11y-code.dark .token.tag,\n.data11y-code.dark .token.number,\n.data11y-code.dark .token.constant,\n.data11y-code.dark .token.symbol,\n.data11y-code.dark .token.deleted {\n  color: rgb(249, 161, 198);\n}\n.data11y-code.dark .token.selector,\n.data11y-code.dark .token.attr-name,\n.data11y-code.dark .token.string,\n.data11y-code.dark .token.char,\n.data11y-code.dark .token.builtin,\n.data11y-code.dark .token.inserted {\n  color: rgb(215, 154, 253);\n}\n.data11y-code.dark .token.operator,\n.data11y-code.dark .token.entity,\n.data11y-code.dark .token.url,\n.data11y-code.dark .language-css .token.string,\n.data11y-code.dark .style .token.string {\n  color: rgb(249, 161, 198);\n}\n.data11y-code.dark .token.atrule,\n.data11y-code.dark .token.boolean,\n.data11y-code.dark .token.attr-value,\n.data11y-code.dark .token.keyword {\n  color: rgb(172, 209, 223);\n}\n.data11y-code.dark .token.function,\n.data11y-code.dark .token.class-name {\n  color: rgb(175, 254, 217);\n}\n.data11y-code.dark .token.regex,\n.data11y-code.dark .token.important,\n.data11y-code.dark .token.variable {\n  color: rgb(215, 154, 253);\n}\n.data11y-code.high-contrast .token.comment {\n  color: rgb(229, 230, 230);\n}\n.data11y-code.high-contrast .token.property,\n.data11y-code.high-contrast .token.tag,\n.data11y-code.high-contrast .token.number,\n.data11y-code.high-contrast .token.constant,\n.data11y-code.high-contrast .token.symbol,\n.data11y-code.high-contrast .token.deleted {\n  color: rgb(254, 124, 217);\n}\n.data11y-code.high-contrast .token.selector,\n.data11y-code.high-contrast .token.attr-name,\n.data11y-code.high-contrast .token.string,\n.data11y-code.high-contrast .token.char,\n.data11y-code.high-contrast .token.builtin,\n.data11y-code.high-contrast .token.inserted {\n  color: rgb(255, 230, 0);\n}\n.data11y-code.high-contrast .token.operator,\n.data11y-code.high-contrast .token.entity,\n.data11y-code.high-contrast .token.url,\n.data11y-code.high-contrast .language-css .token.string,\n.data11y-code.high-contrast .style .token.string {\n  color: rgb(255, 168, 0);\n}\n.data11y-code.high-contrast .token.atrule,\n.data11y-code.high-contrast .token.boolean,\n.data11y-code.high-contrast .token.attr-value,\n.data11y-code.high-contrast .token.keyword {\n  color: rgb(58, 220, 255);\n}\n.data11y-code.high-contrast .token.function,\n.data11y-code.high-contrast .token.class-name {\n  color: rgb(0, 255, 148);\n}\n.data11y-code.high-contrast .token.regex,\n.data11y-code.high-contrast .token.important,\n.data11y-code.high-contrast .token.variable {\n  color: rgb(190, 11, 0);\n}\n.hide-scrollbar {\n  overflow-x: scroll;\n  overflow-y: hidden;\n  -ms-overflow-style: none; /* for Internet Explorer */\n  scrollbar-width: none; /* for Firefox */\n}\n.hide-scrollbar::-webkit-scrollbar {\n  display: none; /* Safari and Chrome */\n}\n.hide-scrollbar-y {\n  /* make scrollbar appear and disappear when mouse is over the element */\n  overflow-y: scroll;\n  overflow-x: hidden;\n  -ms-overflow-style: none; /* for Internet Explorer */\n  scrollbar-width: none; /* for Firefox */\n}\n.hide-scrollbar-y::-webkit-scrollbar {\n  display: none; /* Safari and Chrome */\n}\n.text-scrollbar {\n  overflow-y: auto;\n  overflow-x: auto;\n  scrollbar-color: lightblue transparent;\n}\n.text-scrollbar::-webkit-scrollbar {\n  background: transparent;\n  width: 10px;\n  height: 10px;\n}\n/* make color show up when scrolling */\n.text-scrollbar::-webkit-scrollbar-thumb {\n  background: lightblue;\n  border-radius: 20px;\n  visibility: var(--ide-scrollbar-visibility);\n}\n.text-scrollbar::-webkit-scrollbar-corner {\n  background: transparent;\n  border-radius: 20px;\n}\n.text-scrollbar::-moz-scrollbar {\n  width: 2ch;\n  visibility: var(--ide-scrollbar-visibility);\n}\n.text-scrollbar::-moz-scrollbar-thumb {\n  background: lightblue;\n  border-radius: 20px;\n}\n@media (prefers-color-scheme: dark) {\n  .text-scrollbar::-webkit-scrollbar-thumb {\n    background: lightblue;\n  }\n}\n/* start rounded switch button */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n.slider:before {\n  position: absolute;\n  content: "";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\ninput:checked + .slider {\n  background-color: var(--ide-theme-slider);\n}\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n  /*give outline 1 pixel away from the slider */\n  outline-offset: 3px;\n  outline: 2px solid white;\n}\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n.slider.round:before {\n  border-radius: 50%;\n}\n/* end rounded switch button */\n/* start rounded radio button */\n.theme-radio-container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  font-size: 16px;\n  color: var(--ide-text-color);\n  font-weight: 400;\n  font-family: Montserrat, sans-serif;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.theme-radio-container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n.theme-radio-checkmark {\n  position: absolute;\n  top: 20;\n  left: 0;\n  height: 25px;\n  width: 25px;\n  border-radius: 50%;\n  outline: 2px solid var(--ide-text-color);\n  outline-offset: 3px;\n}\n.theme-radio-container:hover input ~ .theme-radio-checkmark {\n  background-color: #ccc;\n}\n.theme-radio-container input:checked ~ .theme-radio-checkmark {\n  background-color: var(--ide-theme-checkbox);\n  outline: 2px solid var(--ide-theme-checkbox);\n}\n.tab-scrollbar {\n  overflow-x: scroll;\n  overflow-y: hidden;\n  -ms-overflow-style: none; /* for Internet Explorer */\n  scrollbar-width: thin; /* for Firefox */\n  /* Firefox */\n  scrollbar-color: #888 rgba(0, 0, 0, 0); /* thumb and track color */\n  scrollbar-width: thin;\n}\n.tab-scrollbar::-webkit-scrollbar {\n  height: 6px; /* adjust as needed for desired "thinness" */\n  background: var(--tab-scrollbar-gutter-background);\n}\n.tab-scrollbar::-webkit-scrollbar-thumb {\n  background: var(--tab-scrollbar-thumb-background);\n  border-radius: 4px; /* roundness of the scroll thumb */\n  height: 3px; /* height of the scroll thumb */\n  border: 1px solid var(--tab-scrollbar-gutter-background); /* border around the thumb */\n}\n.tab-scrollbar::-webkit-scrollbar-thumb:hover {\n  background: var(--tab-scrollbar-thumb-hover-color);\n}\n.ideEditing {\n  font-family: "Courier New", Courier, monospace !important;\n}';
  document.head.appendChild(__vite_style__);
  const main = "";
  function hoverStyle(div, ogStyle, hoverStyle2) {
    div.onmouseover = function() {
      Object.assign(div.style, hoverStyle2);
    };
    div.onmouseout = function() {
      Object.assign(div.style, ogStyle);
    };
    div.onblur = function() {
      Object.assign(div.style, ogStyle);
    };
  }
  function createElement(type, attrs) {
    const element = document.createElement(type);
    if (attrs.id) {
      attrs.addDataset = { test: attrs.id, ...attrs.addDataset };
      if (attrs.id === "IdeInput") {
        console.log(attrs.addDataset);
      }
    }
    if (attrs.addDataset) {
      Object.assign(element.dataset, attrs.addDataset);
    }
    if (attrs.uniqueIdPrefix && attrs.id) {
      attrs.id = attrs.uniqueIdPrefix + attrs.id;
    }
    if (attrs.appendTo) {
      attrs.appendTo.appendChild(element);
    }
    Object.assign(element, attrs);
    if (attrs.addStyle) {
      Object.assign(element.style, attrs.addStyle);
    }
    if (attrs.addAriaLabelledBy) {
      element.setAttribute("aria-labelledby", attrs.addAriaLabelledBy);
    }
    if (attrs.addChildren) {
      attrs.addChildren.forEach((child) => element.appendChild(child));
    }
    if (attrs.addAriaDescribedBy) {
      element.setAttribute("aria-describedby", attrs.addAriaDescribedBy);
    }
    if (attrs.addClass) {
      if (Array.isArray(attrs.addClass)) {
        attrs.addClass.forEach((className) => element.classList.add(className));
      } else {
        element.classList.add(attrs.addClass);
      }
    }
    return element;
  }
  function updateElement(element, updates) {
    Object.assign(element, updates);
    if (updates.addDataset) {
      Object.assign(element.dataset, updates.addDataset);
    }
    if (updates.id) {
      element.dataset.test = updates.id;
    }
    if (updates.addStyle) {
      Object.assign(element.style, updates.addStyle);
    }
    if (updates.addChildren) {
      updates.addChildren.forEach((child) => element.appendChild(child));
    }
    if (updates.addHoverStyle && updates.addStyle) {
      hoverStyle(element, updates.addStyle, updates.addHoverStyle);
    }
    if (updates.removeClass) {
      if (Array.isArray(updates.removeClass)) {
        updates.removeClass.forEach((className) => element.classList.remove(className));
      } else {
        element.classList.remove(updates.removeClass);
      }
    }
    if (updates.appendTo) {
      updates.appendTo.appendChild(element);
    }
    if (updates.addClass) {
      if (Array.isArray(updates.addClass)) {
        updates.addClass.forEach((className) => element.classList.add(className));
      } else {
        element.classList.add(updates.addClass);
      }
    }
    if (updates.updateClass) {
      element.classList = "";
      if (Array.isArray(updates.updateClass)) {
        updates.updateClass.forEach((className) => element.classList.add(className));
      } else {
        element.classList.add(updates.updateClass);
      }
    }
    return element;
  }
  function updateSVG(element, updates) {
    if (updates.addStyle) {
      Object.assign(element.style, updates.addStyle);
    }
    if (updates.addClass) {
      if (Array.isArray(updates.addClass)) {
        updates.addClass.forEach((className) => element.classList.add(className));
      } else {
        element.classList.add(updates.addClass);
      }
    }
    if (updates.removeClass) {
      if (Array.isArray(updates.removeClass)) {
        updates.removeClass.forEach((className) => element.classList.remove(className));
      } else {
        element.classList.remove(updates.removeClass);
      }
    }
    return element;
  }
  function LoadScript(url, isModule = false) {
    return new Promise(function(resolve, reject) {
      const scripts = document.getElementsByTagName("script");
      const urlWithoutParams = new URL(url.split("?")[0], window.location.href);
      for (const script2 of scripts) {
        const scriptUrlWithoutParams = new URL(script2.src.split("?")[0], window.location.href);
        if (scriptUrlWithoutParams.href === urlWithoutParams.href) {
          if (script2.src !== url) {
            console.log(`Duplicate script with different parameters found: ${script2.src}`);
            console.log(`Using the existing script: ${script2.src}`);
            console.log(`did not load ${url}`);
          }
          resolve(script2);
          return;
        }
      }
      const script = document.createElement("script");
      if (isModule) {
        script.type = "module";
      }
      script.src = url;
      script.defer = true;
      script.onload = () => {
        resolve(script);
      };
      script.onerror = () => {
        console.error(`Script load error for ${url}`);
        reject(new Error(`Script load error for ${url}`));
      };
      document.head.appendChild(script);
    });
  }
  function LinkCSS(url) {
    return new Promise(function(resolve, reject) {
      const links = Array.from(document.getElementsByTagName("link"));
      const urlWithoutParams = new URL(url.split("?")[0], window.location.href);
      for (const link2 of links) {
        const linkHrefWithoutParams = new URL(link2.href.split("?")[0], window.location.href);
        if (linkHrefWithoutParams.href === urlWithoutParams.href) {
          if (link2.href !== url) {
            console.log(`Duplicate CSS with different parameters found: ${link2.href}`);
            console.log(`Using the existing CSS: ${link2.href}`);
            console.log(`did not load ${url}`);
          }
          resolve(link2);
          return;
        }
      }
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = url;
      document.head.appendChild(link);
      link.onload = () => {
        resolve(link);
      };
      link.onerror = () => {
        console.error(`CSS load error for ${url}`);
        reject(new Error(`CSS load error for ${url}`));
      };
    });
  }
  class Button {
    constructor(props) {
      __publicField(this, "_button");
      __publicField(this, "_disabled");
      const { className, text, icon, iconSize, uniqueIdPrefix, id, title } = props;
      this._disabled = false;
      if (icon && text) {
        let newIcon;
        if (iconSize == "xsmall") {
          newIcon = icon.replace(/width=".*?"/, 'width="15px"').replace(/height=".*?"/, 'height="15px"');
        } else if (iconSize == "small") {
          newIcon = icon.replace(/width=".*?"/, 'width="20px"').replace(/height=".*?"/, 'height="20px"');
        } else if (iconSize == "medium") {
          newIcon = icon.replace(/width=".*?"/, 'width="30px"').replace(/height=".*?"/, 'height="30px"');
        } else if (iconSize == "large") {
          newIcon = icon.replace(/width=".*?"/, 'width="40px"').replace(/height=".*?"/, 'height="40px"');
        } else {
          newIcon = icon;
        }
        this._button = createElement("button", {
          addClass: className,
          uniqueIdPrefix,
          id,
          innerHTML: newIcon + "&nbsp;" + text,
          ...title && { title }
        });
      } else if (icon) {
        this._button = createElement("button", {
          addClass: className,
          uniqueIdPrefix,
          id,
          innerHTML: icon,
          ...title && { title }
        });
      } else {
        this._button = createElement("button", {
          uniqueIdPrefix,
          id,
          addClass: className,
          textContent: text,
          ...title && { title }
        });
      }
    }
    get button() {
      return this._button;
    }
    get disabled() {
      return this._disabled;
    }
    set disabled(disabled) {
      this._disabled = disabled;
      this.button.disabled = disabled;
    }
    get text() {
      return this.button.textContent || "";
    }
    set text(newText) {
      this.button.textContent = newText;
    }
    getElement() {
      return this.button;
    }
    onClick(callback) {
      const newCallback = () => {
        console.log("button clicked");
        callback();
      };
      this.button.onclick = newCallback;
    }
    changeIcon(newIcon) {
      console.log("changing icon");
      console.log(newIcon);
      console.log(this.button.textContent);
      this.button.innerHTML = "";
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = newIcon;
      const svgElement = tempDiv.firstChild;
      this.button.appendChild(svgElement);
      const textNode = document.createTextNode(" " + this.button.textContent);
      this.button.appendChild(textNode);
    }
    render(parent) {
      parent.appendChild(this.button);
    }
    destroy() {
      this.button.remove();
    }
  }
  const UiKitColors = {
    quorum: {
      blue: {
        _150: "rgba(18,90,119,1)",
        _100: "rgba(6,149,208,1)",
        _50: "rgba(117,189,219,1)",
        _25: "rgba(172,209,223,1)",
        _10: "rgba(238,250,254,1)"
      }
    },
    neutral: {
      black: "rgba(0,0,0,1)",
      grey: {
        _95: "rgba(32,32,32,1)",
        _85: "rgba(43,43,43,1)",
        _75: "rgba(54,54,55,1)",
        _65: "rgba(64,64,64,1)",
        _50: "rgba(101,101,101,1)",
        _40: "rgba(114,114,114,1)",
        _25: "rgba(215,215,215,1)",
        _15: "rgba(229,230,230,1)",
        _10: "rgba(246,246,247,1)"
      },
      white: "rgba(255,255,255,1)"
    },
    text: {
      neutral: {
        black: "rgba(0,0,0,1)",
        grey: {
          _95: "rgba(32,32,32,1)",
          _10: "rgba(246,246,247,1)"
        },
        white: "rgba(255,255,255,1)"
      },
      hico: {
        red: "rgba(190,11,0,1)",
        blue: "rgba(58,220,255,1)",
        yellow: "rgba(255,230,0,1)",
        orange: "rgba(255,168,0,1)",
        green: "rgba(0, 255, 148, 1)",
        pink: "rgba(254, 124, 217, 1)",
        grey: "rgba(229, 230, 230, 1)"
      },
      dark: {
        green: "rgba(175,254,217,1)",
        yellow: "rgba(255,244,149,1)",
        blue: "rgba(172,209,223,1)",
        pink: "rgba(249, 161, 198, 1)",
        orange: "rgba(249, 161, 198, 1)",
        grey: "rgba(173, 173, 173, 1)",
        purple: "rgba(215, 154, 253, 1)"
      },
      light: {
        purple: "rgba(130,0,101,1)",
        blue: "rgba(16,69,172,1)",
        pink: "rgba(204,5,55,1)",
        orange: "rgba(157,75,0,1)",
        green: "rgba(41,116, 6, 1)",
        red: "rgba(107,0,0,1)",
        grey: "rgba(101, 101, 101, 1)"
      }
    },
    primary: {
      hover: "rgba(1,115,163,1)"
    },
    accent: {
      hover: "rgba(58,142,177,1)"
    },
    highcontrast: {
      hover: "rgba(0,159,193,1)"
    },
    secondary: {
      red: {
        _100: "rgba(148,9,1,1)",
        _50: "rgba(188,118,114,1)"
      },
      orange: "rgba(255,136,17,1)",
      green: "rgba(5,134,45,1)",
      hover: {
        grey: "rgba(199,197,197,1)",
        red: "rgba(115,7,1,1)"
      }
    },
    attention: {
      red: {
        _25: "rgba(255,116, 116,1)",
        _100: "rgba(255,0,0,1)"
      }
    },
    gradients: {
      text: {
        light: "linear-gradient(90deg, #202020 50%, #202020 50%, rgba(32, 32, 32, 0) 96.34%)",
        dark: "linear-gradient(90deg, #F6F6F7 37.8%, rgba(246, 246, 247, 0) 101.11%)",
        highcontrast: "linear-gradient(90deg, #FFFFFF 16.67%, rgba(255, 255, 255, 0) 101.11%)",
        grey: {
          _65: "linear-gradient(90deg, #414040 7.78%, rgba(65, 64, 64, 0) 101.11%)",
          _40: "linear-gradient(90deg, #727272 1.11%, rgba(114, 114, 114, 0) 101.11%)",
          _25: "linear-gradient(90deg, #D7D7D7 3.33%, rgba(215, 215, 215, 0) 98.89%)",
          _10: "linear-gradient(90deg, #F6F6F7 1.11%, rgba(246, 246, 247, 0) 101.11%)"
        }
      }
    },
    transparency: {
      primary: "rgba(6,149,208,0.5)",
      accent: "rgba(58,142,177,0.5)",
      hico: "rgba(0,159,193,0.5)"
    }
  };
  class InputField {
    constructor({
      theme = "light",
      size = "md",
      labelText,
      helperText,
      onChange,
      onInput,
      placeholder,
      id,
      uniqueIdPrefix
    }) {
      __publicField(this, "_container");
      __publicField(this, "_input");
      __publicField(this, "_labelEl");
      __publicField(this, "_helperText");
      __publicField(this, "_rendered", false);
      __publicField(this, "_theme");
      __publicField(this, "_size");
      __publicField(this, "_helperTextValue");
      this._container = createElement("div", {
        uniqueIdPrefix,
        id: `${id}_container`,
        addClass: `textField--outerContainer--${theme}`
      });
      this._theme = theme;
      this._size = size;
      this._helperTextValue = helperText;
      if (labelText) {
        this._labelEl = createElement("label", {
          addStyle: {
            display: "flex",
            marginLeft: "4px",
            flexDirection: "column",
            height: "fit-content"
          },
          innerText: labelText,
          addClass: "typo_text-lgText",
          htmlFor: `${uniqueIdPrefix}${id}_input`,
          uniqueIdPrefix,
          id: `${id}_label`,
          appendTo: this._container
        });
      }
      this._input = createElement("input", {
        uniqueIdPrefix,
        id: `${id}_input`,
        type: "text",
        placeholder,
        addClass: `textField--${size}--${theme}`,
        appendTo: this._container,
        onchange: (event) => {
          onChange == null ? void 0 : onChange(event.target.value);
        },
        oninput: (event) => {
          onInput == null ? void 0 : onInput(event.target.value);
        }
      });
      if (helperText != void 0) {
        this._helperText = createElement("p", {
          uniqueIdPrefix,
          id: `${id}_helperText`,
          innerText: helperText,
          addClass: "typo_text-mText",
          appendTo: this._container
        });
      }
    }
    set inputPlaceholder(placeholder) {
      this._input.placeholder = placeholder;
    }
    set label(label) {
      if (this._labelEl)
        this._labelEl.innerText = label;
    }
    set helperText(helperText) {
      if (this._helperText)
        this._helperText.innerText = helperText;
    }
    get helperTextEl() {
      return this._helperText;
    }
    get labelEl() {
      return this._labelEl;
    }
    get container() {
      return this._container;
    }
    get input() {
      return this._input;
    }
    get rendered() {
      return this._rendered;
    }
    set rendered(rendered) {
      this._rendered = rendered;
    }
    get helperTextValue() {
      return this._helperTextValue;
    }
    set helperTextValue(value) {
      this._helperTextValue = value;
      this.helperText = value || "";
    }
    set error(error) {
      var _a, _b;
      console.log("error", error);
      if (error) {
        if (this.helperTextEl)
          this.helperTextEl.style.display = "block";
        this._input.classList.add("error");
        (_a = this._helperText) == null ? void 0 : _a.classList.add("helperText--error");
        this.updateHelperTextColor();
      } else {
        if (this.helperTextEl)
          this.helperTextEl.style.display = "none";
        this._input.classList.remove("error");
        (_b = this._helperText) == null ? void 0 : _b.classList.remove("helperText--error");
        this.updateHelperTextColor();
      }
    }
    set valid(valid) {
      var _a, _b;
      if (valid) {
        if (this.helperTextEl)
          this.helperTextEl.style.display = "block";
        this._input.classList.add("valid");
        (_a = this._helperText) == null ? void 0 : _a.classList.add("helperText--valid");
        this.updateHelperTextColor();
      } else {
        this._input.classList.remove("valid");
        (_b = this._helperText) == null ? void 0 : _b.classList.remove("helperText--valid");
        this.updateHelperTextColor();
      }
    }
    setNormal() {
      this.error = false;
      this.valid = false;
    }
    updateHelperTextColor() {
      if (this._helperText) {
        if (this._input.classList.contains("error")) {
          if (this._theme === "light") {
            this._helperText.style.color = UiKitColors.secondary.red._100;
          } else if (this._theme === "dark") {
            this._helperText.style.color = UiKitColors.attention.red._25;
          } else if (this._theme === "high-contrast") {
            this._helperText.style.color = UiKitColors.attention.red._100;
          }
        } else if (this._input.classList.contains("valid")) {
          if (this._theme === "light") {
            this._helperText.style.color = UiKitColors.secondary.green;
          } else if (this._theme === "dark") {
            this._helperText.style.color = UiKitColors.text.dark.green;
          } else if (this._theme === "high-contrast") {
            this._helperText.style.color = UiKitColors.text.hico.green;
          }
        } else {
          this._helperText.style.color = this._theme === "dark" || this._theme === "high-contrast" ? "white" : "";
        }
      }
    }
    switchTheme(theme) {
      const textElements = this._container.querySelectorAll('[class^="typo_"]');
      textElements.forEach((element) => {
        element.style.color = theme === "dark" || theme === "high-contrast" ? "white" : "";
      });
      updateElement(this._container, { updateClass: `textField--outerContainer--${theme}` });
      if (this._input.classList.contains("error")) {
        updateElement(this._input, { updateClass: [`textField--${this._size}--${theme}`, `error`] });
      } else {
        updateElement(this._input, { updateClass: `textField--${this._size}--${theme}` });
      }
      this._theme = theme;
      this.updateHelperTextColor();
    }
    switchSize(size) {
      this._input.classList.remove(`textField--${this._size}--${this._theme}`);
      this._input.classList.add(`textField--${size}--${this._theme}`);
      this._size = size;
    }
    changeLabelClass(className) {
      if (this._labelEl) {
        this._labelEl.classList = "";
        this._labelEl.classList.add(className);
      }
    }
    render(parent) {
      this.rendered = true;
      parent.appendChild(this._container);
    }
    destroy() {
      this.rendered = false;
      this._container.remove();
    }
  }
  class TextInputField extends InputField {
    constructor(options) {
      super(options);
      this.input.type = options.type;
      this.input.addEventListener("input", () => {
        this.value = this.input.value;
      });
    }
    get value() {
      return this.input.value;
    }
    set value(value) {
      this.setNormal();
      this.input.value = value;
    }
    // Add any additional methods or properties specific to TextInputField here
  }
  class NumberInputField extends InputField {
    constructor(options) {
      super(options);
      __publicField(this, "_min");
      __publicField(this, "_max");
      this.input.type = "number";
      if (options.min)
        this.min = options.min;
      if (options.max)
        this.max = options.max;
      this.value = this._min || 1;
      this.input.addEventListener("input", (event) => {
        if (event.target.value === "") {
          this.input.min = "";
        } else {
          if (this._min !== void 0) {
            this.input.min = this._min.toString();
          }
          this.value = +this.input.value;
        }
      });
      this.input.addEventListener("change", () => {
        if (this.input.value === "") {
          this.value = this._min || 1;
        }
        this.input.dispatchEvent(new Event("valueChanged"));
      });
    }
    set min(min) {
      this._min = min;
      this.input.min = min.toString();
    }
    set max(max) {
      this._max = max;
      this.input.max = max.toString();
    }
    get value() {
      return +this.input.value;
    }
    set value(value) {
      this.setNormal();
      if (this._min && value < this._min) {
        this.input.value = this._min.toString();
      } else if (this._max && Number(value) > this._max) {
        this.input.value = this._max.toString();
      } else {
        this.input.value = value.toString();
      }
      this.input.dispatchEvent(new Event("valueChanged"));
    }
  }
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  var events = { exports: {} };
  var R = typeof Reflect === "object" ? Reflect : null;
  var ReflectApply = R && typeof R.apply === "function" ? R.apply : function ReflectApply2(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  };
  var ReflectOwnKeys;
  if (R && typeof R.ownKeys === "function") {
    ReflectOwnKeys = R.ownKeys;
  } else if (Object.getOwnPropertySymbols) {
    ReflectOwnKeys = function ReflectOwnKeys2(target) {
      return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
    };
  } else {
    ReflectOwnKeys = function ReflectOwnKeys2(target) {
      return Object.getOwnPropertyNames(target);
    };
  }
  function ProcessEmitWarning(warning) {
    if (console && console.warn)
      console.warn(warning);
  }
  var NumberIsNaN = Number.isNaN || function NumberIsNaN2(value) {
    return value !== value;
  };
  function EventEmitter() {
    EventEmitter.init.call(this);
  }
  events.exports = EventEmitter;
  events.exports.once = once;
  EventEmitter.EventEmitter = EventEmitter;
  EventEmitter.prototype._events = void 0;
  EventEmitter.prototype._eventsCount = 0;
  EventEmitter.prototype._maxListeners = void 0;
  var defaultMaxListeners = 10;
  function checkListener(listener) {
    if (typeof listener !== "function") {
      throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
    }
  }
  Object.defineProperty(EventEmitter, "defaultMaxListeners", {
    enumerable: true,
    get: function() {
      return defaultMaxListeners;
    },
    set: function(arg) {
      if (typeof arg !== "number" || arg < 0 || NumberIsNaN(arg)) {
        throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
      }
      defaultMaxListeners = arg;
    }
  });
  EventEmitter.init = function() {
    if (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) {
      this._events = /* @__PURE__ */ Object.create(null);
      this._eventsCount = 0;
    }
    this._maxListeners = this._maxListeners || void 0;
  };
  EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
    if (typeof n !== "number" || n < 0 || NumberIsNaN(n)) {
      throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
    }
    this._maxListeners = n;
    return this;
  };
  function _getMaxListeners(that) {
    if (that._maxListeners === void 0)
      return EventEmitter.defaultMaxListeners;
    return that._maxListeners;
  }
  EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
    return _getMaxListeners(this);
  };
  EventEmitter.prototype.emit = function emit(type) {
    var args = [];
    for (var i = 1; i < arguments.length; i++)
      args.push(arguments[i]);
    var doError = type === "error";
    var events2 = this._events;
    if (events2 !== void 0)
      doError = doError && events2.error === void 0;
    else if (!doError)
      return false;
    if (doError) {
      var er;
      if (args.length > 0)
        er = args[0];
      if (er instanceof Error) {
        throw er;
      }
      var err = new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
      err.context = er;
      throw err;
    }
    var handler = events2[type];
    if (handler === void 0)
      return false;
    if (typeof handler === "function") {
      ReflectApply(handler, this, args);
    } else {
      var len = handler.length;
      var listeners = arrayClone(handler, len);
      for (var i = 0; i < len; ++i)
        ReflectApply(listeners[i], this, args);
    }
    return true;
  };
  function _addListener(target, type, listener, prepend) {
    var m;
    var events2;
    var existing;
    checkListener(listener);
    events2 = target._events;
    if (events2 === void 0) {
      events2 = target._events = /* @__PURE__ */ Object.create(null);
      target._eventsCount = 0;
    } else {
      if (events2.newListener !== void 0) {
        target.emit(
          "newListener",
          type,
          listener.listener ? listener.listener : listener
        );
        events2 = target._events;
      }
      existing = events2[type];
    }
    if (existing === void 0) {
      existing = events2[type] = listener;
      ++target._eventsCount;
    } else {
      if (typeof existing === "function") {
        existing = events2[type] = prepend ? [listener, existing] : [existing, listener];
      } else if (prepend) {
        existing.unshift(listener);
      } else {
        existing.push(listener);
      }
      m = _getMaxListeners(target);
      if (m > 0 && existing.length > m && !existing.warned) {
        existing.warned = true;
        var w = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        w.name = "MaxListenersExceededWarning";
        w.emitter = target;
        w.type = type;
        w.count = existing.length;
        ProcessEmitWarning(w);
      }
    }
    return target;
  }
  EventEmitter.prototype.addListener = function addListener(type, listener) {
    return _addListener(this, type, listener, false);
  };
  EventEmitter.prototype.on = EventEmitter.prototype.addListener;
  EventEmitter.prototype.prependListener = function prependListener(type, listener) {
    return _addListener(this, type, listener, true);
  };
  function onceWrapper() {
    if (!this.fired) {
      this.target.removeListener(this.type, this.wrapFn);
      this.fired = true;
      if (arguments.length === 0)
        return this.listener.call(this.target);
      return this.listener.apply(this.target, arguments);
    }
  }
  function _onceWrap(target, type, listener) {
    var state = { fired: false, wrapFn: void 0, target, type, listener };
    var wrapped = onceWrapper.bind(state);
    wrapped.listener = listener;
    state.wrapFn = wrapped;
    return wrapped;
  }
  EventEmitter.prototype.once = function once2(type, listener) {
    checkListener(listener);
    this.on(type, _onceWrap(this, type, listener));
    return this;
  };
  EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
    checkListener(listener);
    this.prependListener(type, _onceWrap(this, type, listener));
    return this;
  };
  EventEmitter.prototype.removeListener = function removeListener(type, listener) {
    var list, events2, position, i, originalListener;
    checkListener(listener);
    events2 = this._events;
    if (events2 === void 0)
      return this;
    list = events2[type];
    if (list === void 0)
      return this;
    if (list === listener || list.listener === listener) {
      if (--this._eventsCount === 0)
        this._events = /* @__PURE__ */ Object.create(null);
      else {
        delete events2[type];
        if (events2.removeListener)
          this.emit("removeListener", type, list.listener || listener);
      }
    } else if (typeof list !== "function") {
      position = -1;
      for (i = list.length - 1; i >= 0; i--) {
        if (list[i] === listener || list[i].listener === listener) {
          originalListener = list[i].listener;
          position = i;
          break;
        }
      }
      if (position < 0)
        return this;
      if (position === 0)
        list.shift();
      else {
        spliceOne(list, position);
      }
      if (list.length === 1)
        events2[type] = list[0];
      if (events2.removeListener !== void 0)
        this.emit("removeListener", type, originalListener || listener);
    }
    return this;
  };
  EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
  EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
    var listeners, events2, i;
    events2 = this._events;
    if (events2 === void 0)
      return this;
    if (events2.removeListener === void 0) {
      if (arguments.length === 0) {
        this._events = /* @__PURE__ */ Object.create(null);
        this._eventsCount = 0;
      } else if (events2[type] !== void 0) {
        if (--this._eventsCount === 0)
          this._events = /* @__PURE__ */ Object.create(null);
        else
          delete events2[type];
      }
      return this;
    }
    if (arguments.length === 0) {
      var keys = Object.keys(events2);
      var key;
      for (i = 0; i < keys.length; ++i) {
        key = keys[i];
        if (key === "removeListener")
          continue;
        this.removeAllListeners(key);
      }
      this.removeAllListeners("removeListener");
      this._events = /* @__PURE__ */ Object.create(null);
      this._eventsCount = 0;
      return this;
    }
    listeners = events2[type];
    if (typeof listeners === "function") {
      this.removeListener(type, listeners);
    } else if (listeners !== void 0) {
      for (i = listeners.length - 1; i >= 0; i--) {
        this.removeListener(type, listeners[i]);
      }
    }
    return this;
  };
  function _listeners(target, type, unwrap) {
    var events2 = target._events;
    if (events2 === void 0)
      return [];
    var evlistener = events2[type];
    if (evlistener === void 0)
      return [];
    if (typeof evlistener === "function")
      return unwrap ? [evlistener.listener || evlistener] : [evlistener];
    return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
  }
  EventEmitter.prototype.listeners = function listeners(type) {
    return _listeners(this, type, true);
  };
  EventEmitter.prototype.rawListeners = function rawListeners(type) {
    return _listeners(this, type, false);
  };
  EventEmitter.listenerCount = function(emitter, type) {
    if (typeof emitter.listenerCount === "function") {
      return emitter.listenerCount(type);
    } else {
      return listenerCount.call(emitter, type);
    }
  };
  EventEmitter.prototype.listenerCount = listenerCount;
  function listenerCount(type) {
    var events2 = this._events;
    if (events2 !== void 0) {
      var evlistener = events2[type];
      if (typeof evlistener === "function") {
        return 1;
      } else if (evlistener !== void 0) {
        return evlistener.length;
      }
    }
    return 0;
  }
  EventEmitter.prototype.eventNames = function eventNames() {
    return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
  };
  function arrayClone(arr, n) {
    var copy = new Array(n);
    for (var i = 0; i < n; ++i)
      copy[i] = arr[i];
    return copy;
  }
  function spliceOne(list, index) {
    for (; index + 1 < list.length; index++)
      list[index] = list[index + 1];
    list.pop();
  }
  function unwrapListeners(arr) {
    var ret = new Array(arr.length);
    for (var i = 0; i < ret.length; ++i) {
      ret[i] = arr[i].listener || arr[i];
    }
    return ret;
  }
  function once(emitter, name) {
    return new Promise(function(resolve, reject) {
      function errorListener(err) {
        emitter.removeListener(name, resolver);
        reject(err);
      }
      function resolver() {
        if (typeof emitter.removeListener === "function") {
          emitter.removeListener("error", errorListener);
        }
        resolve([].slice.call(arguments));
      }
      eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
      if (name !== "error") {
        addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
      }
    });
  }
  function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
    if (typeof emitter.on === "function") {
      eventTargetAgnosticAddListener(emitter, "error", handler, flags);
    }
  }
  function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
    if (typeof emitter.on === "function") {
      if (flags.once) {
        emitter.once(name, listener);
      } else {
        emitter.on(name, listener);
      }
    } else if (typeof emitter.addEventListener === "function") {
      emitter.addEventListener(name, function wrapListener(arg) {
        if (flags.once) {
          emitter.removeEventListener(name, wrapListener);
        }
        listener(arg);
      });
    } else {
      throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
    }
  }
  var eventsExports = events.exports;
  const EventEmitter$1 = /* @__PURE__ */ getDefaultExportFromCjs(eventsExports);
  class Dropdown {
    constructor(d_options) {
      __publicField(this, "_outerContainer");
      __publicField(this, "_label");
      __publicField(this, "_dropdown");
      __publicField(this, "_selectDropdown");
      __publicField(this, "_selected");
      __publicField(this, "_items");
      __publicField(this, "_options");
      __publicField(this, "_rendered");
      __publicField(this, "_emitter");
      __publicField(this, "_id");
      __publicField(this, "_value");
      __publicField(this, "_valueIndex");
      __publicField(this, "_uniqueIdPrefix");
      __publicField(this, "_liveRegion");
      const { uniqueIdPrefix, id, options, label } = d_options;
      this._id = id;
      this._uniqueIdPrefix = uniqueIdPrefix;
      this._rendered = false;
      this._value = options[0];
      this._valueIndex = 0;
      if (label) {
        this.createOuterContainer();
        this.createLabel(label);
      }
      this._dropdown = this.createDropdown();
      this._options = options;
      this._selectDropdown = this.createSelectDropdown();
      const { selected, items } = this.createSelectElements();
      this._selected = selected;
      this._items = items;
      this.addAriaAttributes();
      this._emitter = new EventEmitter$1();
    }
    get outerContainer() {
      return this._outerContainer;
    }
    get label() {
      return this._label;
    }
    get dropdown() {
      return this._dropdown;
    }
    get selectDropdown() {
      return this._selectDropdown;
    }
    get selected() {
      return this._selected;
    }
    get items() {
      return this._items;
    }
    get rendered() {
      return this._rendered;
    }
    set rendered(rendered) {
      this._rendered = rendered;
    }
    get value() {
      return this._value;
    }
    set value(value) {
      this._value = value;
      this._valueIndex = this._options.indexOf(value);
      const valueSpan = createElement("span", {
        innerText: value,
        addStyle: {
          width: "inherit",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          display: "block"
        }
      });
      this.selected.innerHTML = "";
      this.selected.appendChild(valueSpan);
      this.selectDropdown.selectedIndex = this.valueIndex;
    }
    get valueIndex() {
      return this._valueIndex;
    }
    set valueIndex(valueIndex) {
      this._valueIndex = valueIndex;
      this._value = this._options[valueIndex];
      this.selectDropdown.selectedIndex = this.valueIndex;
    }
    get selectedOptionText() {
      return this.selectDropdown.options[this.selectDropdown.selectedIndex].innerHTML;
    }
    get id() {
      return this._id;
    }
    createLiveRegion() {
      this._liveRegion = createElement("div", {
        uniqueIdPrefix: this._uniqueIdPrefix,
        id: this.id + "liveRegion",
        addStyle: {
          position: "absolute",
          width: "1px",
          height: "1px",
          margin: "-1px",
          padding: "0",
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          border: "0"
        },
        ariaLive: "polite",
        ariaAtomic: "true"
      });
      return this._liveRegion;
    }
    addAriaAttributes() {
      if (this.label) {
        this.label.htmlFor = this._uniqueIdPrefix + this.id + "selected";
      }
      this.dropdown.setAttribute("role", "presentation");
      this.selected.setAttribute("role", "combobox");
      this.selected.setAttribute("aria-haspopup", "listbox");
      this.selected.setAttribute("aria-expanded", "false");
      if (this.label) {
        this.selected.setAttribute("aria-labelledby", this._uniqueIdPrefix + this.id + "dropdownlabel");
      }
      this.items.setAttribute("role", "listbox");
      this.items.setAttribute("aria-labelledby", this._uniqueIdPrefix + this.id + "selected");
      this.items.setAttribute("tabindex", "-1");
    }
    createOuterContainer() {
      this._outerContainer = createElement("div", {
        uniqueIdPrefix: this._uniqueIdPrefix,
        id: this.id + "outerContainer",
        addClass: "custom-select-column"
      });
      this._outerContainer.appendChild(this.createLiveRegion());
    }
    createLabel(label) {
      if (!this.outerContainer)
        return;
      this._label = createElement("label", {
        addStyle: {
          display: "flex",
          marginLeft: "1rem",
          flexDirection: "column",
          height: "fit-content"
        },
        innerText: label,
        addClass: "typo_text-lgText",
        uniqueIdPrefix: this._uniqueIdPrefix,
        id: this.id + "dropdownlabel",
        appendTo: this.outerContainer
      });
    }
    createDropdown() {
      this._dropdown = createElement("div", {
        uniqueIdPrefix: this._uniqueIdPrefix,
        id: this.id + "dropdown",
        addClass: "custom-select",
        addStyle: {
          width: "inherit"
        }
      });
      if (this.outerContainer) {
        this.outerContainer.appendChild(this.dropdown);
      }
      return this.dropdown;
    }
    createSelectDropdown() {
      this._selectDropdown = createElement("select", {
        uniqueIdPrefix: this._uniqueIdPrefix,
        id: this.id + "selectDropdown",
        appendTo: this.dropdown
      });
      this._options.forEach((option) => {
        createElement("option", {
          uniqueIdPrefix: this._uniqueIdPrefix,
          ariaSelected: "false",
          value: option,
          innerText: option,
          appendTo: this.selectDropdown
        });
      });
      return this.selectDropdown;
    }
    createSelectElements() {
      const selected = this.createSelectedElement();
      const items = this.createItemsElement();
      this.addOptionsToItems(items);
      this.dropdown.appendChild(selected);
      this.dropdown.appendChild(items);
      return { selected, items };
    }
    createSelectedElement() {
      return createElement("div", {
        tabIndex: 0,
        uniqueIdPrefix: this._uniqueIdPrefix,
        id: this.id + "selected",
        addClass: ["select-selected", "dropdown-arrow-black", "dropdown-light-theme"],
        innerHTML: this.selectedOptionText,
        onblur: (e) => this.handleBlur(e),
        onclick: (e) => this.openOptionMenu(e),
        onkeydown: (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            this.openOptionMenu(e);
          } else {
            this.navigateItems(e);
          }
        }
      });
    }
    handleBlur(e) {
      const relatedTarget = e.relatedTarget;
      if (!relatedTarget || !this.dropdown.contains(relatedTarget)) {
        console.log("close");
        this.closeOptionMenu();
      }
    }
    closeOptionMenu() {
      this.selected.ariaExpanded = "false";
      this.items.classList.add("select-hide");
      this.selected.setAttribute("aria-expanded", "false");
    }
    createItemsElement() {
      return createElement("div", {
        uniqueIdPrefix: this._uniqueIdPrefix,
        role: "listbox",
        ariaExpanded: "false",
        id: this.id + "items",
        addClass: ["select-items", "select-hide", "dropdown-light-theme"],
        onkeydown: (e) => {
          this.navigateItems(e);
        }
      });
    }
    addOptionsToItems(items) {
      const selectLength = this.selectDropdown.options.length;
      for (let i = 0; i < selectLength; i++) {
        createElement("div", {
          uniqueIdPrefix: this._uniqueIdPrefix,
          ariaSelected: i === this.valueIndex ? "true" : "false",
          role: "option",
          id: this.id + "option" + i,
          innerHTML: this.selectDropdown.options[i].innerHTML,
          tabIndex: 0,
          onclick: (e) => this.changeValue(i, e.target.innerHTML),
          onkeydown: (e) => this.handleOptionKeyDown(e, i, e.target),
          appendTo: items
        });
      }
    }
    addOption(newOption) {
      this._options.push(newOption);
      createElement("option", {
        uniqueIdPrefix: this._uniqueIdPrefix,
        ariaSelected: "false",
        value: newOption,
        innerText: newOption,
        appendTo: this.selectDropdown
      });
      const optionIndex = this._options.length - 1;
      createElement("div", {
        uniqueIdPrefix: this._uniqueIdPrefix,
        ariaSelected: optionIndex === this.valueIndex ? "true" : "false",
        role: "option",
        id: this.id + "option" + optionIndex,
        innerHTML: newOption,
        tabIndex: 0,
        onclick: (e) => this.changeValue(optionIndex, e.target.innerHTML),
        onkeydown: (e) => this.handleOptionKeyDown(e, optionIndex, e.target),
        appendTo: this.items
      });
    }
    removeOption(value) {
      const index = this._options.findIndex((option) => option === value);
      if (index === -1) {
        console.error(`Option with value "${value}" not found.`);
        return;
      }
      this._options.splice(index, 1);
      this.selectDropdown.removeChild(this.selectDropdown.options[index]);
      this.items.removeChild(this.items.children[index]);
      if (this.value === value) {
        this.valueIndex = 0;
      } else if (index < this.valueIndex) {
        this.valueIndex--;
      }
    }
    updateOption(position, updateText) {
      let index;
      if (typeof position === "number") {
        index = position;
      } else {
        index = this._options.findIndex((option) => option === position);
        if (index === -1) {
          console.error(`Option with value "${position}" not found.`);
          return;
        }
      }
      this.selectDropdown.options[index].innerHTML = updateText;
      this.selectDropdown.options[index].value = updateText;
      this.items.children[index].innerHTML = updateText;
      this._options[index] = updateText;
      if (this.valueIndex === index) {
        this.selected.innerHTML = updateText;
        this.value = updateText;
      }
    }
    handleOptionKeyDown(e, index, optionElement) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        this.changeValue(index, optionElement.innerHTML);
      } else {
        e.preventDefault();
        this.focusOption(e);
      }
    }
    openOptionMenu(e) {
      e.stopPropagation();
      if (!e.target)
        return;
      this.selected.ariaExpanded = "true";
      this.items.classList.toggle("select-hide");
      e.target.onkeyup = (e2) => this.focusOption.call(this, e2);
    }
    focusOption(e) {
      const key = e.key.toLowerCase();
      for (let i = 0; i < this._options.length; i++) {
        const optionText = this.items.children[i].innerHTML.toLowerCase();
        if (optionText.startsWith(key)) {
          this.items.children[i].focus();
          this.items.setAttribute("aria-activedescendant", this._uniqueIdPrefix + this.id + "option" + i);
          break;
        }
      }
    }
    changeValue(index, value) {
      const prevValue = this.selectDropdown.value;
      this.selectDropdown.selectedIndex = index;
      this.value = value;
      this.valueIndex = index;
      for (let i = 0; i < this._options.length; i++) {
        if (i !== index) {
          this.items.children[i].setAttribute("aria-selected", "false");
        } else {
          this.items.children[i].setAttribute("aria-selected", "true");
        }
      }
      this.closeOptionMenu();
      if (prevValue !== value) {
        this._emitter.emit("change", value);
      }
    }
    addOnChangeListener(listener) {
      this._emitter.on("change", listener);
    }
    navigateItems(e) {
      const key = e.key.toLowerCase();
      if (key === "arrowdown" || key === "arrowup") {
        e.preventDefault();
        const options = this.items.children;
        const selectedOption = this.items.querySelector(":focus");
        if (selectedOption) {
          const index = Array.from(options).indexOf(selectedOption);
          if (key === "arrowdown") {
            if (index < options.length - 1) {
              options[index + 1].focus();
            } else {
              options[0].focus();
              this.items.scrollTop = 0;
            }
          } else {
            if (index > 0) {
              options[index - 1].focus();
            } else {
              options[options.length - 1].focus();
            }
          }
          this.items.setAttribute("aria-activedescendant", options[index].id);
        } else {
          options[0].focus();
          this.items.scrollTop = 0;
          this.items.setAttribute("aria-activedescendant", options[0].id);
        }
      }
    }
    setOptions(newOptions) {
      this.selectDropdown.innerHTML = "";
      this.items.innerHTML = "";
      this._options = newOptions;
      newOptions.forEach((option, index) => {
        createElement("option", {
          role: "option",
          uniqueIdPrefix: this._uniqueIdPrefix,
          value: option,
          ariaSelected: this.valueIndex === 0 ? "true" : "false",
          innerText: option,
          appendTo: this.selectDropdown
        });
      });
      this.addOptionsToItems(this.items);
      this.value = newOptions[0];
      this.valueIndex = 0;
    }
    handleDocumentKeyDown(e) {
      if (e.key === "Escape") {
        const dropdownOpened = !this.items.classList.contains("select-hide");
        if (dropdownOpened) {
          this.closeOptionMenu();
          this.selected.focus();
        }
      }
    }
    switchTheme(theme) {
      const themeClassMap = {
        light: "dropdown-light-theme",
        dark: "dropdown-dark-theme",
        hico: "dropdown-hico-theme"
      };
      Object.values(themeClassMap).forEach((themeClass) => {
        if (this.outerContainer) {
          updateElement(this.outerContainer, {
            removeClass: themeClass
          });
        } else {
          updateElement(this.dropdown, {
            removeClass: themeClass
          });
        }
        this.selected.classList.remove(themeClass);
        this.items.classList.remove(themeClass);
      });
      if (this.outerContainer) {
        updateElement(this.selected, {
          addClass: `dropdown-${theme === "high-contrast" ? "hico" : theme}-theme`
        });
      }
      this.selected.classList.add(`dropdown-${theme === "high-contrast" ? "hico" : theme}-theme`);
      this.items.classList.add(`dropdown-${theme === "high-contrast" ? "hico" : theme}-theme`);
      if (theme === "high-contrast" || theme === "dark") {
        if (this.label)
          this.label.style.color = "white";
        this.selected.classList.add("dropdown-arrow-white");
        this.selected.classList.remove("dropdown-arrow-black");
      } else if (theme === "light") {
        if (this.label)
          this.label.style.color = "black";
        this.selected.classList.remove("dropdown-arrow-white");
        this.selected.classList.add("dropdown-arrow-black");
      }
    }
    render(parent) {
      this.outerContainer ? parent.appendChild(this.outerContainer) : parent.appendChild(this.dropdown);
      this.rendered = true;
      document.addEventListener("keydown", this.handleDocumentKeyDown.bind(this));
    }
    destroy() {
      this.value = this._options[0];
      this.outerContainer ? this.outerContainer.remove() : this.dropdown.remove();
      this.rendered = false;
      document.removeEventListener("keydown", this.handleDocumentKeyDown.bind(this));
    }
  }
  const settingsIcon = `<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3751 20H8.62509C8.37509 20 8.15843 19.9167 7.97509 19.75C7.79176 19.5833 7.68343 19.375 7.65009 19.125L7.35009 16.8C7.13343 16.7167 6.92943 16.6167 6.73809 16.5C6.54609 16.3833 6.35843 16.2583 6.17509 16.125L4.00009 17.025C3.76676 17.1083 3.53343 17.1167 3.30009 17.05C3.06676 16.9833 2.88343 16.8417 2.75009 16.625L0.900093 13.4C0.76676 13.1833 0.725093 12.95 0.775093 12.7C0.825093 12.45 0.950093 12.25 1.15009 12.1L3.02509 10.675C3.00843 10.5583 3.00009 10.4457 3.00009 10.337V9.662C3.00009 9.554 3.00843 9.44167 3.02509 9.325L1.15009 7.9C0.950093 7.75 0.825093 7.55 0.775093 7.3C0.725093 7.05 0.76676 6.81667 0.900093 6.6L2.75009 3.375C2.86676 3.14167 3.04576 2.99567 3.28709 2.937C3.52909 2.879 3.76676 2.89167 4.00009 2.975L6.17509 3.875C6.35843 3.74167 6.55009 3.61667 6.75009 3.5C6.95009 3.38333 7.15009 3.28333 7.35009 3.2L7.65009 0.875C7.68343 0.625 7.79176 0.416667 7.97509 0.25C8.15843 0.0833333 8.37509 0 8.62509 0H12.3751C12.6251 0 12.8418 0.0833333 13.0251 0.25C13.2084 0.416667 13.3168 0.625 13.3501 0.875L13.6501 3.2C13.8668 3.28333 14.0711 3.38333 14.2631 3.5C14.4544 3.61667 14.6418 3.74167 14.8251 3.875L17.0001 2.975C17.2334 2.89167 17.4668 2.88333 17.7001 2.95C17.9334 3.01667 18.1168 3.15833 18.2501 3.375L20.1001 6.6C20.2334 6.81667 20.2751 7.05 20.2251 7.3C20.1751 7.55 20.0501 7.75 19.8501 7.9L17.9751 9.325C17.9918 9.44167 18.0001 9.554 18.0001 9.662V10.337C18.0001 10.4457 17.9834 10.5583 17.9501 10.675L19.8251 12.1C20.0251 12.25 20.1501 12.45 20.2001 12.7C20.2501 12.95 20.2084 13.1833 20.0751 13.4L18.2251 16.6C18.0918 16.8167 17.9044 16.9627 17.6631 17.038C17.4211 17.1127 17.1834 17.1083 16.9501 17.025L14.8251 16.125C14.6418 16.2583 14.4501 16.3833 14.2501 16.5C14.0501 16.6167 13.8501 16.7167 13.6501 16.8L13.3501 19.125C13.3168 19.375 13.2084 19.5833 13.0251 19.75C12.8418 19.9167 12.6251 20 12.3751 20ZM10.5501 13.5C11.5168 13.5 12.3418 13.1583 13.0251 12.475C13.7084 11.7917 14.0501 10.9667 14.0501 10C14.0501 9.03333 13.7084 8.20833 13.0251 7.525C12.3418 6.84167 11.5168 6.5 10.5501 6.5C9.56676 6.5 8.73743 6.84167 8.06209 7.525C7.38743 8.20833 7.05009 9.03333 7.05009 10C7.05009 10.9667 7.38743 11.7917 8.06209 12.475C8.73743 13.1583 9.56676 13.5 10.5501 13.5Z" />
</svg>`;
  const quorumIcon = `<svg width="48" height="46" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.5796 3.07138C38.4558 5.15206 45.578 12.8333 46.7454 22.5734C47.7547 30.9937 43.0348 40.8651 36.42 43.995C35.0651 41.4463 33.201 39.3751 30.2536 38.2306C33.4287 35.7973 35.9077 33.0433 35.2581 28.8298C34.66 24.9508 32.3497 22.1816 28.9615 20.1525C29.2619 19.0038 29.5714 17.8206 29.8877 16.6112C30.9059 17.2915 31.9025 17.9573 32.8096 18.5634C33.0901 18.4013 33.193 18.3788 33.2205 18.3207C34.2837 16.0706 32.2749 11.8552 29.8759 11.2785C28.6468 10.983 27.4991 11.2279 27.0346 12.4216C26.3636 14.146 25.9252 15.9658 25.4682 17.7652C25.3053 18.4063 25.3774 19.1069 25.3372 19.8783C24.8799 19.8987 24.4706 19.917 24.0383 19.9362C24.0383 18.4639 24.173 17.0638 24.013 15.6981C23.5355 11.6229 21.4808 8.44525 18.1815 6.0471C17.9244 5.86021 17.6426 5.69935 17.3544 5.5644C16.2844 5.06328 15.8541 5.27559 16.0454 6.43046C16.3964 8.54935 16.8027 10.6794 17.4409 12.7254C18.2454 15.3045 19.3055 17.8041 20.2745 20.3894C17.0104 22.1413 14.4965 24.6925 14.0178 28.6242C13.5319 32.6149 15.9019 35.3867 18.7048 38.0678C15.5831 39.1359 13.5293 41.294 11.9256 43.918C4.4064 39.4254 -0.928616 28.7456 2.90131 17.7412C6.55858 7.23277 17.6315 0.889371 28.5796 3.07138Z" />
<path d="M27.1204 30.1943C26.1437 30.2008 25.974 29.3978 25.5927 28.7541C25.3856 28.4046 24.9482 27.9741 24.6168 27.9758C24.2798 27.9776 23.7686 28.4023 23.6427 28.7526C23.2453 29.8585 22.5317 30.3527 21.3852 30.2795C19.998 30.1909 18.5956 30.1968 17.2283 29.9814C15.9465 29.7795 15.6107 29.01 15.8042 27.4358C15.9428 26.3081 16.8398 26.4101 17.5332 26.4636C19.3154 26.6009 21.1238 26.7175 22.8532 27.1295C24.5277 27.5284 26.0629 27.2077 27.7406 26.9298C27.8398 27.1154 27.8398 27.2186 27.7485 27.3401C27.1542 27.5805 26.6512 27.8025 26.1481 28.0245C26.4331 28.5962 26.7171 29.1685 27.0045 29.739C27.0384 29.8064 27.0912 29.8643 27.131 29.9935C27.1247 30.105 27.1225 30.1496 27.1204 30.1943ZM18.1144 29.5503C19.3466 29.6063 20.5783 29.6898 21.811 29.7091C22.7258 29.7234 22.9533 28.9708 22.9377 28.3119C22.9306 28.0159 22.3507 27.5369 21.9796 27.4812C20.6034 27.2747 19.2079 27.162 17.8158 27.1057C16.5374 27.054 16.2589 27.3687 16.6556 28.5629C16.7925 28.9748 17.4765 29.2052 18.1144 29.5503Z" />
<path d="M27.2299 30.2234C27.1227 30.1496 27.1249 30.105 27.2409 30.0057C28.8024 29.7995 30.2514 29.6606 31.6971 29.4925C32.8207 29.3618 32.6041 28.4594 32.6314 27.7433C32.6634 26.9027 31.9848 27.0712 31.5151 27.0885C30.2888 27.1336 29.0649 27.2399 27.84 27.3218C27.84 27.2186 27.84 27.1154 27.8401 26.9349C29.1674 26.7172 30.4921 26.5248 31.8231 26.4598C32.4402 26.4296 33.2442 26.3065 33.3819 27.3121C33.577 28.7372 33.2048 29.7885 32.1964 29.9266C30.5925 30.1461 28.9597 30.1548 27.2299 30.2234Z" />
<ellipse cx="27.1199" cy="30.0931" rx="0.24" ry="0.119893" />
<path d="M27.0469 27.4914C27.3418 27.4986 27.8442 27.3999 28.1458 27.2754C28.4099 27.1258 28.1463 27.1124 27.5498 27.2297C26.9532 27.3469 26.7144 27.459 27.0469 27.4914Z" />
<path d="M27.0469 27.2516C27.3418 27.2588 27.8442 27.1601 28.1458 27.0356C28.4099 26.886 28.1463 26.8726 27.5498 26.9899C26.9532 27.1071 26.7144 27.2192 27.0469 27.2516Z" />
<path d="M27.2869 27.2516C27.5818 27.2588 28.0842 27.1601 28.3858 27.0356C28.6498 26.886 28.3863 26.8726 27.7897 26.9899C27.1932 27.1071 26.9543 27.2192 27.2869 27.2516Z" />
<path d="M27.0332 29.9819C27.3351 30.0601 27.8785 30.0949 28.2218 30.0582C28.5331 29.99 28.2652 29.914 27.6199 29.8726C26.9747 29.8313 26.6992 29.8724 27.0332 29.9819Z" />
<path d="M26.7939 29.8046C27.0814 29.9254 27.6141 30.0381 27.9592 30.0512C28.277 30.0286 28.0229 29.9149 27.3903 29.7809C26.7578 29.647 26.4792 29.648 26.7939 29.8046Z" />
<path d="M26.7898 30.129C27.0917 30.2072 27.6351 30.242 27.9784 30.2053C28.2897 30.1371 28.0218 30.0611 27.3765 30.0197C26.7313 29.9784 26.4558 30.0195 26.7898 30.129Z" />
<path d="M26.1034 27.7515C26.114 28.0629 26.2345 28.5934 26.3671 28.912C26.5208 29.1909 26.5177 28.9127 26.3746 28.2827C26.2314 27.6527 26.1139 27.4004 26.1034 27.7515Z" />
</svg>
`;
  const checkmarkIcon = `
<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.55012 11.5754C5.41679 11.5754 5.29179 11.5544 5.17512 11.5124C5.05846 11.4711 4.95012 11.4004 4.85012 11.3004L0.550123 7.00039C0.36679 6.81706 0.279123 6.57939 0.287123 6.28739C0.29579 5.99606 0.391789 5.75872 0.575122 5.57539C0.758456 5.39206 0.991789 5.30039 1.27512 5.30039C1.55846 5.30039 1.79179 5.39206 1.97512 5.57539L5.55012 9.15039L14.0251 0.675391C14.2085 0.492057 14.4461 0.400391 14.7381 0.400391C15.0295 0.400391 15.2668 0.492057 15.4501 0.675391C15.6335 0.858724 15.7251 1.09606 15.7251 1.38739C15.7251 1.67939 15.6335 1.91706 15.4501 2.10039L6.25012 11.3004C6.15012 11.4004 6.04179 11.4711 5.92512 11.5124C5.80846 11.5544 5.68346 11.5754 5.55012 11.5754Z"/>
</svg>`;
  const crossIcon = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.00005 8.4L2.10005 13.3C1.91672 13.4833 1.68338 13.575 1.40005 13.575C1.11672 13.575 0.883382 13.4833 0.700048 13.3C0.516715 13.1167 0.425049 12.8833 0.425049 12.6C0.425049 12.3167 0.516715 12.0833 0.700048 11.9L5.60005 7L0.700048 2.1C0.516715 1.91667 0.425049 1.68334 0.425049 1.4C0.425049 1.11667 0.516715 0.883336 0.700048 0.700003C0.883382 0.516669 1.11672 0.425003 1.40005 0.425003C1.68338 0.425003 1.91672 0.516669 2.10005 0.700003L7.00005 5.6L11.9 0.700003C12.0834 0.516669 12.3167 0.425003 12.6 0.425003C12.8834 0.425003 13.1167 0.516669 13.3 0.700003C13.4834 0.883336 13.575 1.11667 13.575 1.4C13.575 1.68334 13.4834 1.91667 13.3 2.1L8.40005 7L13.3 11.9C13.4834 12.0833 13.575 12.3167 13.575 12.6C13.575 12.8833 13.4834 13.1167 13.3 13.3C13.1167 13.4833 12.8834 13.575 12.6 13.575C12.3167 13.575 12.0834 13.4833 11.9 13.3L7.00005 8.4Z" />
</svg>`;
  const pencilIcon = `<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.85 5.35001L13.65 2.15001L14.7 1.10001C14.9833 0.816673 15.3375 0.679173 15.7625 0.687506C16.1875 0.69584 16.5417 0.841673 16.825 1.12501L17.9 2.20001C18.1833 2.48334 18.325 2.83334 18.325 3.25001C18.325 3.66667 18.1833 4.01667 17.9 4.30001L16.85 5.35001ZM0.75 19C0.533333 19 0.354167 18.9292 0.2125 18.7875C0.0708333 18.6458 0 18.4667 0 18.25V16.1C0 16 0.0166667 15.9083 0.05 15.825C0.0833333 15.7417 0.141667 15.6583 0.225 15.575L12.6 3.20001L15.8 6.40001L3.425 18.775C3.34167 18.8583 3.25833 18.9167 3.175 18.95C3.09167 18.9833 3 19 2.9 19H0.75Z" />
</svg>`;
  const plusIcon = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.99563 14C6.78188 14 6.60417 13.9281 6.4625 13.7844C6.32083 13.6406 6.25 13.4625 6.25 13.25V7.75H0.75C0.5375 7.75 0.359375 7.67771 0.215625 7.53313C0.071875 7.38853 0 7.20936 0 6.99563C0 6.78188 0.071875 6.60417 0.215625 6.4625C0.359375 6.32083 0.5375 6.25 0.75 6.25H6.25V0.75C6.25 0.5375 6.32229 0.359375 6.46687 0.215625C6.61147 0.071875 6.79064 0 7.00437 0C7.21812 0 7.39583 0.071875 7.5375 0.215625C7.67917 0.359375 7.75 0.5375 7.75 0.75V6.25H13.25C13.4625 6.25 13.6406 6.32229 13.7844 6.46687C13.9281 6.61147 14 6.79064 14 7.00437C14 7.21812 13.9281 7.39583 13.7844 7.5375C13.6406 7.67917 13.4625 7.75 13.25 7.75H7.75V13.25C7.75 13.4625 7.67771 13.6406 7.53313 13.7844C7.38853 13.9281 7.20936 14 6.99563 14Z"/>
</svg>`;
  const minusIcon = `<svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.75 1.75C0.5375 1.75 0.359375 1.67771 0.215625 1.53313C0.071875 1.38853 0 1.20936 0 0.995625C0 0.781875 0.071875 0.604167 0.215625 0.4625C0.359375 0.320833 0.5375 0.25 0.75 0.25H13.25C13.4625 0.25 13.6406 0.322291 13.7844 0.466875C13.9281 0.611475 14 0.790641 14 1.00437C14 1.21812 13.9281 1.39583 13.7844 1.5375C13.6406 1.67917 13.4625 1.75 13.25 1.75H0.75Z" />
</svg>`;
  const loadingSpinner = `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="200"
  height="200"
  viewBox="0 0 200 200"
  fill="none"
  color="#2196f3"
>
  <defs>
    <linearGradient id="spinner-secondHalf">
      <stop offset="0%" stop-opacity="0" stop-color="currentColor" />
      <stop offset="100%" stop-opacity="0.5" stop-color="currentColor" />
    </linearGradient>
    <linearGradient id="spinner-firstHalf">
      <stop offset="0%" stop-opacity="1" stop-color="currentColor" />
      <stop offset="100%" stop-opacity="0.5" stop-color="currentColor" />
    </linearGradient>
  </defs>

  <g stroke-width="8">
    <path stroke="url(#spinner-secondHalf)" d="M 4 100 A 96 96 0 0 1 196 100" />
    <path stroke="url(#spinner-firstHalf)" d="M 196 100 A 96 96 0 0 1 4 100" />

    <!-- 1deg extra path to have the round end cap -->
    <path
      stroke="currentColor"
      stroke-linecap="round"
      d="M 4 100 A 96 96 0 0 1 4 98"
    />
  </g>

  <animateTransform
    from="0 0 0"
    to="360 0 0"
    attributeName="transform"
    type="rotate"
    repeatCount="indefinite"
    dur="1300ms"
  />
</svg>`;
  function formatSVG(svg, addClass) {
    const parser = new DOMParser();
    const svgElement = parser.parseFromString(svg, "image/svg+xml").querySelector("svg");
    if (svgElement === null)
      return;
    svgElement.removeAttribute("width");
    svgElement.removeAttribute("height");
    if (addClass !== "spinner") {
      svgElement.removeAttribute("fill");
    }
    const updatedSVG = updateSVG(svgElement, {
      addClass
    });
    return updatedSVG;
  }
  class Icon {
    constructor(options) {
      __publicField(this, "_svg");
      __publicField(this, "onClick");
      __publicField(this, "_uniqueIdPrefix");
      __publicField(this, "_id");
      const { icon: svg, addClass, onClick, uniqueIdPrefix, id } = options;
      const testSVG = this.formatSVG(svg, addClass);
      this._uniqueIdPrefix = uniqueIdPrefix;
      this._id = id;
      if (testSVG === void 0)
        return;
      this._svg = testSVG;
      this._svg.id = this._uniqueIdPrefix + this._id;
      if (onClick) {
        this.onClick = onClick;
        this._svg.addEventListener("click", onClick);
      }
    }
    get svg() {
      return this._svg;
    }
    set svg(svg) {
      this._svg = svg;
    }
    get id() {
      return this._id;
    }
    formatSVG(svg, addClass) {
      const parser = new DOMParser();
      const svgElement = parser.parseFromString(svg, "image/svg+xml").querySelector("svg");
      if (svgElement === null)
        return;
      svgElement.removeAttribute("width");
      svgElement.removeAttribute("height");
      if (addClass !== "spinner") {
        svgElement.removeAttribute("fill");
      }
      const updatedSVG = updateSVG(svgElement, {
        addClass
      });
      return updatedSVG;
    }
    setOnClick(onClick) {
      if (this.svg === void 0)
        return console.error("No SVG element found");
      if (this.onClick) {
        this.svg.removeEventListener("click", this.onClick);
      }
      this.onClick = onClick;
      this.svg.addEventListener("click", onClick);
    }
    render(parent) {
      if (this.svg === void 0)
        return;
      parent.appendChild(this.svg);
    }
    destroy() {
      if (this.svg === void 0)
        return;
      this.svg.remove();
    }
  }
  const headerThemes = {
    light: {
      header: "header-light",
      headerTitle: "typo_title-title1",
      settingsButton: "icon-neutral__black-size-2"
    },
    dark: {
      header: "header-dark",
      headerTitle: "typo_title-title1",
      settingsButton: "icon-neutral__white-size-2"
    },
    "high-contrast": {
      header: "header-hico",
      headerTitle: "typo_title-title1",
      settingsButton: "icon-neutral__white-size-2"
    }
  };
  class Header {
    constructor(options) {
      __publicField(this, "_theme");
      __publicField(this, "_title");
      __publicField(this, "_themeStyles");
      __publicField(this, "_uniqueId");
      __publicField(this, "_container");
      __publicField(this, "_headerTitle");
      __publicField(this, "_rightSettings");
      __publicField(this, "_settingsButton");
      const { theme, title, uniqueId } = options;
      this._theme = theme;
      this._title = title;
      this._uniqueId = uniqueId;
      this._themeStyles = headerThemes[theme];
      this._container = this.createHeader();
      this._headerTitle = this.createHeaderTitle();
      this._rightSettings = this.createRightSettings();
      this._settingsButton = this.createSettingsButton();
    }
    get uniqueId() {
      return this._uniqueId;
    }
    get theme() {
      return this._theme;
    }
    set theme(theme) {
      this._theme = theme;
    }
    get themeStyles() {
      return this._themeStyles;
    }
    set themeStyles(themeStyles) {
      this._themeStyles = themeStyles;
    }
    get title() {
      return this._title;
    }
    set title(title) {
      this._title = title;
    }
    get container() {
      return this._container;
    }
    set container(header) {
      this._container = header;
    }
    get headerTitle() {
      return this._headerTitle;
    }
    set headerTitle(headerTitle) {
      this._headerTitle = headerTitle;
    }
    get rightSettings() {
      return this._rightSettings;
    }
    set rightSettings(rightSettings) {
      this._rightSettings = rightSettings;
    }
    get settingsButton() {
      return this._settingsButton;
    }
    set settingsButton(settingsButton) {
      this._settingsButton = settingsButton;
    }
    render(parent) {
      parent.appendChild(this.container);
      this.adjustFontSize();
    }
    switchTheme(theme) {
      updateElement(this.container, { removeClass: this.themeStyles.header });
      updateElement(this.container, { addClass: headerThemes[theme].header });
      updateElement(this.headerTitle, { removeClass: this.themeStyles.headerTitle });
      updateElement(this.headerTitle, { addClass: headerThemes[theme].headerTitle });
      updateElement(this.settingsButton.getElement(), { removeClass: this.themeStyles.settingsButton });
      updateElement(this.settingsButton.getElement(), { addClass: headerThemes[theme].settingsButton });
      const newSettingsIcon = formatSVG(settingsIcon, headerThemes[theme].settingsButton);
      if (!newSettingsIcon)
        throw new Error("newSettingsIcon is null");
      newSettingsIcon.style.height = "inherit";
      newSettingsIcon.style.width = "30px";
      this.settingsButton.button.innerHTML = newSettingsIcon.outerHTML;
      this.themeStyles = headerThemes[theme];
      this.theme = theme;
    }
    addButton(button) {
      this._rightSettings.prepend(button);
    }
    createHeader() {
      return createElement("div", {
        addClass: this.themeStyles.header
      });
    }
    createHeaderTitle() {
      this._headerTitle = createElement("div", {
        appendTo: this.container,
        addStyle: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          width: "fit-content",
          alignItems: "center"
        }
      });
      const headerIcon = formatSVG(quorumIcon, "icon-quorum__blue__100-size-2");
      if (!headerIcon)
        throw new Error("headerIcon is null");
      headerIcon.style.marginRight = "0.5rem";
      headerIcon.style.height = "inherit";
      headerIcon.style.width = "45px";
      this.headerTitle.prepend(headerIcon);
      createElement("h1", {
        innerText: this.title,
        addClass: this.themeStyles.headerTitle,
        addStyle: {
          height: "inherit"
        },
        appendTo: this.headerTitle
      });
      return this.headerTitle;
    }
    createRightSettings() {
      return createElement("div", {
        addStyle: {
          display: "flex",
          width: "fit-content",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center"
        },
        appendTo: this.container
      });
    }
    createSettingsButton() {
      const settingsIconEl = formatSVG(settingsIcon, this.themeStyles.settingsButton);
      if (!settingsIconEl)
        throw new Error("settingsIconEl is null");
      settingsIconEl.style.height = "inherit";
      settingsIconEl.style.width = "30px";
      const button = new Button({ icon: settingsIconEl.outerHTML, className: "btn-icon", id: "settings-button", uniqueIdPrefix: this.uniqueId });
      button.render(this.rightSettings);
      this._settingsButton = button;
      return this._settingsButton;
    }
    adjustFontSize() {
      const containerWidth = this._container.clientWidth;
      const padding = 30;
      const availableWidth = containerWidth - padding;
      const currentWidth = this._headerTitle.clientWidth;
      if (availableWidth < currentWidth) {
        const h1 = this._headerTitle.querySelector("h1");
        if (!h1)
          throw new Error("h1 is null");
        const currentFontSize = parseFloat(window.getComputedStyle(h1).fontSize);
        const adjustedFontSize = availableWidth / currentWidth * currentFontSize;
        h1.style.fontSize = `${adjustedFontSize}px`;
      }
    }
  }
  const OPTION_FPS = 20;
  var ChartTypes = /* @__PURE__ */ ((ChartTypes2) => {
    ChartTypes2["BarChart"] = "Bar Chart";
    ChartTypes2["BoxPlot"] = "Box Plot";
    ChartTypes2["Histogram"] = "Histogram";
    ChartTypes2["PieChart"] = "Pie Chart";
    ChartTypes2["ScatterPlot"] = "Scatter Plot";
    ChartTypes2["LineChart"] = "Line Chart";
    return ChartTypes2;
  })(ChartTypes || {});
  var LegendTypes = /* @__PURE__ */ ((LegendTypes2) => {
    LegendTypes2["None"] = "None";
    LegendTypes2["Top"] = "Top";
    LegendTypes2["Right"] = "Right";
    LegendTypes2["Bottom"] = "Bottom";
    LegendTypes2["Left"] = "Left";
    return LegendTypes2;
  })(LegendTypes || {});
  const ChartOptionsArray = [
    "Show Outliers",
    "Least Squares Line",
    "Movable Line",
    "Square of Residuals",
    "Intercept Lock",
    "Horizontal Layout",
    "Show Labels"
  ];
  var ColorPalette = /* @__PURE__ */ ((ColorPalette2) => {
    ColorPalette2["Colorgorical"] = "Colorgorical";
    ColorPalette2["Calm"] = "Calm";
    ColorPalette2["Cool"] = "Cool";
    ColorPalette2["Disturbing"] = "Disturbing";
    ColorPalette2["Exciting"] = "Exciting";
    ColorPalette2["Magma"] = "Magma";
    ColorPalette2["Negative"] = "Negative";
    ColorPalette2["Playful"] = "Playful";
    ColorPalette2["Positive"] = "Positive";
    ColorPalette2["Serious"] = "Serious";
    ColorPalette2["Trustworthy"] = "Trustworthy";
    ColorPalette2["Warm"] = "Warm";
    return ColorPalette2;
  })(ColorPalette || {});
  const labelDivStyle = {
    display: "flex",
    flexDirection: "row",
    height: "fit-content",
    alignItems: "center"
  };
  class ColumnData {
    constructor(UiKit, columnData, inputType) {
      __publicField(this, "_dropdown");
      __publicField(this, "dropdownOptions");
      __publicField(this, "input");
      __publicField(this, "inputType");
      __publicField(this, "id");
      __publicField(this, "value");
      __publicField(this, "editing", false);
      __publicField(this, "pTag");
      __publicField(this, "emitter");
      __publicField(this, "_editButton");
      __publicField(this, "_label");
      __publicField(this, "theme", "light");
      var _a;
      const { value, label } = columnData;
      this._label = label;
      this.inputType = inputType;
      this.id = label;
      this.value = value;
      this.input = null;
      const labelDiv = createElement("div", {
        addStyle: labelDivStyle,
        appendTo: UiKit
      });
      this.emitter = new EventEmitter$1();
      createElement("label", {
        innerText: label,
        addClass: "typo_title-title3",
        appendTo: labelDiv
      });
      this._editButton = createElement("button", {
        innerHTML: ((_a = formatSVG(pencilIcon, "icon-neutral__black-size-1")) == null ? void 0 : _a.outerHTML) || "edit",
        addDataset: {
          editing: "false"
        },
        addStyle: {
          border: "none",
          backgroundColor: "transparent",
          marginLeft: "8px"
        },
        appendTo: labelDiv
      });
      this.pTag = createElement("p", {
        id: `columnData${label}`,
        innerText: this.value,
        addClass: "typo_text-mText",
        appendTo: UiKit
      });
      if (inputType === "dropdown") {
        this.useDropdownInput();
      } else if (inputType === "text") {
        this.useTextInput();
      }
    }
    get editButton() {
      return this._editButton;
    }
    useTextInput() {
      this.editButton.onclick = () => {
        if (this.editing) {
          this.replaceInputField();
          return;
        }
        this.editing = true;
        this.input = new TextInputField({ uniqueIdPrefix: "", id: "textFieldsContainer", size: "lg", theme: "light", placeholder: "Text Field", type: "text" });
        this.input.input.value = this.value;
        this.input.input.style.width = "100%";
        this.input.input.style.fontSize = "16px";
        this.input.input.style.border = "none";
        this.input.input.style.outline = "none";
        this.input.input.style.boxShadow = "none";
        this.input.input.style.paddingLeft = "0";
        this.input.input.onchange = () => this.onTextChange();
        this.switchTheme(this.theme);
        this.pTag.replaceWith(this.input.input);
      };
    }
    useDropdownInput() {
      console.log("useDropdownInput");
      this.editButton.onclick = () => {
        if (this.editing) {
          this.replaceInputField();
          return;
        }
        this.editing = true;
        this._dropdown = new Dropdown({ options: this.dropdownOptions || [], uniqueIdPrefix: "", id: "columnTypeDropdown" });
        this._dropdown.dropdown.style.marginTop = "8px";
        this._dropdown.value = this.value;
        this._dropdown.addOnChangeListener(() => this.onDropdownChange());
        this.switchTheme(this.theme);
        this.pTag.replaceWith(this._dropdown.dropdown);
      };
    }
    onTextChange() {
      if (this.input) {
        this.value = this.input.input.value;
        this.emitter.emit("change", { value: this.value, label: this.id });
      }
      this.replaceInputField();
    }
    onDropdownChange() {
      if (this.dropdown) {
        this.value = this.dropdown.value;
        this.emitter.emit("change", { value: this.value, label: this.id });
      }
      this.replaceInputField();
    }
    onChangeEmit(callback) {
      this.emitter.on("change", callback);
    }
    offChangeEmit(callback) {
      this.emitter.off("change", callback);
    }
    replaceInputField() {
      let value = null;
      if (this.inputType === "dropdown" && this.dropdown) {
        value = this.dropdown.value;
      } else if (this.inputType === "text" && this.input) {
        value = this.input.value;
      }
      this.pTag = createElement("p", {
        innerText: value || this.value,
        addClass: "typo_text-mText"
      });
      if (this.inputType === "dropdown" && this.dropdown) {
        this.dropdown.dropdown.replaceWith(this.pTag);
        this.dropdown.destroy();
        this.editing = false;
        return;
      } else if (this.inputType === "text" && this.input) {
        this.input.input.replaceWith(this.pTag);
        this.input.destroy();
        this.editing = false;
        return;
      }
    }
    get dropdown() {
      return this._dropdown;
    }
    setDropdownOptions(options) {
      this.dropdownOptions = options;
    }
    setValue(value) {
      this.value = value;
      this.pTag.innerText = value;
    }
    getLabel() {
      return this.id;
    }
    switchTheme(theme) {
      var _a, _b, _c;
      if (this.inputType === "dropdown") {
        (_a = this.dropdown) == null ? void 0 : _a.switchTheme(theme);
      }
      if (this.inputType === "text") {
        (_b = this.input) == null ? void 0 : _b.switchTheme(theme);
      }
      this.editButton.innerHTML = ((_c = formatSVG(pencilIcon, theme === "light" ? "icon-neutral__black-size-1" : "icon-neutral__white-size-1")) == null ? void 0 : _c.outerHTML) || "edit";
      this.pTag.style.color = theme === "light" ? "#000" : "#fff";
    }
  }
  function loggedMethod(target, propertyKey, descriptor) {
    {
      return descriptor;
    }
  }
  var __defProp$3 = Object.defineProperty;
  var __getOwnPropDesc$3 = Object.getOwnPropertyDescriptor;
  var __decorateClass$3 = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$3(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if (decorator = decorators[i])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp$3(target, key, result);
    return result;
  };
  class SelectedList {
    constructor(sl_options) {
      __publicField(this, "_outerContainer");
      __publicField(this, "_selectionList");
      __publicField(this, "_selectionListItems");
      __publicField(this, "checkIcon");
      __publicField(this, "theme");
      __publicField(this, "callback");
      __publicField(this, "_multipleSelectEnabled", false);
      const { uniqueIdPrefix, id, theme, options, callback } = sl_options;
      this._outerContainer = createElement("div", {
        addClass: `selectionList__outer--container--${theme}`,
        uniqueIdPrefix,
        id: id + "_container"
      });
      this.theme = theme;
      this._selectionList = createElement("ul", {
        addClass: `selectionList__inner--container--${theme}`,
        role: "listbox",
        uniqueIdPrefix,
        id: id + "_list",
        appendTo: this.outerContainer
      });
      this.checkIcon = formatSVG(checkmarkIcon, "icon-quorum__blue__100-size-1");
      this.callback = callback ? callback : () => {
      };
      this._selectionListItems = [];
      for (let i = 0; i < options.length; i++) {
        this.selectionListItems.push(createElement("li", {
          innerText: options[i],
          role: "option",
          addClass: `selectionList__item--${theme}`,
          uniqueIdPrefix,
          value: i,
          ariaSelected: "false",
          id: id + "_item_" + i,
          appendTo: this.selectionList,
          onpointerdown: (event) => {
            const target = event.target;
            this.handleSelectionClick(target);
            if (callback) {
              callback(event, i);
            }
          },
          onkeydown: (event) => {
            this.handleKeyboardNavigation(event, this.selectionListItems[i]);
          }
        }));
        this.selectionListItems[i].tabIndex = i === 0 ? 0 : -1;
      }
    }
    singleSelect() {
      this._multipleSelectEnabled = false;
    }
    multipleSelect() {
      this._multipleSelectEnabled = true;
    }
    get value() {
      const selected = this.selectionListItems.find((item) => {
        return item.getAttribute("aria-selected") === "true";
      });
      if (selected && selected.value !== void 0) {
        return selected.value;
      }
      return -1;
    }
    get outerContainer() {
      return this._outerContainer;
    }
    get selectionList() {
      return this._selectionList;
    }
    get selectionListItems() {
      return this._selectionListItems;
    }
    set selectionListItems(items) {
      this.selectionList.innerHTML = "";
      this._selectionListItems = items;
    }
    addItem(item, index) {
      this.selectionListItems.push(item);
      updateElement(item, {
        value: index.toString(),
        role: "option",
        ariaSelected: "false",
        addClass: `selectionList__item--${this.theme}`,
        tabIndex: index === 0 ? 0 : -1,
        onkeydown: (event) => {
          this.handleKeyboardNavigation(event, this.selectionListItems[index]);
        },
        appendTo: this.selectionList
      });
      this.updateCallback(this.callback);
    }
    updateOnSelect(callback) {
      this.selectionListItems.forEach((listItem, index) => {
        listItem.onpointerdown = (event) => {
          console.log("pointer down");
          this.handleSelectionClick(listItem);
          callback(event, index);
        };
        listItem.onkeydown = (event) => {
          if (event.key === "Enter" || event.key === " ") {
            this.handleSelectionClick(listItem);
            callback(event, index);
          }
          this.handleKeyboardNavigation(event, this.selectionListItems[index]);
        };
      });
    }
    switchTheme(theme) {
      this.outerContainer.classList.remove(`selectionList__outer--container--${this.theme}`);
      this.outerContainer.classList.add(`selectionList__outer--container--${theme}`);
      this.selectionList.classList.remove(`selectionList__inner--container--${this.theme}`);
      this.selectionList.classList.add(`selectionList__inner--container--${theme}`);
      this.selectionListItems.forEach((listItem) => {
        listItem.classList.remove(`selectionList__item--${this.theme}`);
        listItem.classList.add(`selectionList__item--${theme}`);
      });
      this.checkIcon = formatSVG(checkmarkIcon, "icon-quorum__blue__100-size-1");
      this.theme = theme;
    }
    handleSelectionClick(target) {
      if (!this._multipleSelectEnabled) {
        const items = this.selectionList.children;
        for (let j = 0; j < items.length; j++) {
          const item = items[j];
          const icon = item.querySelector(".icon-quorum__blue__100-size-1");
          item.classList.remove("selected");
          item.setAttribute("aria-selected", "false");
          if (icon) {
            item.removeChild(icon);
          }
        }
      }
      if (target.classList.contains("selected")) {
        target.classList.remove("selected");
        target.setAttribute("aria-selected", "false");
        const icon = target.querySelector(".icon-quorum__blue__100-size-1");
        if (icon) {
          target.removeChild(icon);
        }
      } else {
        this.selectItem(this.selectionListItems.indexOf(target));
      }
    }
    selectItem(index) {
      this.selectionListItems[index].classList.add("selected");
      this.selectionListItems[index].setAttribute("aria-selected", "true");
      this.selectionListItems[index].innerHTML += this.checkIcon.outerHTML;
    }
    updateCallback(callback) {
      this.selectionListItems.forEach((listItem, index) => {
        listItem.onpointerdown = (event) => {
          this.handleSelectionClick(listItem);
          callback(event, index);
        };
      });
    }
    focusFirstVisibleItem() {
      const selectedItem = this.selectionList.querySelector(".selected");
      if (selectedItem && selectedItem.style.display !== "none" && selectedItem.tagName === "LI") {
        selectedItem.focus();
        selectedItem.tabIndex = 0;
      } else {
        for (const listItem of this.selectionListItems) {
          if (listItem.style.display !== "none" && listItem.tagName === "LI") {
            listItem.focus();
            listItem.tabIndex = 0;
            break;
          }
        }
      }
    }
    handleKeyboardNavigation(event, listItem) {
      console.log("handleKeyboardNavigation");
      let index = this.selectionListItems.indexOf(listItem);
      console.log(index);
      if (event.key === "ArrowUp") {
        event.preventDefault();
        index--;
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        index++;
      } else if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        this.handleSelectionClick(listItem);
        if (this.callback) {
          this.callback(event, index);
        }
        return;
      } else {
        return;
      }
      if (index >= 0 && index < this.selectionListItems.length) {
        const newIndex = this.findNextVisibleItem(index, event.key);
        console.log(newIndex);
        if (newIndex !== -1) {
          this.selectionListItems[newIndex].focus();
          listItem.tabIndex = -1;
          this.selectionListItems[newIndex].tabIndex = 0;
        }
      }
    }
    findNextVisibleItem(index, direction) {
      while (index >= 0 && index < this.selectionListItems.length) {
        if (this.selectionListItems[index].style.display !== "none") {
          return index;
        }
        direction === "ArrowUp" ? index-- : index++;
      }
      return -1;
    }
    removeItem(listItem) {
      const index = this._selectionListItems.indexOf(listItem);
      if (index > -1) {
        this._selectionListItems.splice(index, 1);
        this._selectionList.removeChild(listItem);
        this._selectionListItems.forEach((item, i) => {
          item.tabIndex = i === 0 ? 0 : -1;
          item.value = i;
          item.id = item.id.split("_").slice(0, -1).join("_") + "_" + i;
          item.onpointerdown = (event) => {
            this.handleSelectionClick(item);
            if (this.callback) {
              this.callback(event, i);
            }
          };
          item.onkeydown = (event) => {
            this.handleKeyboardNavigation(event, this.selectionListItems[i]);
          };
        });
      }
    }
    render(parent) {
      parent.appendChild(this.outerContainer);
    }
  }
  __decorateClass$3([
    loggedMethod
  ], SelectedList.prototype, "handleSelectionClick", 1);
  __decorateClass$3([
    loggedMethod
  ], SelectedList.prototype, "selectItem", 1);
  __decorateClass$3([
    loggedMethod
  ], SelectedList.prototype, "updateCallback", 1);
  class ListAndFilter {
    constructor(csvContent, callback) {
      __publicField(this, "textField");
      __publicField(this, "list");
      const columnSettings = createElement("label", {
        addClass: "typo_text-mText",
        addStyle: {
          display: "flex",
          flexDirection: "column",
          height: "fit-content"
        },
        appendTo: csvContent
      });
      const columnSettingsRow = createElement("div", {
        addStyle: {
          display: "flex",
          flexDirection: "column",
          height: "fit-content"
        },
        appendTo: columnSettings
      });
      this.textField = new TextInputField({ labelText: "Find a Column", placeholder: "Filter Columns", size: "sm", uniqueIdPrefix: "", id: "findAColumn", type: "text", theme: "light" });
      updateElement(this.textField.input, { addClass: "textField--sm--dark--Ricon3" });
      this.textField.render(columnSettingsRow);
      this.textField.container.style.width = "calc(100%-8px)";
      this.textField.input.style.width = "inherit";
      this.textField.input.oninput = () => {
        this.filterList();
      };
      this.list = new SelectedList({ options: [], id: "csvSettings", uniqueIdPrefix: "lkj", theme: "light", callback });
      this.list.render(csvContent);
      this.list.selectionList.ariaLabel = "Select a column";
      this.list.outerContainer.style.height = "150px";
      this.list.selectionList.style.height = "150px";
    }
    get selectedValue() {
      return this.list.value;
    }
    get selectedText() {
      const text = "";
      this.list.selectionListItems.forEach((item) => {
        console.log(item);
      });
      return text;
    }
    get options() {
      return this.list.selectionListItems.map((item) => {
        return item.innerText;
      });
    }
    filterList() {
      const filteredList = this.list.selectionListItems.filter((item) => {
        return item.innerText.toLowerCase().includes(this.textField.value.toLowerCase());
      }).map((item) => {
        return item.innerText;
      });
      this.list.selectionListItems.forEach((item) => {
        if (filteredList.includes(item.innerText)) {
          item.style.display = "flex";
        } else {
          updateElement(item, {
            addStyle: {
              display: "none"
            }
          });
        }
      });
    }
    setSelectionListItems(items) {
      this.list.selectionListItems = [];
      items.forEach((item, index) => {
        this.list.addItem(item, index);
      });
    }
    updateCallback(callback) {
      this.list.updateCallback(callback);
    }
    switchTheme(theme) {
      this.textField.switchTheme(theme);
      this.list.switchTheme(theme);
    }
  }
  var __defProp$2 = Object.defineProperty;
  var __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor;
  var __decorateClass$2 = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$2(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if (decorator = decorators[i])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp$2(target, key, result);
    return result;
  };
  class CsvSettings {
    constructor(UiKit, uniqueId) {
      __publicField(this, "cancelButton");
      __publicField(this, "saveButton");
      __publicField(this, "spinner");
      __publicField(this, "modal");
      __privateAdd(this, _csvModal, void 0);
      __publicField(this, "columnDataDiv");
      __publicField(this, "columnSections", {});
      __publicField(this, "listAndFilter");
      __publicField(this, "_columnNames", ["Test1", "Test2", "Test3", "Test4", "Test5", "Test6", "Test7", "Test8", "Test9", "Test10"]);
      __publicField(this, "columnOptions", {});
      __publicField(this, "tempColumnOptions", {});
      __publicField(this, "currentColumnIndex");
      __publicField(this, "onSaveEmitter");
      __publicField(this, "_frameCopy");
      __publicField(this, "randomInput");
      __publicField(this, "randomConfirm");
      __publicField(this, "_randomValue");
      __publicField(this, "filterInput");
      __publicField(this, "filterConfirm");
      __publicField(this, "_filterValue");
      __publicField(this, "_closeButton");
      __publicField(this, "_uniqueId");
      __publicField(this, "quorumFrame");
      __publicField(this, "columnContainerStyle", {
        width: "initial",
        height: "fit-content",
        padding: "16px",
        marginTop: "8px",
        backgroundColor: UiKitColors.neutral.white,
        border: `1px solid ${UiKitColors.neutral.grey._65}`,
        borderRadius: "8px"
      });
      var _a;
      this.modal = this.createModal(UiKit);
      this._uniqueId = uniqueId;
      const crossIconEl = new Icon({ icon: crossIcon, addClass: "icon-neutral__black-size-1", id: "close-csv-settings", uniqueIdPrefix: "csv-settings" });
      this._closeButton = createElement("button", {
        innerHTML: ((_a = crossIconEl == null ? void 0 : crossIconEl.svg) == null ? void 0 : _a.outerHTML) || "close",
        addStyle: {
          position: "absolute",
          top: "16px",
          right: "16px",
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer"
        },
        addClass: "icon-neutral__black-size-1",
        onpointerdown: () => {
          this.hide();
        },
        //make spacebar and enter close the modal
        onkeydown: (e) => {
          if (e.key === "Enter" || e.key === " ") {
            this.hide();
          }
        }
      });
      this._closeButton.ariaLabel = "Close CSV Settings";
      this.modal.appendChild(this._closeButton);
      __privateSet(this, _csvModal, this.createCsvModal());
      this.spinner = this.createSpinner();
      this.onSaveEmitter = new eventsExports.EventEmitter();
      this.createTitle("CSV Settings");
      this.randomInput = this.createInput("Randomized %", "Enter percentage 25", "number");
      const randomInputAndButton = createElement("div", {
        addStyle: {
          display: "flex",
          flexDirection: "row",
          alignItems: "baseline",
          justifyContent: "center",
          width: "100%",
          height: "fit-content"
        }
      });
      const filterInputAndButton = createElement("div", {
        addStyle: {
          display: "flex",
          flexDirection: "row",
          alignItems: "baseline",
          justifyContent: "center",
          width: "100%",
          height: "fit-content"
        }
      });
      this.randomInput.container.insertBefore(randomInputAndButton, this.randomInput.container.children[1]);
      randomInputAndButton.appendChild(this.randomInput.input);
      this.randomInput.min = 0;
      this.randomInput.max = 100;
      this.filterInput = this.createInput("Filter", "x >= 20 and y = “headset”", "text");
      updateElement(this.filterInput.container, { addStyle: { marginTop: "16px" } });
      this.filterInput.container.insertBefore(filterInputAndButton, this.filterInput.container.children[1]);
      filterInputAndButton.appendChild(this.filterInput.input);
      this.randomConfirm = new Button({ className: "btn-xsmall-secondary-var1", text: "Confirm", uniqueIdPrefix: this._uniqueId, id: "confirmRandom" });
      this.filterConfirm = new Button({ className: "btn-xsmall-secondary-var1", text: "Confirm", uniqueIdPrefix: this._uniqueId, id: "confirmFilter" });
      this.randomConfirm.button.ariaLabel = "Confirm Randomized %";
      this.filterConfirm.button.ariaLabel = "Confirm Filter";
      this.randomConfirm.button.style.marginLeft = "8px";
      this.filterConfirm.button.style.marginLeft = "8px";
      this.randomConfirm.button.style.marginTop = "10px";
      this.filterConfirm.button.style.marginTop = "10px";
      randomInputAndButton.appendChild(this.randomConfirm.button);
      filterInputAndButton.appendChild(this.filterConfirm.button);
      this.randomConfirm.button.addEventListener("click", () => this.validateRandomizer());
      this.filterConfirm.button.addEventListener("click", () => this.validateFilter());
      this.createLineDivider();
      this.createTitle("Column Settings");
      this.listAndFilter = new ListAndFilter(__privateGet(this, _csvModal), () => {
        const i = this.listAndFilter.selectedValue;
        this.currentColumnIndex = i;
        this.columnDataDiv.style.display = "block";
        const text = this.listAndFilter.options[i];
        for (let i2 = 0; i2 < this.columnDataDiv.children.length; i2++) {
          const label = this.columnDataDiv.children[i2].children[0];
          if (this.columnDataDiv.children[i2].children) {
            Array.from(this.columnDataDiv.children[i2].children).forEach((child) => {
              if (child instanceof HTMLButtonElement) {
                child.ariaLabel = `change ${text} ${label.innerText}`;
              }
            });
          }
        }
        this.loadColumnOptions(this.columnOptions[i]);
      });
      const listItems = [];
      this.columnNames.forEach((name) => {
        listItems.push(createElement("li", {
          innerText: name
        }));
      });
      this.listAndFilter.setSelectionListItems(listItems);
      this.columnNames = listItems.map((item) => item.innerText);
      this.initializeColumnOptions();
      this.columnDataDiv = this.createColumnDataDiv();
      this.columnDataDiv.style.display = "none";
      this.createSaveButtonRow();
    }
    get csvModal() {
      return __privateGet(this, _csvModal);
    }
    get columnNames() {
      return this._columnNames;
    }
    set columnNames(names) {
      this._columnNames = names;
    }
    get randomValue() {
      return this._randomValue;
    }
    get filterValue() {
      return this._filterValue;
    }
    get copyFrame() {
      return this._frameCopy;
    }
    set copyFrame(frame) {
      if (frame) {
        console.log("setting copy frame");
        this._frameCopy = frame;
      } else {
        console.log("setting copy frame to undefined");
        this._frameCopy = void 0;
      }
    }
    createModal(UiKit) {
      return createElement("div", {
        addClass: "container--flex--responsive",
        id: "csvSettingsContainer",
        addStyle: {
          backgroundColor: UiKitColors.neutral.grey._10,
          position: "absolute",
          top: "0",
          left: "0",
          height: "fit-content",
          maxHeight: "90vh",
          maxWidth: "600px",
          width: "100%",
          overflowY: "auto",
          zIndex: "9999",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"
        },
        onkeydown: (e) => {
          this.stayInsideModal(e);
        },
        appendTo: UiKit
      });
    }
    createCsvModal() {
      return createElement("div", {
        addStyle: {
          display: "flex",
          flexDirection: "column",
          height: "fit-content",
          padding: "32px",
          width: "100%"
        },
        appendTo: this.modal
      });
    }
    createSpinner() {
      return new Icon({ icon: loadingSpinner, addClass: "spinner", uniqueIdPrefix: "", id: "spinner1" });
    }
    createTitle(text) {
      createElement("h2", {
        innerText: text,
        addClass: "typo_title-title3",
        appendTo: __privateGet(this, _csvModal)
      });
    }
    createInput(labelText, inputPlaceholder, type) {
      const div = createElement("div", {
        addStyle: {
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center"
        },
        appendTo: __privateGet(this, _csvModal)
      });
      let textField;
      if (type === "text") {
        textField = new TextInputField({ labelText, placeholder: inputPlaceholder, size: "sm", uniqueIdPrefix: "", id: labelText, type: "text", helperText: "" });
      } else {
        textField = new NumberInputField({ labelText, placeholder: inputPlaceholder, size: "sm", uniqueIdPrefix: "", id: labelText, helperText: "" });
        textField.value = 100;
      }
      textField.render(div);
      if (textField.helperTextEl)
        textField.helperTextEl.style.color = UiKitColors.secondary.red._100;
      textField.container.style.width = "100%";
      textField.input.style.marginBottom = "0px";
      textField.input.style.width = "95%";
      return textField;
    }
    createLineDivider() {
      createElement("hr", {
        addStyle: {
          width: "100%",
          height: "1px",
          border: "none",
          backgroundColor: UiKitColors.neutral.grey._40
        },
        appendTo: __privateGet(this, _csvModal)
      });
    }
    initializeColumnOptions() {
      this.columnNames.forEach((_, index) => {
        this.columnOptions[index] = {
          "Column Name": this.columnNames[index],
          "Column Type": "text"
        };
      });
      this.tempColumnOptions = { ...this.columnOptions };
    }
    createColumnDataDiv() {
      return createElement("div", {
        addStyle: this.columnContainerStyle,
        appendTo: __privateGet(this, _csvModal)
      });
    }
    createSaveButtonRow() {
      const buttonRow = createElement("div", {
        addStyle: {
          display: "flex",
          flexDirection: "row",
          height: "fit-content",
          justifyContent: "flex-end",
          marginTop: "16px"
        },
        appendTo: __privateGet(this, _csvModal)
      });
      this.cancelButton = new Button({ text: "Cancel", className: "btn-small-link-var1", uniqueIdPrefix: "", id: "cancel" });
      this.cancelButton.button.onclick = () => {
        this.hide();
      };
      this.saveButton = new Button({ text: "Save", className: "btn-small-primary-var1", uniqueIdPrefix: "", id: "save" });
      this.cancelButton.disabled = false;
      this.saveButton.disabled = true;
      this.cancelButton.render(buttonRow);
      this.saveButton.render(buttonRow);
      this.saveButton.button.onclick = () => this.handleSaveButton();
    }
    addColumnDataSection(label, value, type, options) {
      const newSection = new ColumnData(this.columnDataDiv, { value, label }, type);
      newSection.onChangeEmit((value2) => {
        this.tempColumnOptions[this.currentColumnIndex][value2.label] = value2.value;
        this.saveButton.disabled = false;
        if (value2.label === "Column Name") {
          this.changeCopyFrameColumnName(this.currentColumnIndex, value2.value);
        } else if (value2.label === "Column Type") {
          this.changeCopyFrameColumnType(this.currentColumnIndex, value2.value);
        }
      });
      if (type === "dropdown" && options) {
        newSection.setDropdownOptions(options);
      }
      this.columnSections[label] = newSection;
    }
    changeCopyFrameColumnName(columnIndex, newName) {
      if (this.copyFrame) {
        const column = this.copyFrame.GetColumn$quorum_integer(columnIndex);
        column.SetHeader$quorum_text(newName);
      }
    }
    changeCopyFrameColumnType(columnIndex, newType) {
      if (this.copyFrame) {
        const column = this.copyFrame.GetColumn$quorum_integer(columnIndex);
        if (newType === "Number") {
          const newColumn = column.ConvertToNumberColumn();
          this.copyFrame.RemoveColumnAt$quorum_integer(columnIndex);
          this.copyFrame.AddColumn$quorum_integer$quorum_Libraries_Compute_Statistics_DataFrameColumn(columnIndex, newColumn);
        } else if (newType === "Text") {
          const newColumn = column.ConvertToTextColumn();
          this.copyFrame.RemoveColumnAt$quorum_integer(columnIndex);
          this.copyFrame.AddColumn$quorum_integer$quorum_Libraries_Compute_Statistics_DataFrameColumn(columnIndex, newColumn);
        } else if (newType === "Boolean") {
          const newColumn = column.ConvertToBooleanColumn();
          this.copyFrame.RemoveColumnAt$quorum_integer(columnIndex);
          this.copyFrame.AddColumn$quorum_integer$quorum_Libraries_Compute_Statistics_DataFrameColumn(columnIndex, newColumn);
        }
      }
    }
    handleSaveButton() {
      this.columnOptions = this.tempColumnOptions;
      this.saveButton.disabled = true;
      this.hide();
      this.onSaveEmitter.emit("save", this.columnOptions, this.randomInput.value, this.filterInput.value);
    }
    subscribeToSaveEvent(listener) {
      this.onSaveEmitter.on("save", listener);
    }
    setColumnOptions(columnOptions) {
      this.columnOptions = columnOptions;
      this.tempColumnOptions = { ...this.columnOptions };
      if (this.currentColumnIndex !== void 0) {
        this.loadColumnOptions(this.columnOptions[this.currentColumnIndex]);
      }
    }
    loadColumnOptions(options) {
      for (const [label, value] of Object.entries(options)) {
        this.columnSections[label].setValue(value);
      }
    }
    showLoadingSpinner() {
      const spinnerSVG = this.spinner.svg;
      if (spinnerSVG) {
        updateElement(spinnerSVG, {
          addStyle: {
            position: "absolute",
            top: "50%",
            left: "50%"
          }
        });
      }
      this.spinner.render(this.modal);
    }
    hideLoadingSpinner() {
      this.spinner.destroy();
    }
    show() {
      this.setColumnOptions(this.columnOptions);
      this.modal.style.display = "flex";
      const firstFocusableElement = this.modal.querySelector("input, button, select, textarea");
      firstFocusableElement.focus();
    }
    hide() {
      var _a;
      this.modal.style.display = "none";
      (_a = document.activeElement) == null ? void 0 : _a.blur();
    }
    stayInsideModal(e) {
      const focusableElements = this.modal.querySelectorAll('button, input, textarea, select, a[href], [tabindex]:not([tabindex="-1"])');
      const firstFocusableElement = focusableElements[0];
      const lastFocusableElement = focusableElements[focusableElements.length - 1];
      this.modal.addEventListener("keydown", (event) => {
        if (event.key === "Tab") {
          if (event.shiftKey) {
            if (document.activeElement === firstFocusableElement) {
              event.preventDefault();
              lastFocusableElement.focus();
            }
          } else {
            if (lastFocusableElement.disabled) {
              if (document.activeElement === focusableElements[focusableElements.length - 2]) {
                event.preventDefault();
                firstFocusableElement.focus();
              }
            } else if (document.activeElement === lastFocusableElement) {
              event.preventDefault();
              firstFocusableElement.focus();
            }
          }
        }
      });
    }
    isShowing() {
      return this.modal.style.display === "flex";
    }
    setQuorumFrame(frame) {
      this.quorumFrame = frame;
    }
    async validateRandomizer() {
      if (!this.copyFrame)
        throw new Error("No copy frame");
      try {
        this.copyFrame.SelectAllColumns();
        await this.copyFrame.SplitSelectedColumnsRandomlyByRows$quorum_number(
          this.randomInput.value / 100
        );
        this.randomInput.helperTextValue = "valid";
        this.randomInput.error = false;
        this.randomInput.valid = true;
        this.saveButton.disabled = false;
      } catch (e) {
        this.randomInput.valid = false;
        this.randomInput.error = true;
        this.randomInput.helperTextValue = e.errorMessage;
        this.saveButton.disabled = true;
      }
    }
    async validateFilter() {
      if (!this.copyFrame)
        throw new Error("No copy frame");
      console.log(this.copyFrame.GetHeaders());
      try {
        const filterValue = this.filterInput.value === "" ? "true" : this.filterInput.value;
        await this.copyFrame.Filter$quorum_text(filterValue);
        this.filterInput.helperTextValue = "valid";
        this.filterInput.error = false;
        this.filterInput.valid = true;
        this.saveButton.disabled = false;
      } catch (e) {
        this.filterInput.valid = false;
        this.filterInput.error = true;
        this.filterInput.helperTextValue = e.errorMessage;
        this.saveButton.disabled = true;
      }
    }
    switchTheme(theme) {
      this.listAndFilter.switchTheme(theme);
      if (theme === "light") {
        this.csvModal.style.backgroundColor = UiKitColors.neutral.grey._10;
      } else if (theme === "dark") {
        this.csvModal.style.backgroundColor = UiKitColors.neutral.grey._75;
      } else if (theme === "high-contrast") {
        this.csvModal.style.backgroundColor = UiKitColors.neutral.black;
      }
      this.randomInput.switchTheme(theme);
      this.filterInput.switchTheme(theme);
      const headers = this.csvModal.querySelectorAll("h2");
      for (const header of headers) {
        console.log(header);
        if (theme === "light") {
          header.style.color = UiKitColors.neutral.black;
          this.cancelButton.button.style.color = UiKitColors.neutral.black;
        } else if (theme === "dark") {
          header.style.color = UiKitColors.neutral.white;
          this.cancelButton.button.style.color = UiKitColors.neutral.white;
        } else if (theme === "high-contrast") {
          header.style.color = UiKitColors.neutral.white;
          this.cancelButton.button.style.color = UiKitColors.neutral.white;
        }
      }
      for (const section of Object.values(this.columnSections)) {
        section.theme = theme;
        section.switchTheme(theme);
      }
      if (theme === "light") {
        updateElement(this.saveButton.getElement(), { updateClass: "btn-small-primary-var1" });
        this._closeButton.getElementsByTagName("svg")[0].style.fill = UiKitColors.neutral.black;
        this.columnDataDiv.style.backgroundColor = UiKitColors.neutral.white;
        this.columnDataDiv.style.color = UiKitColors.neutral.black;
      } else if (theme === "dark") {
        updateElement(this.saveButton.getElement(), { updateClass: "btn-small-accent-var1" });
        this._closeButton.getElementsByTagName("svg")[0].style.fill = UiKitColors.neutral.white;
        this.columnDataDiv.style.backgroundColor = UiKitColors.neutral.grey._75;
        this.columnDataDiv.style.color = UiKitColors.neutral.white;
      } else if (theme === "high-contrast") {
        updateElement(this.saveButton.getElement(), { updateClass: "btn-small-hico-var1" });
        this._closeButton.getElementsByTagName("svg")[0].style.fill = UiKitColors.neutral.white;
        this.columnDataDiv.style.backgroundColor = UiKitColors.neutral.black;
        this.columnDataDiv.style.color = UiKitColors.neutral.white;
      }
    }
  }
  _csvModal = new WeakMap();
  __decorateClass$2([
    loggedMethod
  ], CsvSettings.prototype, "show", 1);
  __decorateClass$2([
    loggedMethod
  ], CsvSettings.prototype, "stayInsideModal", 1);
  class CheckboxGroup {
    constructor(props) {
      __publicField(this, "_container");
      __publicField(this, "checkboxes");
      __publicField(this, "theme");
      const { direction = "row", disabled = false, options: labelText = ["Checkbox"], theme, uniqueIdPrefix, id } = props;
      this._container = createElement("div", {
        uniqueIdPrefix,
        id,
        addClass: `chkbox-label-container_${direction}`,
        role: "group"
      });
      this.theme = theme;
      this.checkboxes = labelText.map((label) => {
        return new SingleCheckbox(this.container, { disabled, option: label, theme, uniqueIdPrefix, id: `${id}${label}` });
      });
    }
    get container() {
      return this._container;
    }
    switchDirection(direction) {
      updateElement(this.container, { addClass: `chkbox-label-container_${direction}` });
    }
    getCheckbox(labelText) {
      const checkbox = this.checkboxes.find((checkbox2) => checkbox2.label.innerText === labelText);
      if (!checkbox) {
        console.error(`Checkbox with label ${labelText} not found`);
        return void 0;
      }
      return checkbox;
    }
    setOnChange(onChange) {
      this.checkboxes.forEach((checkbox) => {
        checkbox.label.addEventListener("change", onChange);
      });
    }
    addCheckbox(label, disabled = false) {
      const newCheckbox = new SingleCheckbox(this.container, {
        disabled,
        option: label,
        theme: this.theme,
        uniqueIdPrefix: this._container.id,
        id: `${this._container.id}${label}`
      });
      this.checkboxes.push(newCheckbox);
    }
    hideAll() {
      this.checkboxes.forEach((checkbox) => {
        checkbox.hide();
      });
    }
    switchTheme(theme) {
      this.theme = theme;
      this.checkboxes.forEach((checkbox) => {
        checkbox.switchTheme(this.theme);
      });
    }
    getCheckStatus() {
      const checkStatus = {};
      this.checkboxes.forEach((checkbox) => {
        checkStatus[checkbox.label.innerText] = checkbox.checked;
      });
      return checkStatus;
    }
    render(parent) {
      parent.appendChild(this.container);
    }
  }
  class SingleCheckbox {
    constructor(UiKit, props) {
      __publicField(this, "_label");
      __publicField(this, "theme");
      __publicField(this, "_uniqueIdPrefix");
      __publicField(this, "_id");
      __publicField(this, "_option");
      __publicField(this, "_input");
      const { disabled = false, option: labelText, theme, id, uniqueIdPrefix } = props;
      this._option = labelText;
      this._label = createElement("label", {
        uniqueIdPrefix,
        id: id + "label",
        addClass: `checkbox_label_${theme}`,
        innerText: this.option,
        appendTo: UiKit
      });
      this.theme = theme;
      this._id = id;
      this._uniqueIdPrefix = uniqueIdPrefix;
      this._input = createElement("input", {
        disabled,
        uniqueIdPrefix,
        id: id + "input",
        addClass: `chkbox_${theme}`,
        type: "checkbox",
        appendTo: this._label
      });
    }
    get input() {
      return this._input;
    }
    get label() {
      return this._label;
    }
    get labelId() {
      return this._uniqueIdPrefix + this._id + "label";
    }
    get option() {
      return this._option;
    }
    set option(option) {
      this._option = option;
      this.label.innerText = this.option;
    }
    get inputId() {
      return this._uniqueIdPrefix + this._id + "input";
    }
    get checked() {
      const checkbox = this.input;
      return checkbox.checked;
    }
    setOnChange(onChange) {
      this.label.addEventListener("change", onChange);
    }
    check() {
      this.input.checked = true;
      return this;
    }
    uncheck() {
      this.input.checked = false;
      return this;
    }
    show() {
      updateElement(this.label, { addStyle: { display: "flex" } });
      return this;
    }
    hide() {
      updateElement(this.label, { addStyle: { display: "none" } });
      return this;
    }
    order(newIndex) {
      const parent = this.label.parentElement;
      const currentIndex = Array.from(parent.children).indexOf(this.label);
      swapElements(parent, currentIndex, newIndex);
      return this;
    }
    onChange(callback) {
      this.input.addEventListener("change", (event) => {
        const isChecked = event.target.checked;
        callback(isChecked, this.label.innerText);
      });
      return this;
    }
    switchTheme(theme) {
      updateElement(this.label, { removeClass: `checkbox_label_${this.theme}` });
      updateElement(this.label, { addClass: `checkbox_label_${theme}` });
      updateElement(this.input, { removeClass: `chkbox_${this.theme}` });
      updateElement(this.input, { addClass: `chkbox_${theme}` });
      this.theme = theme;
    }
  }
  function swapElements(parent, index1, index2) {
    const children = Array.from(parent.children);
    if (index1 < 0 || index1 >= children.length || index2 < 0 || index2 >= children.length) {
      return;
    }
    const element1 = children[index1];
    const element2 = children[index2];
    if (index1 < index2) {
      parent.insertBefore(element2, element1);
      parent.insertBefore(element1, element2.nextSibling);
    } else {
      parent.insertBefore(element1, element2);
      parent.insertBefore(element2, element1.nextSibling);
    }
  }
  function quorumChartProperties(Base) {
    class QuorumChartPropertiesMixin extends Base {
      constructor() {
        super(...arguments);
        __publicField(this, "_csvData", "");
        __publicField(this, "_frame");
        __publicField(this, "_game");
        __publicField(this, "_frameOptions");
        __publicField(this, "_columnOptions");
        __publicField(this, "_chart");
        __publicField(this, "_color", ColorPalette.Colorgorical);
        __publicField(this, "_legendPos", LegendTypes.None);
        __publicField(this, "_chartTitle");
        __publicField(this, "_factor1");
        __publicField(this, "_factor2");
        __publicField(this, "_valueX");
        __publicField(this, "_valueY");
        __publicField(this, "_valueZ");
        __publicField(this, "_uniqueId", "");
        //graphic container
        __publicField(this, "_graphicContainer");
        __publicField(this, "_statusPTag");
        __publicField(this, "_OGFrame");
        __publicField(this, "_randomValue");
        __publicField(this, "_filterValue");
        __publicField(this, "_interval");
        //checkboxes
        __publicField(this, "_showLabels", false);
        __publicField(this, "_outliers", false);
        __publicField(this, "_leastSquaresLine", false);
        __publicField(this, "_movableLine", false);
        __publicField(this, "_squareOfResiduals", false);
        __publicField(this, "_interceptLock", false);
        __publicField(this, "_horizontalLayout", false);
      }
      get statusPTag() {
        return this._statusPTag;
      }
      set statusPTag(statusPTag) {
        this._statusPTag = statusPTag;
      }
      set statusText(text) {
        if (this._statusPTag) {
          this._statusPTag.innerText = text;
        }
      }
      get showLabels() {
        return this._showLabels;
      }
      set showLabels(showLabels) {
        this._showLabels = showLabels;
      }
      get outliers() {
        return this._outliers;
      }
      set outliers(outliers) {
        this._outliers = outliers;
      }
      get leastSquaresLine() {
        return this._leastSquaresLine;
      }
      set leastSquaresLine(leastSquaresLine) {
        this._leastSquaresLine = leastSquaresLine;
      }
      get movableLine() {
        return this._movableLine;
      }
      set movableLine(movableLine) {
        this._movableLine = movableLine;
      }
      get squareOfResiduals() {
        return this._squareOfResiduals;
      }
      set squareOfResiduals(squareOfResiduals) {
        this._squareOfResiduals = squareOfResiduals;
      }
      get interceptLock() {
        return this._interceptLock;
      }
      set interceptLock(interceptLock) {
        this._interceptLock = interceptLock;
      }
      get horizontalLayout() {
        return this._horizontalLayout;
      }
      set horizontalLayout(horizontalLayout) {
        this._horizontalLayout = horizontalLayout;
      }
      get graphicContainer() {
        return this._graphicContainer;
      }
      set graphicContainer(graphicContainer) {
        this._graphicContainer = graphicContainer;
      }
      get uniqueId() {
        if (this._uniqueId === void 0) {
          throw new Error("uniqueId is undefined");
        }
        return this._uniqueId;
      }
      set uniqueId(uniqueId) {
        this._uniqueId = uniqueId;
      }
      get game() {
        return this._game;
      }
      set game(game) {
        this._game = game;
      }
      get frameOptions() {
        if (this._frameOptions === void 0) {
          throw new Error("frameOptions is undefined");
        }
        return this._frameOptions;
      }
      set frameOptions(frameOptions) {
        this._frameOptions = frameOptions;
      }
      get interval() {
        return this._interval;
      }
      set interval(interval) {
        this._interval = interval;
      }
      get csvData() {
        return this._csvData;
      }
      set csvData(csvData) {
        this._csvData = csvData;
      }
      get frame() {
        return this._frame;
      }
      set frame(frame) {
        this._frame = frame;
      }
      get OGFrame() {
        return this._OGFrame;
      }
      set OGFrame(OGFrame) {
        this._OGFrame = OGFrame;
        console.log("OGFrame", this._OGFrame);
      }
      get headers() {
        if (this.frame === void 0) {
          throw new Error("frame is undefined");
        }
        if (this.frame.GetHeaders().GetSize() === 0) {
          throw new Error("headers is undefined");
        }
        const headers = [];
        const length = this.frame.GetHeaders().GetSize();
        for (let i = 0; i < length; i++) {
          const column = this.frame.GetColumn$quorum_integer(i);
          headers[i] = column.GetHeader();
        }
        return headers;
      }
      get OGHeaders() {
        if (this.OGFrame === void 0) {
          throw new Error("OGFrame is undefined");
        }
        if (this.OGFrame.GetHeaders().GetSize() === 0) {
          throw new Error("OGHeaders is undefined");
        }
        const headers = [];
        const length = this.OGFrame.GetHeaders().GetSize();
        for (let i = 0; i < length; i++) {
          const column = this.OGFrame.GetColumn$quorum_integer(i);
          headers[i] = column.GetHeader();
        }
        return headers;
      }
      get columnOptions() {
        if (this._columnOptions === void 0) {
          throw new Error("columnOptions is undefined");
        }
        return this._columnOptions;
      }
      set columnOptions(columnOptions) {
        this._columnOptions = columnOptions;
        console.log("columnOptions", this._columnOptions);
      }
      get randomValue() {
        return this._randomValue;
      }
      set randomValue(randomValue) {
        this._randomValue = randomValue;
        console.log("randomValue", this._randomValue);
      }
      get filterValue() {
        return this._filterValue;
      }
      set filterValue(filterValue) {
        this._filterValue = filterValue;
        console.log("filterValue", this._filterValue);
      }
      get chart() {
        if (this._chart === void 0) {
          throw new Error("chart is undefined");
        }
        return this._chart;
      }
      set chart(chart) {
        this._chart = chart;
        console.log("quorum chart class changed");
      }
      get chartTitle() {
        return this._chartTitle;
      }
      set chartTitle(chartTitle) {
        this._chartTitle = chartTitle;
        console.log("chartTitle", this._chartTitle);
      }
      get color() {
        return this._color;
      }
      set color(color) {
        console.log("color", color);
        this._color = color;
      }
      get legendPos() {
        return this._legendPos;
      }
      set legendPos(lengendPos) {
        console.log("lengendPos", lengendPos);
        this._legendPos = lengendPos;
      }
      get factor1() {
        return this._factor1;
      }
      set factor1(factor1) {
        console.log("factor1", factor1);
        this._factor1 = factor1;
      }
      get factor2() {
        return this._factor2;
      }
      set factor2(factor2) {
        console.log("factor2", factor2);
        this._factor2 = factor2;
      }
      get valueX() {
        return this._valueX;
      }
      set valueX(valueX) {
        console.log("valueX", valueX);
        this._valueX = valueX;
      }
      get valueY() {
        return this._valueY;
      }
      set valueY(valueY) {
        this._valueY = valueY;
        console.log("valueY", this._valueY);
      }
      get valueZ() {
        return this._valueZ;
      }
      set valueZ(valueZ) {
        this._valueZ = valueZ;
        console.log("valueZ", this._valueZ);
      }
    }
    return QuorumChartPropertiesMixin;
  }
  var __defProp$1 = Object.defineProperty;
  var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
  var __decorateClass$1 = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$1(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if (decorator = decorators[i])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp$1(target, key, result);
    return result;
  };
  class quorumChart extends quorumChartProperties(Object) {
    constructor() {
      super();
      __privateAdd(this, _chartType, ChartTypes.BarChart);
      __privateAdd(this, _randomValue, 100);
      __privateAdd(this, _screenshotListener, null);
    }
    set randomValue(value) {
      __privateSet(this, _randomValue, value);
      this.frame = this.randomizeFrame();
    }
    get randomValue() {
      return __privateGet(this, _randomValue);
    }
    get chartType() {
      return __privateGet(this, _chartType);
    }
    set chartType(chartType) {
      __privateSet(this, _chartType, chartType);
      if (this.csvData !== "") {
        this.game = void 0;
        this.Stop();
        setTimeout(() => {
          this.createChart();
        }, 100);
      } else {
        console.log("no csv data");
      }
    }
    get screenshotListener() {
      return __privateGet(this, _screenshotListener);
    }
    set screenshotListener(screenshotListener) {
      __privateSet(this, _screenshotListener, screenshotListener);
    }
    createNewFrame() {
      this.frame = new quorum_Libraries_Compute_Statistics_DataFrame_();
    }
    loadFrame() {
      if (this.frame) {
        this.frame.LoadFromCommaSeparatedValue$quorum_text(this.csvData);
        this.OGFrame = this.frame.Copy();
      }
    }
    convertToNumberColumn(column, i) {
      if (this.frame && this.OGFrame) {
        const newColumn = column.ConvertToNumberColumn();
        this.frame.RemoveColumnAt$quorum_integer(i);
        this.frame.AddColumn$quorum_integer$quorum_Libraries_Compute_Statistics_DataFrameColumn(
          i,
          newColumn
        );
        this.OGFrame.RemoveColumnAt$quorum_integer(i);
        this.OGFrame.AddColumn$quorum_integer$quorum_Libraries_Compute_Statistics_DataFrameColumn(
          i,
          newColumn
        );
      }
    }
    convertToTextColumn(column, i) {
      if (this.frame && this.OGFrame) {
        const newColumn = column.ConvertToTextColumn();
        this.frame.RemoveColumnAt$quorum_integer(i);
        this.frame.AddColumn$quorum_integer$quorum_Libraries_Compute_Statistics_DataFrameColumn(
          i,
          newColumn
        );
        this.OGFrame.RemoveColumnAt$quorum_integer(i);
        this.OGFrame.AddColumn$quorum_integer$quorum_Libraries_Compute_Statistics_DataFrameColumn(
          i,
          newColumn
        );
      }
    }
    convertToBooleanColumn(column, i) {
      if (this.frame && this.OGFrame) {
        const newColumn = column.ConvertToBooleanColumn();
        this.frame.RemoveColumnAt$quorum_integer(i);
        this.frame.AddColumn$quorum_integer$quorum_Libraries_Compute_Statistics_DataFrameColumn(
          i,
          newColumn
        );
        this.OGFrame.RemoveColumnAt$quorum_integer(i);
        this.OGFrame.AddColumn$quorum_integer$quorum_Libraries_Compute_Statistics_DataFrameColumn(
          i,
          newColumn
        );
      }
    }
    async switchQuorumFrame() {
      if (this.frame) {
        try {
          switch (this.chartType) {
            case ChartTypes.BoxPlot:
              return await this.frame.BoxPlot();
            case ChartTypes.BarChart:
              return await this.frame.BarChart();
            case ChartTypes.Histogram:
              return await this.frame.Histogram();
            case ChartTypes.PieChart:
              return await this.frame.PieChart();
            case ChartTypes.ScatterPlot:
              return await this.frame.ScatterPlot();
            case ChartTypes.LineChart:
              return await this.frame.LineChart();
            default:
              throw new Error("Unsupported chart type");
          }
        } catch (e) {
          console.error(e);
          if (e.GetErrorMessage) {
            throw new Error(e.GetErrorMessage());
          } else {
            throw new Error("Unknown error");
          }
        }
      } else {
        throw new Error("No data loaded");
      }
    }
    async switchColorPallete(chart) {
      try {
        switch (this.color) {
          case ColorPalette.Colorgorical:
            await chart.SetColorPaletteToColorgorical();
            break;
          case ColorPalette.Calm:
            await chart.SetColorPaletteToCalm();
            break;
          case ColorPalette.Cool:
            await chart.SetColorPaletteToCoolScale();
            break;
          case ColorPalette.Disturbing:
            await chart.SetColorPaletteToDisturbing();
            break;
          case ColorPalette.Exciting:
            await chart.SetColorPaletteToExciting();
            break;
          case ColorPalette.Magma:
            await chart.SetColorPaletteToMagma();
            break;
          case ColorPalette.Negative:
            await chart.SetColorPaletteToNegative();
            break;
          case ColorPalette.Playful:
            await chart.SetColorPaletteToPlayful();
            break;
          case ColorPalette.Positive:
            await chart.SetColorPaletteToPositive();
            break;
          case ColorPalette.Serious:
            await chart.SetColorPaletteToSerious();
            break;
          case ColorPalette.Trustworthy:
            await chart.SetColorPaletteToTrustworthy();
            break;
          case ColorPalette.Warm:
            await chart.SetColorPaletteToWarmScale();
            break;
        }
      } catch (e) {
        console.error(e);
        if (e.GetErrorMessage) {
          throw new Error(e.GetErrorMessage());
        }
      }
    }
    async switchLegendPosition(chart) {
      const showLegend = this.legendPos !== LegendTypes.None;
      try {
        await chart.ShowLegend$quorum_boolean(showLegend);
        if (showLegend) {
          switch (this.legendPos) {
            case LegendTypes.Top:
              chart.SetLegendLocationToTop();
              break;
            case LegendTypes.Right:
              chart.SetLegendLocationToRight();
              break;
            case LegendTypes.Bottom:
              chart.SetLegendLocationToBottom();
              break;
            case LegendTypes.Left:
              chart.SetLegendLocationToLeft();
              break;
            default:
              return;
          }
        }
      } catch (e) {
        console.error(e);
        if (e.GetErrorMessage) {
          throw new Error(e.GetErrorMessage());
        }
      }
    }
    async createChart() {
      if (!this.frame || !this.OGFrame) {
        this.createNewFrame();
        return;
      }
      try {
        this.frame = await this.filterFrame();
      } catch (e) {
        console.error(e);
        if (e.GetErrorMessage) {
          throw new Error(e.GetErrorMessage());
        }
      }
      this.resetFrames();
      this.addFactorsAndValues();
      if (this.areFactorsOrValuesEmpty()) {
        this.displayErrorMessage("No factors or values selected\r\n");
        return;
      }
      try {
        const chart = await this.switchQuorumFrame();
        this.updateChart(chart);
      } catch (e) {
        this.displayErrorMessage(e);
      }
    }
    resetFrames() {
      if (this.frame && this.OGFrame) {
        this.frame.EmptySelectedColumns();
        this.frame.EmptySelectedFactors();
      }
    }
    addFactorsAndValues() {
      const addToFrames = (method, value) => {
        if (method === "AddSelectedFactors$quorum_text" || method === "AddSelectedColumns$quorum_text") {
          if (value && value !== "-" && this.frame && this.OGFrame) {
            this.frame[method](value);
            this.OGFrame[method](value);
          }
        }
      };
      addToFrames("AddSelectedFactors$quorum_text", this.factor1);
      addToFrames("AddSelectedFactors$quorum_text", this.factor2);
      addToFrames("AddSelectedColumns$quorum_text", this.valueX);
      addToFrames("AddSelectedColumns$quorum_text", this.valueY);
      addToFrames("AddSelectedColumns$quorum_text", this.valueZ);
    }
    areFactorsOrValuesEmpty() {
      if (this.frame) {
        return !this.frame.GetSelectedColumnSize() && !this.frame.GetSelectedFactorSize();
      } else {
        return true;
      }
    }
    displayErrorMessage(message) {
      this.Stop();
      this.game = void 0;
      if (typeof message === "string") {
        this.statusText = message.startsWith("Error:") ? message + "\r\n" : "Error: " + message + "\r\n";
      } else {
        this.statusText = message;
      }
      if (this.graphicContainer) {
        this.graphicContainer.querySelectorAll(":scope > *").forEach((el) => {
          if (el.id !== this.uniqueId + "statusText") {
            el.remove();
          }
        });
      }
    }
    async updateChart(chart) {
      if (this.chartTitle)
        await chart.SetTitle$quorum_text(this.chartTitle);
      this.switchOptions(chart);
      this.switchLegendPosition(chart);
      this.switchColorPallete(chart);
      await this.displayChart(chart);
    }
    async filterFrame(value = "true") {
      if (this.frame === void 0)
        throw new Error("OGFrame is undefined");
      const filterFrame = this.frame.Copy();
      try {
        const filterValue = this.filterValue || value;
        await filterFrame.Filter$quorum_text(filterValue);
        return filterFrame.Copy();
      } catch (e) {
        console.error(e);
        throw new Error(e.errorMessage);
      }
    }
    randomizeFrame() {
      if (this.OGFrame === void 0)
        throw new Error("OGFrame is undefined");
      if (this.randomValue === void 0)
        throw new Error("randomValue is undefined");
      let randomFrame = this.OGFrame.Copy();
      try {
        randomFrame.SelectAllColumns();
        const value = randomFrame.SplitSelectedColumnsRandomlyByRows$quorum_number(
          this.randomValue / 100
        );
        randomFrame = value.Get$quorum_integer(0);
        return randomFrame.Copy();
      } catch (e) {
        console.error(e);
        throw new Error(e.errorMessage);
      }
    }
    async displayChart(chart) {
      if (!this.game) {
        try {
          this.frameOptions = new quorum_Libraries_Game_WebConfiguration_();
          this.frameOptions.Set_Libraries_Game_WebConfiguration__containerID_(
            this.uniqueId + "graphicContainer"
          );
          await this.frameOptions.Set_Libraries_Game_WebConfiguration__capFramesPerSecond_(
            true
          );
          await this.frameOptions.Set_Libraries_Game_WebConfiguration__framesPerSecondLimit_(
            OPTION_FPS
          );
          this.game = new quorum_Libraries_Interface_Controls_Charts_ChartDisplay_();
          await this.game.SetConfiguration$quorum_Libraries_Game_WebConfiguration(
            this.frameOptions
          );
          await this.game.SetChart$quorum_Libraries_Interface_Controls_Charts_Chart(
            chart
          );
          await this.game.StartGame();
        } catch (e) {
          console.error(e);
          if (e.GetErrorMessage) {
            throw new Error(e.GetErrorMessage());
          }
        }
      } else {
        try {
          if (this.chart) {
            await chart.SetPercentageWidth$quorum_number(1);
            await chart.SetPercentageHeight$quorum_number(1);
            await this.game.Remove$quorum_Libraries_Interface_Item2D(this.chart);
            await this.game.Add$quorum_Libraries_Interface_Item2D(chart);
          }
        } catch (e) {
          console.error(e);
          if (e.GetErrorMessage) {
            throw new Error(e.GetErrorMessage());
          }
        }
      }
      this.chart = chart;
    }
    async Stop() {
      try {
        const manager = new quorum_Libraries_Game_GameStateManager_();
        const game = await manager.GetGame();
        if (game != null) {
          console.log("Stopping game");
          await game.Exit();
        } else if (typeof plugins_quorum_Libraries_Sound_Audio_ === "function" && typeof plugins_quorum_Libraries_Sound_Audio_.StopAllSources === "function") {
          console.log("Stopping audio");
          await plugins_quorum_Libraries_Sound_Audio_.StopAllSources();
        }
        await global_Empty_Shared_Classes();
      } catch (e) {
        console.error(e);
        if (e.GetErrorMessage) {
          throw new Error(e.GetErrorMessage());
        }
      }
    }
    switchOptions(chart) {
      switch (this.chartType) {
        case ChartTypes.BarChart:
          this.horizontalLayout ? chart.SetOrientationToHorizontal() : chart.SetOrientationToVertical();
          chart.ShowAnnotations$quorum_boolean(this.showLabels);
          break;
        case ChartTypes.BoxPlot:
          this.horizontalLayout ? chart.SetOrientationToHorizontal() : chart.SetOrientationToVertical();
          if (this.outliers)
            chart.HideOutliers();
          chart.ShowAnnotations$quorum_boolean(this.showLabels);
          break;
        case ChartTypes.Histogram:
          this.horizontalLayout ? chart.SetOrientationToHorizontal() : chart.SetOrientationToVertical();
          if (this.interval)
            chart.SetXTickInterval$quorum_integer(this.interval);
          chart.ShowAnnotations$quorum_boolean(this.showLabels);
          break;
        case ChartTypes.PieChart:
          this.horizontalLayout ? chart.SetOrientationToHorizontal() : chart.SetOrientationToVertical();
          chart.ShowAnnotations$quorum_boolean(this.showLabels);
          break;
        case ChartTypes.ScatterPlot:
          chart.ShowAnnotations$quorum_boolean(this.showLabels);
          chart.ShowLinearRegression$quorum_boolean(this.leastSquaresLine);
          chart.ShowMovableRegressionLine$quorum_boolean(this.movableLine);
          chart.ShowSquaresOfResiduals$quorum_boolean(this.squareOfResiduals);
          if (this.interceptLock)
            chart.LockRegressionYIntercept$quorum_number(0);
          this.horizontalLayout ? chart.SetOrientationToHorizontal() : chart.SetOrientationToVertical();
          break;
        case ChartTypes.LineChart:
          this.horizontalLayout ? chart.SetOrientationToHorizontal() : chart.SetOrientationToVertical();
          chart.ShowAnnotations$quorum_boolean(this.showLabels);
          break;
      }
    }
    saveImage() {
      if (this.game) {
        if (this.screenshotListener) {
          this.game.RemoveScreenshotListener$quorum_Libraries_Interface_Events_ScreenshotListener(
            this.screenshotListener
          );
        }
        this.screenshotListener = new quorum_Libraries_Interface_Events_ScreenshotListener_();
        this.screenshotListener.OnScreenshot$quorum_Libraries_Interface_Events_ScreenshotEvent = (event) => {
          const screenshot = event.GetScreenshot();
          const manager = new quorum_Libraries_Game_GameStateManager_();
          const app = manager.GetApplication();
          let imageFileName = this.chartTitle ? `${this.chartTitle}_${this.chartType}` : this.chartType;
          imageFileName = imageFileName.replace(/\s/g, "_");
          app.SaveImageToDownloads$quorum_Libraries_Game_Graphics_PixelMap$quorum_text(
            screenshot,
            imageFileName
          );
        };
        this.game.AddScreenshotListener$quorum_Libraries_Interface_Events_ScreenshotListener(
          this.screenshotListener
        );
        this.game.Screenshot();
      }
    }
  }
  _chartType = new WeakMap();
  _randomValue = new WeakMap();
  _screenshotListener = new WeakMap();
  __decorateClass$1([
    loggedMethod
  ], quorumChart.prototype, "createNewFrame", 1);
  __decorateClass$1([
    loggedMethod
  ], quorumChart.prototype, "loadFrame", 1);
  __decorateClass$1([
    loggedMethod
  ], quorumChart.prototype, "convertToNumberColumn", 1);
  __decorateClass$1([
    loggedMethod
  ], quorumChart.prototype, "convertToTextColumn", 1);
  __decorateClass$1([
    loggedMethod
  ], quorumChart.prototype, "convertToBooleanColumn", 1);
  __decorateClass$1([
    loggedMethod
  ], quorumChart.prototype, "switchQuorumFrame", 1);
  __decorateClass$1([
    loggedMethod
  ], quorumChart.prototype, "switchColorPallete", 1);
  __decorateClass$1([
    loggedMethod
  ], quorumChart.prototype, "switchLegendPosition", 1);
  __decorateClass$1([
    loggedMethod
  ], quorumChart.prototype, "createChart", 1);
  __decorateClass$1([
    loggedMethod
  ], quorumChart.prototype, "filterFrame", 1);
  __decorateClass$1([
    loggedMethod
  ], quorumChart.prototype, "randomizeFrame", 1);
  __decorateClass$1([
    loggedMethod
  ], quorumChart.prototype, "displayChart", 1);
  __decorateClass$1([
    loggedMethod
  ], quorumChart.prototype, "Stop", 1);
  __decorateClass$1([
    loggedMethod
  ], quorumChart.prototype, "switchOptions", 1);
  __decorateClass$1([
    loggedMethod
  ], quorumChart.prototype, "saveImage", 1);
  class RadioGroup {
    constructor(props) {
      __publicField(this, "_container");
      __publicField(this, "theme");
      __publicField(this, "radios");
      __publicField(this, "_value");
      const {
        theme,
        direction = "row",
        disabled = false,
        options = ["Radio"],
        name,
        uniqueIdPrefix,
        id,
        label
      } = props;
      this._container = createElement("div", {
        addClass: `radio-label-container_${direction}`,
        uniqueIdPrefix,
        id: id + "_container"
      });
      if (label) {
        this._container.appendChild(createElement("label", {
          addClass: "typo_title-title3",
          innerText: label,
          uniqueIdPrefix,
          id: id + "_label",
          addStyle: {
            margin: "0"
          }
        }));
      }
      this.theme = theme;
      this.radios = options.map((label2) => {
        return new SingleRadio(this.container, { theme, disabled, option: label2, name, uniqueIdPrefix, id: `${id}${label2}` });
      });
    }
    get container() {
      return this._container;
    }
    get value() {
      var _a;
      this._value = (_a = this.radios.find((radio) => radio.input.checked)) == null ? void 0 : _a.getLabel().innerText;
      return this._value;
    }
    set value(value) {
      this._value = value;
      this.radios.forEach((radio) => {
        radio.input.checked = radio.getLabel().innerText === value;
      });
    }
    get onchange() {
      return this.radios[0].onchange;
    }
    switchTheme(theme) {
      this.theme = theme;
      this.radios.forEach((radio) => {
        radio.switchTheme(this.theme);
      });
    }
    switchDirection(direction) {
      updateElement(this.container, { addClass: `radio-label-container_${direction}` });
    }
    getRadio(label) {
      return this.radios.find((radio) => radio.getLabel().innerText === label);
    }
    setOnChange(onChange) {
      console.log("setOnChange");
      this.radios.forEach((radio) => {
        radio.setOnChange(onChange);
      });
    }
    /** labelName or index */
    selectRadio(label) {
      if (typeof label === "number") {
        label = this.radios[label].getLabel().innerText;
      }
      const radio = this.getRadio(label);
      if (radio) {
        radio.input.checked = true;
      }
    }
    render(parent) {
      parent.appendChild(this.container);
    }
  }
  class SingleRadio {
    constructor(UiKit, props) {
      __publicField(this, "_label");
      __publicField(this, "theme");
      __publicField(this, "_option");
      const { theme, disabled = false, option, name, uniqueIdPrefix, id } = props;
      this._option = option;
      this._label = createElement("label", {
        addClass: `radio_label_${theme}`,
        innerText: option,
        uniqueIdPrefix,
        id: id + "_label",
        appendTo: UiKit
      });
      this.theme = theme;
      createElement("input", {
        disabled,
        addClass: `radio_${theme}`,
        name: name + uniqueIdPrefix,
        type: "radio",
        uniqueIdPrefix,
        id: id + uniqueIdPrefix + "_input",
        value: option,
        appendTo: this.label,
        addStyle: {
          margin: "0.5rem"
        }
      });
    }
    switchTheme(theme) {
      const radio = this.label.querySelector('input[type="radio"]');
      updateElement(this.label, { removeClass: `radio_label_${this.theme}` });
      updateElement(this.label, { addClass: `radio_label_${theme}` });
      updateElement(radio, { removeClass: `radio_${this.theme}` });
      updateElement(radio, { addClass: `radio_${theme}` });
      this.theme = theme;
    }
    setOnChange(onChange) {
      this.label.addEventListener("change", (e) => {
        const inputValue = this.input.value;
        onChange(e, inputValue);
      });
    }
    getLabel() {
      return this.label;
    }
    changeLabel(originalLabelname, newLabelname) {
      const radio = this.label.querySelector('input[type="radio"]');
      if (radio.value === originalLabelname) {
        this._option = newLabelname;
        radio.value = newLabelname;
        this.label.innerText = newLabelname;
      }
    }
    //get input
    get input() {
      console.log("getInput");
      return this._label.querySelector('input[type="radio"]');
    }
    get option() {
      return this._option;
    }
    get id() {
      return this._label.id;
    }
    get name() {
      return this._label.innerText;
    }
    get label() {
      return this._label;
    }
    get inputId() {
      var _a;
      return (_a = this._label.querySelector('input[type="radio"]')) == null ? void 0 : _a.id;
    }
    get onchange() {
      return this.onchange;
    }
  }
  const ThemeArray = [
    "light",
    "dark",
    "high-contrast"
  ];
  function focusTrap(element) {
    let previouslyFocusedElement = null;
    function handleKeyDown(event) {
      if (event.key !== "Tab")
        return;
      event.preventDefault();
      const nonRadioFocusableElements = Array.from(
        element.querySelectorAll(
          'button, [href], input:not([type="radio"]), select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => !el.hasAttribute("disabled"));
      const radioGroups = new Set(
        Array.from(element.querySelectorAll('input[type="radio"]')).map((el) => el.name)
      );
      const firstRadioInGroups = Array.from(radioGroups).map((name) => element.querySelector(`input[type="radio"][name="${name}"]`)).filter((el) => el && !el.hasAttribute("disabled"));
      const focusableElements = [...nonRadioFocusableElements, ...firstRadioInGroups];
      if (focusableElements.length === 0)
        return;
      const currentIndex = focusableElements.indexOf(document.activeElement);
      const nextIndex = event.shiftKey ? currentIndex - 1 : currentIndex + 1;
      if (nextIndex < 0) {
        focusableElements[focusableElements.length - 1].focus();
      } else if (nextIndex >= focusableElements.length) {
        focusableElements[0].focus();
      } else {
        focusableElements[nextIndex].focus();
      }
    }
    return {
      activate() {
        previouslyFocusedElement = document.activeElement;
        element.addEventListener("keydown", handleKeyDown);
        setTimeout(() => {
          const firstFocusableElement = element.querySelector(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (firstFocusableElement && !firstFocusableElement.hasAttribute("disabled")) {
            console.log("switching focus to first focusable element");
            firstFocusableElement.focus();
          }
        }, 100);
      },
      deactivate() {
        element.removeEventListener("keydown", handleKeyDown);
        if (previouslyFocusedElement) {
          previouslyFocusedElement.focus();
        }
      }
    };
  }
  class Modal {
    constructor(modalId, uniqueIdPrefix, parentElement = document.body) {
      __publicField(this, "modalElement");
      __publicField(this, "backdropElement");
      __publicField(this, "focusTrap");
      __publicField(this, "closeButton");
      var _a;
      this.modalElement = this.createModalElement(modalId, uniqueIdPrefix);
      this.backdropElement = this.createBackdropElement(`${modalId}-backdrop`, uniqueIdPrefix);
      const crossIconEl = new Icon({ icon: crossIcon, addClass: "icon-neutral__black-size-1", id: modalId, uniqueIdPrefix });
      this.closeButton = createElement("button", {
        innerHTML: ((_a = crossIconEl == null ? void 0 : crossIconEl.svg) == null ? void 0 : _a.outerHTML) || "close",
        addStyle: {
          position: "absolute",
          top: "32px",
          right: "32px",
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer"
        },
        addClass: "icon-neutral__black-size-1",
        onpointerdown: () => {
          this.close();
        },
        onkeydown: (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            this.close();
          }
        }
      });
      this.closeButton.setAttribute("aria-label", "Close Settings Modal");
      this.closeButton.setAttribute("tabIndex", "0");
      this.closeButton.setAttribute("role", "button");
      this.modalElement.appendChild(this.closeButton);
      parentElement.appendChild(this.modalElement);
      parentElement.appendChild(this.backdropElement);
      this.initializeEventListeners();
      this.focusTrap = focusTrap(this.modalElement);
    }
    createModalElement(modalId, uniqueIdPrefix) {
      return createElement("div", {
        uniqueIdPrefix,
        id: modalId,
        addClass: "modal",
        role: "dialog",
        ariaModal: "true",
        tabIndex: -1
      });
    }
    createBackdropElement(backdropId, uniqueIdPrefix) {
      return createElement("div", {
        uniqueIdPrefix,
        id: backdropId,
        addClass: "backdrop"
      });
    }
    initializeEventListeners() {
      this.backdropElement.addEventListener("click", this.close.bind(this));
      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          this.close();
        }
      });
    }
    open() {
      updateElement(this.modalElement, { addClass: "open" });
      updateElement(this.backdropElement, { addClass: "open" });
      this.modalElement.style.display = "block";
      this.backdropElement.style.display = "block";
      this.focusTrap.activate();
    }
    close() {
      updateElement(this.modalElement, { removeClass: "open" });
      updateElement(this.backdropElement, { removeClass: "open" });
      this.modalElement.style.display = "none";
      this.backdropElement.style.display = "none";
      this.focusTrap.deactivate();
    }
  }
  function hasSwitchThemeMethod(object) {
    return typeof object.switchTheme === "function";
  }
  class ThemeSettingsModal extends Modal {
    constructor(options) {
      const { id, uniqueIdPrefix, theme, comingFrom } = options;
      super(id, uniqueIdPrefix);
      __privateAdd(this, _title, void 0);
      __privateAdd(this, _theme, void 0);
      __privateAdd(this, _comingFrom, void 0);
      __privateAdd(this, _content, void 0);
      __privateAdd(this, _uniqueId, void 0);
      __privateAdd(this, _id, void 0);
      __privateAdd(this, _themeRadios, void 0);
      __privateAdd(this, _themeHeader, void 0);
      __privateSet(this, _id, id);
      __privateSet(this, _title, "Theme Settings");
      __privateSet(this, _uniqueId, uniqueIdPrefix + "themeSettingsModal");
      __privateSet(this, _theme, theme);
      __privateSet(this, _comingFrom, comingFrom);
      __privateSet(this, _title, "Theme Settings");
      __privateGet(this, _comingFrom).switchTheme("light");
      __privateSet(this, _content, this.createContent());
      this.modalElement.appendChild(__privateGet(this, _content));
      this.addHeader();
      __privateSet(this, _themeHeader, this.addHeader());
      this.content.appendChild(__privateGet(this, _themeHeader));
      __privateSet(this, _themeRadios, new RadioGroup({ options: ThemeArray, direction: "row", theme: "light", disabled: false, name: "theme", uniqueIdPrefix: "hi", id: "themeSwitcher" }));
      this.addContent();
    }
    get theme() {
      return __privateGet(this, _theme);
    }
    set theme(theme) {
      __privateSet(this, _theme, theme);
    }
    get title() {
      return __privateGet(this, _title);
    }
    set title(title) {
      __privateSet(this, _title, title);
    }
    get comingFrom() {
      return __privateGet(this, _comingFrom);
    }
    get uniqueId() {
      return __privateGet(this, _uniqueId);
    }
    get content() {
      return __privateGet(this, _content);
    }
    get id() {
      return __privateGet(this, _id);
    }
    createContent() {
      return createElement("div", {
        uniqueIdPrefix: this.uniqueId,
        addStyle: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          boxSizing: "border-box",
          height: "99px",
          borderRadius: "8px",
          backgroundColor: UiKitColors.neutral.grey._15
        },
        id: this.id + "content"
      });
    }
    addHeader() {
      return createElement("h2", {
        uniqueIdPrefix: this.uniqueId,
        addClass: "typo_title-title4",
        addStyle: {
          display: "flex",
          margin: "0",
          width: "100%",
          height: "36px",
          borderTopLeftRadius: "inherit",
          //center text
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center"
        },
        id: "themeSettingsModal_header",
        innerText: this.title
      });
    }
    addContent() {
      __privateGet(this, _themeRadios).selectRadio("light");
      __privateGet(this, _themeRadios).render(this.content);
      __privateGet(this, _themeRadios).container.setAttribute("aria-label", "Theme Switcher");
      __privateGet(this, _themeRadios).setOnChange((_, value) => {
        const theme = value;
        if (hasSwitchThemeMethod(this.comingFrom))
          this.comingFrom.switchTheme(theme);
        this.switchTheme(theme);
      });
    }
    switchTheme(theme) {
      __privateGet(this, _themeRadios).switchTheme(theme);
      if (theme === "light") {
        this.content.style.backgroundColor = UiKitColors.neutral.grey._15;
        __privateGet(this, _themeHeader).style.color = UiKitColors.neutral.black;
        this.content.style.border = "none";
        this.closeButton.getElementsByTagName("svg")[0].style.fill = UiKitColors.neutral.black;
      } else if (theme === "dark") {
        this.content.style.backgroundColor = UiKitColors.neutral.grey._75;
        __privateGet(this, _themeHeader).style.color = UiKitColors.neutral.white;
        this.content.style.border = "none";
        this.closeButton.getElementsByTagName("svg")[0].style.fill = UiKitColors.neutral.white;
      } else if (theme === "high-contrast") {
        this.content.style.backgroundColor = UiKitColors.neutral.black;
        __privateGet(this, _themeHeader).style.color = UiKitColors.neutral.white;
        this.content.style.border = "1px solid " + UiKitColors.neutral.white;
        this.closeButton.getElementsByTagName("svg")[0].style.fill = UiKitColors.neutral.white;
      }
    }
  }
  _title = new WeakMap();
  _theme = new WeakMap();
  _comingFrom = new WeakMap();
  _content = new WeakMap();
  _uniqueId = new WeakMap();
  _id = new WeakMap();
  _themeRadios = new WeakMap();
  _themeHeader = new WeakMap();
  let runLocation = "https://quorumlanguage.com";
  if (window.location.href.startsWith('https://127.0.0.1')) {
    runLocation = 'https://127.0.0.1';
  }
  if (window.location.href.startsWith('https://localhost')) {
    runLocation = 'https://localhost';
  }
  const MSDE_BASE_URL_KEEP_PROD = runLocation;
  const MSDE_BASE_URL = runLocation;
  const QUORUM_STANDARD_LIBRARY = `${MSDE_BASE_URL}/script/QuorumStandardLibrary.js?version=12.0.0`;
  const QUORUM_CHARTS_JS = `${MSDE_BASE_URL}/script/quorumCharts.js?version=1.1.8`;
  const QUORUM_CHARTS_CSS = `${MSDE_BASE_URL_KEEP_PROD}/style/quorumCharts.css?version=1.1.6`;
  const QUORUM_LOAD = `${MSDE_BASE_URL}/script/load.js?version=1.0.1`;
  var __defProp2 = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if (decorator = decorators[i])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp2(target, key, result);
    return result;
  };
  class AccessChart {
    constructor(options) {
      __publicField(this, "uniqueID");
      __publicField(this, "loader");
      __publicField(this, "header");
      __publicField(this, "option_row_1");
      __publicField(this, "option_row_2");
      __publicField(this, "fileButton");
      __publicField(this, "chartTitle");
      __publicField(this, "chartType");
      __publicField(this, "color");
      __publicField(this, "factor1");
      __publicField(this, "factor2");
      __publicField(this, "interval");
      __publicField(this, "valueX");
      __publicField(this, "valueY");
      __publicField(this, "quorumUiContainer");
      __publicField(this, "saveImageButton");
      __publicField(this, "checkboxes");
      __publicField(this, "legendDropdown");
      __publicField(this, "modal");
      __publicField(this, "plusButton");
      __publicField(this, "minusButton");
      __publicField(this, "fileInput");
      __publicField(this, "file");
      __publicField(this, "fileReader", new FileReader());
      __publicField(this, "csvData");
      __publicField(this, "resizeBar");
      __publicField(this, "quorumControls");
      const { id } = options;
      this.uniqueID = id;
      this.loader = document.getElementById(id);
      this.quorumControls = new quorumChart();
      this.quorumControls.uniqueId = id;
      this.setLoaderStyles();
      this.header = this.createHeader();
      this.fileButton = this.createFileButton();
      this.fileInput = this.createFileInput();
      this.addSettingsButtonClickListener();
      this.header.settingsButton.getElement().ariaLabel = "Open CSV Settings";
      const { row_1, row_2 } = this.createOptionsRows();
      this.option_row_1 = row_1;
      this.option_row_2 = row_2;
      this.chartTitle = this.createChartTitleTextField();
      this.chartType = this.createChartTypeDropdown();
      this.valueX = this.createValueXDropdown();
      this.valueY = this.createValueYDropdown();
      this.interval = this.createIntervalNumberField();
      this.factor1 = this.createFactor1Dropdown();
      this.factor2 = this.createFactor2Dropdown();
      this.color = this.createColorDropdown();
      this.resizeBar = this.createResizeBar();
      this.saveImageButton = this.createSaveButtonElement();
      this.createFactorButtons();
      this.checkboxes = this.createCheckboxes();
      this.legendDropdown = this.createLegendDropdown();
      this.quorumUiContainer = this.createGraphicContainerAndRenderComponents();
      this.quorumControls.graphicContainer = this.quorumUiContainer;
      this.initializeResizeBarListeners();
      this.initializeKeyboardResizeListeners();
      this.initializeResizeBarFocusStyles();
      this.createSettingsModal();
      this.addChartTypeOnChangeListener();
    }
    setLoaderStyles() {
      updateElement(this.loader, {
        addStyle: {
          display: "flex",
          flexDirection: "column",
          paddingBottom: "16px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          rowGap: "16px",
          marginTop: "4%",
          marginBottom: "4%",
          borderRadius: "8px",
          minWidth: "300px",
          backgroundColor: UiKitColors.quorum.blue._10,
          width: "100%"
        }
      });
    }
    createHeader() {
      this.header = new Header({ theme: "light", title: "AccessCharts", uniqueId: this.uniqueID });
      this.header.container.style.display = "grid";
      this.header.settingsButton.disabled = true;
      this.header.container.style.width = "initial";
      this.header.rightSettings.style.gap = "16px";
      this.header.rightSettings.style.width = "inherit";
      this.header.container.style.borderRadius = "8px 8px 0 0";
      this.header.render(this.loader);
      return this.header;
    }
    createFileButton() {
      this.fileButton = new Button({ text: "Add CSV", className: "btn-small-secondary-var1", uniqueIdPrefix: this.uniqueID, id: "fileButton" });
      this.header.rightSettings.prepend(this.fileButton.button);
      return this.fileButton;
    }
    createFileInput() {
      this.fileInput = createElement("input", { type: "file", id: "fileInput", accept: ".csv" });
      this.fileInput.style.display = "none";
      this.fileInput.onchange = () => this.handleFileUpload();
      this.fileButton.button.onclick = () => this.uploadFile();
      return this.fileInput;
    }
    uploadFile() {
      this.fileInput.click();
    }
    // @loggedMethod
    addSettingsButtonClickListener() {
      this.header.settingsButton.onClick(() => {
        if (this.modal && this.quorumControls.frame) {
          this.modal.copyFrame = this.quorumControls.frame;
          this.modal.isShowing() ? this.modal.hide() : this.modal.show();
        }
      });
    }
    createOptionsRows() {
      this.option_row_1 = this.createOptionsRow(1);
      this.option_row_2 = this.createOptionsRow(2);
      return { row_1: this.option_row_1, row_2: this.option_row_2 };
    }
    createChartTitleTextField() {
      this.chartTitle = this.createTextField("chartTitle", "Chart Title", "Enter Chart Title");
      this.chartTitle.input.onchange = (e) => {
        this.quorumControls.chartTitle = e.target.value;
        this.quorumControls.createChart();
      };
      return this.chartTitle;
    }
    createChartTypeDropdown() {
      this.chartType = new Dropdown({ options: Object.values(ChartTypes), uniqueIdPrefix: this.uniqueID, id: "chartType", label: "Chart Type" });
      this.formatDropdowns(this.chartType);
      return this.chartType;
    }
    createValueXDropdown() {
      this.valueX = new Dropdown({ options: ["-"], uniqueIdPrefix: this.uniqueID, id: "valueX", label: "X Value" });
      this.formatDropdowns(this.valueX);
      return this.valueX;
    }
    createValueYDropdown() {
      this.valueY = new Dropdown({ options: ["-"], uniqueIdPrefix: this.uniqueID, id: "valueY", label: "Y Value" });
      this.formatDropdowns(this.valueY);
      return this.valueY;
    }
    createIntervalNumberField() {
      this.interval = this.createNumberField("intervalSize", "Interval Size", "Enter Interval Size");
      this.interval.input.onchange = (e) => {
        this.quorumControls.interval = +e.target.value, this.quorumControls.createChart();
      };
      this.interval.min = 0;
      return this.interval;
    }
    createFactor1Dropdown() {
      this.factor1 = new Dropdown({ options: ["-"], uniqueIdPrefix: this.uniqueID, id: "factor1", label: "Factor" });
      this.formatDropdowns(this.factor1);
      return this.factor1;
    }
    createFactor2Dropdown() {
      this.factor2 = new Dropdown({ options: ["-"], uniqueIdPrefix: this.uniqueID, id: "factor2", label: "Second Factor" });
      this.factor2.dropdown.style.marginTop = "8px";
      this.formatDropdowns(this.factor2);
      return this.factor2;
    }
    createColorDropdown() {
      this.color = new Dropdown({ options: Object.values(ColorPalette), uniqueIdPrefix: this.uniqueID, id: "color", label: "Color" });
      this.formatDropdowns(this.color);
      return this.color;
    }
    createResizeBar() {
      this.resizeBar = createElement("div", { className: "resize-bar" });
      this.resizeBar.style.cursor = "row-resize";
      this.resizeBar.style.height = "8px";
      this.resizeBar.style.width = "100%";
      this.resizeBar.style.marginTop = "-16px";
      this.resizeBar.role = "slider";
      this.resizeBar.ariaValueMin = "100";
      this.resizeBar.ariaValueMax = "1000";
      this.resizeBar.ariaLabel = "Resize chart height";
      this.resizeBar.style.backgroundColor = UiKitColors.quorum.blue._100;
      return this.resizeBar;
    }
    formatDropdowns(dropdown) {
      dropdown.dropdown.style.width = "100%";
      dropdown.dropdown.style.width = "100%";
      if (dropdown.outerContainer && dropdown.label) {
        dropdown.outerContainer.style.maxWidth = "100%";
        dropdown.outerContainer.style.width = "100%";
        dropdown.label.style.whiteSpace = "nowrap";
        dropdown.label.style.marginLeft = "0";
        dropdown.label.style.fontWeight = "bold";
      }
    }
    createSaveButtonElement() {
      this.saveImageButton = this.createImageSaveButton();
      this.saveImageButton.getElement().style.alignSelf = "flex-start";
      this.saveImageButton.getElement().style.marginTop = "24px";
      this.saveImageButton.onClick(() => this.quorumControls.saveImage());
      return this.saveImageButton;
    }
    createFactorButtons() {
      var _a, _b;
      this.plusButton = new Button({ icon: (_a = formatSVG(plusIcon, "icon-neutral__black-size-1")) == null ? void 0 : _a.outerHTML, className: "btn-circle-secondary-var1", uniqueIdPrefix: this.uniqueID, id: "plusButton" });
      this.minusButton = new Button({ icon: (_b = formatSVG(minusIcon, "icon-neutral__black-size-1")) == null ? void 0 : _b.outerHTML, className: "btn-circle-secondary-var1", uniqueIdPrefix: this.uniqueID, id: "minusButton" });
      this.plusButton.button.ariaLabel = "Add second factor";
      this.plusButton.button.onclick = () => this.addSecondFactor();
      this.minusButton.button.ariaLabel = "Remove second factor";
      this.minusButton.button.onclick = () => this.removeSecondFactor();
      this.factor1.dropdown.appendChild(this.plusButton.button);
    }
    createLegendDropdown() {
      this.legendDropdown = new Dropdown({ options: Object.values(LegendTypes), uniqueIdPrefix: this.uniqueID, id: "legend", label: "Legend" });
      this.legendDropdown.dropdown.style.width = "100%";
      this.legendDropdown.dropdown.style.maxWidth = "100%";
      if (this.legendDropdown.outerContainer && this.legendDropdown.label) {
        this.legendDropdown.outerContainer.style.maxWidth = "75%";
        this.legendDropdown.outerContainer.style.width = "75%";
        this.legendDropdown.label.style.whiteSpace = "nowrap";
        this.legendDropdown.label.style.marginLeft = "0";
        this.legendDropdown.label.style.fontWeight = "bold";
      }
      return this.legendDropdown;
    }
    createCheckboxes() {
      this.checkboxes = new CheckboxGroup({ direction: "column", uniqueIdPrefix: this.uniqueID, id: "acOptions", theme: "light", options: ChartOptionsArray });
      this.checkboxes.hideAll();
      this.checkboxes.getCheckbox("Show Labels").show().order(1);
      this.checkboxes.getCheckbox("Horizontal Layout").show().order(2);
      this.checkboxes.container.style.rowGap = "8px";
      return this.checkboxes;
    }
    createGraphicContainerAndRenderComponents() {
      this.quorumUiContainer = this.createGraphicContainer();
      this.quorumControls.statusPTag = this.createStatusText();
      this.option_row_1.after(this.quorumUiContainer);
      this.quorumUiContainer.after(this.resizeBar);
      this.resizeBar.ariaValueNow = this.quorumUiContainer.offsetHeight.toString();
      this.quorumUiContainer.appendChild(this.quorumControls.statusPTag);
      this.chartTitle.render(this.option_row_1);
      this.chartType.render(this.option_row_1);
      this.factor1.render(this.option_row_1);
      this.valueX.render(this.option_row_1);
      this.color.render(this.option_row_2);
      this.checkboxes.render(this.option_row_2);
      if (this.legendDropdown.outerContainer)
        this.checkboxes.container.prepend(this.legendDropdown.outerContainer);
      this.saveImageButton.render(this.option_row_2);
      return this.quorumUiContainer;
    }
    createStatusText() {
      return createElement("p", { addClass: "typo_text-lgText", innerText: "Add CSV to load chart", id: "statusText", uniqueIdPrefix: this.uniqueID, ariaLive: "polite" });
    }
    addChartTypeOnChangeListener() {
      this.factor1.addOnChangeListener((value) => {
        this.quorumControls.factor1 = value;
        this.quorumControls.createChart();
      });
      this.factor2.addOnChangeListener((value) => {
        this.quorumControls.factor2 = value;
        this.quorumControls.createChart();
      });
      this.valueX.addOnChangeListener((value) => {
        this.quorumControls.valueX = value;
        this.quorumControls.createChart();
      });
      this.valueY.addOnChangeListener((value) => {
        this.quorumControls.valueY = value;
        this.quorumControls.createChart();
      });
      this.color.addOnChangeListener((value) => {
        this.quorumControls.color = value;
        this.quorumControls.createChart();
      });
      this.legendDropdown.addOnChangeListener((value) => {
        this.quorumControls.legendPos = value;
        this.quorumControls.createChart();
      });
      this.chartType.addOnChangeListener((chartValue) => {
        this.handleChartTypeChange();
        this.switchCheckboxVisibility(chartValue);
        this.quorumControls.chartType = chartValue;
      });
      this.checkboxes.getCheckbox("Show Labels").onChange((checked) => {
        this.quorumControls.showLabels = checked;
        this.quorumControls.createChart();
      });
      this.checkboxes.getCheckbox("Horizontal Layout").onChange((checked) => {
        this.quorumControls.horizontalLayout = checked;
        this.quorumControls.createChart();
      });
      this.checkboxes.getCheckbox("Square of Residuals").onChange((checked) => {
        this.quorumControls.squareOfResiduals = checked;
        this.quorumControls.createChart();
      });
      this.checkboxes.getCheckbox("Movable Line").onChange((checked) => {
        this.quorumControls.movableLine = checked;
        this.quorumControls.createChart();
      });
      this.checkboxes.getCheckbox("Show Outliers").onChange((checked) => {
        this.quorumControls.outliers = checked;
        this.quorumControls.createChart();
      });
      this.checkboxes.getCheckbox("Least Squares Line").onChange((checked) => {
        this.quorumControls.leastSquaresLine = checked;
        this.quorumControls.createChart();
      });
      this.checkboxes.getCheckbox("Intercept Lock").onChange((checked) => {
        this.quorumControls.interceptLock = checked;
        this.quorumControls.createChart();
      });
    }
    createOptionsRow(rowNumber) {
      const row = createElement("div", {
        uniqueIdPrefix: this.uniqueID,
        id: `option_row_${rowNumber}`,
        addClass: "option-row",
        appendTo: this.loader
      });
      const updateGridColumns = () => {
        const childElements = Array.from(row.children);
        const desiredItemWidth = 125;
        if (childElements.length === 3) {
          if (this.loader.offsetWidth < 450) {
            row.style.gridTemplateColumns = `repeat(1, 1fr)`;
            this.saveImageButton.getElement().style.gridColumn = "2";
          } else if (this.loader.offsetWidth < 600) {
            row.style.gridTemplateColumns = `repeat(2, 1fr)`;
            this.saveImageButton.getElement().style.gridColumn = "2";
          } else {
            row.style.gridTemplateColumns = `repeat(3, 1fr)`;
            this.saveImageButton.getElement().style.gridColumn = "3";
          }
        }
        if ((this.loader.offsetWidth + 125) / desiredItemWidth > childElements.length) {
          row.style.gridTemplateColumns = `repeat(auto-fit, minmax(${desiredItemWidth}px, 1fr))`;
        } else {
          row.style.gridTemplateColumns = `repeat(1, 1fr)`;
        }
        const childElements2 = Array.from(this.header.container.children);
        if (childElements2.length === 2) {
          if (this.loader.offsetWidth < 550) {
            this.header.container.style.gridTemplateColumns = `repeat(1, 1fr)`;
          } else {
            this.header.container.style.gridTemplateColumns = `repeat(2, 1fr)`;
          }
        }
      };
      updateGridColumns();
      window.addEventListener("resize", updateGridColumns);
      const observer = new MutationObserver(updateGridColumns);
      observer.observe(row, { childList: true, subtree: true });
      return row;
    }
    switchCheckboxVisibility(chartType) {
      this.checkboxes.hideAll();
      switch (chartType) {
        case ChartTypes.BarChart:
          this.checkboxes.getCheckbox("Show Labels").show().order(1);
          this.checkboxes.getCheckbox("Horizontal Layout").show().order(2);
          break;
        case ChartTypes.BoxPlot:
          this.checkboxes.getCheckbox("Show Labels").show().order(1);
          this.quorumControls.horizontalLayout = true;
          this.checkboxes.getCheckbox("Horizontal Layout").show().order(2).check();
          this.checkboxes.getCheckbox("Show Outliers").show().order(3);
          break;
        case ChartTypes.Histogram:
          this.checkboxes.getCheckbox("Show Labels").show().order(1);
          this.checkboxes.getCheckbox("Horizontal Layout").show().order(2);
          break;
        case ChartTypes.PieChart:
          this.checkboxes.getCheckbox("Show Labels").show().order(1);
          break;
        case ChartTypes.ScatterPlot:
          this.checkboxes.getCheckbox("Show Labels").show().order(1);
          this.checkboxes.getCheckbox("Least Squares Line").show().order(2);
          this.checkboxes.getCheckbox("Movable Line").show().order(3);
          this.checkboxes.getCheckbox("Square of Residuals").show().order(4);
          this.checkboxes.getCheckbox("Intercept Lock").show().order(5);
          this.checkboxes.getCheckbox("Horizontal Layout").show().order(6);
          break;
        case ChartTypes.LineChart:
          this.checkboxes.getCheckbox("Show Labels").show().order(1);
          this.checkboxes.getCheckbox("Horizontal Layout").show().order(2);
          break;
      }
    }
    createTextField(id, label, placeholder) {
      const textField = new TextInputField({ theme: "light", placeholder, uniqueIdPrefix: this.uniqueID, id, labelText: label, type: "text" });
      textField.container.style.maxWidth = "100%";
      textField.container.style.width = "100%";
      textField.input.style.width = "auto";
      textField.input.style.maxWidth = "auto";
      if (textField.labelEl) {
        textField.labelEl.style.whiteSpace = "nowrap";
        textField.labelEl.style.marginLeft = "0";
        textField.labelEl.style.fontWeight = "bold";
      }
      return textField;
    }
    createNumberField(id, label, placeholder) {
      const textField = new NumberInputField({ theme: "light", placeholder, uniqueIdPrefix: this.uniqueID, id, labelText: label });
      textField.container.style.maxWidth = "100%";
      textField.container.style.width = "100%";
      textField.input.style.width = "auto";
      textField.input.style.maxWidth = "auto";
      if (textField.labelEl) {
        textField.labelEl.style.whiteSpace = "nowrap";
        textField.labelEl.style.marginLeft = "0";
        textField.labelEl.style.fontWeight = "bold";
      }
      return textField;
    }
    createGraphicContainer() {
      return createElement("div", {
        uniqueIdPrefix: this.uniqueID,
        id: "graphicContainer",
        addClass: "QuorumUIContainer"
      });
    }
    createImageSaveButton() {
      const saveButton = new Button({ text: "Save Image", className: "btn-large-primary-var1", uniqueIdPrefix: this.uniqueID, id: "saveButton" });
      saveButton.getElement().style.width = "100%";
      return saveButton;
    }
    addSecondFactor() {
      if (this.factor1.outerContainer)
        this.factor2.render(this.factor1.outerContainer);
      if (this.plusButton)
        this.plusButton.destroy();
      if (this.minusButton)
        this.factor1.dropdown.append(this.minusButton.button);
      this.quorumControls.factor2 = this.factor2.value;
      this.quorumControls.createChart();
    }
    removeSecondFactor() {
      this.factor2.destroy();
      if (this.minusButton)
        this.minusButton.destroy();
      if (this.plusButton)
        this.factor1.dropdown.append(this.plusButton.button);
      this.quorumControls.factor2 = void 0;
      this.quorumControls.createChart();
    }
    createSettingsModal() {
      this.modal = new CsvSettings(this.loader, this.uniqueID);
      this.modal.addColumnDataSection("Column Name", "", "text");
      this.modal.addColumnDataSection("Column Type", "", "dropdown", ["Number", "Text", "Boolean"]);
      this.modal.subscribeToSaveEvent((columnOptions, randomValue, filterValue) => {
        this.handleSaveButtonClick(columnOptions, randomValue, filterValue);
      });
      const themeModal = new ThemeSettingsModal({ id: this.uniqueID, comingFrom: this, theme: "light", uniqueIdPrefix: this.uniqueID });
      this.modal.csvModal.prepend(themeModal.content);
      this.modal.hide();
    }
    handleSaveButtonClick(columnOptions, randomValue, filterValue) {
      const currentOptions = this.getColumnOptions();
      if (!currentOptions)
        return console.error("Current options not initialized");
      if (!this.quorumControls)
        return console.error("Quorum controls not initialized");
      if (!this.quorumControls.frame)
        return console.error("Quorum frame not initialized");
      if (!this.quorumControls.OGFrame)
        return console.error("OG Quorum frame not initialized");
      this.quorumControls.loadFrame();
      for (let i = 0; i < Object.keys(currentOptions).length; i++) {
        const column = this.quorumControls.frame.GetColumn$quorum_integer(i);
        const OGColumn = this.quorumControls.OGFrame.GetColumn$quorum_integer(i);
        column.SetHeader$quorum_text(columnOptions[i]["Column Name"]);
        OGColumn.SetHeader$quorum_text(columnOptions[i]["Column Name"]);
        this.factor1.updateOption(i + 1, columnOptions[i]["Column Name"]);
        this.factor2.updateOption(i + 1, columnOptions[i]["Column Name"]);
        this.factor1.rendered ? this.quorumControls.factor1 = this.factor1.value : this.quorumControls.factor1 = void 0;
        this.factor2.rendered ? this.quorumControls.factor2 = this.factor2.value : this.quorumControls.factor2 = void 0;
        this.valueX.updateOption(i + 1, columnOptions[i]["Column Name"]);
        this.valueY.updateOption(i + 1, columnOptions[i]["Column Name"]);
        this.valueX.rendered ? this.quorumControls.valueX = this.valueX.value : this.quorumControls.valueX = void 0;
        this.valueY.rendered ? this.quorumControls.valueY = this.valueY.value : this.quorumControls.valueY = void 0;
        if (columnOptions[i]["Column Type"] === "Number") {
          this.quorumControls.convertToNumberColumn(column, i);
        } else if (columnOptions[i]["Column Type"] === "Text") {
          this.quorumControls.convertToTextColumn(column, i);
        } else if (columnOptions[i]["Column Type"] === "Boolean") {
          this.quorumControls.convertToBooleanColumn(column, i);
        }
        console.log("done checking column type");
      }
      this.quorumControls.randomValue = randomValue;
      this.quorumControls.filterValue = filterValue;
      this.quorumControls.Stop();
      this.quorumControls.game = void 0;
      setTimeout(() => {
        this.quorumControls.createChart();
      }, 1e3);
    }
    loadDropdownOptions() {
      if (!this.quorumControls)
        return console.error("Quorum controls not initialized");
      const headers = this.quorumControls.headers;
      headers.unshift("-");
      this.factor1.setOptions(headers);
      this.factor2.setOptions(headers);
      this.valueX.setOptions(headers);
      this.valueY.setOptions(headers);
      this.quorumControls.statusText = "Choose a factor or value to load chart";
    }
    async handleFileUpload() {
      await LoadScript(QUORUM_LOAD);
      await LoadScript(
        QUORUM_STANDARD_LIBRARY
      );
      await LinkCSS(QUORUM_CHARTS_CSS);
      await LoadScript(QUORUM_CHARTS_JS);
      if (!this.fileInput.files)
        return console.error("No file selected");
      this.file = this.fileInput.files[0];
      this.fileInput.value = "";
      this.fileReader.readAsText(this.file);
      this.fileReader.onload = () => {
        this.quorumControls.frame = void 0;
        this.csvData = this.fileReader.result;
        this.quorumControls.statusText = "Loading data...";
        this.header.settingsButton.disabled = false;
        this.loadQuorumData();
        this.loadDropdownOptions();
      };
    }
    getColumnOptions() {
      const columnOptions = {};
      if (!this.quorumControls || !this.quorumControls.frame)
        return;
      const length = this.quorumControls.frame.GetHeaders().GetSize();
      for (let i = 0; i < length; i++) {
        const column = this.quorumControls.frame.GetColumn$quorum_integer(i);
        let type = "not set";
        if (column.IsNumberColumn()) {
          type = "Number";
        } else if (column.IsTextColumn()) {
          type = "Text";
        }
        const currentColumnOptions = {
          "Column Name": this.quorumControls.headers[i],
          "Column Type": type
        };
        columnOptions[i] = currentColumnOptions;
      }
      return columnOptions;
    }
    async loadQuorumData() {
      if (!this.csvData)
        return console.error("No csv data");
      if (!this.modal)
        return console.error("Modal not initialized");
      this.quorumControls.csvData = this.csvData;
      this.quorumControls.createNewFrame();
      this.quorumControls.loadFrame();
      if (!this.quorumControls.frame)
        return console.error("No quorum frame");
      this.modal.setQuorumFrame(this.quorumControls.frame);
      const columnOptions = this.getColumnOptions();
      if (!columnOptions)
        return console.error("No column options");
      this.modal.setColumnOptions(columnOptions);
      const listItems = [];
      this.quorumControls.headers.forEach((header) => {
        listItems.push(createElement("li", { innerText: header }));
      });
      this.modal.listAndFilter.setSelectionListItems(listItems);
      this.quorumControls.valueX = this.valueX.value;
      this.quorumControls.valueY = this.valueY.value;
      this.quorumControls.factor1 = this.factor1.value;
      this.quorumControls.factor2 = this.factor2.value;
    }
    handleChartTypeChange() {
      console.clear();
      const option_row_1 = [this.factor1, this.valueX];
      const option_row_2 = [this.color, this.checkboxes, this.saveImageButton];
      this.chartTitle.render(this.option_row_1);
      this.chartType.render(this.option_row_1);
      const values = {
        factor1: this.factor1.value,
        factor2: this.factor2.value,
        valueX: this.valueX.value,
        valueY: this.valueY.value,
        interval: this.interval.value
      };
      [
        this.interval,
        this.valueY,
        this.factor1,
        this.plusButton,
        this.minusButton,
        this.factor2
      ].forEach((el) => {
        if (el)
          el.destroy();
      });
      switch (this.chartType.value) {
        case ChartTypes.Histogram:
          this.interval.render(this.option_row_1);
          this.valueX.render(this.option_row_1);
          break;
        case ChartTypes.ScatterPlot:
          option_row_1.push(this.valueY);
        case ChartTypes.BarChart:
          if (ChartTypes.ScatterPlot !== this.chartType.value) {
            if (this.factor2.rendered) {
              if (this.minusButton)
                this.factor1.dropdown.append(this.minusButton.button);
            } else {
              if (this.plusButton)
                this.factor1.dropdown.append(this.plusButton.button);
            }
          }
        case ChartTypes.BoxPlot:
        case ChartTypes.LineChart:
        case ChartTypes.PieChart:
          this.factor1.render(this.option_row_1);
          option_row_1.forEach((option) => option.render(this.option_row_1));
          break;
      }
      for (const key in values) {
        this.quorumControls[key] = this[key].rendered ? values[key] : key === "interval" ? NaN : void 0;
        if (this.quorumControls[key] === void 0)
          this[key].value = "-";
      }
      option_row_2.forEach((option) => option.render(this.option_row_2));
      const updateFlexWrap = () => {
        const row = document.getElementById(this.uniqueID + "option_row_1");
        const childElements = Array.from(row.children);
        row.style.flexWrap = childElements.length > 4 ? "wrap" : "nowrap";
      };
      updateFlexWrap();
    }
    initializeResizeBarListeners() {
      let startY;
      let startHeight;
      const onMouseDown = (e) => {
        startY = e.clientY;
        startHeight = this.quorumUiContainer.offsetHeight;
        document.addEventListener("pointermove", onMouseMove);
        document.addEventListener("pointerup", onMouseUp);
      };
      const onMouseMove = (e) => {
        const dy = e.clientY - startY;
        this.quorumUiContainer.style.height = `${startHeight + dy}px`;
        this.resizeBar.ariaValueNow = this.quorumUiContainer.offsetHeight.toString();
      };
      const onMouseUp = () => {
        document.removeEventListener("pointermove", onMouseMove);
        document.removeEventListener("pointerup", onMouseUp);
      };
      this.resizeBar.addEventListener("pointerdown", onMouseDown);
    }
    initializeKeyboardResizeListeners() {
      const step = 10;
      const onKeyDown = (e) => {
        if (e.key === "ArrowUp") {
          e.preventDefault();
          this.quorumUiContainer.style.height = `${this.quorumUiContainer.offsetHeight - step}px`;
        } else if (e.key === "ArrowDown") {
          e.preventDefault();
          this.quorumUiContainer.style.height = `${this.quorumUiContainer.offsetHeight + step}px`;
        }
        this.resizeBar.ariaValueNow = this.quorumUiContainer.offsetHeight.toString();
      };
      this.resizeBar.setAttribute("tabindex", "0");
      this.resizeBar.addEventListener("keydown", onKeyDown);
    }
    initializeResizeBarFocusStyles() {
      const onFocus = () => {
        this.resizeBar.style.outline = "2px solid rgba(0, 123, 255, 0.5)";
      };
      const onBlur = () => {
        this.resizeBar.style.outline = "none";
      };
      this.resizeBar.addEventListener("focus", onFocus);
      this.resizeBar.addEventListener("blur", onBlur);
    }
    switchTheme(theme) {
      this.header.switchTheme(theme);
      this.factor1.switchTheme(theme);
      this.factor2.switchTheme(theme);
      this.valueX.switchTheme(theme);
      this.valueY.switchTheme(theme);
      this.interval.switchTheme(theme);
      this.color.switchTheme(theme);
      this.checkboxes.switchTheme(theme);
      this.chartType.switchTheme(theme);
      this.chartTitle.switchTheme(theme);
      this.legendDropdown.switchTheme(theme);
      if (theme === "light") {
        this.loader.style.backgroundColor = UiKitColors.neutral.white;
        this.resizeBar.style.backgroundColor = UiKitColors.quorum.blue._100;
        updateElement(this.saveImageButton.button, { updateClass: "btn-large-primary-var1" });
        this.header.container.style.borderBottom = "none";
      } else if (theme === "dark") {
        this.loader.style.backgroundColor = UiKitColors.neutral.grey._75;
        this.resizeBar.style.backgroundColor = UiKitColors.quorum.blue._50;
        updateElement(this.saveImageButton.button, { updateClass: "btn-large-accent-var1" });
        this.header.container.style.borderBottom = "none";
      } else if (theme === "high-contrast") {
        this.resizeBar.style.backgroundColor = UiKitColors.text.hico.blue;
        updateElement(this.saveImageButton.button, { updateClass: "btn-large-hico-var1" });
        this.loader.style.backgroundColor = UiKitColors.neutral.black;
        this.header.container.style.borderBottom = "1px solid #fff";
      }
      if (this.modal)
        this.modal.switchTheme(theme);
    }
  }
  __decorateClass([
    loggedMethod
  ], AccessChart.prototype, "setLoaderStyles", 1);
  __decorateClass([
    loggedMethod
  ], AccessChart.prototype, "createHeader", 1);
  __decorateClass([
    loggedMethod
  ], AccessChart.prototype, "createFileButton", 1);
  __decorateClass([
    loggedMethod
  ], AccessChart.prototype, "createFileInput", 1);
  __decorateClass([
    loggedMethod
  ], AccessChart.prototype, "uploadFile", 1);
  __decorateClass([
    loggedMethod
  ], AccessChart.prototype, "createOptionsRows", 1);
  __decorateClass([
    loggedMethod
  ], AccessChart.prototype, "createChartTitleTextField", 1);
  __decorateClass([
    loggedMethod
  ], AccessChart.prototype, "createChartTypeDropdown", 1);
  __decorateClass([
    loggedMethod
  ], AccessChart.prototype, "createValueXDropdown", 1);
  __decorateClass([
    loggedMethod
  ], AccessChart.prototype, "createValueYDropdown", 1);
  __decorateClass([
    loggedMethod
  ], AccessChart.prototype, "createIntervalNumberField", 1);
  __decorateClass([
    loggedMethod
  ], AccessChart.prototype, "createFactor1Dropdown", 1);
  __decorateClass([
    loggedMethod
  ], AccessChart.prototype, "createFactor2Dropdown", 1);
  __decorateClass([
    loggedMethod
  ], AccessChart.prototype, "createColorDropdown", 1);
  __decorateClass([
    loggedMethod
  ], AccessChart.prototype, "createResizeBar", 1);
  __decorateClass([
    loggedMethod
  ], AccessChart.prototype, "formatDropdowns", 1);
  __decorateClass([
    loggedMethod
  ], AccessChart.prototype, "createSaveButtonElement", 1);
  __decorateClass([
    loggedMethod
  ], AccessChart.prototype, "createFactorButtons", 1);
  __decorateClass([
    loggedMethod
  ], AccessChart.prototype, "createLegendDropdown", 1);
  __decorateClass([
    loggedMethod
  ], AccessChart.prototype, "createCheckboxes", 1);
  __decorateClass([
    loggedMethod
  ], AccessChart.prototype, "createGraphicContainerAndRenderComponents", 1);
  __decorateClass([
    loggedMethod
  ], AccessChart.prototype, "createStatusText", 1);
  __decorateClass([
    loggedMethod
  ], AccessChart.prototype, "addChartTypeOnChangeListener", 1);
  __decorateClass([
    loggedMethod
  ], AccessChart.prototype, "createOptionsRow", 1);
  __decorateClass([
    loggedMethod
  ], AccessChart.prototype, "switchCheckboxVisibility", 1);
  __decorateClass([
    loggedMethod
  ], AccessChart.prototype, "createTextField", 1);
  __decorateClass([
    loggedMethod
  ], AccessChart.prototype, "createNumberField", 1);
  __decorateClass([
    loggedMethod
  ], AccessChart.prototype, "createGraphicContainer", 1);
  __decorateClass([
    loggedMethod
  ], AccessChart.prototype, "createImageSaveButton", 1);
  __decorateClass([
    loggedMethod
  ], AccessChart.prototype, "addSecondFactor", 1);
  __decorateClass([
    loggedMethod
  ], AccessChart.prototype, "removeSecondFactor", 1);
  __decorateClass([
    loggedMethod
  ], AccessChart.prototype, "createSettingsModal", 1);
  __decorateClass([
    loggedMethod
  ], AccessChart.prototype, "handleSaveButtonClick", 1);
  __decorateClass([
    loggedMethod
  ], AccessChart.prototype, "loadDropdownOptions", 1);
  __decorateClass([
    loggedMethod
  ], AccessChart.prototype, "handleFileUpload", 1);
  __decorateClass([
    loggedMethod
  ], AccessChart.prototype, "getColumnOptions", 1);
  __decorateClass([
    loggedMethod
  ], AccessChart.prototype, "loadQuorumData", 1);
  __decorateClass([
    loggedMethod
  ], AccessChart.prototype, "handleChartTypeChange", 1);
  __decorateClass([
    loggedMethod
  ], AccessChart.prototype, "initializeResizeBarListeners", 1);
  __decorateClass([
    loggedMethod
  ], AccessChart.prototype, "initializeKeyboardResizeListeners", 1);
  __decorateClass([
    loggedMethod
  ], AccessChart.prototype, "initializeResizeBarFocusStyles", 1);
  __decorateClass([
    loggedMethod
  ], AccessChart.prototype, "switchTheme", 1);
  document.addEventListener("DOMContentLoaded", function() {
    const Loader = document.querySelectorAll(".data11y-access-chart");
    if (Loader) {
      for (const acContainer of Loader) {
        acContainer.id;
        const randomID = `data11y_${acContainer.id}_${Math.random().toString(36).substring(2, 8)}_`;
        updateElement(acContainer, {
          id: randomID
        });
        new AccessChart({ id: randomID });
      }
    }
  });
})();
//# sourceMappingURL=AccessCharts-0.7.39.js.map
