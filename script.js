document.addEventListener('keydown', function(event) {
    // Check if the key pressed is a valid input for the calculator
    const validInputs = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/','.','Enter'];
    
    if (validInputs.includes(event.key)) {
      event.preventDefault(); // Prevent default action (e.g., scrolling or submitting a form)
      handleKeyPress(event.key);
    }
  });

  function handleKeyPress(key) {
    switch (key) {
      case 'Enter':
        calculateResult();
        break;
      default:
        solve(key);
        break;
    }
  }

  function solve(val) {
    document.getElementById('result').value += val;
  }

  function clearDisplay() {
    document.getElementById('result').value = " " ;
  }

  function back()
  {
    var currentDisplayValue=document.getElementById("result").value;
    document.getElementById('result').value=currentDisplayValue.slice(0,-1);
  }

  function Result() {
    try {
      document.getElementById('result').value = eval(document.getElementById('result').value);
    } catch (error) {
      document.getElementById('result').value = 'Error';
    }
  }