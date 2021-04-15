import { Badge } from 'react-bootstrap'

export default function BadgeComp(props) {
    return(
        <Badge variant={props.variant}>{props.text}</Badge>
    )
}