

interface IDIoBank {
    login: boolean;
}

const dioBank = {
    login: false
}

export const getAllLocalStorage = (): string | null  => {
    return localStorage.getItem('diobank')
}

export const createLocalStorage = (): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBank))
}

export const changeLocalStorage = (dioBank: IDIoBank): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBank))
}

export const changeRemoteStorage = (value: string, data: string): void => {
    localStorage.setItem(value, JSON.stringify(data))
}

export const getRemoteStorage = (value: string): string => {
    const result = JSON.parse(localStorage.getItem(value) as string);
    return result;
};

