import Popover from '@components/UIElements/Popover'
import Tooltip from '@components/UIElements/Tooltip'
import {
  LENSTUBE_GITHUB_HANDLE,
  LENSTUBE_TWITTER_HANDLE
} from '@utils/constants'
import { DISCORD, PRIVACY } from '@utils/url-path'
import Link from 'next/link'
import React from 'react'
import { BsThreeDots } from 'react-icons/bs'

const MoreTrigger = () => {
  return (
    <Popover
      trigger={
        <Tooltip content="More" placement="right">
          <div className="flex flex-col space-y-2 mb-0.5">
            <button className="flex p-3 py-4 justify-center rounded-lg hover:bg-gray-50 dark:hover:bg-[#181818] focus:outline-none opacity-70 hover:opacity-100">
              <BsThreeDots />
            </button>
          </div>
        </Tooltip>
      }
      position="bottom"
      positionClassName="left-[72px] -bottom-1"
      className="w-full"
    >
      <div className="p-2 max-h-96 mt-1.5 w-44 overflow-x-hidden overflow-y-auto border shadow-xl border-gray-100 rounded-xl dark:border-gray-800 bg-secondary">
        <div className="flex flex-col text-sm transition duration-150 ease-in-out">
          <div className="text-[11px] cursor-default p-1 font-semibold uppercase opacity-50">
            More
          </div>
          <div className="rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900">
            <Link href={DISCORD}>
              <a className="block px-2.5 py-1.5" target="_blank">
                Discord
              </a>
            </Link>
          </div>
          <div className="rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900">
            <Link href={`https://github.com/${LENSTUBE_GITHUB_HANDLE}`}>
              <a className="block px-2.5 py-1.5" target="_blank">
                Github
              </a>
            </Link>
          </div>
          <div className="rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900">
            <Link href={`https://twitter.com/${LENSTUBE_TWITTER_HANDLE}`}>
              <a className="block px-2.5 py-1.5" target="_blank">
                Twitter
              </a>
            </Link>
          </div>
          <div className="text-[11px] cursor-default p-1 font-semibold uppercase opacity-50">
            Legal
          </div>
          <div className="rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900">
            <Link href={PRIVACY}>
              <a className="block px-2.5 py-1.5" target="_blank">
                Privacy
              </a>
            </Link>
          </div>
          <hr className="my-1 border-gray-200 dark:border-gray-800" />
          <Link href="https://vercel.com/?utm_source=Lenstube&utm_campaign=oss">
            <a
              target="_blank"
              className="px-1 py-1.5 text-sm"
              rel="noreferrer noopener"
            >
              ▲ Powered by Vercel
            </a>
          </Link>
        </div>
      </div>
    </Popover>
  )
}

export default MoreTrigger
