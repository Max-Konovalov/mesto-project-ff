export { getMe, getCards, likeCard, deleteCard, addCard, updateUserPhoto, updateProfile };

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
    console.log(res.status);
    if (res.ok) { return res.json()}
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

const updateUserPhoto = async (link) => {
    return request('users/me/avatar', "PATCH", {
        avatar: link
    });
}

//Карточки
const getCards = async () => {
    return request('cards', "GET");
}

const addCard = async (card) => {
    return request('cards', "POST", card);
}

const deleteCard = async (id) => {
    return request(`cards/${id}`, "DELETE", { _id : id});
}

const likeCard = async (id, isLiked) => {
    return request(`cards/likes/${id}`, isLiked ? "DELETE" : "PUT", {})
}




