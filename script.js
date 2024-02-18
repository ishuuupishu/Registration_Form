document.getElementById("myForm").addEventListener("submit", function(event) {
	event.preventDefault();
	
	var formData = new FormData(this);
	var output = "<h2 style='color: #333; text-align: center;'>Form Data:</h2>";
	
	formData.forEach(function(value, key) {
	  output += "<p><strong>" + key + ":</strong> " + value + "</p>";
	});
	
	// Add edit and delete buttons for each form entry
	output += "<div style='text-align: center;'><button onclick='editEntry(this)' class='action-button'>Edit</button><button onclick='deleteEntry(this)' class='action-button'>Delete</button></div>";
  
	var popup = window.open("", "Form Data", "width=400,height=400");
	popup.document.write("<html><head><title>Form Data</title><style>body{font-family: Arial, sans-serif;background-color: #f0f0f0;padding: 20px;}p{margin-bottom: 5px;}.action-button{padding: 10px 20px;margin: 0 5px;background-color: #007bff;color: #fff;border: none;border-radius: 4px;cursor: pointer;transition: background-color 0.3s;} .action-button:hover{background-color: #0056b3;}</style><script>function editEntry(button) { var entry = button.parentElement.previousElementSibling; var value = prompt('Enter new value:', entry.innerHTML.split('</strong> ')[1]); if (value !== null) { entry.innerHTML = '<strong>' + entry.innerHTML.split('</strong> ')[0] + '</strong> ' + value; } } function deleteEntry(button) { var entry = button.parentElement.previousElementSibling; entry.remove(); button.parentElement.remove(); }</script></head><body>" + output + "</body></html>");
  });
  