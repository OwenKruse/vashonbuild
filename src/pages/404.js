import { useRouter } from 'next/router'


export default function Custom404() {
    const router = useRouter()
    // Push the user to the home page
    router.push('/')
    return <h1>404 - Page Not Found</h1>
}