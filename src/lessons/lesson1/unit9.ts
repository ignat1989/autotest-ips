let show = function() {
    let legalAge: boolean
    let userAge: number = 20

    legalAge = userAge >= 18 ? true: false

    console.log(legalAge)
}
show()