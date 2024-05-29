function changeVideo(videoId) {
    let iframe = document.getElementById('change-video');
    iframe.src = 'http://www.youtube.com/embed/' + videoId;
}

function saveInfo() {
    const nameSent = document.querySelector("#name").value;
    const ageSent = document.querySelector("#age").value;
    const classSent = document.querySelector("#class").value;
    const zoneSent = document.querySelector("#zone").value;
    const songSent = document.querySelector("#song").value;
    const infoSent = document.querySelector("#info").value;

    const users = JSON.parse( localStorage.getItem("users") ) || [];

    users.push({
        name: nameSent,
        age: ageSent,
        class: classSent,
        zone: zoneSent,
        song: songSent,
        info: infoSent
    });

    localStorage.setItem("users", JSON.stringify(users));
}

function getInfo() {
    const olUsers = document.querySelector("#info-users");
    const users = JSON.parse(localStorage.getItem("users")) || [];

    users.forEach(user => {
        olUsers.innerHTML+=`
            <li class="user">
                <ul>
                    <li>
                        Name: ${user.name}
                    </li>
                    <li>
                        Age: ${user.age}
                    </li>
                    <li>
                        Prefered Class: ${user.class}
                    </li>
                    <li>
                        Prefered Zone: ${user.zone}
                    </li>
                    <li>
                        Prefered Song: ${user.song}
                    </li>
                    <li>
                        How you find out about Warcraft: ${user.info}
                    </li>
                </ul>
            </li>
        `;
    });
}

getInfo();