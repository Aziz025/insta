export default function ModalCheckFollowers({ close}) {

  return (
    <div className="modal">
      <div className="modal-backdrop" onClick={close}></div>
      <div className="modal-inner followers-content">
        <div className="followers">
          <h3>Followers</h3>
        </div>
        <div className='follow-persons'>
          <div className='follow-persons-left'>
            <img src="/images/stories2.jpg"/>
            <h3>adik_1776_</h3>
            <a>Follow</a>
          </div>
          <div className='follow-persons-right'>
            <button>Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
}
