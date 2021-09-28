import Filho from "./filho";

export default function Pai(props){
    return(
    <div>
        <Filho {...props} nome="Bruno" />
        <Filho {...props} nome="Luna" />
        <Filho {...props} nome="Arthur" />
    </div>
    )
}