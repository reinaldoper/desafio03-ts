const conta = {
    email: 'reinaldo@gmail.com',
    password: '123456',
    name: 'Reinaldo Santos',
    balance: 2000.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})
