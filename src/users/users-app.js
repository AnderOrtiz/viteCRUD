import usersStore from "./store/users-store";

/**
 * 
 * @param {HTMLBodyElement} element 
 */
export const UserApp = async(element) => {
    element.innerHTML = 'loading';
    await usersStore.loadNextPage();
}