const Notification = ({ message, errorStatus }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className={errorStatus}>
        {message}
      </div>
    )
  }

export default Notification;