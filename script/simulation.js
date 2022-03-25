function show_help(btn) {
  document.getElementById(`${btn.id}-h`).style.visibility = "visible";
}

function show_ans(btn) {
  let val = document.getElementById(`${btn.id}-h`).value;
  val = val.replaceAll(" ", "").toUpperCase();
  const ans = value(btn.id);
  if (ans === val) {
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
      return "G1*G2";
  }
}
