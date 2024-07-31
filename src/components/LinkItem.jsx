const LinkItem = ({ title, link, textolor = 'text-dark-grey' }) => {
    return (
        <div>
            <a
                href={link}
                target="_blank"
                className={`cursor-pointer text-base md:text-lg ${textolor} hover:text-teal-400`}
            >
                {title}
            </a>
        </div>
    );
};

export default LinkItem;
