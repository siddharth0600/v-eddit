import React from 'react'
import Image from 'next/image'

import {
  BellIcon,
  ChatIcon,
  GlobeIcon,
  PlusIcon,
  SparklesIcon,
  VideoCameraIcon,
  SpeakerphoneIcon,
} from '@heroicons/react/outline'

import {
  HomeIcon,
  ChevronDownIcon,
  SearchIcon,
  MenuIcon,
} from '@heroicons/react/solid'

import { signIn, useSession, signOut } from 'next-auth/react'

function Header() {
  const { data: session } = useSession()
  return (
    <div className="sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm">
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Image
          objectFit="contain"
          src="https://links.papareact.com/fqy"
          layout="fill"
        />
      </div>
      <div className="mx-7 flex items-center xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <p className="ml-2 hidden flex-1 lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>

      {/* Search */}
      <form className="flex flex-1 items-center space-x-2 rounded-sm border border-gray-200 bg-gray-100 px-3 py-1">
        <SearchIcon className="h-6 w-6 text-gray-400" />
        <input
          className="flex-1 bg-transparent outline-none"
          type="text"
          placeholder="Search Reddit"
        />
        <button type="submit" hidden />
      </form>
      <div className="mx-5 hidden items-center space-x-2 text-gray-500 lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="bordedr-gray-100 h-10 border" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <SpeakerphoneIcon className="icon" />
      </div>
      <div className="ml-5 flex items-center lg:hidden">
        <MenuIcon className="icon" />
      </div>
      {/* Sign in sign out button */}
      {session ? (
        <div
          onClick={() => signOut()}
          className="hidden cursor-pointer items-center space-x-2 border border-gray-100 lg:flex"
        >
          <div className="relative h-5 w-5 flex-shrink-0">
            <Image
              objectFit="contain"
              src="https://links.papareact.com/23l"
              layout="fill"
              alt=""
            />
          </div>
          <div className="flex-1 text-xs">
            <p className="truncate">{session?.user?.name}</p>
            <p className="text-gray-400">1 Karma</p>
          </div>
          <ChevronDownIcon className="h-5 flex-shrink-0 text-gray-400" />
        </div>
      ) : (
        <div
          onClick={() => signIn()}
          className="hidden cursor-pointer items-center space-x-2 border border-gray-100 lg:flex"
        >
          <div className="relative h-5 w-5 flex-shrink-0">
            <Image
              objectFit="contain"
              src="https://links.papareact.com/23l"
              layout="fill"
              alt=""
            />
          </div>
          <p className="text-gray-400">Sign In</p>
        </div>
      )}
    </div>
  )
}

export default Header
