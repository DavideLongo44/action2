//importiert Espress module ---> const name = nameframework
const express = require("express");
// arbeit port für server festgelegt
const PORT =process.env.PORT || 5500;

// Express anwendung wir erstell und in die Variable app importiert
let app = express();

// alle dateien die im ordner "frontent" enthalten sind
// werden an den Uder 'ohne weiter verarbeitung' weitergeleigt
app.use(express.static('frontend'));

//sobald server gestartet ist, wird eine meldung auf der 
//konsole ausgegeben.
app.listen(PORT, ()=> {
    console.log("server auf port", PORT);

});
