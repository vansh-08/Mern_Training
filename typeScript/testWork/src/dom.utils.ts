export const get = (id: string): HTMLElement => {
    const el = document.getElementById(id);
    if (!el) throw new Error(`Element with id "${id}" not found!`);
    return el;
};

export const getInput = (id: string): HTMLInputElement => 
    get(id) as HTMLInputElement;

export const getSelect = (id: string): HTMLSelectElement => 
    get(id) as HTMLSelectElement;

export const getForm = (id: string): HTMLFormElement => 
    get(id) as HTMLFormElement;