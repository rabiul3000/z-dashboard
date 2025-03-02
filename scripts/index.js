const completeBtn = document.getElementsByClassName('completed');
const taskAssign = document.getElementById('task-assign');
const checkbox = document.getElementById('checkbox');
const listItems = document.getElementById('list__items');
const historyReset = document.getElementById('history-reset');
const currentDate = document.getElementById('date');
const titles = document.getElementsByClassName('title');

const date = new Date();

const dateString = date.toLocaleDateString('en-us', {
	day: 'numeric',
	weekday: 'short',
	month: 'short',
	year: 'numeric',
});

currentDate.textContent = dateString;

historyReset.addEventListener('click', function () {
	listItems.innerHTML = '';
});

function createAndAddDiv(currentTime, title) {
	let list = document.createElement('div');
	list.classList.add(
		'list',
		'text-xs',
		'text-gray-700',
		'p-4',
		'my-4',
		'rounded-lg',
		'bg-pr'
	);

	let timestamp = currentTime.toLocaleTimeString();

	list.innerHTML = `<p> You have Completed The Task<span class='font-bold'> ${title} </span> at ${timestamp}</span></p>`;
	return list;
}

let disabledBtnCount = 0;
for (let i = 0; i < completeBtn.length; i++) {
	completeBtn[i].addEventListener('click', function () {
		alert('Board updated successfully');
		taskAssign.textContent = Number(taskAssign.textContent) - 1;
		checkbox.textContent = Number(checkbox.textContent) + 1;
		let list = createAndAddDiv(new Date(), titles[i].textContent);
		listItems.append(list);
		this.setAttribute('disabled', 'true');
		disabledBtnCount++;
		console.log(disabledBtnCount, completeBtn.length);
		if (disabledBtnCount === completeBtn.length) {
			alert('Congrates!!! You have completed all the current task');
		}
	});
}
