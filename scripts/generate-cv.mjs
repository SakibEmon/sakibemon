import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { writeFile } from "node:fs/promises";

const document = await PDFDocument.create();
document.setTitle("Personal Portfolio - CV Template");
document.setAuthor("Portfolio template");
const page = document.addPage([595.28, 841.89]);
const regular = await document.embedFont(StandardFonts.Helvetica);
const bold = await document.embedFont(StandardFonts.HelveticaBold);
const ink = rgb(0.09, 0.1, 0.09);
let y = 775;
function line(text, size = 11, isBold = false) {
  page.drawText(text, {
    x: 55,
    y,
    size,
    font: isBold ? bold : regular,
    color: ink,
  });
  y -= size + 12;
}
function heading(text) {
  y -= 18;
  line(text, 13, true);
}
line("YOUR NAME", 30, true);
line("RESEARCHER & WRITER", 12);
line("CV TEMPLATE - replace with your real CV before publishing", 10);
line("Your email | Your location | Your LinkedIn URL", 10);
heading("PROFILE");
line("Add a short summary of your background, interests, and goals.");
line(
  "This document is an editable-content guide, not a record of credentials.",
);
heading("EDUCATION");
line("Your degree | Your university | Graduation year");
line("Academic focus, thesis topic, or relevant coursework.");
heading("EXPERIENCE & AFFILIATIONS");
line("East West University | Your position / department | Dates");
line("Add your responsibilities, projects, and actual contributions.");
line("Independent writing | Your role | Dates");
line("Add client work and writing experience you wish to highlight.");
heading("PUBLICATIONS & RESEARCH");
line("Add your book, papers, and research projects.");
line("Include authors, year, title, publisher / journal, and DOI or URL.");
heading("SKILLS");
line("Add research methods, subject expertise, writing skills, and tools.");
heading("SELECTED WRITING");
line("Article title | Publication / client | Year | Link");
y -= 25;
line(
  "To customize: create your CV in Word or Google Docs and export as PDF.",
  10,
);
line(
  "Replace public/cv-template.pdf, or update cvUrl in lib/portfolio-data.js.",
  10,
);
await writeFile(
  new URL("../public/cv-template.pdf", import.meta.url),
  await document.save(),
);
