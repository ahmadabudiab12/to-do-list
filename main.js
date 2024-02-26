var tasksform = document.querySelector(".add-task");
var tasks = [];

tasksform.onsubmit = function (e) {
    e.preventDefault();
    var elements = e.target.elements;
    var amount = elements['task'].value;

    tasks.push(amount);
    console.log(tasks);

    var results = tasks.map(function (ele) {
        return `
        <li>
            <input type="checkbox" class="check-box">
            <span>${ele}</span>
        </li>
        `;
    });
    
    document.querySelector(".list ul").innerHTML = results.join(''); // Join the HTML strings and set as innerHTML
    
    document.querySelectorAll('.check-box').forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            var span = checkbox.parentElement.querySelector('span'); // Find the corresponding span
            if (checkbox.checked) {
                span.classList.add('done');
            } else {
                span.classList.remove('done');
            }
        });
    });
    

    
};
