const dialogTrigger = document.querySelectorAll('button.dialog');
const dialogCloseButton = document.querySelectorAll('button.close-dialog');

for (const trigger of dialogTrigger) {
	trigger.addEventListener('click', function () {
		this?.nextElementSibling.showModal()
	})
}

for (const button of dialogCloseButton) {
	button.addEventListener('click', function () {
		this?.parentElement.close()
	})
}