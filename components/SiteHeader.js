import Link from 'next/link'

export default function SiteHeader() {
    return (
        <nav className="bg-blue-500 text-blue-100 px-8 py-4">
            <div className="max-w-7xl mx-auto md:flex justify-between">
                <Logo />
                <SiteNav />
            </div>
        </nav>
    )
}

function Logo() {
    return (
        <Link href="/">
            <a className="inline-block relative p-2">
                <span className="absolute inset-0 bg-white transform rounded  skew-y-1 -skew-x-12">
                    
                </span>
                <span className="relative font-semibold text-blue-800">
                    Digital Ocien App Platform Resources
                </span>
            </a>

        </Link>
        
    )
}

function SiteNav() {
    return (
        <div className="hidden md:flex items-center">
            <a className="font-semibold py-2 px-3 hover:text-white">Doc</a>
            <a className="font-semibold py-2 px-3 hover:text-white">App Dashboard</a>            
            <a className="font-semibold py-2 px-3 hover:text-white">Examples</a>
        </div>
    )
}
