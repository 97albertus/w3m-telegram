import type { WalletConnectModalEventCallback } from '@97albertus/modal-sign-html'
import { useEffect } from 'react'
import { getWalletConnectModalSignClient } from '../client'

export function useOnSessionUpdate(callback: WalletConnectModalEventCallback) {
  useEffect(() => {
    getWalletConnectModalSignClient().then(client => {
      client.onSessionUpdate(callback)
    })

    return () => {
      getWalletConnectModalSignClient().then(client => {
        client.offSessionUpdate(callback)
      })
    }
  }, [callback])
}
