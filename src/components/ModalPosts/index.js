export default function ModalPosts () {
    return (
        <div className="modal">
            <div className="modal-backdrop"></div>
            <div className="modal-inner">
                <p>Create new post</p>
                <div className="modal-inner-picture">
                    <p>Drag photos and videos here</p>
                    <fieldset class="fieldset">
                        <label for="imageInput">Выберите картинку</label>
                        <input type="file" id="imageInput" name="image" style="display: none;" />
                    </fieldset>
                </div>
            </div>
        </div>
    )
}