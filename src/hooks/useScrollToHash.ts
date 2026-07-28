import { useEffect } from 'react'

/**
 * Scrolls to the section matching the URL hash on first mount.
 *
 * Native browser anchor-jump only works if the target element already
 * exists in the DOM when the page loads. Since this is a client-rendered
 * single-page app, sections like #proyectos don't exist until React mounts,
 * so a direct or shared link to a hash (e.g. https://site/#proyectos) would
 * otherwise land at the top of the page instead of the intended section.
 */
export function useScrollToHash() {
  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (!id) return

    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView()
    })
  }, [])
}
