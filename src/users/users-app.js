import usersStore from "./store/users-store";


export const UserApp = async(element) => {
    element.innerHTML = 'loading';
    await usersStore.loadNextPage();
}