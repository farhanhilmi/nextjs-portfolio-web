export default function Button({
    text,
    background = 'bg-teal-400/10',
    textColor = 'text-teal-300',
    fontWeight = 'font-medium',
    fontSize = 'text-xs',
    onHover = false,
    onClick = false,
}) {
    return (
        <button
            className={`rounded-full ${background} px-3 py-3.5 ${fontSize} ${fontWeight} leading-5 ${textColor} hover:bg-teal-400/30 hover:text-teal-100 ${
                onHover ? ' hover:text-white' : ''
            }}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}
