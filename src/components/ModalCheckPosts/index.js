export default function ModalCheckPosts({ close, selectedImage }) {

  return (
    <div className="modal">
      <div className="modal-backdrop" onClick={close}></div>
      <div className="modal-inner">
            <div className="modal-posts-show">
              <img src={selectedImage} alt="Выбранная фотография" />
              <div>
                <div className="select-posts-comments">
                    <img src="/images/profile.jpg"/>
                    <h4>terrylucas</h4>
                    <img src="/images/dots.jpg"/>
                </div>
              </div>
          </div>
      </div>
    </div>
  );
}
