const isEmpty = (payload: object)  => {
    const emptyFields: Array<string | void> = []
    Object.entries(payload).forEach(element => {
        if(element[1] === "" || element[1] === '0'){
            emptyFields.push(element[0])
        }
    });
    let returnMessage = ""
    emptyFields.forEach(el => {
        el == 'password' ? el = 'senha' : el;
        returnMessage += `* O campo <b>${el}</b> está vazio <br/>`
    })
    return returnMessage
}

const isEmail = (email: string): boolean => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}





export { isEmpty, isEmail }