function getDeviceType() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(
    navigator.userAgent
  )
    ? "Mobile"
    : "Desktop";
}
