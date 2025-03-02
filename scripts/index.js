const completeBtn = document.getElementsByClassName('completed');
const taskAssign = document.getElementById('task-assign');
const checkbox = document.getElementById('checkbox');
const listItems = document.getElementById('list__items');
const historyReset = document.getElementById('history-reset');
const newDate = document.getElementById('date');

const date = new Date();
const formattedDate = date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', year: 'numeric' });

newDate.textContent = formattedDate;

historyReset.addEventListener('click', function () {
	listItems.innerHTML = '';
});

function createAndAddDiv() {
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
	list.innerHTML = `<p> You have Complete The Task Add Dark Mode at <span>12:4ss8:15 PM</span></p>`;
	return list;
}

for (btn of completeBtn) {
	btn.addEventListener('click', function () {
		alert('Board updated successfully');
		taskAssign.textContent = Number(taskAssign.textContent) - 1;
		checkbox.textContent = Number(checkbox.textContent) + 1;
		let list = createAndAddDiv();
		listItems.append(list);
		this.setAttribute('disabled', 'true');
	});
}
