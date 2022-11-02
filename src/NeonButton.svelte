<a href="/" class="neon-button">Get Started</a>
<style>

.neon-button {
    font-size: 2rem;
    color: var(--neon-color);

    cursor: pointer;
    display: inline-block;
    text-decoration: none;
    border: var(--neon-color) .125em solid;
    padding: .25em 1em;
    border-radius: .25em;

    text-shadow: 
        0 0 0.7em hsl(0 0% 100% / .9),
        0 0 0.7em currentColor;

    box-shadow: 0 0 2em 0 var(--neon-color);
    position: relative;
}
.neon-button::before {
    pointer-events: none;
    content: "";
    position: absolute;
    background-color: var(--neon-color);
    top: 160%;
    left: 0;
    width: 100%;
    height: 100%;

    transform: perspective(2em) rotateX(40deg);
    filter: blur(0.8em);
    opacity: 0.5;
}
.neon-button:hover,
.neon-button:focus {
    color: var(--background-color);
    text-shadow: none;
}
.neon-button::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    box-shadow: 0 0 1em 0.5em var(--neon-color);
    opacity: 0;
    transition: opacity 100ms linear;
    background-color: var(--neon-color);
    z-index: -1;
}
.neon-button:hover::after, .neon-button:hover::before, 
.neon-button:focus:after, .neon-button:focus::before {
    opacity: 1;
}
</style>