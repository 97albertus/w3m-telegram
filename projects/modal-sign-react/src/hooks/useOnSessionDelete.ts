import type { WalletConnectModalEventCallback } from '@97albertus/modal-sign-html'
import { useEffect } from 'react'
import { getWalletConnectModalSignClient } from '../client'

export function useOnSessionDelete(callback: WalletConnectModalEventCallback) {
  useEffect(() => {
    getWalletConnectModalSignClient().then(client => {
      client.onSessionDelete(callback)
    })

    return () => {
      getWalletConnectModalSignClient().then(client => {
        client.offSessionDelete(callback)
      })
    }
  }, [callback])
}
