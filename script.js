function txtset(){
  localStorage.setItem("lastname", "Smith");
  // Retrieve
  document.getElementById("txtarea").innerHTML = localStorage.getItem("lastname");
}