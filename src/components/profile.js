import {
    avatarUpdateForm,
    profileDescription,
    profileForm,
    profileImage, profileImageModal,
    profileModal,
    profileName,
    validationConfig
} from "./utils/constants";
import {localData} from "../index";
import {clearValidation} from "./validation";
import {closeModal, openModal} from "./modal";
import {updateProfile, updateUserPhoto} from "./api";

const updateProfileView = (me) => {
    profileName.textContent = localData.userData.name;
    profileDescription.textContent = localData.userData.about;
    profileImage.setAttribute("style", `background-image: url(${localData.userData.avatar}`);
}

const openProfileEditForm = () => {
    profileForm.name.value = profileName.textContent;
    profileForm.description.value = profileDescription.textContent;
    clearValidation(profileForm, validationConfig);
    openModal(profileModal);
}

const changeProfile = (evt, name, description) => {
    evt.submitter.textContent = 'Сохранение...';

    updateProfile(name, description)
        .then( (res) => {
            profileName.textContent = name;
            profileDescription.textContent = description;
            closeModal(profileModal);
        }).catch( (err) => console.log(err)
    ).finally( () => {
            evt.submitter.textContent = 'Сохранить';
        }
    );
}

const changeProfileImage = (evt, link) => {
    evt.submitter.textContent = 'Сохранение...';
    updateUserPhoto(link)
        .then( (res) => {
            profileImage.setAttribute("style", `background-image: url(${res.avatar}`);
            closeModal(profileImageModal);
            avatarUpdateForm.reset()
        })
        .catch( (err) => console.log(err)
        ).finally( () => {
            evt.submitter.textContent = 'Сохранить';
        }
    );
}

const handleEditProfileFormSubmit = (e) => {
    e.preventDefault();
    changeProfile(e, profileForm.elements.name.value, profileForm.elements.description.value);
}

const handleEditProfileImageFormSubmit = (e) => {
    e.preventDefault();

    changeProfileImage(e, avatarUpdateForm.elements.link.value);

}

export {updateProfileView, openProfileEditForm, handleEditProfileFormSubmit, handleEditProfileImageFormSubmit}