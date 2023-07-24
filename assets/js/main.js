console.log("hey-ho weekend!");

// =================================================

const withMwst = document.querySelector("#withMwst");
const withOutMwst = document.querySelector("#withOutMwst");

const textSwitch = () => {
  let labelChange = document.querySelector("#labelChange");
  const brutto_label = document.querySelector("#brutto_label");

  if (withMwst.checked) {
    labelChange.innerHTML =
      "Bruttobetrag in Euro (Preis inklusive Mehrwertsteuer) ";
    brutto_label.innerHTML = "Nettobetrag";
    console.log("Button is checked");
  } else {
    labelChange.innerHTML = "Nettobetrag in Euro (Preis ohne Mehrwertsteuer)";
    brutto_label.innerHTML = "Bruttobetrag (Endpreis)";
    console.log("Button is not checked");
  }
};

const rechnung = () => {
  const radio19 = document.querySelector("#radio19");
  const betrag = document.querySelector("#betrag");
  const output_MwBetrag = document.querySelector(".output_MwBetrag");
  const output_endpreis = document.querySelector(".output_endpreis");

  if (withMwst.checked) {
    if (radio19.checked) {
      console.log(betrag.value * 1.19 + "€");
      output_endpreis.innerHTML = (betrag.value * 1.19).toFixed(2).concat("€");
      output_MwBetrag.innerHTML = (betrag * 0.19).toFixed(2).concat("€");
    } else {
      console.log(betrag.value * 1.07 + "€");
      output_endpreis.innerHTML = (betrag.value * 1.07).toFixed(2).concat("€");
      output_MwBetrag.innerHTML = (betrag * 0.07).toFixed(2).concat("€");
    }
  } else {
    if (radio19.checked) {
      console.log(betrag.value * 1.19 + "€");
      output_endpreis.innerHTML = (betrag.value * 1.19).toFixed(2).concat("€");
      output_MwBetrag.innerHTML = (betrag * 0.19).toFixed(2).concat("€");
      brutto_label.innerHTML = "Bruttobetrag (Endpreis)";
    } else {
      console.log(betrag.value * 1.07 + "€");
      output_endpreis.innerHTML = (betrag.value * 1.07).toFixed(2).concat("€");
      output_MwBetrag.innerHTML = (betrag * 0.07).toFixed(2).concat("€");
      brutto_label.innerHTML = "Nettobetrag";
    }
  }
};
