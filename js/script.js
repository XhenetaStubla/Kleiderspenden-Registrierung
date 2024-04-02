
// Kleider Kontainer Array
var clothTypes = [
    "Kleider",
    "Hosen",
    "Sweatshirts",
    "Mäntel",
    "Schuhe",

  ];

function populateClothTypes() {
  //getElementById ist eine Methode in JavaScript, die in Verbindung mit dem Document Object Model (DOM) verwendet wird, um ein HTML-Element anhand seiner eindeutigen ID zu finden
    var selectElement = document.getElementById("Kleidungsart");
//foreach ist eine Methode in JavaScript, die häufig für das Durchlaufen von Arrays oder ähnlichen Listenstrukturen verwendet wird
    clothTypes.forEach(function (type) {
        var option = document.createElement("option");
        option.text = type;
        option.value = type;
        selectElement.add(option);
    });
}




// Krisengebiet Kontainer Array
   var Krisengebiet = [
    "Ukraine",
    "Afghanistan",
];

function KrisengebietFunktion() {
    var selectElement = document.getElementById("Krisengebiet");
    Krisengebiet.forEach(function (type) {
        var option = document.createElement("option");
        option.text = type;
        option.value = type;
        selectElement.add(option);
    });
}



// ruf die  Funktionen 
KrisengebietFunktion();
populateClothTypes();




// Dieser Code ist ein Beispiel für die Verwendung von jQuery, um auf das Ändern des Werts eines Elements mit der ID #ort zu reagieren.
// Wenn der Wert dieses Elements auf '1' gesetzt wird, wird die Klasse 'hidden' vom Element mit der ID #dynamicForm entfernt, andernfalls wird die Klasse hinzugefügt.
$(document).ready(function() {
    $('#ort').change(function() {
      if ($(this).val() == '1') {
        $('#dynamicForm').removeClass('hidden');
      } else {
        $('#dynamicForm').addClass('hidden');
      }
    });
  });




//getElementById ist eine Methode in JavaScript, die in Verbindung mit dem Document Object Model (DOM) verwendet wird, um ein HTML-Element anhand seiner eindeutigen ID zu finden

  document.getElementById('checkButton').addEventListener('click', function(event) {
    event.preventDefault();
    
    var inputValue = document.getElementById('plz-private').value;
    var spanValue = document.getElementById('plz-local').textContent;
    
    // Dieser Code vergleicht den Werten von zwei Eingaben.
    // Wenn die beiden Werte identisch sind, wird eine Benachrichtigung angezeigt, die besagt, dass die Postleitzahlen identisch sind.
    // Andernfalls wird eine Benachrichtigung angezeigt, die besagt, dass die Postleitzahlen nicht identisch sind.
    if (inputValue === spanValue) {
      alert('Postleitzahlen ist identisch');
    } else {
      alert('Postleitzahlen nicht identisch');
    }
  });


// Wenn das Formular abgeschickt wird Dann werden verschiedene Informationen aus dem Formular gesammelt, einschließlich des aktuellen Datums und der Zeit, und in einem neuen Fenster angezeigt.
  // Function to handle form submission
  document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get current datetime
    var now = new Date();
    var datetime = now.toLocaleString(); // Format datetime as per your requirement

    // Get form data
    var formData = new FormData(this);
    var selectedValue = document.getElementById('Kleidungsart').value;
    var Krisengebiet = document.getElementById('Krisengebiet').value;

    formData.append('datetime', datetime); // Append datetime to form data
    formData.append('selectedValue', selectedValue); // Append selected value to form data
    formData.append('Krisengebiet', Krisengebiet); // Append selected value to form data

    // Print view
    var printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>Bestätigung übersicht</title></head><body>');
    
    // Kleider Bereich
    printWindow.document.write('<h2>Kleidungsart</h2>');
    printWindow.document.write('<p>Gewählter Wert: ' + formData.get('selectedValue') + '</p>');
    printWindow.document.write('<p>Größe: ' + formData.get('groesse') + '</p>');
    printWindow.document.write('<p>Farbe: ' + formData.get('farbe') + '</p>');
    
    //Krisengebiet
    printWindow.document.write('<hr/>');
    printWindow.document.write('<h2>Krisengebiet</h2>');
    printWindow.document.write('<p>Gewählter Wert: ' + formData.get('Krisengebiet') + '</p>');
    
    //  Datum, Uhrzeit und Ort
    printWindow.document.write('<hr/>');
    printWindow.document.write('<p>Datetime: ' + datetime + '</p>');

    printWindow.document.write('</body></html>');

  });
