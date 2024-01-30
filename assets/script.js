// 1. What is the name of the recipe?
let title = document.getElementById("recipe-name");
console.log(title.innerHTML);
// 2. What HTML tag is used to display the Recipe name?
console.log(title.tagName);
// 3. What is the font size of the paragraph tag with the class _"description"_.
let description = document.getElementsByClassName("description");
console.log(description[0].getAttribute("font-size"));
// ! Why you return null?
// 4. What is the value of the `alt` atrribute on the image?
let img = document.getElementsByTagName("img");
console.log(img[0].getAttribute("alt"));
// 5. What is the dimensions and the url of the image? Create an object that looks like this, and log it to the console:
let imgobj = {
  url: img[0].getAttribute("src"),
  height: img[0].height,
  width: img[0].width,
};
console.log(imgobj);

// 6. How many ingredients has the paste?
let ingrPaste = document.getElementsByClassName("ingredients-list-paste");
console.log(ingrPaste[0].getElementsByTagName("li").length);
// 7. Which is the forth element in the list containing the ingredients for the paste?

// 8. Create an an array of objects from the instructions. Each element in the array should be an object that looks like this:

// ```js
// {
//   order: number;
//   text: instruction;
// }
// ```
