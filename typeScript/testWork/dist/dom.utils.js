export const get = (id) => {
    const el = document.getElementById(id);
    if (!el)
        throw new Error(`Element with id "${id}" not found!`);
    return el;
};
export const getInput = (id) => get(id);
export const getSelect = (id) => get(id);
export const getForm = (id) => get(id);
