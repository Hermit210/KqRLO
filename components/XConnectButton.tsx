'use client';
import { motion } from 'framer-motion';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { useAccount, usePublicClient } from 'wagmi';
import { zkIdentityAddress, zkIdentityAbi } from '../app/contracts/zkIdentity';
import { CheckCircle } from 'lucide-react';

export function XConnectButton() {
  const { address } = useAccount();
  const publicClient = usePublicClient();
  const [isVerified, setIsVerified] = useState(false);

  const checkVerification = useCallback(async () => {
    if (!address || !publicClient) return;
    try {
      const isVerifiedStatus = await publicClient.readContract({
        address: zkIdentityAddress,
        abi: zkIdentityAbi,
        functionName: 'isVerified',
        args: [address],
      });
      setIsVerified(isVerifiedStatus as boolean);
    } catch (error) {
      console.error("Error checking verification status:", error);
      setIsVerified(false);
    }
  }, [address, publicClient]);



  useEffect(() => {
    checkVerification();
  }, [checkVerification]);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="inline-block">
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openChainModal,
          openConnectModal,
          openAccountModal,
          mounted
        }) => {
          const ready = mounted;
          const connected = ready && account && chain;
          return (
            <div
              {...(!ready && {
                'aria-hidden': true,
                style: {
                  opacity: 0,
                  pointerEvents: 'none',
                  userSelect: 'none',
                },
              })}
            >
              {(() => {
                if (!connected) {
                  return (
                    <motion.button
                      onClick={openConnectModal}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 border-2 border-white/30 hover:border-white/60 hover:shadow-lg hover:shadow-white/10 backdrop-blur-sm uppercase tracking-wider">
                      Connect Wallet
                    </motion.button>
                  );
                }
                if (chain.unsupported) {
                  return (
                    <motion.button
                      onClick={openChainModal}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white/10 px-6 py-3 rounded-lg text-white font-bold hover:bg-white/20 transition-all duration-300 border-2 border-white/30 hover:border-white/60 backdrop-blur-sm uppercase tracking-wider">
                      Wrong Network
                    </motion.button>
                  );
                }
                return (
                  <div className="flex items-center space-x-3">
                    <motion.button
                      onClick={openChainModal}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white/10 px-4 py-2 rounded-lg text-white font-bold hover:bg-white/20 transition-all duration-300 border-2 border-white/30 hover:border-white/60 backdrop-blur-sm flex items-center space-x-2">
                      {chain.iconUrl && (
                        <Image
                          src={chain.iconUrl}
                          alt={"x-layer"}
                          width={20}
                          height={20}
                          className="rounded-full"
                        />
                      )}
                      <span className="hidden sm:inline">{chain.name}</span>
                    </motion.button>
                    <motion.button
                      onClick={openAccountModal}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white/10 px-4 py-2 rounded-lg text-white font-bold hover:bg-white/20 transition-all duration-300 border-2 border-white/30 hover:border-white/60 backdrop-blur-sm">
                      <span className="hidden sm:inline">
                        {account.displayName}
                        {account.displayBalance ? ` (${account.displayBalance})` : ''}
                      </span>
                      <span className="sm:hidden">{account.displayName?.slice(0, 6)}...</span>
                    </motion.button>
                    {isVerified && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="bg-white/10 px-4 py-2 rounded-lg border-2 border-white/30 flex items-center space-x-2 backdrop-blur-sm">
                        <CheckCircle className="h-4 w-4 text-white" />
                        <span className="text-white font-bold">VERIFIED</span>
                      </motion.div>
                    )}
                  </div>
                );
              })()}
            </div>
          );
        }}
      </ConnectButton.Custom>
    </motion.div>
  );
}