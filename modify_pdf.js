import PdfDrawing from "./pdfDrawing.js";

let pdfDrawing = new PdfDrawing();
await pdfDrawing.init();
pdfDrawing.startDraw();
pdfDrawing.exportToDir()
// try {
//   const existingPdfBytes = fs.readFileSync(
//     "/Users/lap14184/Desktop/projects/tat/pdfmodify/mirae.pdf"
//   );
//   //   console.log(existingPdfBytes);
//   // Load a PDFDocument from the existing PDF bytes
//   const pdfDoc = await PDFDocument.load(existingPdfBytes);
//   pdfDoc.registerFontkit(fontkit);
//   //load font and embed it to pdf document
//   const fontBytes = fs.readFileSync(
//     "./alegreya-sans/AlegreyaSans-Black.otf"
//   );
//   const customFont = await pdfDoc.embedFont(fontBytes);

//   // Get the first page of the document
//   const pages = pdfDoc.getPages();
//   const firstPage = pages[0];

//   // Get the width and height of the first page
//   const { width, height } = firstPage.getSize();

//   // Draw a string of text diagonally across the first page
//   firstPage.drawText("Huỳnh Thanh Danh", {
//     x: 0,
//     y: height / 2,
//     size: 10,
//     font: customFont,
//     color: rgb(0,0,0),
//   });

//   // Serialize the PDFDocument to bytes (a Uint8Array)
//   const pdfBytes = await pdfDoc.save();

//   // For example, `pdfBytes` can be:
//   //   • Written to a file in Node
//   //   • Downloaded from the browser
//   //   • Rendered in an <iframe>fs.writeFile(
//   fs.writeFile(
//     "/Users/lap14184/Desktop/projects/tat/pdfmodify/demo_create_pdf.pdf",
//     pdfBytes,
//     (err) => {
//       if (err) {
//         console.error(err);
//         return;
//       }
//       //file written successfully
//     }
//   );
// } catch (err) {
//   console.error(err);
// }
