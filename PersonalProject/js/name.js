const form = document.querySelector(".js-form"),
    input = form.querySelector("input");
    greeting = document.querySelector(".js-greetings");

const USERNAME = "User",
    HIDE = "hide";


function handleSubmit(event)
{
    event.preventDefault();
    const UserValue = input.value;
    paintGreeting(UserValue);
    localStorage.setItem(USERNAME, UserValue);
}

function paintGreeting(text)
{
    form.classList.remove(HIDE);
    greeting.classList.add(HIDE);
    greeting.innerHTML = `Hello ${text}`;
}

const saveUser = localStorage.getItem(USERNAME);

if(saveUser === null)
    {
        form.classList.add(HIDE);
        form.addEventListener("submit", handleSubmit);
    }
else
    {
        paintGreeting(saveUser);
    }