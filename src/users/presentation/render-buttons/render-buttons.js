import usersStore from "../../store/users-store";
import {renderTable} from '../render-table/render-table'
import './render-buttons.css'

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderButtons = (element) => {
    const nextButton = document.createElement('button');
    nextButton.innerText = ' Next >';

    const prevButton = document.createElement('button');
    prevButton.innerText = '< Prev'

    const currentPagLabel = document.createElement('span');
    currentPagLabel.id = 'current-page'
    currentPagLabel.innerText = usersStore.getCurrentPage();

    element.append(prevButton, currentPagLabel, nextButton);

    nextButton.addEventListener('click', async() => {
        await usersStore.loadNextPage();
        currentPagLabel.innerText = usersStore.getCurrentPage();
        renderTable(element);
    })

    prevButton.addEventListener('click', async() => {
        await usersStore.loadPreviousPage();
        currentPagLabel.innerText = usersStore.getCurrentPage();
        renderTable(element);
    })

}

