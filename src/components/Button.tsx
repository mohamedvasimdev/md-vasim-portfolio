interface Props {
    label: string;
    href: string;
}

const Button = ({label, href} : Props) => {
    return (
        <>
            <p className="primary-button"><a href={`${href}`} download='resume.pdf' target='_blank'>{label}</a></p>
        </>
    )
}

export default Button