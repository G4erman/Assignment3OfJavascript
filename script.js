class Smoothie {
    constructor(flavor, milk, sweetener, toppings) {
      this.flavor = flavor;
      this.milk = milk;
      this.sweetener = sweetener;
      this.toppings = toppings;
    }
  
    getSmoothieDescription() {
      return `You have ordered a ${this.flavor} smoothie with ${this.milk} milk, sweetened with ${this.sweetener.join(", ")} and topped with ${this.toppings.join(", ")}. Enjoy!`;
    }
  }
  
  const form = document.getElementById("smoothieForm");
  const orderDescription = document.getElementById("order");
  
  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const flavor = document.getElementById("flavor").value;
    const milk = document.querySelector('input[name="milk"]:checked').value;
    const sweetenerInputs = document.querySelectorAll('input[name="sweetener"]:checked');
    const sweetener = Array.from(sweetenerInputs).map(input => input.value);
    const toppingsInputs = document.querySelectorAll('input[name="toppings"]:checked');
    const toppings = Array.from(toppingsInputs).map(input => input.value);

    const smoothie = new Smoothie(flavor, milk, sweetener, toppings);
  
    const description = smoothie.getSmoothieDescription();
    orderDescription.textContent = description;
  });
  