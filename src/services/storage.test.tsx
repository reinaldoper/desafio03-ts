import { changeLocalStorage, createLocalStorage, getAllLocalStorage, changeRemoteStorage } from "./storage"

const dioBank = {
    login: false
}

const details = {
    email: 'reinaldo@gmail.com',
    password: '123456',
    name: 'Reinaldo Santos',
}

describe('storage', () => {
    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')
    it('Deve retornar o objeto no localStorage com a chave diobank', () => {
        const mockGetItem = jest.spyOn(Storage.prototype, 'getItem')
        getAllLocalStorage()
        expect(mockGetItem).toHaveBeenCalledWith('diobank')
    })

    it('Deve criar o objeto no localStorage', () => {
        createLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank))
    })

    it('Deve alterar o valor do objeto no localStorage', () => {
        changeLocalStorage(dioBank)
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank))
    })

    it('Deve criar o valor do objeto no localStorage email', () => {
        changeRemoteStorage('email', details.email)
        expect(mockSetItem).toHaveBeenCalledWith('email', JSON.stringify(details.email))
    })

    it('Deve criar o valor do objeto no localStorage password', () => {
        changeRemoteStorage('password', details.password)
        expect(mockSetItem).toHaveBeenCalledWith('password', JSON.stringify(details.password))
    })

    it('Deve criar o valor do objeto no localStorage name', () => {
        changeRemoteStorage('name', details.name)
        expect(mockSetItem).toHaveBeenCalledWith('name', JSON.stringify(details.name))
    })
    
})