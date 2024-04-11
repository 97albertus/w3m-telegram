import type { WalletConnectModalAuthOptions } from '@97albertus/modal-auth-html'
import { memo, useEffect } from 'react'
import { setWalletConnectModalAuthClient } from '../client'

// -- Types --------------------------------------------------------------------
export type WalletConnectModalAuthProps = WalletConnectModalAuthOptions

function WalletConnectModalAuthComp(props: WalletConnectModalAuthProps) {
  useEffect(() => {
    setWalletConnectModalAuthClient(props)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}

export const WalletConnectModalAuth = memo(WalletConnectModalAuthComp)
