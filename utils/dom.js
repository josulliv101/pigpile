export function removeServerStyle(document) {
  if (!document) {
    return
  }
  const jssStyles = document.getElementById('server-side-styles');
  if (jssStyles && jssStyles.parentNode) {
    jssStyles.parentNode.removeChild(jssStyles);
  }
}
