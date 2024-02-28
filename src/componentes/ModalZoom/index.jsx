const ModalZoom = ({ foto }) => {
    return (
        <>
            <dialog open={!!foto}>
                <p>Teste</p>
                <form method="dialog" >
                    <button>Ok</button>
                </form>
            </dialog>
        </>
    )
}

export default ModalZoom;