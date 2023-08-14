document.addEventListener("DOMContentLoaded", function () {
    const newTaskInput = document.getElementById("newTask");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
  
    function createTaskElement(taskText) {
      const li = document.createElement("li");
      li.classList.add("task-item");
      li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <div class="task-actions">
          <button class="editBtn">Edit</button>
          <button class="completeBtn">Complete</button>
          <button class="deleteBtn">Delete</button>
        </div>
      `;
  
      const editBtn = li.querySelector(".editBtn");
      const completeBtn = li.querySelector(".completeBtn");
      const deleteBtn = li.querySelector(".deleteBtn");
      const taskTextElement = li.querySelector(".task-text");
  
      editBtn.addEventListener("click", function () {
        editTask(taskTextElement);
      });
  
      completeBtn.addEventListener("click", function () {
        completeTask(li);
      });
  
      deleteBtn.addEventListener("click", function () {
        deleteTask(li);
      });
  
      return li;
    }
  
    function addTask() {
      const taskText = newTaskInput.value.trim();
  
      if (taskText !== "") {
        const li = createTaskElement(taskText);
        taskList.appendChild(li);
        newTaskInput.value = "";
      }
    }
  
    function editTask(taskTextElement) {
      const newTaskText = prompt("Edit the task:", taskTextElement.textContent);
      if (newTaskText !== null) {
        taskTextElement.textContent = newTaskText;
      }
    }
  
    function completeTask(taskElement) {
      taskElement.classList.toggle("completed");
    }
  
    function deleteTask(taskElement) {
      taskElement.remove();
    }
  
    newTaskInput.addEventListener("keyup", function (event) {
      if (event.key === "Enter") {
        addTask();
      }
    });
  
    addTaskBtn.addEventListener("click", addTask);
  
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const linkText = link.textContent.toLowerCase();
        if (linkText === 'about') {
          alert('About - Created by: Ankush, Moksh, Nivedita, Lakshay, Priyanka');
        } else if (linkText === 'social media') {
          showSocialMediaOptions();
        } else {
          alert(`You clicked on ${linkText}`);
        }
      });
    });
  
    function showSocialMediaOptions() {
      const socialMediaOptions = [
        { name: 'Ankush', url: 'https://www.instagram.com/mrrobot_h4ck3r' },
        { name: 'Moksh', url: 'https://www.instagram.com/demolitionboy_' },
        { name: 'Nivedita', url: 'https://www.instagram.com/nivedita_username' },
        { name: 'Lakshay', url: 'https://www.instagram.com/itzzz_lakshayyy' },
        { name: 'Priyanka', url: 'https://www.instagram.com/pinki_cute_baby' }
      ];
  
      const selectedOption = prompt(
        "Choose a team member:",
        socialMediaOptions.map(option => option.name).join(", ")
      );
  
      const selectedMember = socialMediaOptions.find(option => option.name === selectedOption);
  
      if (selectedMember) {
        alert(`You selected: ${selectedMember.name}`);
        window.location.href = selectedMember.url;
      } else {
        alert('User not found');
      }
    }
  });
  