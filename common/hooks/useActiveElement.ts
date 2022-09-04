import { useEffect, useState } from 'react'

export const useActiveElement = () => {

    const [listenersReady, setListenersReady] = useState<boolean>(false)
    const [activeElement, setActiveElement] = useState<EventTarget | null>(document && document.activeElement)

    useEffect(() => {
        const onFocus = (event: FocusEvent) => setActiveElement(event.target);
        const onBlur = (event: FocusEvent) => setActiveElement(null)

        window && window.addEventListener('focus', onFocus, true)
        window && window.addEventListener('blur', onBlur, true)

        return () => {
            window.removeEventListener('focus', onFocus, true)
            window.removeEventListener('blur', onBlur, true)
        }
    })
    return {
        activeElement,
        listenersReady
    }
}