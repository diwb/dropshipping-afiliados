import Button from 'react-bootstrap/Button'

export default function ButtonLink(props) {
    return(
        <Button 
            variant={props.variant}
            target={props.target} 
            href={props.href}
            className={props.className}
            id={props.id}
            onClick={props.onClick}
            type={props.type}>
            {props.text}
        </Button>
    )
}

