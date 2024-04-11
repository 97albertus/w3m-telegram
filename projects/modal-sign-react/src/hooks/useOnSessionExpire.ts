import type { WalletConnectModalEventCallback } from '@97albertus/modal-sign-html'
import { useEffect } from 'react'
import { getWalletConnectModalSignClient } from '../client'

export function useOnSessionExpire(callback: WalletConnectModalEventCallback) {
  useEffect(() => {
    getWalletConnectModalSignClient().then(client => {
      client.onSessionExpire(callback)
    })

    return () => {
      getWalletConnectModalSignClient().then(client => {
        client.offSessionExpire(callback)
      })
    }
  }, [callback])
}
