export default function ModalCheckFollowing({close}) {

    return (
      <div className="modal">
        <div className="modal-backdrop" onClick={close}></div>
        <div className="modal-inner followers-content">
          <div className="followers">
            <h3>Following</h3>
          </div>
          <div className='follow-persons'>
            <div className='follow-persons-left'>
              <img src="/images/stories2.jpg"/>
              <h3>adik_1776_</h3>
            </div>
            <div className='follow-persons-right'>
              <button>unsubscribe</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  