interface Props {
    label: string;
    href: string;
}

const Button = ({label, href} : Props) => {
    return (
        <>
            <p className="primary-button"><a href={`#${href}`}>{label}</a></p>
        </>
    )
}

export default Button