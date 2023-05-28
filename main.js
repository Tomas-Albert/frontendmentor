const form = document.querySelector("form");
const emailInput = document.querySelector("#email-input");
const errorEmailLabel = document.querySelector("#error-email-label");

emailInput.addEventListener("input", (e) => {
	const val = e.target.value;
	const emailHasCorrectFormat = isEmail(val);
	showErrorLabel(emailHasCorrectFormat);
	if (val === "") {
		removeErrorStylesToLabel();
	}
	removerrorStylesToInput();
});

emailInput.addEventListener("change", (e) => {
	const emailHasCorrectFormat = isEmail(emailInput.value);
	inputErrorState(emailHasCorrectFormat);
});

form.addEventListener("submit", (e) => {
	e.preventDefault();
	if (emailInput.value === "") {
		apllyErrorStylesToLabel();
		apllyErrorStylesToInput();
	} else {
		Swal.fire({
			icon: "success",
			title: "<h1 class='text-darkGrey font-[50px]'>Thanks for subscribing!</h1>",
			html: `<p class="text-darkGrey text-sm"> A confirmation email has been sent to <b>${emailInput.value}.</b > Please open it and click the button inside to confirm your subscription.</ >`,
			confirmButtonText: "Dismiss message",
		});
		emailInput.value = "";
	}
});

/* Helpers */
const isEmail = (email) => {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
		return true;
	} else {
		return false;
	}
};
const inputErrorState = (emailHasCorrectFormat) => {
	if (emailHasCorrectFormat) {
		removerrorStylesToInput();
	} else {
		apllyErrorStylesToInput();
	}
};
const apllyErrorStylesToInput = () => {
	emailInput.style.color = "hsl(4, 100%, 67%)";
	emailInput.style.background = "hsl(4 100% 67% / 20%)";
	emailInput.style.border = "1px solid hsl(4, 100%, 67%)";
};
const removerrorStylesToInput = () => {
	emailInput.style.background = "white";
	emailInput.style.border = "1px solid hsl(234 29% 20% / 0.2)";
	emailInput.style.color = "hsl(234, 29%, 20%)";
};
const showErrorLabel = (emailHasCorrectFormat) => {
	if (emailHasCorrectFormat) {
		removeErrorStylesToLabel();
	} else {
		apllyErrorStylesToLabel();
	}
};
const apllyErrorStylesToLabel = () => {
	errorEmailLabel.style.opacity = "1";
};
const removeErrorStylesToLabel = () => {
	errorEmailLabel.style.opacity = "0";
};
