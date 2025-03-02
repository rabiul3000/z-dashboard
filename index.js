const completeBtn = document.getElementsByClassName('completed');
const taskAssign = document.getElementById('task-assign');
const checkbox = document.getElementById('checkbox');
const listItems = document.getElementById('list__items');
const historyReset = document.getElementById('history-reset');
const currentDate = document.getElementById('date');
const body = document.getElementById('body');
const changeBgBtn = document.getElementById('changeBgBtn');
const titles = document.getElementsByClassName('title');
const secondBtn = document.getElementById('secondBtn');
const blogs = document.getElementById('blogs');
const home = document.getElementById('home');
const redirectToHome = document.getElementById('redirectToHome');

blogs.style.display = 'none';

secondBtn.addEventListener('click', function () {
	home.style.display = 'none';
	blogs.style.display = 'block';
});

redirectToHome.addEventListener('click', function () {
	home.style.display = 'block';
	blogs.style.display = 'none';
});

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

changeBgBtn.addEventListener('click', function () {
	let colors = ['steelblue', 'limegreen', 'orange', 'pink', 'purple', 'teal'];
	let randomNumber = Math.round(Math.random() * 6);
	console.log(randomNumber);
	body.style.backgroundColor = colors[randomNumber];
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

let totalDisabledButton = 0;
for (let i = 0; i < completeBtn.length; i++) {
	completeBtn[i].addEventListener('click', function () {
		alert('Board updated successfully');
		taskAssign.textContent = Number(taskAssign.textContent) - 1;
		checkbox.textContent = Number(checkbox.textContent) + 1;
		let list = createAndAddDiv(new Date(), titles[i].textContent);
		listItems.append(list);
		this.setAttribute('disabled', 'true');
		totalDisabledButton++;
		if (totalDisabledButton === completeBtn.length) {
			alert('Congrates!!! You have completed all the current task');
		}
	});
}
