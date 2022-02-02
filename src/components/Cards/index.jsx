import React, { useState } from "react";

const cardsItems = [
  {
    id: 1,
    title: "Smart Wallet built for a Multi-Chain World",
    selectedTitle:
      "The Sequence Wallet empowers your users with a friendly and secure experience for all of Ethereum. Plus, you'll never get stuck: you and your users can easily move between chains to capitalize on the lowest gas fees and highest security.",
  },
  {
    id: 2,
    title: "Web & Backend SDKs",
    selectedTitle:
      "Powerful developer libraries and APIs that seamlessly integrate with Ethereum.",
  },
  {
    id: 3,
    title: "Audited Smart Contract Library",
    selectedTitle:
      "A standard library of audited smart contracts. Check out our Github.",
  },
  {
    id: 4,
    title: "Enhanced Transactions",
    selectedTitle:
      "Meta transaction support means users can batch transactions and pay for gas in the token of their choice. And, Sequence Meta transactions work with all existing contracts (without any changes required to your contracts).",
  },
  {
    id: 5,
    title: "Social / Email Login & Recovery for Wallets",
    selectedTitle:
      "Easily sign in via Google, Facebook or other socials. No blockchain knowledge required.",
  },
  {
    id: 6,
    title: "Niftyswap (NFT) Market Protocol",
    selectedTitle:
      "Offer your users an ecommerce-like market experience for trading ERC-1155 tokens. Users will love instant liquidity with Niftyswap's AMM design! Build your own custom UI's — we've already built the backend for you.",
  },
  {
    id: 7,
    title: "Easy Minting, Transfer and Exchange of NFTs and Digital Items",
    selectedTitle:
      "Our widely-adopted ERC-1155 smart contracts help you easily create digital collectibles. Plus, enhance your capabilities with our NFT APIs for querying metadata and balances.",
  },
  {
    id: 8,
    title: "Friendly Payments",
    selectedTitle:
      "Easy credit card on-ramps, and your users don’t need to own crypto to pay fees.",
  },
];

const Cards = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="cards-container">
      <div className="title">
        <h2>Our SDK + APIs make blockchain simple and user friendly</h2>
        <p>
          And they give you everything you’ll need to run your application
          beautifully on the blockchain.
        </p>
      </div>
      <div className="cards">
        <div className="grid">
          {cardsItems.map((item) => {
            const isSelected = selected === item.id
            return (
              <div
                className={`card-item ${
                  isSelected ? "card-item-selected" : ""
                } item-${item.id}`}
                key={item.id}
                onMouseEnter={() => setSelected(item.id)}
                onClick={() => setSelected(item.id)}
                onMouseLeave={() => setSelected(null)}
              >
                {isSelected ? item.selectedTitle : item.title}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;
