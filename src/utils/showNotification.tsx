export const showNotification = (message: string) => {
  // Verificamos si el navegador soporta notificaciones
  if (!('Notification' in window)) {
    alert('Este navegador no soporta notificaciones')
    // Si el navegador soporta notificaciones, verificamos si ya tiene permiso
  } else if (Notification.permission === 'granted') {
    new Notification(message)
    // Si el navegador soporta notificaciones, pero no tiene permiso
  } else if (Notification.permission !== 'denied') {
    // Necesitamos pedirle permiso al usuario
    Notification.requestPermission().then((permission) => {
      // Si el usuario acepta, creemos una notificación
      if (permission === 'granted') {
        new Notification(message)
      }
    })
  }
}
