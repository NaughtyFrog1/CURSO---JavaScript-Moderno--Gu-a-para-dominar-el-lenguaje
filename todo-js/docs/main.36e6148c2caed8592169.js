(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.d({},{L:()=>f});var n=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.tarea=t,this.id=(new Date).getTime(),this.creado=new Date,this.completado=!1}var n,o,r;return n=e,r=[{key:"fromJSON",value:function(t){var n=t.tarea,o=t.id,r=t.creado,a=t.completado,i=new e(n);return i.id=o,i.creado=r,i.completado=a,i}}],(o=null)&&t(n.prototype,o),r&&t(n,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.load()}var t,r,a;return t=e,(r=[{key:"new",value:function(e){this.todos.push(e),this.save()}},{key:"delete",value:function(e){this.todos=this.todos.filter((function(t){return t.id!=e})),this.save()}},{key:"toggle",value:function(e){for(var t=0;t<=this.todos.length&&this.todos[t].id!=e;)t++;this.todos[t].completado=!this.todos[t].completado,this.save()}},{key:"deleteCompleted",value:function(){this.todos=this.todos.filter((function(e){return!e.completado})),this.save()}},{key:"save",value:function(){localStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"load",value:function(){this.todos=localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")):[],this.todos=this.todos.map(n.fromJSON)}}])&&o(t.prototype,r),a&&o(t,a),e}();function a(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,a=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw a}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var l=document.querySelector(".todo-list"),c=document.querySelector(".new-todo"),s=document.querySelector(".clear-completed"),d=document.querySelector(".filters"),u=function(e){var t='\n    <li \n      class="'.concat(e.completado?"completed":"",'" \n      data-id="').concat(e.id,'"\n    >\n      <div class="view">\n        <input \n          class="toggle" \n          type="checkbox" \n          ').concat(e.completado?"checked":"","\n        >\n        <label>").concat(e.tarea,'</label>\n        <button class="destroy"></button>\n      </div>\n      <input class="edit" value="Create a TodoMVC template">\n    </li>\n  '),n=document.createElement("div");return n.innerHTML=t,l.append(n.firstElementChild),n.firstElementChild};c.addEventListener("keyup",(function(e){if(13===e.keyCode&&c.value.length>0){var t=new n(c.value);f.new(t),u(t),c.value="",console.log(f.todos)}})),l.addEventListener("click",(function(e){var t=e.target.localName,n=e.target.parentElement.parentElement,o=n.getAttribute("data-id");"input"===t?(f.toggle(o),n.classList.toggle("completed")):"button"===t&&(f.delete(o),n.remove())})),s.addEventListener("click",(function(){f.deleteCompleted();for(var e=l.children.length-1;e>=0;e--){var t=l.children[e];t.classList.contains("completed")&&t.remove()}})),d.addEventListener("click",(function(e){var t=e.target.text;if(t){var n,o=a(l.children);try{for(o.s();!(n=o.n()).done;){var r=n.value,i=r.classList.contains("completed");i&&"Pendientes"===t||!i&&"Completados"===t?r.classList.add("hidden"):r.classList.remove("hidden")}}catch(e){o.e(e)}finally{o.f()}}d.querySelector(".selected").classList.remove("selected"),e.target.classList.add("selected")}));var f=new r;f.todos.forEach(u)})();