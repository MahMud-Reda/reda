let taskinput = document.getElementById('taskinput');
let addbtn = document.getElementById('addbtn');
let notasks = document.getElementById('notasks');
let alltasks = document.getElementById('alltasks');



let addtask = () => {
    taskdata = taskinput.value;

    alltasks.innerHTML += `
<div class="alert alert-info> 
${taskdata}
<i class="fa-regular fa-circle-xmark"></i>
</div>
`

}



addbtn.addEventListener('click', addtask)