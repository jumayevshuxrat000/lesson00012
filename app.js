function runCode() {
    const code = document.getElementById("js-code").value;
    const outputDiv = document.getElementById("output");
    
    try {
      const result = eval(code);
      outputDiv.textContent = result !== undefined ? result : "Code ran successfully!";
    } catch (error) {
      outputDiv.textContent = "Error: " + error.message;
    }
  }