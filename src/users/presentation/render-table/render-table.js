import usersStore from "../../store/users-store";
import { showModal } from "../render-modal/render-modal";
import './render-table.css';

let table;

const createTable = () => {
    const table = document.createElement('table')
    const tableHeaders = document.createElement('thead')
    tableHeaders.innerHTML = `
    <tr>
        <th>#ID</th>
        <th>Balance</th>
        <th>FirsName</th>
        <th>LastName</th>
        <th>Active</th>
        <th>Actions</th>
    </tr>

    `;

    const tableBody = document.createElement('tbody')
    table.append(tableHeaders, tableBody)
    return table
}

/**
 * 
 * @param {MouseEvent} event 
 * @returns 
 */
const tableSelectLister = (event) => {
    const element = event.target.closest('.select-user')
    console.log(element)
    if (!element) return;

    const id = element.getAttribute('data-id');
    showModal(id)
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderTable = (element) => {
    const users = usersStore.getUsers();

    if (!table){
        table = createTable();
        element.append(table)

        //TODO: Listeners a la table
        table.addEventListener('click', tableSelectLister);
    }

    let tableHTML = '';
    users.forEach(user => {
        tableHTML += `
        <tr>
            <td>${user.id}</td>
            <td>${user.balance}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.isActive}</td>
            <td>
                <a href="#/" class="select-user" data-id="${user.id}">Select</a>
                |
                <a href="#/" class="delete-user" data-id="${user.id}">Delete</a>
            </td>
        </tr>
        `;
    });

    table.querySelector('tbody').innerHTML = tableHTML;

}