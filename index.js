import { PDFDocument } from 'pdf-lib'
import { readFile, writeFile, appendFile } from "fs/promises";

async function fillForm(input,output) {
    try {
      const pdfDoc = await PDFDocument.load(await readFile(input));

      const pdfBytes =  await pdfDoc.save();
      await writeFile(output, pdfBytes);
      console.log('create PDF');
    }catch (err){
      console.log(err);
    }
}

fillForm('mirae.pdf', 'output.pdf');