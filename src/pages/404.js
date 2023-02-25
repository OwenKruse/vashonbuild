import { useRouter } from 'next/router'
import { useEffect } from 'react'


export default function Custom404() {
    const router = useRouter()

    useEffect(() => {
            router.push('/')
    }, [router])
    // Push the user to the home page
    return (
        <div>
            <h1>404 - Page Not Found</h1>
        </div>
    )

}