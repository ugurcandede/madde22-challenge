const Button = ({ active, text, onClick }) => {
    return (
        <input type="button" onClick={onClick} value={text} className={`text-primary bg-white text-center rounded-3xl px-4 py-2 font-semibold cursor-pointer
            hover:drop-shadow-lg transition duration-300 ease-in-out
            ${active && "bg-button text-buttonText hover:bg-secondaryButton hover:text-secondaryButtonText"}`
        } />
    )
}

export default Button