import Popover from 'react-bootstrap/Popover'

import 'bootstrap/dist/css/bootstrap.min.css';

export default function DefaultPopover(props) {

    return (
        <Popover id="popover-basic">
          <Popover.Title className="text-center" as={props.as}>{props.title}</Popover.Title>
          <Popover.Content>
            {props.content}
          </Popover.Content>
        </Popover>
    )

}