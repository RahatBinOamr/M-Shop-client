import { useEffect } from "react"

const useTitle = title=> {
    useEffect(()=>{
document.title=`${title} - M-shop`
    },[title])
}
export default useTitle