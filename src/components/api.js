export {getMe, getCards, updateProfile, addCard};

const token = 'cef10085-5005-43aa-ab7f-5dc77bbcfb03';
const cohortId = "wff-cohort-14";

const requestPattern = {
    url: 'https://nomoreparties.co/v1',
    headers: {
        'authorization': token,
        'Content-Type': 'application/json'
    }
}

const checkStatus = (res) => {
    if (res.ok) { return res.json() }
    else { throw new Error(`Ошибка: ${res.status}`)}
}

const request = (endpoint, method, body) => {
    return fetch(`${requestPattern.url}/${cohortId}/${endpoint}`, {
        method: method,
        headers: requestPattern.headers,
        body: JSON.stringify(body)
    }).then(checkStatus);
    
}


//Профиль
const getMe = async () => {
    return request('users/me')
}

const updateProfile = async (name, desc) => {
    return request('users/me', "PATCH",{
        name: name,
        about: desc
    });
}

//Карточки
const getCards = async () => {
    return request('/cards', "GET");
}

const addCard = async (card) => {
    return request('/cards', "POST", card);
}

const deleteCard = async (id) => {
    return request(`/cards/${id}`, "DELETE");
}



