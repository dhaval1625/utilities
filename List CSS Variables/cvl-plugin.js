'use strict';

// this file will print all css variables used in your project in an empty page.

let rootVariables = {};
const listEl = document.querySelector('.cvl-list');

function isColor(strColor) {
   const str = new Option().style;
   str.color = strColor;
   const test1 = str.color == strColor;
   const test2 = /^#[0-9A-F]{6,8}$/i.test(strColor);
   const test3 = /^linear-gradient/.test(strColor);

   return test1 || test2 || test3;
}

function getCSSVariablesList() {
   const styleSheets = Array.from(document.styleSheets).filter(
      sheet => sheet.href === null || sheet.href.startsWith(window.location.origin)
   );

   const rootStyleSheets = styleSheets.filter(sheet => {
      const cssRuleArr = Array.from(sheet.cssRules);
      let isRoot = false;

      cssRuleArr.forEach(rule => {
         if (rule.selectorText == ':root') isRoot = true;
      });
      return isRoot;
   });

   let rootStyleArr = [];
   rootStyleSheets.forEach(sheet => {
      rootStyleArr.push(Array.from(sheet.cssRules).filter(rule => rule.selectorText == ':root'));
   });

   rootStyleArr = rootStyleArr.flat();

   rootStyleArr.forEach(rootStyle => {
      const rootVarsArr = Array.from(rootStyle.style);
      rootVarsArr.forEach(rootVar => {
         const rootStyles = window.getComputedStyle(document.documentElement);
         rootVariables[rootVar] = rootStyles.getPropertyValue(rootVar);
      });
   });
}

function printVariables() {
   listEl.innerHTML = '';
   Object.entries(rootVariables).forEach(([key, value]) => {
      const isValueColor = isColor(value);

      const html = `
         <li class="cvl-item">
            <div class="cvl-variableWrapper">
               <button class="cvl-btnCopy">
                  <img src="copy.svg" alt="copy icon">
               </button>
               <p class="cvl-variable">${key}</p>
            </div>
            <div class="cvl-valueBox">
               <div style="background: ${isValueColor ? value : '#fff'}" class="cvl-color"></div>
               <p class="cvl-value">${value}</p>
            </div>
         </li>
      `;

      listEl.insertAdjacentHTML('beforeend', html);
   });
}

function copyVariable() {
   listEl.addEventListener('click', function (e) {
      const targetEl = e.target;
      const btnEl = targetEl.closest('.cvl-btnCopy');
      const itemEl = targetEl.closest('.cvl-item');
      // target copy button
      if (btnEl) {
         const wrapper = targetEl.closest('.cvl-variableWrapper');
         const variable = wrapper.querySelector('.cvl-variable').textContent;
         copyStringHelper(variable, giveFeedback);
      } else if (targetEl.classList.contains('cvl-variable')) {
         const variable = targetEl.textContent;
         copyStringHelper(variable, giveFeedback);
      }

      function giveFeedback() {
         itemEl.classList.add('cvl-item--copied');
         setTimeout(() => itemEl.classList.remove('cvl-item--copied'), 1000);
      }
   });

   function copyStringHelper(str, feedback) {
      navigator.clipboard.writeText(str).then(feedback, function (err) {
         console.log('Could not copy text: ', err);
      });
   }
}

function init() {
   getCSSVariablesList();
   printVariables();
   copyVariable();
}

function refreshList() {
   rootVariables = {};
   getCSSVariablesList();
   printVariables();
}

init();

document.querySelector('.cvl-btnRefresh').addEventListener('click', refreshList);
