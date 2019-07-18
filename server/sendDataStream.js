"use strict";

module. exports = function sendFile (file, res) {

  file. on ("end", function () {
    res. end ();
    console. log ("ended");
  });


  file. on ("readable", write);


  function write () {

    let fileContent = file. read();


    if (fileContent && !res. write (fileContent)) {

      file. removeListener ("readable", write);


      res. once ("drain", function () {

        file. on ("readable", write);


        write ();

      });

    }

  }

};
