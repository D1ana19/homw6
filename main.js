class User {
    constructor(fullname, account, age, profession) {
        this.fullname = fullname;
        this.account = account;
        this.age = age;
        this.profession = profession;
    }

    createUserCard() {
        const userCard = document.createElement('div');
        userCard.classList.add('user-card');

        const fullnameElement = document.createElement('p');
        fullnameElement.innerHTML = `<strong>ФИО:</strong> ${this.fullname}`;
        userCard.appendChild(fullnameElement);

        const accountElement = document.createElement('p');
        accountElement.innerHTML = `<strong>Аккаунт:</strong> ${this.account}`;
        userCard.appendChild(accountElement);

        const ageElement = document.createElement('p');
        ageElement.innerHTML = `<strong>Возраст:</strong> ${this.age}`;
        userCard.appendChild(ageElement);

        const professionElement = document.createElement('p');
        professionElement.innerHTML = `<strong>Профессия:</strong> ${this.profession}`;
        userCard.appendChild(professionElement);

        return userCard;
    }
}

class UserManager {
    constructor(userInfoElement) {
        this.userInfoElement = userInfoElement;
    }

    addUser(user) {
        const userCard = user.createUserCard();
        this.userInfoElement.appendChild(userCard);
    }
}

const registerBtn = document.getElementById('registerBtn');
const userInfo = document.getElementById('userInfo');
const userManager = new UserManager(userInfo);

registerBtn.addEventListener('click', () => {
    const fullname = document.getElementById('fullname').value;
    const account = document.getElementById('account').value;
    const age = document.getElementById('age').value;
    const profession = document.getElementById('profession').value;

    if (fullname && account && age && profession) {
        const user = new User(fullname, account, age, profession);
        userManager.addUser(user);

        document.getElementById('fullname').value = '';
        document.getElementById('account').value = '';
        document.getElementById('age').value = '';
        document.getElementById('profession').value = '';
    } else {
        alert("Пожалуйста, заполните все поля")
    }
    })
