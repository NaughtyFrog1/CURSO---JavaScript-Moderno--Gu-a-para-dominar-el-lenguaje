/**
 * 
 * @param {HTMLDivElement} element 
 */
export function environmentsComponent(element) {
  element.innerHTML = JSON.stringify(import.meta.env, null, 2)
  console.log(import.meta.env)
}
