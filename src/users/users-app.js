import { renderButtons } from "./presentation/render-buttons/render-buttons";
import { renderTable } from "./presentation/render-table/render-table";
import usersStore from "./store/users-store";

/**
 * 
 * @param {HTMLBodyElement} element 
 */
export const UserApp = async(element) => {
    element.innerHTML = 'loading';
    await usersStore.loadNextPage(); 
    element.innerHTML = ''; 

    renderTable(element);
    renderButtons(element);

}