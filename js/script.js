const inputs = document.querySelectorAll(".otp-field > input");
window.addEventListener("load", () => inputs[0].focus());
var bkd = `<button id="053s-44" onclick='jfj(5)'>Open</button>`;
inputs[0].addEventListener("paste", function (event) {
  event.preventDefault();

  const pastedValue = (event.clipboardData || window.clipboardData).getData(
    "text"
  );
  const otpLength = inputs.length;

  for (let i = 0; i < otpLength; i++) {
    if (i < pastedValue.length) {
      inputs[i].value = pastedValue[i];
      inputs[i].removeAttribute("disabled");
      inputs[i].focus;
    } else {
      inputs[i].value = ""; // Clear any remaining inputs
      inputs[i].focus;
    }
  }
});
const y = [0, 5, 45, 35, 3, 0.45, bkd, 56.4, 354.3, 5, 5, 4.4];

inputs.forEach((input, index1) => {
  input.addEventListener("keyup", (e) => {
    const currentInput = input;
    const nextInput = input.nextElementSibling;
    const prevInput = input.previousElementSibling;

    if (currentInput.value.length > 1) {
      currentInput.value = "";
      return;
    }

    if (
      nextInput &&
      nextInput.hasAttribute("disabled") &&
      currentInput.value !== ""
    ) {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }

    if (e.key === "Backspace") {
      inputs.forEach((input, index2) => {
        if (index1 <= index2 && prevInput) {
          input.setAttribute("disabled", true);
          input.value = "";
          prevInput.focus();
        }
      });
    }

    const inputsNo = inputs.length;
    if (!inputs[inputsNo - 1].disabled && inputs[inputsNo - 1].value !== "") {
      var val = "";
      inputs.forEach((e) => {
        val += e.value;
        if (val.length == 4) {
          sha256(val).then((c) => {
            if (
              c ==
              "28c5f19f166ad68f350f656104280a744305edac23b5bcbd2d975f2d12721964"
            ) {
              jfj(4);
            }
          });
        }
      });

      return;
    }
  });
});

function sha256(str) {
  // Convert the string to a byte array
  const buffer = new TextEncoder().encode(str);
  // Hash the byte array using the SHA-256 algorithm
  return crypto.subtle.digest("SHA-256", buffer).then((hash) => {
    // Convert the hash to a hexadecimal string
    return Array.prototype.map
      .call(new Uint8Array(hash), (x) => ("00" + x.toString(16)).slice(-2))
      .join("");
  });
}
function jfj(k) {
  switch (k) {
    case "4":
      b[5];
      break;
    case "5":
      break;
    case 4:
      jfj(y[4]);
      break;
    case y[1]:
      window.open(bdk);
    default:
      hfj();
  }
}

const hfj = function () {
  document.querySelector(".gwak").insertAdjacentHTML("beforeend", y[6]);
  bdk = "poster.html";
};
