{    
    let legalAge = (userAge: number) => {
        userAge >= 18 ? console.log('Страница доступна') : console.log('Страница не доступна');
    }

    legalAge(10)
}