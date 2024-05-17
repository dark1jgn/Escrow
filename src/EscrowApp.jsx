import "./App.css";
import { WagmiConfig } from "wagmi";
import { useRainbowkit } from "./components/services/rainbowkit";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import Dashboard from "./components/Offer";
export default function EscrowApp() {
  const { wagmiClient, chains } = useRainbowkit();
  return (
    <WagmiConfig config={wagmiClient}>
      <div className="App">
        <RainbowKitProvider chains={chains}>
          <Dashboard />
        </RainbowKitProvider>
      </div>
    </WagmiConfig>
  );
}
