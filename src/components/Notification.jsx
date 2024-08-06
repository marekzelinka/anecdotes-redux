import { useSelector } from 'react-redux'

const style = {
  border: 'solid',
  padding: 10,
  borderWidth: 1,
}

export function Notification() {
  const notification = useSelector((state) => state.notification)

  if (!notification) {
    return null
  }

  return <div style={style}>{notification}</div>
}
