function saveTask() {

    let taskText = document.getElementById("textArea").value;
    let taskDate = document.getElementById("taskDate").value;
    let taskTime = document.getElementById("taskTime").value;

    let task = {Task : taskText, Date : taskDate, Time : taskTime}
    localStorage.setItem("task", JSON.stringify(task));
}