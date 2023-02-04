import React from 'react'
import Link from 'next/link';
const navbar = () => {
  return (
    <>
      <section>
        <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
          <nav className="relative" aria-label="Global">
            <div className="flex justify-between">
              <div>
                <Link href="/" legacyBehavior>
                  <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                    Home
                  </a>
                </Link>
                <Link href="/" legacyBehavior>
                  <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                    Marketplace
                  </a>
                </Link>
                <Link href="/" legacyBehavior>
                  <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                    Blogs
                  </a>
                </Link>
                <Link href="#" legacyBehavior>
                  <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                    Wishlist
                  </a>
                </Link>
              </div>
              <div>
                
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
}

export default navbar