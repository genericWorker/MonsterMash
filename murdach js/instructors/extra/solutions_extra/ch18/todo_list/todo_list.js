"use strict";

const domain = "https://jsonplaceholder.typicode.com";

const displayUsers = async () => {
    const response = await fetch(`${domain}/users`);
    const users = await response.json();
        
    let html = "";
    for (let user of users) {
        html += `<option value="${user.id}">${user.name}</option>`;
    }
    $("#users").html(html);
};

$(document).ready( async () => {

    await displayUsers();
    $("#view_list").click( async () => {
        const id = $("#users").val();
        const response = await fetch(`${domain}/todos/?userId=${id}`);
        const list = await response.json();

        let html = "<table><tr><th>ToDo Item</th><th>Completed</th></tr>";
        for (let todo of list) {
            html += `<tr><td>${todo.title}</td><td>${todo.completed}</td></tr>`;
        }
        html += "</table>";
        $("#list").html(html);
    });
 });