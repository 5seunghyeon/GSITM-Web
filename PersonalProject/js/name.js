const form = document.querySelector(".js-form"),
    input = form.querySelector("input");
    greeting = document.querySelector(".js-greetings");

const USERNAME = "User",
    HIDE = "hide";


function namehandle(event)
{
    event.preventDefault();
    const UserValue = input.value;
    localStorage.setItem(USERNAME, UserValue);
    paintGreeting(UserValue);
}

function paintGreeting(User)
{
    form.classList.remove(HIDE);
    greeting.classList.add(HIDE);
    greeting.innerText = `Hello ${User}`;
}

const currentUser = localStorage.getItem(USERNAME);

    if(currentUser === null)
    {
        form.classList.add(HIDE);
        form.addEventListener("submit", namehandle);
    }
    else
    {
        paintGreeting(currentUser);
    }

