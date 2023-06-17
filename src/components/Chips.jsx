export default function Chips({
    text,
    background = 'bg-teal-400/10',
    textColor = 'text-teal-300',
    fontWeight = 'font-medium',
    fontSize = 'text-xs',
    onHover = false,
}) {
    return (
        <span
            className={`rounded-full ${background} px-3 py-2 ${fontSize} ${fontWeight} leading-5 ${textColor} ${
                onHover ? ' hover:text-white' : ''
            }}`}
        >
            {text}
        </span>
    );
}
