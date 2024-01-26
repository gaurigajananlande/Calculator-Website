function appendNumber(number) {
    document.getElementById("result").value += number;
  }
  
  function appendOperator(operator) {
    const currentValue = document.getElementById("result").value;
    if (currentValue !== "" && !isNaN(currentValue)) {
      document.getElementById("result").value += operator;
    }
  }
  
  function clearScreen() {
    document.getElementById("result").value = "";
  }
  
  function calculate() {
    try {
      const expression = document.getElementById("result").value;
      const result = eval(expression);
      document.getElementById("result").value = result;
    } catch (error) {
      document.getElementById("result").value = "Error";
    }
  }
  