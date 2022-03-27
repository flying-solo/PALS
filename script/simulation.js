function show_help(btn) {
  document.getElementById(`${btn.id}-h`).style.visibility = "visible";
}

function show_ans(btn) {
  let val = document.getElementById(`${btn.id}-h`).value;
  val = val.replaceAll(" ", "").toUpperCase();
  const ans = value(btn.id);
  if (ans.includes(val)) {
    document.getElementById(`${btn.id}-w`).innerHTML =
      "Correct answer! You can now move to the next simulation.";
    document.getElementById(`${btn.id}-w`).style.color = "#00FF00";
    document.getElementById(`${btn.id}-n`).style.visibility = "visible";
  } else {
    document.getElementById(`${btn.id}-w`).innerHTML =
      "Wrong answer! Try again or click on hint button.";
    document.getElementById(`${btn.id}-w`).style.color = "#ff0000";
  }
}

function value(id) {
  switch (id) {
    case "ans-sim-1-step-1":
      return ["G1*G2", "G1G2"];
    case "ans-sim-1-step-2":
      return ["G5+G6"];
    case "ans-sim-1-step-3":
      return ["1/(G5+G6)"];
    case "ans-sim-1-step-4":
      return ["H3/(G5+G6)"];
    case "ans-sim-1-step-5":
      return ["G4*(G5+G6)", "G4(G5+G6)"];
    case "ans-sim-1-step-6":
      return ["1/G1G2", "1/(G1*G2))"];
    case "ans-sim-1-step-7":
      return ["H3/G1G2(G5+G8)", "H3/(G1*G2)(G5+G8)", "H3/G1(G5+G8)g2"];
    case "ans-sim-1-step-8":
      return ["G1G2G3", "G1*G2*G3"];
    case "ans-sim-1-step-9":
      return ["G1G2G3/(1+G1G2G3H1)", "G1*G2*G3/(1+G1*G2*G3*H1)"];
    case "ans-sim-1-step-10":
      return ["G4(G5+G6)/(1+G4H2(G5+G6))", "G4*(G5+G6)/(1+G4*H2*(G5+G6)"];
    case "ans-sim-1-step-11":
      return ["G1G2G3/(1+G1G2G3H1)", "G1*G2*G3/(1+G1*G2*G3*H1)"];
    case "ans-sim-1-step-11":
      return ["G1G2G3/(1+G1G2G3H1)", "G1*G2*G3/(1+G1*G2*G3*H1)"];
    case "ans-sim-1-step-12":
      return [
        "G1G2G3G4(G5+G6)/((1+G1G2G3H1)(1+G4H2(G5+G6)+G3G4H3))",
        "G1*G2*G3*G4*(G5+G6)/((1+G1*G2*G3*H1)(1+G4*H2*(G5+G6)+G3*G4*H3))",
      ];
  }
}
