export default function NumeroDisplay(props) {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height:" 50px",
            width: "50px",
            borderRadius:"25px",
            backgroundColor: "#1b611e",
            color: "#eee",
            fontSize: "2rem",
            margin: "20px"
        }}>
            {props.numero}
        </div>
    )
}