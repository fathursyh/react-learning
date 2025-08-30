import { useMemo } from "react"

export default function CustomButton({children, textOnly, className, ...props}) {
    const cssClass = useMemo(() => {
        return textOnly? 'text-button' : 'button'
    }, [textOnly]);

    return (
        <button className={`${className} ${cssClass}`} {...props}>{ children }</button>
    )
}