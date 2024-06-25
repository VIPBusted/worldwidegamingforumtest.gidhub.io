document.addEventListener("DOMContentLoaded", () => {
    loadPosts();
    loadProfile();
    applyTranslations();
});

const translations = {
    en: {
        home: "Home",
        forum: "Forum",
        profile: "Profile",
        contact: "Contact",
        post: "Post",
        save: "Save"
    },
    de: {
        home: "Home",
        forum: "Forum",
        profile: "Profil",
        contact: "Kontakt",
        post: "Posten",
        save: "Speichern"
    },
    ja: {
        home: "ホーム",
        forum: "フォーラム",
        profile: "プロフィール",
        contact: "連絡先",
        post: "投稿",
        save: "保存"
    },
    es: {
        home: "Inicio",
        forum: "Foro",
        profile: "Perfil",
        contact: "Contacto",
        post: "Publicar",
        save: "Guardar"
    },
    ko: {
        home: "홈",
        forum: "포럼",
        profile: "프로필",
        contact: "연락처",
        post: "게시",
        save: "저장"
    }
};

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    applyTranslations();
}

function applyTranslations() {
    const lang = localStorage.getItem('language') || 'de';
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[lang][key];
    });
}

function postMessage() {
    const username = document.getElementById('username').value;
    const platform = document.getElementById('platform').value;
    const message = document.getElementById('message').value;

    if (username && message) {
        const post = {
            username,
            platform,
            message,
            timestamp: new Date().toLocaleString()
        };

        savePost(post);
        displayPost(post);

        document.getElementById('username').value = '';
        document.getElementById('platform').value = 'PC';
        document.getElementById('message').value = '';
    } else {
        alert('Bitte füllen Sie alle Felder aus.');
    }
}

function displayPost(post) {
    const postsDiv = document.getElementById('posts');
    const postDiv = document.createElement('div');
    postDiv.className = 'post';

    postDiv.innerHTML = `
        <h3>${post.username} (${post.platform})</h3>
        <p>${post.message}</p>
        <small>${post.timestamp}</small>
    `;

    postsDiv.prepend(postDiv);
}

function savePost(post) {
    let posts = JSON.parse(localStorage.get

                           if (username) {
    const profile = {
        username,
        friendCode,
        profileLink,
        profileDescription
    };

    localStorage.setItem('profile', JSON.stringify(profile));
    displayProfile(profile);

    document.getElementById('profile-username').value = '';
    document.getElementById('friend-code').value = '';
    document.getElementById('profile-link').value = '';
    document.getElementById('profile-description').value = '';
} else {
    alert('Bitte füllen Sie alle Felder aus.');
}


    const profileInfoDiv = document.createElement('div');
profileInfoDiv.className = 'profile-info';

profileInfoDiv.innerHTML = `
    <h3>${profile.username}</h3>
    <p>Switch-Freundescode: ${profile.friendCode}</p>
    <p>Link: <a href="${profile.profileLink}" target="_blank">${profile.profileLink}</a></p>
    <p>${profile.profileDescription}</p>
`;

profileDiv.appendChild(profileInfoDiv);

