
class TabLink {
  constructor(element) {
    this.element = element; // Assign this.element to the passed in DOM element
    
    this.data = this.element.dataset.tab; // Get the custom data attribute on the Link
    
    this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`); // Using the custom data attribute get the associated Item element
    // this.data = document.querySelector(`.tabs-link[data-tab='${this.element.dataset.tab}']`);
    
    this.tabItem = new TabItem(this.itemElement); // Using the Item element, create a new instance of the TabItem class
    
    this.element.addEventListener('click', () => this.select()); // Add a click event listener on this instance, calling the select method on click
    
  };

  select() {
    const links = document.querySelectorAll('.tabs-link'); // Get all of the elements with the tabs-link class

    Array.from(links).forEach(index => index.classList.remove('tabs-link-selected')); // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links

    this.element.classList.add('tabs-link-selected'); // Add a class named "tabs-link-selected" to this link
    
    this.tabItem.select(); // Call the select method on the item associated with this link
  
  }
}

class TabItem {
  constructor(element) {
    this.element = element; // Assign this.element to the passed in element
  }

  select() {
    const items = document.querySelectorAll('.tabs-item'); // Select all ".tabs-item" elements from the DOM

    Array.from(items).forEach(index => index.classList.remove('tabs-item-selected')); // Remove the class "tabs-item-selected" from each element

    this.element.classList.add('tabs-item-selected'); // Add a class named "tabs-item-selected" to this element
  }
}

/* START HERE: 
- Select all classes named ".tabs-link" and assign that value to the links variable
- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList
- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter
*/

links = document.querySelectorAll('.tabs-link');
links.forEach(link => new TabLink(link))

