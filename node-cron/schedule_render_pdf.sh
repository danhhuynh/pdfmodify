#!/bin/bash

cd /home/source_code/pdfmodify

numprocesses=$(ps ax | grep generatePdf.js | wc -l)

if  [[ $numprocesses -gt 1 ]]
    then echo "generatePdf Running"
else
    echo "Start generatePdf";
    node generatePdf.js
fi

numprocesses2=$(ps ax | grep imagesToPdf.js | wc -l)

if  [[ $numprocesses2 -gt 1 ]]
    then echo "imagesToPdf Running"
else
    echo "Start imagesToPdf";
    node imagesToPdf.js
fi